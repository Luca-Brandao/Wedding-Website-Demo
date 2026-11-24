# Wedding Website Demo

A responsive React and TypeScript wedding microsite by Luca Brandao. This sanitised portfolio edition uses fictional people, dates, stories and venue details, plus a local placeholder illustration.

## Features

- Animated invitation and opening sequence with reduced-motion support
- Responsive navigation, countdown and event schedule
- Story sections, photo galleries and keyboard-friendly image viewing
- Gift details interface using explicit non-financial placeholders
- A demonstration-only RSVP section with no live form or widget
- Component-based React and TypeScript source, styled with Tailwind CSS

## Run locally

Install a supported Node.js LTS release, then run:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173.

```sh
npm run build
npm run preview
```

The static build is generated in `client/dist`. The original site's deployment is not linked to this repository. This demo intentionally disables live maps, external RSVP forms, payments and data collection.

## Technology

React, TypeScript, Vite, Framer Motion, Lucide and Tailwind CSS. The portfolio copy uses a simple local SVG decoration in place of the original animation asset and photographs.

## Privacy and history

No original photographs, personal stories, bank details, contact numbers, live widget identifiers, production credentials or original commit history are included. The original project stays private. The commits here record the actual preparation of this portfolio edition.

See [SECURITY.md](SECURITY.md) before adapting or deploying your own version. Always review the current dependency audit and hosting settings.

## GitHub Pages

Run `npm run build` to regenerate `docs/`, then commit the updated output. In the repository's Pages settings, publish the `main` branch and `/docs` folder. This deployment is separate from the original personal site.

`docs/.nojekyll` preserves the generated static files. The generated HTML includes a resource Content Security Policy and no-referrer policy. GitHub Pages does not apply the `_headers` file used by other hosts, so those host-specific HTTP header settings are not claimed here.
