# The Shapeshifting Box (GSAP Drills)

Practice GSAP inside a Next.js 14 App Router + Tailwind playground. Five focused levels are ready with UI, refs, and `useGSAP`; you fill in the `// TODO` animations.

## Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Levels at a Glance

- **Level 1 · Core** — wire up `gsap.to`, `gsap.from`, `gsap.fromTo` on button clicks.
- **Level 2 · Props & Ease** — use `duration`, `repeat: -1`, `yoyo: true`, and eases like `elastic.out` / `bounce.out`.
- **Level 3 · Timeline** — build a `gsap.timeline()` and overlap steps with position params (`<`, `+=`, `-=`).
- **Level 4 · ScrollTrigger** — add a toggleActions reveal and a separate scrubbed + pinned sequence with markers.
- **Level 5 · Responsive** — drive desktop vs mobile behavior via `gsap.matchMedia()` (rotate vs fade).

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- GSAP + `@gsap/react`

## Project Structure

- `app/` — layout, global styles, and the home page that renders all levels.
- `components/` — one file per level with ready refs, `useGSAP`, and detailed TODOs.
- `app/globals.css` — dark theme, gradient background helpers, and shared `.box` styling.

## Deploying to GitHub Pages

This app is static-render friendly. For GitHub Pages via a static export:

```bash
npm run build
npm run export   # add "output": "export" in next.config.js if you prefer full static export
```

Then publish the `out/` folder to Pages (e.g., with the GitHub Pages action). Adjust base paths if you serve from a subpath.

## Notes

- GSAP logic is intentionally left as `// TODO` inside each component so you can practice the API.
- Boxes are already scoped with refs and `useGSAP`; just drop animations into the provided handlers.
