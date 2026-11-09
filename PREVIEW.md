# Preview the SmartBryte homepage

Every way to see the finished page, most reliable first. The `arena/38c48503-smartbryte`
branch is public, so none of these needs a login.

---

## 1. Right here on GitHub — no clicks, no downloads ✅ most reliable

GitHub renders images and PDFs inline, so the design is visible directly on the
repository page.

| View | Link |
| --- | --- |
| Desktop (1440px, full page) | [preview/desktop.png](preview/desktop.png) |
| Tablet (820px, full page) | [preview/tablet.png](preview/tablet.png) |
| Mobile (390px, full page) | [preview/mobile.png](preview/mobile.png) |
| Full-page PDF | [preview/smartbryte-homepage.pdf](preview/smartbryte-homepage.pdf) |

The desktop screenshot is also embedded near the top of [README.md](README.md).

---

## 2. Standalone HTML file in Chrome — offline, most faithful ✅

`smartbryte-preview.html` is one self-contained file: CSS, both variable fonts and all
three photographs are embedded as data URIs. No server, no npm, no internet.

1. Open [smartbryte-preview.html on GitHub](https://github.com/Beewrld/Smartbryte/blob/arena/38c48503-smartbryte/smartbryte-preview.html)
2. Click **Download raw file** (or press `Ctrl+S` / `Cmd+S` on the raw view and keep the `.html` extension)
3. **Double-click** the saved file — Chrome opens it via `file://`

Or from a terminal:

```bash
curl -L -o smartbryte-preview.html \
  https://raw.githubusercontent.com/Beewrld/Smartbryte/arena/38c48503-smartbryte/smartbryte-preview.html
# then open it:  open smartbryte-preview.html   (macOS)
#                start smartbryte-preview.html  (Windows)
#                xdg-open smartbryte-preview.html (Linux)
```

⚠️ **Do not just paste a `raw.githubusercontent.com` URL into Chrome** — GitHub serves
raw HTML as `text/plain`, so Chrome shows the source code instead of the design. The
file must be saved locally first (or use option 3).

---

## 3. Rendered HTML in your browser, with no download

These public proxies serve the same file with an HTML content type so Chrome renders
it. They only read the already-public file, but they are third-party services.

- **htmlpreview.github.io** — verified working, renders the full page:
  <https://htmlpreview.github.io/?https://raw.githubusercontent.com/Beewrld/Smartbryte/arena/38c48503-smartbryte/smartbryte-preview.html>
- **raw.githack.com** — shows one "Open the page" notice, then renders:
  <https://raw.githack.com/Beewrld/Smartbryte/arena/38c48503-smartbryte/smartbryte-preview.html>
- **jsDelivr** (fallback; some browsers may display it as text):
  <https://cdn.jsdelivr.net/gh/Beewrld/Smartbryte@arena/38c48503-smartbryte/smartbryte-preview.html>

---

## 4. GitHub Pages — a native, shareable `https://` URL (one-time setup)

A ready-to-serve copy is committed at `docs/index.html`. Pages is **not enabled yet**,
because the GitHub connection used for this work can push code but is not allowed to
change repository settings (`403 Resource not accessible by integration`). Only a repo
admin can flip that switch — it takes about 15 seconds:

1. Open **<https://github.com/Beewrld/Smartbryte/settings/pages>**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: `arena/38c48503-smartbryte` · Folder: **`/docs`** · **Save**

Your live preview is then:

**<https://beewrld.github.io/Smartbryte/>**

(GitHub builds it within a minute or two. If you'd rather keep `main` clean, this uses
only the preview branch and can be turned off in the same settings page.)

---

## 5. Run it locally (the real app)

```bash
git clone https://github.com/Beewrld/Smartbryte.git
cd Smartbryte
git checkout arena/38c48503-smartbryte
npm install
npm run dev                 # http://localhost:5173
```

No build at all? Serve the standalone file instead:

```bash
python3 -m http.server 8000 --directory docs
# open http://localhost:8000
```

Regenerate the standalone file and `docs/index.html` after any design change with
`npm run build:preview`.

---

## 6. Arena live preview

The in-app **Live Preview** panel runs the Vite dev server on port 5173. If you see
`502 BAD GATEWAY / SANDBOX NOT FOUND`, that is the Arena/E2B preview gateway having
expired the sandbox — **your site and your GitHub repository are unaffected**. Use any
of options 1–5 instead; option 1 needs nothing but a browser on github.com.

---

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Chrome shows HTML source code instead of the design | The file was served as `text/plain`. Save it locally (option 2) or use a proxy (option 3) |
| Fonts or photos look wrong | Use `smartbryte-preview.html` — everything is embedded, no network needed |
| `https://beewrld.github.io/Smartbryte/` is 404 | Pages is not enabled yet — see option 4 |
| Arena preview says "sandbox not found" | Preview gateway only — see option 6 |
| You're looking at `main` and see only a README | Switch the branch dropdown to `arena/38c48503-smartbryte` |
