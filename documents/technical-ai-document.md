# ZakTec Solutions Technical AI Document

## Purpose of this document

This is the technical source of truth for developers and AI coding tools working on the ZakTec Solutions website. It explains what currently exists, how the code is organised, which behaviours are intentional and which rules must be followed when making changes.

For brand language and visual decisions, use `branding.md`. For a non-technical explanation of the website, use `human-friendly-web-app-guide.md`.

## Application purpose

ZakTec Solutions is a UK AI and digital consultancy website. It explains the company’s services, presents selected internal and developing projects, describes how work is assessed and delivered, and gives visitors a route to make an enquiry.

The active application is a public, static marketing website. It is not currently:

- An authenticated web application
- A client portal
- A content management system
- An online booking platform
- An ecommerce service
- A database-backed enquiry system
- An analytics application

Do not imply that any of these features exist unless they are implemented, tested and documented.

## Technology stack

| Area | Current implementation |
| --- | --- |
| Framework | Astro 7 |
| Language | TypeScript and Astro component templates |
| Styling | Tailwind CSS 3 with shared CSS variables and component classes |
| Rendering | Static site generation |
| Sitemap | `@astrojs/sitemap` |
| Hosting | GitHub Pages |
| Production domain | `https://zaktecsolutions.com` |
| Deployment | GitHub Actions |
| Package format | ECMAScript modules |

No frontend framework runtime is required for the active pages.

## Repository structure

```text
.
├── .github/workflows/deploy.yml
├── documents/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.js
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

### Important source areas

- `src/pages/` contains route-level Astro pages.
- `src/components/` contains reusable navigation, branding, card, introduction and call-to-action components.
- `src/layouts/main.astro` defines shared metadata, the page shell, header and footer.
- `src/styles/global.css` defines design tokens, base styles and reusable component classes.
- `src/lib/utils.ts` contains `withBase()`, the internal URL helper.
- `public/` contains files copied directly into the generated site.

## Architecture

The application uses a simple content-component-layout model:

```text
Route page
  → Main layout
      → Shared metadata
      → Header and navigation
      → Route content
      → Footer
  → Reusable content components
  → Global Tailwind and CSS styles
  → Static HTML, CSS, sitemap and public assets
```

Astro generates a separate static HTML page for each route. There is no application server at runtime. Navigation requests a generated page from GitHub Pages.

## Active pages

| Route | Purpose | Primary navigation |
| --- | --- | --- |
| `/` | Homepage overview, services, audiences, projects, process and CTA | Yes |
| `/services` | Summary of all service areas and training support | Footer and homepage |
| `/ai-solutions` | AI consultancy, automation, responsible use and training | Yes |
| `/digital-solutions` | Dashboards, forms, portals, workflows and integrations | Yes |
| `/web-development` | Website and online-service work | Yes |
| `/education-technology` | Specialist education technology information retained outside the main navigation | No |
| `/projects` | HAiBL, MathsTutorHelp, TableTopLearning and ConnectMuslim | Yes |
| `/about` | Company purpose, approach, audiences and leadership | Yes |
| `/contact` | Project and collaboration enquiry form | Yes |
| `/privacy` | Current privacy information | Footer |
| `/terms` | Website terms | Footer |
| `/cookies` | Current cookie information | Footer |
| `/404` | Not-found page | No |

Each page must contain exactly one H1. Content sections use H2 headings and cards within those sections use H3 headings.

## Reusable components

| Component | Responsibility |
| --- | --- |
| `Header.astro` | Desktop and mobile primary navigation, current-page state and logo link |
| `Footer.astro` | Service, company and legal navigation |
| `Logo.astro` | Text-based ZakTec Solutions wordmark |
| `PageIntro.astro` | H1 introduction for internal pages |
| `ServiceCard.astro` | Service description, examples and CTA |
| `ProjectCard.astro` | Project category, status, description, evidence tags and optional link |
| `CallToAction.astro` | Reusable contact CTA with configurable copy |

Prefer extending these components over duplicating their markup in new pages.

## Current features

- Responsive desktop, tablet and mobile navigation
- Static service and company information
- Selected project summaries and status labels
- Project links from the homepage to anchors on `/projects`
- Reusable calls to action
- Contact and collaboration enquiry form
- Canonical URL, Open Graph and basic Twitter metadata
- Generated sitemap
- `robots.txt`
- Accessible skip link
- Visible keyboard focus
- Reduced-motion support
- Responsive cards and content grids

## User roles

There are no authenticated roles or permissions.

The following roles describe audiences and maintenance responsibilities only:

| Role | What the person can do |
| --- | --- |
| Visitor | Read public pages and follow navigation links |
| Prospective client | Review services and projects, then open an enquiry in their email application |
| Potential collaborator | Read the Work with us section and select the collaboration option in the Contact form |
| Content maintainer | Edit source-controlled Astro content and documentation |
| Developer | Update components, styling, configuration, tests and deployment files |

Do not add role-based dashboards, accounts or permissions to documentation unless those features are actually implemented.

## Data flow

### Normal page request

```text
Visitor requests zaktecsolutions.com
  → GitHub Pages returns generated HTML
  → Browser loads root-relative CSS and public assets
  → Visitor follows static links between generated routes
```

No visitor data is sent to a ZakTec Solutions database because no database or application backend exists.

### Contact enquiry

```text
Visitor enters enquiry details
  → Browser submits a mailto form
  → Visitor’s configured email application opens
  → Visitor reviews and sends the email
  → The website itself does not store the form values
