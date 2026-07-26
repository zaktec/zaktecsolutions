# ZakTec Solutions

The official website for **ZakTec Solutions**, a UK AI and digital consultancy for businesses and organisations.

The website presents three main service areas:

- AI Consultancy and Automation
- Digital Systems
- Websites and Online Services

It also includes company information, selected developing projects, training and support information, legal pages and a mail-based enquiry form.

## Live website

```text
https://zaktecsolutions.com/
```

## Technology

- Astro 7
- TypeScript
- Tailwind CSS 3
- Static site generation
- GitHub Pages
- GitHub Actions

The production website is static and does not currently use a database, authentication system, analytics service or forms backend.

## Project structure

```text
.
├── .github/workflows/     # GitHub Pages deployment
├── documents/             # Technical, user and brand documentation
├── public/                # Favicon, robots.txt and public assets
├── src/
│   ├── components/        # Shared Astro components
│   ├── layouts/           # Shared page layout and metadata
│   ├── lib/               # URL and utility functions
│   ├── pages/             # Website routes
│   └── styles/            # Global Tailwind and CSS styles
├── astro.config.js
├── package.json
└── tailwind.config.mjs
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/services` | Service overview and training support |
| `/ai-solutions` | AI consultancy and automation |
| `/digital-solutions` | Digital systems |
| `/web-development` | Websites and online services |
| `/projects` | Selected projects |
| `/about` | Company information |
| `/contact` | Project and collaboration enquiries |
| `/privacy` | Privacy information |
| `/terms` | Website terms |
| `/cookies` | Cookie information |

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321/
```

Stop a managed Astro development server:

```bash
npm run astro -- dev stop
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Generate the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- check` | Run Astro and TypeScript diagnostics |
| `npm audit` | Review dependency security notices |

## Validation

Before publishing material changes, run:

```bash
npm run astro -- check
npm run build
```

Also check:

- Internal links and project anchors
- Desktop, tablet and mobile layouts
- Mobile navigation
- Heading hierarchy
- Keyboard focus
- Brand-name spelling
- Browser console errors

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`.

The workflow:

1. Checks out the repository.
2. Installs dependencies and builds the Astro site.
3. Uploads the generated GitHub Pages artifact.
4. Deploys the artifact to the custom domain.

The Astro configuration must continue to use:

```js
site: 'https://zaktecsolutions.com'
```

Do not restore the old `/zaktecsolutions` base path because the custom domain serves the website from `/`.

## Documentation

- [Technical AI Document](documents/technical-ai-document.md) — architecture, routes, data flow, integrations and development rules.
- [Human-Friendly Web App Guide](documents/human-friendly-web-app-guide.md) — a plain-language explanation for clients and non-technical stakeholders.
- [Brand Guidelines](documents/branding.md) — naming, positioning, visual identity, writing and accessibility rules.
- [Documentation Index](documents/README.md) — explains which document to use.
- [Outstanding Tasks](TODO.md) — facts and decisions still awaiting confirmation.

## Important content rules

- Write the public name as **ZakTec Solutions**.
- Use clear British English.
- Do not invent clients, contracts, testimonials, statistics, qualifications, certifications, results or prices.
- Mark developing projects honestly.
- Verify project and external links before publishing them.
- Keep the current dark navy and purple visual identity unless a redesign is explicitly approved.

## Contact form

The Contact page currently opens the visitor’s email application using `mailto:`. The website does not store the form submission or confirm that the email was sent.

Any future forms backend, CRM or HAiBL integration must be implemented, tested and documented before public copy describes it as active.

## Licence

See [LICENSE](LICENSE).
