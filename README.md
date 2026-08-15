# Froggers ($FROG)

Official website for **Froggers** — 5000 pixel-art frogs living entirely on-chain on Robinhood Chain.

One whole $FROG token = one frog. Buy from the pool and frogs are minted with random traits; sell and they are burned (reroll); transfer wallet-to-wallet and your frogs move with you. Artwork is rendered 100% on-chain as SVG — no IPFS, no metadata API, no external dependencies.

## Stack

Plain HTML, CSS, and vanilla JavaScript. No build step, no frameworks, no trackers, no analytics, no external requests of any kind — the site is fully self-contained static files.

```
index.html      single-page site
css/style.css   styles (palette matched to the official banner)
js/main.js      roll-a-preview demo + small interactions
assets/         branding, sample frogs, trait tiles, the 25 legendaries
```

## Run locally

Any static file server works:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

**Vercel (recommended):** import the GitHub repository in the Vercel dashboard (Add New… → Project). Framework preset: **Other** — no build command, no output directory, everything is served from the repo root. `vercel.json` is included (security headers, immutable caching for `assets/`). Every push to `main` redeploys automatically.

**GitHub Pages:** also works as-is — `.nojekyll` is included. In the repo settings, enable **Pages → Deploy from a branch → main / (root)**.

Any other static host (Netlify, Cloudflare Pages, …) works the same way — just serve the folder as-is.

## Links

- Twitter / X: [@FroggersRH](https://x.com/FroggersRH)
- Contract: TBA (will be added after deployment and verification)

## License

Site code and artwork are released under [CC0 1.0](LICENSE) — no rights reserved. The token contracts are a fork of Unipeg (uPEG) by 0xhadrian (MIT) — credit where it is due.
