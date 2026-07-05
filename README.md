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

## Deploy (Netlify)

This project is ready for continuous deployment on Netlify. I added a `netlify.toml` with the correct build command and publish directory.

Steps to enable automatic deploy from Git:

1. Push the repo to GitHub.
2. Sign in to Netlify and choose "New site from Git".
3. Connect your GitHub repo and select the branch to deploy.
4. Set the build command to `npm run build` and the publish directory to `dist` (these are already in `netlify.toml`).
5. Save and deploy — Netlify will build and host the site and auto-deploy on future pushes.

Quick drag-and-drop alternative: build locally with `npm run build` and drop the `dist` folder onto Netlify's drag-and-drop deploy page.

## Contributing

Feel free to open issues or PRs. For minor edits, update the relevant component in `src/components` and open a PR.

## License

Add a license file if you plan to publish this project.
