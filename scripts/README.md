# Scripts

## download_covers.py

Downloads book cover images for the library from Google Books and Open Library.

### Usage

```bash
python3 scripts/download_covers.py
```

### How it works

1. Reads books from `_data/library.json`
2. For each book with an ISBN, tries to download the cover:
   - First tries Google Books at high resolution (zoom=3)
   - If that returns a placeholder, falls back to standard resolution (zoom=1)
   - If Google fails, tries Open Library
3. Saves covers to `images/covers/{isbn}.jpg`
4. Skips books that already have covers downloaded

### When to run

Run this script whenever you add new books to `_data/library.json`. It will only download covers for books that don't already have one.

### Manual covers

If a cover is wrong or missing, you can manually add one:

1. Download the correct cover image
2. Resize to ~360px (for 2x retina): `sips -Z 360 input.jpg --out images/covers/{isbn}.jpg`
3. Or just drop the image in `images/covers/` and the script will skip it on next run

### Notes

- Covers are saved at ~360px height for retina displays
- Total size is typically ~15-45 MB for ~300 books
- Some books may have wrong ISBNs in Goodreads exports - check if a cover looks wrong

