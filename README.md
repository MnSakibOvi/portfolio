# Nazmus Sakib — Portfolio Website

Professional animated portfolio. Free stack, free deploy on [Vercel](https://vercel.com).

## Stack (all free)

| Piece | Library | Cost |
|-------|---------|------|
| Framework | Next.js 16 | Free |
| Animations | Framer Motion | Free / MIT |
| Smooth scroll | Lenis | Free / MIT |
| Custom cursor + click ripples | Custom CSS/JS | Free |
| Fonts | Google Fonts (Syne, Outfit) | Free |
| Hosting | Vercel Hobby | Free |

Inspired by [Dribbble web-animation](https://dribbble.com/tags/web-animation) motion patterns — implemented without paid tools (no Lottie paid plans, no premium cursor libraries).

## Local development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (free)

1. Push this `website` folder (or the whole repo) to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Set **Root Directory** to `website` if the repo root is `portfolio`.
4. Deploy — no paid plan required.

Or with CLI:

```bash
cd website
npx vercel
```

## Animations included

- Custom cursor (dot + trail + ring) on desktop
- Click burst + page ripple on every click
- Magnetic hover on buttons/links
- Smooth Lenis scrolling
- Scroll-triggered reveals on every section
- Parallax hero fade
- Hover micro-interactions on projects, timeline, skills

Respects `prefers-reduced-motion` and disables the custom cursor on touch devices.
