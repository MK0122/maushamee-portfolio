# Maushamee Kanungoe — Portfolio Site

A single-page personal portfolio site. Plain HTML/CSS/JS — no build step required.

## Files
- `index.html` — page content
- `style.css` — styles
- `script.js` — nav toggle, scroll reveal, expand/collapse
- `assets/photo.jpg` — profile photo

## Deploy on GitHub Pages (free)

1. Create a new repository on GitHub, e.g. `maushamee-portfolio`.
2. Upload these files (`index.html`, `style.css`, `script.js`, and the `assets/` folder) to the repo — either by dragging them into the GitHub web UI ("Add file" → "Upload files") or via git:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

## Updating later
Edit any file, commit, and push — GitHub Pages redeploys automatically within a minute or two.

## Custom domain (optional)
If you buy a domain later, add a `CNAME` file in the repo root with your domain name, and point your domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
