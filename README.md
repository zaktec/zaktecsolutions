# ZAKTec Solutions

The official website for ZAKTec Solutions, a UK-based AI, web and digital consultancy supporting small businesses, educators, charities, community organisations and independent professionals.

## Technology

- Astro 7
- Tailwind CSS 3
- TypeScript
- GitHub Pages

The active site is intentionally server-rendered and dependency-light. Historical SaaS template pages, React components, styles, assets and configuration are preserved under `_archive/` and are not included in the production site.

## Local development

```bash
npm install
npm run dev
```

The development URL includes the configured GitHub Pages base path:

```text
http://localhost:4321/zaktecsolutions/
```

## Validation

```bash
npm run astro -- check
npm run build
npm audit
```

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which builds and deploys the static site to GitHub Pages:

```text
https://zaktec.github.io/zaktecsolutions/
```

## Brand

See `Brand.md` for the required public spelling and usage of **ZAKTec Solutions**.

## Archive

See `_archive/README.md` for the preserved pre-redesign template inventory and recovery notes.
