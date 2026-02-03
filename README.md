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
3. In Settings → Pages, set **Custom domain** to `heanloong.github.io` (the domain you own). GitHub will create/update the `CNAME` file automatically (already present).
4. Configure DNS for the apex domain:
   - Preferred: use a CNAME/ALIAS/ANAME (flattened) record with **Name** `heanloong.github.io` pointing to **Target** `loongx2.github.io`.
   - If your DNS provider cannot flatten CNAMEs at the apex, add **A records** for `heanloong.github.io` to the GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Optional: to also serve `www.heanloong.github.io`, add a CNAME with **Name** `www` pointing to **Target** `loongx2.github.io` (or to `heanloong.github.io` if your DNS supports it).
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
