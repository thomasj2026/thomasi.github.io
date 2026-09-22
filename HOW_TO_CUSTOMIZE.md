# How to customize this site

This is your `academicpages` Jekyll site, populated with your real resume and
LinkedIn content, and formatted to match yujin1007.github.io's layout: a
single scrolling homepage (About Me, Educations, News, Honors and Awards,
Work Experience) with a top nav bar in that same order, plus a CV link in
the sidebar. "Projects" and "Teaching" in the nav go to their own pages
instead of being homepage sections. Everything below is a checklist for the
remaining manual steps — none of it requires touching Jekyll internals.

## Add a News item

Open `_pages/about.md` and add a bullet at the top of the `# 📰 News`
section, e.g.:

```markdown
* **Jan 2027** — Whatever just happened.
```

## Edit Education, Honors and Awards, or Work Experience

These are plain bulleted lists straight in `_pages/about.md` — no front
matter or Liquid involved, just edit the text under the matching heading.
Each heading has a line like `{: #about-me}` right underneath it — that's
what the nav bar's links jump to, so keep that line if you reword a heading.

The fuller, resume-style version of the same information lives on the
separate [CV](/cv/) page (`_pages/cv.md`, linked from the sidebar) — keep
the two in sync when you update one (there's a comment at the top of
`cv.md` reminding you of this).

## Add real project photos

Four projects live in `_portfolio/` (Team Kanaloa USV, RIP Lab climbing
robot, SAIL Lab soft fin, ASML robot arm), each using a gray placeholder
image (`/images/500x300.png`). See `images/portfolio/README.md` for the
checklist — short version: drop a photo in `images/portfolio/`, then in that
project's `.md` file replace `/images/500x300.png` with the new path (it
appears twice — once in the front-matter excerpt, once in the `<img>` tag).
These pages are reached by clicking "Projects" in the nav (which goes to
`/portfolio/`, listing all of them) and then into an individual project.

## Add another project

Copy any file in `_portfolio/` (e.g. `portfolio-1.md`) as a template — the
front matter (title/excerpt/collection/date) plus the body structure
(Role/When line, XYZ-style bullets, Tech line) is designed to be reused. It
shows up automatically on the `/portfolio/` page, no other file needs
touching.

## Reorder the top nav bar

The top bar ("Homepage", About Me, Educations, News, Projects, Teaching,
Honors and Awards) is a plain list in `_data/navigation.yml`, under `main:`.
The order in that file is the order the links appear in, left to right — so
to reorder them, just cut and paste the `- title: ... / url: ...` blocks
into the order you want. For example, to put "Projects" first:

```yaml
main:
  - title: "Projects"
    url: /portfolio/
  - title: "About Me"
    url: /#about-me
  - title: "Educations"
    url: /#educations
  ...
```

To add a new link, add another `- title:` / `url:` pair anywhere in the
list. `url: /#some-id` jumps to a section on the homepage (the `{: #some-id}`
line under a heading in `_pages/about.md` — see "Edit Education, Honors and
Awards, or Work Experience" above); `url: /portfolio/` or `url: /teaching/`
goes to a whole separate page; a full `https://...` URL goes off-site. To
remove a link, delete its block entirely. This file is content, not code —
`_config.yml`-style live-reload rules don't apply to it, so a normal
`bundle exec jekyll serve` picks up changes without a restart.

## Change your headshot

`_config.yml`'s `author.avatar` points at `images/headshot.jpg` (the photo
you provided). To swap it, drop a new photo in `images/` and update that
one line.

## Zoom / reposition your profile picture

The circular photo in the sidebar is controlled by `_sass/layout/_sidebar.scss`,
in the `.author__avatar img` rule. Three properties there do the actual
cropping:

```scss
img {
  aspect-ratio: 1 / 1;         // forces a square crop before the circle mask
  object-fit: cover;           // fills that square, cropping overflow — no squish/stretch
  object-position: 75% 75%;    // WHICH part of the photo shows — this is your "zoom/pan" control
}
```

Your photo (`images/headshot.jpg`) is a landscape shot, not a square, so
without this it would render squashed into an oval instead of a clean
circle. `object-position` is what to play with:

- It's `"horizontal% vertical%"`. `50% 50%` (the default) centers the crop.
- Raise the second number (e.g. `50% 20%`) to shift the visible crop
  **up** — use this if your face is getting cut off at the top, or if you
  want more headroom trimmed off.
