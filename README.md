# The Shapeshifting Box (GSAP Drills)

Practice GSAP in a Next.js 14 App Router + Tailwind environment. Each level isolates a technique and leaves TODOs for you to complete.

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and work through the levels:

- Level 1 · Core: hook up `gsap.to`, `gsap.from`, `gsap.fromTo` on button clicks.
- Level 2 · Props & Ease: animate with `duration`, `repeat: -1`, `yoyo: true`, and playful eases (`elastic.out`, `bounce.out`).
- Level 3 · Timeline: build a `gsap.timeline()` with position parameters (`<`, `+=`, `-=`).
- Level 4 · ScrollTrigger: add a toggleActions animation plus a scrubbed, pinned interaction with markers.
- Level 5 · Responsive: drive different behaviors via `gsap.matchMedia()` for desktop vs mobile.

Notes:
- Components live in `/components` and are already wired to `useGSAP` with refs.
- All GSAP logic is intentionally left as `// TODO` so you can practice filling it in.
