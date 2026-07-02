# Vedika Srivastava — Personal Site

Netflix-style personal site built with React, TypeScript, Vite, and Tailwind CSS. Deployed as static GitHub Pages.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run check` — typecheck, lint, and format check

## Project structure

```
index.html              # Vite entry shell (required — not the old static site)
src/
  main.tsx              # React bootstrap
  Layout.tsx            # Page layout and section composition
  images/               # Site images + import map (index.ts)
  components/           # UI components (BrowseRow, HeroSection, etc.)
  content/
    site-content.ts     # Aggregates all site sections
    contact-links.ts    # Footer contact links
    navigation.ts       # Header nav items
    sections/           # One file per content section
  hooks/
    useInView.ts        # Scroll-reveal intersection observer
  styles/
    global.css          # Tailwind v4 tokens and base styles
  types/
    content.ts          # ContentItem, SiteContent, and related types
```

## Styling

- Tailwind CSS v4 drives layout, spacing, color, typography, shadows, and responsive behavior.
- Design tokens live in `src/styles/global.css`; components use utility classes.

## About `index.html`

Root `index.html` is **required by Vite** — it is the single-page app shell where React mounts. The old multi-page HTML site (`experience-skills.html`, etc.) has been replaced by this React app.
