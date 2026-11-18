# Nazmus Sakib: Portfolio Website

Live at **https://mnsakib.net**. Animated portfolio for a nopCommerce and ASP.NET Core developer, hosted on Cloudflare Workers.

## Stack

| Piece | Library |
|-------|---------|
| Framework | Next.js 16 (App Router), run on Cloudflare through [vinext](https://github.com/cloudflare/vinext) |
| Animations | Framer Motion |
| Smooth scroll | Lenis |
| Custom cursor and click ripples | Custom CSS/JS |
| Fonts | Google Fonts (Syne, Outfit) |
| Hosting | Cloudflare Workers (free plan) |

## Local development

```bash
npm install
npm run dev          # regular Next.js dev server, http://localhost:3000
npm run dev:vinext   # Cloudflare-style dev server, http://localhost:3001
```

## Deploy

Cloudflare builds and deploys automatically on every push to the `cloudflare-vinext` branch
(Workers Builds, production branch `cloudflare-vinext`). The deploy command is
`npm run deploy:vinext`, and the build command is left empty because the deploy command builds first.

Local checks before pushing:

```bash
npx tsc --noEmit
npm run build:vinext
```

## SEO notes

- The site address lives in one place, `siteUrl` in `src/data/site.ts`. The canonical links,
  sitemap, robots file and structured data all read it.
- The share image is the static file `public/og.png` (1200x630). Replace the file to change it.
- Search Console property: `mnsakib.net` (Domain property, verified with a DNS TXT record in Cloudflare).
  Do not delete that TXT record.
