# Portfolio — Sai Suhrut Sala

Personal portfolio site. Built with **Vue 3 + Vite + TypeScript**, styled with
**Tailwind CSS** and a **shadcn**-style component layer (design tokens as CSS
variables, `cva` variants, `cn` helper).

## Features

- Light / dark mode with system preference + `localStorage` persistence and no
  flash of the wrong theme on load.
- Fully responsive (mobile-first) with a collapsible mobile nav.
- Content-driven: everything renders from [`src/information.json`](src/information.json).
- Live GitHub repositories section.
- Accessible: skip link, focus-visible rings, semantic landmarks,
  `prefers-reduced-motion` respected.

## Project structure

```
src/
  assets/styles/globals.css   Tailwind entry + design tokens (:root / .dark)
  lib/utils.ts                cn() class-merge helper
  lib/portfolio.ts            typed access to information.json
  composables/useColorMode.ts theme state
  components/ui/              shadcn-style primitives (Button, Card, Badge, Separator)
  components/                 Navbar, Footer, Icon, ImageCarousel, ...
  components/sections/        Hero, About, Skills, Education, Experience, Projects, Repositories, Contact
```

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:3000
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
npm run deploy    # build + firebase deploy
```
