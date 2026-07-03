# HOS AI Website

Marketing site for HOS AI — the AI arm of House of Shafaq. Built with React + Vite.

This project was rebuilt from a Claude-designed standalone export into a proper
Vite/React project structure (real ES modules, self-hosted fonts, a real build
step instead of in-browser Babel).

## Pages

- `/` — Home
- `/services` — Services
- `/work` — Work / case study
- `/about` — About

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/`.

## Deploy

### Vercel

1. Import this repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist`.
3. Point your custom domain at the Vercel project once deployed.

### Cloudflare Pages

1. Create a new Pages project from this repo.
2. Framework preset: **Vite**. Build command `npm run build`, build output directory `dist`.
3. Point your custom domain at the Pages project once deployed.

## Structure

```
index.html            Vite entry HTML
src/main.jsx           React root
src/App.jsx             Route table (react-router)
src/HomePage.jsx        Home page component
src/ServicesPage.jsx    Services page component
src/CaseStudyPage.jsx   Work / case study page component
src/AboutPage.jsx       About page component
src/theme.jsx           Shared theme, nav, footer, partner/client data
src/fonts.css           Self-hosted Geist / Geist Mono / Inter variable fonts
public/fonts/            Font files referenced by fonts.css
public/images/           Page images (e.g. team photo)
public/favicon.svg       Site favicon (bracket-mark logo)
public/_redirects        Cloudflare Pages SPA routing fallback
vercel.json               Vercel SPA routing fallback
```

This is a client-rendered single-page app using `react-router-dom` with clean
URLs (`/services`, `/work`, `/about`). Both the Cloudflare `_redirects` file
and `vercel.json` rewrite all paths to `index.html` so deep links resolve
correctly on a static host.
