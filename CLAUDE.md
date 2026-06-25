# CLAUDE.md

## About This Site

This is Paul Mederos' personal site — writings, essays, and project case studies. Built with **Jekyll** and hosted via GitHub Pages.

- Posts live in `_posts/` as markdown files named `YYYY-MM-DD-slug.md`
- Layouts are in `_layouts/`, styles in `_sass/` and `css/`
- Images go in `images/posts/` (reference as `/images/posts/filename.ext`)
- Data files (reading list, art) live in `_data/`

### Post Frontmatter

```yaml
---
layout: post
title: "Post Title"
permalink: "url-slug"
date: YYYY-MM-DD
categories: journal          # journal | essay | case_study | note | misc
teaser: "Short description for previews and social."
---
```

- Use `categories: journal, wip` to mark a post as work-in-progress (shows a 🌱 banner)
- Optional fields: `hero_image`, `subtitle`

## Library

The reading library at `/library` is generated from `_data/library.json` — one JSON object per book.

**Schema** (every entry carries all keys; unused ones are `null`):

| key | notes |
|---|---|
| `id` | `YYYYMMDD` + 2-digit sequence, derived from `date_read` (e.g. `2026062801`) |
| `title`, `author` | display strings |
| `isbn`, `isbn13` | `isbn13` is preferred and is the key used to find the cover |
| `year`, `rating`, `pages` | metadata; usually `null` |
| `date_read`, `date_added` | `YYYY/MM/DD` |

**Ordering = array order.** `library.html` renders entries in the order they appear in the array — there is no sort at render time. The array is kept sorted **most-recently-read first** (`date_read` descending): the newest read sits at the very top, oldest dated read at the bottom of the dated section. **Undated entries** (`date_read: null` — the bulk Goodreads import) collect *below* all dated entries, sorted by author. When adding a dated book, insert it at the array position matching its `date_read`.

**Covers** live at `images/covers/{isbn13}.jpg`. After adding books, run `python3 scripts/download_covers.py` — it fetches missing covers from Google Books / Open Library by ISBN and skips ones already present. Manga and less-common titles often come back as low-res thumbnails (≈128px) or gray placeholders; when that happens, pull the cover straight from Open Library (`https://covers.openlibrary.org/b/isbn/{isbn13}-L.jpg`) and resize to ~360px tall: `sips -Z 360 in.jpg --out images/covers/{isbn13}.jpg`. Always eyeball a newly fetched cover before trusting it.

**Series & serialized works:**
- A manga/series read as a whole gets **one** entry titled `Series (Vols. 1–N)`, using volume 1's ISBN for the cover.
- A long serialized manga can be logged **per arc** (e.g. One Piece) — one entry per major arc, titled `Series: Arc`, with `date_read` set to that arc's start date so the arcs scatter through the timeline by date.

## Writing

All copy and written content should follow the writing guide in `writing-guide.md` at the repo root. Review it before drafting or editing any text.
