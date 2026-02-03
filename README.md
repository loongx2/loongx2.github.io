# heanloong.github.io

A minimal personal site for GitHub Pages. Static, fast, and no build step.

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deploy on GitHub Pages

1. Commit and push to the `main` branch of the `heanloong.github.io` repository.
2. In your repo settings → Pages, ensure the source is set to `Deploy from a branch` → `main` → `/ (root)`.
3. In Settings → Pages, set **Custom domain** to `heanloong.github.io`. GitHub will create/update the `CNAME` file automatically (already present).
4. Configure DNS for the apex domain:
   - If your DNS supports ALIAS/ANAME at the apex, point `heanloong.github.io` to `heanloong.github.io` (which resolves to GitHub Pages).  
   - Otherwise, add A records for `heanloong.github.io` to GitHub Pages IPs per the GitHub Pages docs.
5. Your site will be available at https://heanloong.github.io once DNS propagates.

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
