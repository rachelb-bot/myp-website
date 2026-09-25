# MYP Math Tutor Website

This ZIP contains the complete standalone source code and all local image assets for the MYP Math Tutor homepage.

## Run on your laptop

Install Node.js 20 or newer, open a terminal in this folder, and run:

```bash
npm install
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`.

## Create production files

```bash
npm run build
```

The deployable static website will be created in the `dist` folder.

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 20 or newer

## Traditional web hosting

Run `npm install` and `npm run build`, then upload everything inside `dist` to the host's public website directory.

## Notes

- The page is static and does not require WordPress, a database, or a backend.
- Image assets are stored locally under `public/site-assets`.
- The founder video remains embedded from Vimeo.
- Google Fonts are loaded from Google.
- The contact form is currently visual only and requires an email or form service before it can deliver submissions.