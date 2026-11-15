# Nouh Farrag: Cybersecurity Portfolio

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies, no tracking. Loads fast and runs on GitHub Pages or Vercel as is.

```
index.html          all content (edit text here)
css/style.css       design (colors are variables at the top)
js/main.js          behavior + CONFIG block (GitHub URL, email)
assets/             Nouh-Farrag-CV.pdf, favicon.svg, img/ (screenshots)
robots.txt, sitemap.xml
```

## 1. Before you publish (5 minutes)

1. **GitHub link:** open `js/main.js`, set `GITHUB: "https://github.com/your-username"`. The GitHub buttons stay hidden until you do.
2. **Email:** set `EMAIL` in `js/main.js` and the `mailto:` link in `index.html` if you want a different address.
3. **URL:** search all files for `YOUR-USERNAME` and replace it with your GitHub username (`index.html`, `robots.txt`, `sitemap.xml`).
4. **CV:** a CV was generated only from the facts you gave. Replace `assets/Nouh-Farrag-CV.pdf` with your own real CV, keeping the same file name.
5. **Certificates:** fill in the `add date` / `add` placeholders on each certificate card.

## 2. Deploy on GitHub Pages (free)

1. On github.com create a new **public** repository named `YOUR-USERNAME.github.io`
   (this gives you the clean URL `https://YOUR-USERNAME.github.io`).
2. Upload everything in this folder (drag and drop in the web UI works), or:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```
3. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. After about a minute your site is live at `https://YOUR-USERNAME.github.io`.

### Alternative: Vercel
Sign in at vercel.com with GitHub, **Add New → Project**, import the repo, leave Framework Preset as "Other", no build command, and Deploy. You get a `*.vercel.app` URL.

## 3. Updating content

**Add a project:** in `index.html`, copy a whole `<article class="project reveal">…</article>` block in the Projects section and edit the title, text and tags.
- GitHub button: put the repository URL in its `href`. If `href="#"` the button is hidden automatically.
- Live Demo button: put a URL in the `href` of the link marked `data-demo`. Delete that link if there is no demo.
- Screenshots: save images into `assets/img/` and match the file names in the `<img src>` (e.g. `assets/img/tracex-1.png`). Until the file exists, a placeholder is shown.

**Add a certification:** copy one `<article class="card cert reveal">` block. Edit the title, badge (`Certification` / `Training`), issuer and date. Put the real credential URL in the "Verify credential" `href`; with `href="#"` it stays hidden.

**Add a skill:** add `<li>Name</li>` inside the right category, or copy a `<article class="card skill reveal">` block for a new category.

**Change colors:** edit the variables under `/* ===== EDIT THEME HERE ===== */` in `css/style.css`.

Commit and push; GitHub Pages redeploys automatically.

## Test locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Notes on accuracy
Only the information you supplied is on the site. The hero terminal is an illustrative workflow, not real output. Don't add results, metrics or experience you can't demonstrate.
