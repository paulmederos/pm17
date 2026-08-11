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
coauthored: "Claude Opus 5"  # see below
teaser: "Short description for previews and social."
---
```

- Use `categories: journal, wip` to mark a post as work-in-progress (shows a 🌱 banner)
- Optional fields: `hero_image`, `subtitle`, `coauthored`, `coauthored_note`

### Co-authorship disclosure

Anything written together with an AI carries a note at the foot of the post. **Both keys are required, and there is no default** — if either is missing, no footer renders at all.

```yaml
coauthored: "Claude Opus 5"
coauthored_note: "I sketched the outline and the direction, Claude explored a few structures and drafted, then I edited nearly line by line with Claude's input throughout."
```

**`coauthored`** is the model name *and version*, not just "Claude". A post is a snapshot of a moment, and behaviour differs enough between releases that the version is the honest detail. Read it from the session environment block; don't guess. If a post spanned a model swap, name both.

**`coauthored_note`** is one sentence describing how *this* post actually got written. There is deliberately no fallback copy. The note asserts something specific about process, so a default would quietly be wrong on every post that went differently, and the box links to that post's real commit history — keep it truthful enough to survive someone clicking.

Most posts here follow the shape in the example above. Write it out anyway rather than reaching for boilerplate, and change it when the truth changes:

- Paul wrote the prose and Claude only edited? Say that. Don't imply Claude drafted.
- Claude drafted from a voice memo or a transcript? Say where the raw material came from.
- Claude wasn't involved? Omit both keys. No footer is the correct output.

**Known trade-off:** because there's no default, forgetting `coauthored_note` silently drops the disclosure rather than showing a wrong one. That's the intended failure direction, but it means the keys need adding at publish time, not later.

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
