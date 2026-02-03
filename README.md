# heanloong.github.io

A minimal personal site for GitHub Pages. Static, fast, and no build step.

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deploy on GitHub Pages

1. Commit and push to the `main` branch of this repository.
2. In repo **Settings → Pages**, set the source to `Deploy from a branch` → `main` → `/ (root)`.
3. (Optional) If you want to keep a custom domain, set it in **Custom domain** and ensure DNS points there. Otherwise, GitHub Pages will serve the default domain: https://loongx2.github.io

This repo includes:
- `index.html` — the homepage
- `404.html` — not found page
- `assets/css/style.css` — styles
- `assets/js/main.js` — small enhancements
- `assets/favicon.svg` — favicon
- `.nojekyll` — ensures GitHub Pages serves files as-is (no Jekyll processing)

## Customize
- Update links in the hero/socials and Projects sections.
- Add images to `assets/img/` and reference them in your cards.
- Tweak colors in `assets/css/style.css`.
