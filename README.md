# SM Stratagem — Website

A multi-page static website for SM Stratagem. Light theme, editorial-luxe aesthetic, Fraunces + Geist typography. No build step required.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, flagship VoxxHire, partners, services, process, manifesto, CTA |
| `voxxhire.html` | VoxxHire — main product page (B2B / B2C / B2B2C, features, numbers) |
| `services.html` | Custom websites & custom software service lines |
| `products.html` | Studio products (VoxxHire + side products: Insights, Websites, VidSights) |
| `about.html` | Studio overview, values, location, partners, manifesto |
| `contact.html` | Contact form + studio info |

Shared assets: `style.css`, `app.js`.

## Run locally

Open `index.html` directly in a browser — no build step needed.

For a local server (recommended, lets the form open mail clients correctly):

```bash
# Python 3 (usually pre-installed on macOS)
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or with Node:

```bash
npx serve .
```

## Deploy

This is a plain static site — drop it on any static host.

### Vercel (recommended — fastest)

```bash
npx vercel
```

Follow the prompts. The first run links the folder to a project; subsequent runs (or `vercel --prod`) deploy.

### Netlify (drag-and-drop)

1. Go to https://app.netlify.com/drop
2. Drag the `sm-stratagem-redesign` folder onto the page
3. Your site is live with a temporary URL

To attach a custom domain, follow Netlify's domain setup after the initial deploy.

### GitHub Pages

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
gh repo create sm-stratagem-website --public --source=. --push
gh api repos/{owner}/{repo}/pages -f source.branch=main -f source.path=/
```

Then visit `https://<owner>.github.io/sm-stratagem-website/`.

### Cloudflare Pages

```bash
npx wrangler pages deploy .
```

## Customising

- **Copy** — every page is plain HTML. Find the section and edit the text.
- **Colors** — change the CSS variables at the top of `style.css` (under `:root`). All accents/text/backgrounds reference these tokens.
- **Imagery** — image URLs point to Unsplash CDN with width/quality parameters. Swap any `https://images.unsplash.com/...` URL with your own image (or a different Unsplash photo).
- **Typography** — fonts are loaded from Google Fonts (Fraunces, Geist, JetBrains Mono). Swap the `<link rel="stylesheet">` in each `<head>` and update `--serif` / `--sans` / `--mono` in `style.css`.

## Browser support

Modern Chrome, Safari, Firefox, Edge. CSS uses backdrop-filter, CSS variables, and `aspect-ratio` — all stable for 2+ years.

## License

© 2026 SM Stratagem. All rights reserved.