- Lower it (e.g. `50% 70%`) to shift the crop **down**.
- Adjust the first number the same way to shift left/right.
- There's no separate "zoom in further" property here — `object-fit: cover`
  already zooms in as much as needed to fill the circle with no empty
  space. If you want to zoom in *more* than that (crop in tighter than a
  full square crop of the original), the simplest fix is to pre-crop the
  photo itself: open it in Preview (Mac) or any photo editor, crop to a
  square around your face with as much "zoom" as you like, save, and
  replace `images/headshot.jpg`. `object-position` still works the same way
  on the cropped version if you want to fine-tune from there.

After editing `_sass/layout/_sidebar.scss`, restart your local preview
server (`_sass` changes aren't picked up by live-reload — see "Preview
locally" below) to see the new crop.

## Edit the sidebar links

Everything in the sidebar under your name/bio (LinkedIn, CV, email,
location, employer, GitHub, etc.) comes from the `author:` block near the
top of `_config.yml`. Each field maps to one row:

| `_config.yml` field | Shows up as |
|---|---|
| `avatar` | The circular photo (see above) |
| `name` | Name at the top of the sidebar |
| `bio` | The one-line bio under your name |
| `location` | 📍 line (desktop only) |
| `employer` | 🏛 line (desktop only) |
| `email` | ✉️ "Email" link (opens a `mailto:`) |
| `linkedin` | 🔗 "LinkedIn" link |
| `cv` | 📄 "CV" link — added specifically for you, opens `files/thomas_istvan_resume.pdf` directly |
| `github` | GitHub link |

A blank field is automatically hidden — no icon, no link — so you can add
or remove any of these just by filling in or clearing that one line in
`_config.yml`. There are a lot more optional fields below `linkedin`
(Twitter/X, Instagram, personal website via `uri`, etc.) that work the same
way; uncomment/fill in whichever ones apply to you.

The **order** the links appear in is set by the order of the `{% if
author.xxx %}` blocks in `_includes/author-profile.html`, not by the order
of fields in `_config.yml`. That file is more "code" than the others here —
it's safe to reorder those `{% if %}...{% endif %}` blocks (cut a whole
block and paste it earlier/later) if you want a different link order, just
keep each block's opening/closing tags together when you move it.

Remember: `_config.yml` changes need a full server restart to show up
locally (see "Preview locally" below) — a plain refresh won't do it.

## Re-enable Publications / Talks (optional)

Publications and Talks aren't in the nav (`_data/navigation.yml`) because
there's no real content for them yet, and the sample files under
`_publications/` and `_teaching/` are disabled with `published: false`
rather than deleted. If you publish a paper or give a talk later:

1. Add a real entry (copy an existing file's front matter as a template).
2. Add a link to `_data/navigation.yml` — a natural spot is right after
   "Projects", matching the reference site's own nav order.

The sample/disabled files (`_publications/*.md`, the two extra
`_teaching/*.md` entries, `_portfolio/portfolio-2.html`) are safe to delete
any time you're comfortable — they're only there as reference templates.

## Preview locally before pushing

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Restart the server (Ctrl+C, then re-run)
after editing `_config.yml` specifically, or any `_sass`/`assets` file —
those aren't picked up by live-reload. If you're using the Docker setup
instead (`docker compose up`), the same restart-vs-rebuild rules apply: see
the note in `docker-compose.yaml`'s comments, or ask if you get stuck.

## Deploy

Commit and push to the `main` (or `master`) branch of your
`thomasj2026.github.io` repo — GitHub Pages rebuilds automatically.

## Where things live, at a glance

| What | File(s) |
|---|---|
| Homepage sections (About/Education/News/Honors/Experience) | `_pages/about.md` |
| Top nav bar order & links | `_data/navigation.yml` |
| Sidebar links (which show, and their order) | `_config.yml` (`author:` block, what shows) + `_includes/author-profile.html` (link order) |
| Profile picture crop/zoom | `_sass/layout/_sidebar.scss` (`.author__avatar img`, `object-position`) |
| Site-wide font | `_sass/_themes.scss` (`$sans-serif` variable) |
| Projects | `_portfolio/*.md`, listed at `/portfolio/` |
| Teaching | `_teaching/*.md`, listed at `/teaching/` |
| Full CV page | `_pages/cv.md` |

**Reminder:** anything under `_sass/` or `assets/`, plus `_config.yml`
itself, needs a full server restart to show up in local preview — regular
content files (`_pages/`, `_data/`, `_portfolio/`, etc.) live-reload
automatically.
