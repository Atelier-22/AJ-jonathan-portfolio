# Jonathan — Portfolio Site

Plain HTML/CSS/JS, no build tools. Open `index.html` in a browser to preview,
or upload the whole folder to any static host (Netlify, Vercel, GitHub Pages).

## Pages (matches your Drive folders 1:1, exact image counts)
- `index.html` — home, each category card shows a rotating slideshow of its
  first few real images
- `cover-art.html` — 1 image
- `illustrations.html` — 28 images
- `illustrations-2.html` — 11 images
- `inking.html` — 6 images
- `inking-2.html` — 19 images
- `penciling.html` — 6 images
- `mabira-forest-terror.html` — dark theme, 6 images
  (`Mabira_Forest_Terror-01.jpg` through `-06.jpg`) — note: page 01 is
  captioned as the "Cover" since that's how your Drive folder looked. If 01
  isn't actually the cover, open the file and edit that first `<figure>`'s
  caption text.
- `comic-2-worldbuilding.html` — 14 images
- `contact.html`

## Adding your real images — just drop files in, no HTML editing

Every gallery tile already has a real `<img src="...">` tag pointing at the
exact file it expects. There's nothing to edit — just get your files into
the right subfolder with the right names, and they'll show up automatically
when you open/refresh the page:

```
images/
  cover-art/                Cover art (1).jpg
  illustrations/            Illustrations (1).jpg ... (28).jpg
  illustrations-2/          Illustrations 2 (1).jpg ... (11).jpg
  inking/                   Inking (1).jpg ... (6).jpg
  inking-2/                 Inking 2 (1).jpg ... (19).jpg
  penciling/                Penciling (1).jpg ... (6).jpg
  mabira/                   Mabira_Forest_Terror-01.jpg ... -06.jpg
  comic-2-worldbuilding/    Comic 2 worldbuilding (1).jpg ... (14).jpg
```

Drag each Drive folder's contents into the matching subfolder above — the
filenames already match what's in your Drive, so no renaming needed.

If a file is missing or misnamed, that tile automatically falls back to a
labelled colour placeholder (instead of a broken-image icon) so you can spot
what's missing at a glance.

## Homepage slideshow

Each card on `index.html` cycles through the first 3–4 images from that
category (1 for Cover Art, since it only has one). This is driven by
`script.js` — it just toggles an `is-active` class between a few `<img>`
tags every ~2.6 seconds. To change which images appear, edit the
`<div class="browse-slideshow">` block for that card in `index.html` and
swap the `src` paths. To change the number of images per card or the
rotation speed, that's also in `script.js` (`setInterval(...)`).

## Adding more tiles to a gallery

Copy one whole `<figure>` block, change the filename and title:

```html
<figure class="art-tile">
  <div class="art-frame">
    <img src="images/inking/Inking (7).jpg" alt="Inking 7" loading="lazy">
  </div>
  <figcaption>
    <span class="art-title">Inking 7</span>
    <span class="art-meta">Inking</span>
  </figcaption>
</figure>
```

Paste it inside `<div class="gallery">` on the relevant page, right before
the closing `</div>`.

## Colours & fonts
Everything lives in `style.css` under `:root` at the top — change the hex
values there to re-theme the whole site in one place.