```

The current recipient is `hello@zaktecsolutions.com`. The site must not claim that an enquiry was submitted successfully because the visitor may close the email application without sending.

### Build and deployment

```text
Change pushed to main
  → GitHub Actions checks out the repository
  → withastro/action installs dependencies and builds the static site
  → Generated Pages artifact is uploaded
  → actions/deploy-pages deploys the artifact
  → GitHub Pages serves the custom domain
```

## Integrations

### Active integrations

- GitHub Pages for static hosting
- GitHub Actions for production deployment
- `@astrojs/sitemap` for sitemap generation
- The visitor’s email application through `mailto:`

### Not currently integrated

- CRM
- HAiBL enquiry API
- Database
- Server-side forms handler
- Analytics
- Advertising
- Payment provider
- Booking provider
- Authentication service
- Third-party chat widget

Do not add an integration to public copy before it is implemented and its privacy impact is reviewed.

## URL and deployment rules

`astro.config.js` must use:

```js
site: 'https://zaktecsolutions.com'
```

Do not restore the old GitHub repository base path. The custom domain serves the site from `/`, so adding `base: '/zaktecsolutions'` would generate broken asset and internal URLs.

Use `withBase()` for internal links in Astro components:

```astro
<a href={withBase('/contact')}>Discuss Your Project</a>
```

External `https:`, `mailto:` and `tel:` links are returned unchanged by the helper.

## SEO and metadata

The main layout provides:

- Page title
- Meta description
- Canonical URL
- Open Graph type, site name, title, description and URL
- Twitter summary-card metadata
- Robots directive
- Favicon

Every public page should pass a unique, useful title and description unless the homepage defaults are appropriate. Use keywords naturally and avoid repeated or hidden keyword lists.

## Technical requirements

- Use a Node.js version supported by the current Astro 7 release. Production deployment currently uses Node 24.
- Install dependencies from `package.json` and the committed npm lockfile.
- Keep the application as Astro unless a separately approved requirement justifies an architectural change.
- Do not install a library when existing Astro, TypeScript, CSS or platform features can handle the requirement clearly.
- Do not commit generated `dist/` output unless the deployment process is intentionally changed.

## Local commands

```bash
npm install
npm run dev
npm run astro -- check
npm run build
npm run preview
```

Local development runs from:

```text
http://localhost:4321/
```

If a development server is already running:

```bash
npm run astro -- dev stop
```

## Coding standards

### Astro and TypeScript

- Use TypeScript interfaces for component props.
- Keep route-specific data close to the page unless several routes share it.
- Prefer reusable Astro components for repeated structures.
- Keep components focused on one clear responsibility.
- Avoid client-side JavaScript when static HTML provides the required behaviour.
- Preserve strict TypeScript checking.

### Styling

- Use the existing Tailwind tokens and shared classes before adding one-off CSS.
- Preserve the dark navy and purple design system.
- Keep body text at least `1rem` where possible.
- Keep important card copy around `0.95rem` or larger.
- Maintain comfortable line height and readable paragraph widths.
- Keep touch targets at least 44 pixels high.
- Do not remove global `:focus-visible` styling.
- Test responsive changes at mobile, tablet and desktop widths.

### Links and navigation

- Use descriptive link text.
- Use `withBase()` for internal application links.
- Add `target="_blank"` only when an external link genuinely benefits from a new tab.
- Add `rel="noreferrer"` to external new-tab links.
- Never publish an unverified project or social URL.
- Confirm that anchor IDs exist before linking to them.

### Content

- Use British English.
- Use the exact public name `ZakTec Solutions`.
- Follow `branding.md` for tone, messages and prohibited claims.
- Mark developing projects clearly.
- Do not present internal or demonstration work as an external client project.
- Do not invent clients, contracts, testimonials, statistics, results, qualifications, certifications, partnerships or prices.

## Accessibility requirements

- One H1 per page
- Logical H2 and H3 hierarchy
- Semantic landmarks and navigation labels
- Visible keyboard focus
- Keyboard-operable menus and controls
- Descriptive form labels
- Sufficient text and control contrast
- Minimum 44-pixel interactive targets
- Meaning communicated through text as well as colour
- Reduced-motion support
- No horizontal overflow at supported mobile widths

Status badges must contain readable status text. Do not rely on purple colour alone.

## Development rules for AI tools

1. Inspect the repository and relevant files before editing.
2. Treat current source code as the implementation truth.
3. Read `branding.md` before writing public copy.
4. Preserve unrelated user changes in a dirty working tree.
5. Use Git history to recover earlier content instead of keeping duplicate archive files.
6. Use `apply_patch` for deliberate source edits.
7. Do not invent missing business or technical facts.
8. Do not expose credentials, tokens or private information.
9. Do not describe frontend-only behaviour as secure.
10. Do not claim that a build, link or responsive check passed without running it.
11. Run proportionate checks after every material change.
12. Report files changed, archived and still awaiting confirmation.

## Required validation

For content-only changes:

```bash
npm run astro -- check
```

For page, component, configuration or styling changes:

```bash
npm run astro -- check
npm run build
```

Also verify:

- Internal links and anchors
- Project links
- Exactly one H1 per generated page
- Mobile menu behaviour
- Desktop, tablet and mobile overflow
- Browser console errors
- Brand-name spelling
- No unsupported claims

## Known limitations and confirmations

The following information still requires confirmation:

- Whether `hello@zaktecsolutions.com` is actively monitored
- The enquiry email retention schedule
- Public URLs for HAiBL, MathsTutorHelp, TableTopLearning and ConnectMuslim
- Approved project screenshots
- Whether ConnectMuslim’s current status remains “In development”
- Whether analytics are required
- Whether a server-side or HAiBL enquiry integration will replace the mail-based form
- Formal legal review of the Privacy, Terms and Cookies pages
