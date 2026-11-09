/**
 * Builds `smartbryte-preview.html`: a single, self-contained file that can be
 * opened directly in Chrome via file:// with no server, npm install, or network.
 *
 * Everything is generated from the real source (App.tsx, content.ts,
 * styles.css), so the preview is a faithful snapshot rather than a copy that
 * can drift away from the app.
 *
 * Usage: npm run build:preview
 */
import { build } from 'esbuild'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const tmp = path.join(root, 'node_modules', '.cache', 'smartbryte-preview')
await mkdir(tmp, { recursive: true })

/* 1. Render the real React tree to static HTML ---------------------------- */
const entry = path.join(tmp, 'entry.tsx')
await writeFile(
  entry,
  `import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from ${JSON.stringify(path.join(root, 'src', 'App.tsx'))}
export function render() {
  return renderToStaticMarkup(createElement(App))
}
`,
)

const bundle = path.join(tmp, 'ssr.mjs')
await build({
  entryPoints: [entry],
  outfile: bundle,
  bundle: true,
  platform: 'node',
  format: 'esm',
  jsx: 'automatic',
  packages: 'external',
  logLevel: 'silent',
})
const { render } = await import(pathToFileURL(bundle).href + `?v=${Date.now()}`)
let markup = render()

/* React 19 adds a preload <link> for the hero image. Embedded data URIs need
   no preload, and a file:// href would be a broken request, so drop it. */
markup = markup.replace(/<link rel="preload" as="image"[^>]*\/>/g, '')

/* 2. Inline the photographs as data URIs ---------------------------------- */
const images = ['hero-learner.webp', 'intro-learning.webp', 'intro-project.webp']
for (const name of images) {
  const bytes = await readFile(path.join(root, 'public', 'images', name))
  const uri = `data:image/webp;base64,${bytes.toString('base64')}`
  markup = markup.replaceAll(`src="/images/${name}"`, `src="${uri}"`)
  if (markup.includes(`/images/${name}`)) {
    throw new Error(`Could not inline image: ${name}`)
  }
}
if (markup.includes('"/images/') || markup.includes("'/images/")) {
  throw new Error('Un-inlined image reference remains')
}

/* 3. Inline the self-hosted variable fonts -------------------------------- */
async function inlineFonts(packageName) {
  const dir = path.join(root, 'node_modules', '@fontsource-variable', packageName)
  let css = await readFile(path.join(dir, 'index.css'), 'utf8')
  const refs = [...new Set([...css.matchAll(/url\(\s*['"]?(\.\/files\/[^'")]+)['"]?\s*\)/g)].map((m) => m[1]))]
  for (const ref of refs) {
    const bytes = await readFile(path.join(dir, ref))
    css = css.replaceAll(ref, `data:font/woff2;base64,${bytes.toString('base64')}`)
  }
  return css
}

const fontCSS = [
  await inlineFonts('bricolage-grotesque'),
  await inlineFonts('dm-sans'),
].join('\n')

/* 4. Inline the site stylesheet ------------------------------------------- */
const siteCSS = await readFile(path.join(root, 'src', 'styles.css'), 'utf8')

/* 5. Tiny classic script to keep the mobile menu usable in the static file - */
const menuIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
const closeIcon = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`

const script = `
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var panel = document.getElementById('mobile-nav');
  if (!toggle || !panel) return;
  var menu = ${JSON.stringify(menuIcon)};
  var close = ${JSON.stringify(closeIcon)};
  function setOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.innerHTML = open ? close : menu;
  }
  toggle.addEventListener('click', function () { setOpen(panel.hidden); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 860) setOpen(false); });
})();
`

/* 6. Assemble one standalone document ------------------------------------- */
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FAFAF7">
<meta name="color-scheme" content="light">
<link rel="icon" href="data:,">
<title>SmartBryte</title>
<style>
/* Self-hosted variable fonts, embedded as data URIs */
${fontCSS}

/* SmartBryte design system */
${siteCSS}
</style>
</head>
<body>
${markup}
<script>${script}</script>
</body>
</html>
`

const out = path.join(root, 'smartbryte-preview.html')
await writeFile(out, html)
console.log(`Wrote ${out} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB, fully offline)`)
