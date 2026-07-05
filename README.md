# napseX — Landing Page

A modern landing page for napseX built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- Responsive layout and animated sections
- Component-based design (Hero, Navbar, Footer, Metrics, Technology, etc.)

## Tech stack

- Vite
- React + TypeScript
- Tailwind CSS
- Framer Motion

## Project structure (key files)

- [src/App.tsx](src/App.tsx#L1) — application entry
- [src/main.tsx](src/main.tsx#L1) — Vite bootstrap
- [src/index.css](src/index.css#L1) — global styles
- [src/components/HeroSection.tsx](src/components/HeroSection.tsx#L1) — hero
- [src/components/Navbar.tsx](src/components/Navbar.tsx#L1) — navigation

## Quick start

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Deploy

This project can be deployed to any static hosting (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Build with `npm run build` to create the production `dist` folder and publish that folder to your host of choice.

## Contributing

Feel free to open issues or PRs. For minor edits, update the relevant component in `src/components` and open a PR.

## License

Add a license file if you plan to publish this project.
