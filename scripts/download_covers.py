#!/usr/bin/env python3
"""
Download book covers from Google Books and Open Library.
Saves to images/covers/ with ISBN as filename.
Uses curl for better SSL compatibility on macOS.
"""

import json
import os
import subprocess
import time
from pathlib import Path

# Configuration
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
LIBRARY_PATH = PROJECT_ROOT / "_data" / "library.json"
COVERS_DIR = PROJECT_ROOT / "images" / "covers"

# Minimum file size to consider valid (bytes)
MIN_VALID_SIZE = 2000

# Google Books zoom=3 placeholder is exactly this size
GOOGLE_PLACEHOLDER_SIZE = 246264

def ensure_dir(path):
    """Create directory if it doesn't exist."""
    path.mkdir(parents=True, exist_ok=True)

def download_with_curl(url, filepath, timeout=15):
    """Download using curl. Returns True on success."""
    try:
        result = subprocess.run(
            ['curl', '-sL', '-o', str(filepath), '--max-time', str(timeout), url],
            capture_output=True,
            text=True
        )
        
        if result.returncode != 0:
            return False
        
        # Check if file exists and is large enough
        if filepath.exists():
            size = filepath.stat().st_size
            if size >= MIN_VALID_SIZE:
                return True
            else:
                filepath.unlink()  # Remove placeholder
                return False
        return False
    except Exception as e:
        return False

def get_google_books_url(isbn, zoom=3):
    """Get Google Books cover URL. zoom=3 for retina, zoom=1 as fallback."""
    return f"https://books.google.com/books/content?vid=ISBN:{isbn}&printsec=frontcover&img=1&zoom={zoom}&source=gbs_api"

def get_open_library_url(isbn):
    """Get Open Library cover URL. L=large size."""
    return f"https://covers.openlibrary.org/b/isbn/{isbn}-L.jpg"

def is_google_placeholder(filepath):
    """Check if file is the Google Books placeholder image."""
    if filepath.exists():
        return filepath.stat().st_size == GOOGLE_PLACEHOLDER_SIZE
    return False

def download_cover(isbn, filepath):
    """Try Google Books zoom=3, then zoom=1, then Open Library."""
    # Try Google Books zoom=3 (high-res for retina)
    google_url_hires = get_google_books_url(isbn, zoom=3)
    if download_with_curl(google_url_hires, filepath):
        if not is_google_placeholder(filepath):
            return "google@3x"
        filepath.unlink()  # Remove placeholder
    
    # Fall back to Google Books zoom=1
    google_url_lores = get_google_books_url(isbn, zoom=1)
    if download_with_curl(google_url_lores, filepath):
        return "google@1x"
    
    # Fall back to Open Library
    ol_url = get_open_library_url(isbn)
    if download_with_curl(ol_url, filepath):
        return "openlibrary"
    
    return None

def main():
    # Load library
    with open(LIBRARY_PATH, 'r') as f:
        books = json.load(f)
    
    # Ensure covers directory exists
    ensure_dir(COVERS_DIR)
    
    # Stats
    total = len(books)
    downloaded = 0
    skipped = 0
    failed = 0
    no_isbn = 0
    sources = {"google@3x": 0, "google@1x": 0, "openlibrary": 0}
    
    print(f"📚 Processing {total} books...")
    print(f"📁 Saving to: {COVERS_DIR}")
    print("-" * 50)
    
    for i, book in enumerate(books, 1):
        isbn = book.get('isbn13') or book.get('isbn')
        title = book.get('title', 'Unknown')[:50]
        
        if not isbn:
            print(f"[{i}/{total}] ⚠️  No ISBN: {title}")
            no_isbn += 1
            continue
        
        filepath = COVERS_DIR / f"{isbn}.jpg"
        
        # Skip if already downloaded
        if filepath.exists() and filepath.stat().st_size >= MIN_VALID_SIZE:
            print(f"[{i}/{total}] ⏭️  Exists: {title}")
            skipped += 1
            continue
        
        # Download cover
        source = download_cover(isbn, filepath)
        
        if source:
            size_kb = filepath.stat().st_size / 1024
            print(f"[{i}/{total}] ✅ {source} ({size_kb:.1f}KB): {title}")
            downloaded += 1
            sources[source] += 1
        else:
            print(f"[{i}/{total}] ❌ Failed: {title}")
            failed += 1
        
        # Be nice to the APIs
        time.sleep(0.2)
    
    # Summary
    print("-" * 50)
    print(f"📊 Summary:")
    print(f"   Downloaded: {downloaded} (Google@3x: {sources['google@3x']}, Google@1x: {sources['google@1x']}, Open Library: {sources['openlibrary']})")
    print(f"   Skipped (exists): {skipped}")
    print(f"   Failed: {failed}")
    print(f"   No ISBN: {no_isbn}")
    
    # Calculate approximate size
    if downloaded > 0 or skipped > 0:
        total_size = sum(f.stat().st_size for f in COVERS_DIR.glob("*.jpg"))
        print(f"   Total size: {total_size / 1024 / 1024:.1f} MB")

if __name__ == "__main__":
    main()
