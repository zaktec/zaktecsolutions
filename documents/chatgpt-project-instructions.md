# ChatGPT Project Instructions: ZakTec Solutions Website

## Purpose of this document

Use this file as the technical and product context for the ZakTec Solutions website. Read it together with `branding.md` before suggesting or making changes.

Do not redesign the entire site unless the user explicitly requests a redesign. Preserve the current dark theme, purple accent, company positioning and simple content style.

## Project summary

ZakTec Solutions is a static consultancy website for a UK-based AI, web and digital business. The site presents services, selected internal projects, company information and a mail-based project enquiry form.

The site is designed for non-technical clients. Content must remain short, clear and free from repeated claims or unnecessary jargon.

## Technology

- Astro 7
- Tailwind CSS 3
- TypeScript
- Static site generation
- Astro sitemap integration
- GitHub Pages deployment
- Node.js and npm

Do not convert the project to another framework or add a dependency unless there is a clear need.

## Package manager

Use **npm only**.

The project has a committed `package-lock.json`. Do not use pnpm or Yarn in this repository and do not create another lockfile. Mixing package managers previously caused the local dependency tree to break.

Useful commands:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run astro -- check
```

## URLs and GitHub Pages base path

Local development URL:

```text
http://localhost:4321/zaktecsolutions/
```

Production URL:

```text
https://zaktec.github.io/zaktecsolutions/
```

Astro configuration:

```js
site: 'https://zaktec.github.io'
base: '/zaktecsolutions'
```

All internal links must work with the `/zaktecsolutions/` base path. In Astro files, use:

```astro
import { withBase } from '../lib/utils';

<a href={withBase('/contact')}>Contact</a>
```

Do not add hard-coded root-relative links such as `href="/contact"`.

## Active routes

- `/` — homepage
- `/services` — complete service overview and FAQs
- `/ai-solutions` — AI assistants, automation and responsible use
- `/web-development` — new websites and website improvement
- `/education-technology` — course and learning systems
- `/projects` — MathsTutorHelp, TableTopLearning and HAiBL
- `/about` — company approach and leadership
- `/contact` — mail-based enquiry form
- `/privacy` — privacy information
- `/terms` — website terms
- `/cookies` — cookie information
- `/404.html` — not-found page

## Navigation

The main header contains only:

- Services
- Projects
- About
- Contact

The ZakTec Solutions wordmark links to the homepage.

Individual service pages remain available through homepage service cards, the Services page and footer. Do not add all service pages back to the main header unless specifically requested.

The mobile navigation uses native `<details>` and `<summary>` elements.

## Homepage structure

The intended homepage order is:

1. Header
2. Hero
3. Core services
4. Who we help
5. Selected projects
6. How we work
7. Why ZakTec Solutions
8. Final call to action
9. Footer

The hero headline is:

> AI, Web and Digital Solutions for Growing Organisations

The hero has two actions:

- Discuss Your Project → Contact
- View Our Services → Services

Do not add a large founder section to the homepage.

## Services

The three homepage service cards are:

1. Business Websites
2. AI and Automation
3. Education Technology

Digital Consultancy and Training appears on the full Services page and in the footer.

SEO and content support belong under Business Websites or Digital Consultancy. Do not position the business as a full marketing agency without evidence of that service capacity.

## Projects

The selected projects are:

- MathsTutorHelp
- TableTopLearning
- HAiBL

Current public project URLs and verified screenshots have not been supplied. Do not invent them. Homepage project actions link to anchored details on the Projects page.

Use accurate project labels. Do not imply that an internal, demonstration or personal project was completed for an external client.

## Contact form

The contact form uses a `mailto:` action. Submitting it opens the visitor's email application.

The website does not send or store form data itself.

Contact email:

```text
hello@zaktecsolutions.com
```

Do not describe the form as a server submission or database-backed contact system.

## Company and leadership

ZakTec Solutions is led by Sheraz Cheema.

Relevant experience includes:

- Web development
- Computer science education
- Digital learning systems

LinkedIn:

```text
https://www.linkedin.com/in/sherazcheema1/
```

Keep leadership information on the About page. Keep the homepage company-focused.

## Design system

Important active files:

- `src/styles/global.css` — colours, spacing, buttons, cards and focus styles
- `src/components/Logo.astro` — bordered text wordmark
- `src/components/Header.astro` — desktop and mobile navigation
- `src/components/Footer.astro` — footer groups and company tagline
- `src/components/PageIntro.astro` — internal page hero
- `src/components/ServiceCard.astro` — homepage service cards
- `src/components/ProjectCard.astro` — project summaries and actions
- `src/components/CallToAction.astro` — shared final CTA
- `src/layouts/main.astro` — metadata, skip link, header and footer

Keep reusable content in components instead of duplicating markup.

## Content rules

- Always use the exact name `ZakTec Solutions`.
- Use British English.
- Write for clients who may not be technical.
- Keep one idea per sentence.
- Prefer short headings and short paragraphs.
- Explain benefits before implementation details.
- Avoid repeating homepage statements on every service page.
- Do not add unsupported claims, statistics, testimonials or accreditations.
- Do not promise guaranteed business, search or AI outcomes.
- Keep legal pages accurate and do not weaken their important notices.

## Accessibility rules

Preserve:

- One H1 per route
- Logical H2 and H3 structure
- Skip-to-content link
- Global `:focus-visible` styling
- Keyboard-accessible mobile menu
- Descriptive link labels
- Accessible logo labels
- At least 44px touch targets
- Good contrast
- `prefers-reduced-motion` support

The Astro development toolbar may appear during `npm run dev`. Do not hide it with site CSS. It is absent from production builds.

## Archive

The `_archive/` folder contains earlier templates and replaced reference files.

- Do not import files from `_archive/` into the live site.
- Do not move the archive under `src/pages/`.
- Archived files must not create routes.
- Preserve the archive unless the user explicitly requests removal.

## Deployment

Deployment workflow:

```text
.github/workflows/deploy.yml
```

Pushes to `main` build and deploy the static site to GitHub Pages.

Do not remove the configured site URL, base path or sitemap integration.

## Required checks after code changes

Run checks appropriate to the change:

```bash
npm run build
```

For wider changes, also run:

```bash
npm run astro -- check
npm run preview
```

Verify:

- All routes build
- Internal links include the base path
- The header and footer links work
- There is one H1 per page
- Mobile navigation works
- There is no horizontal overflow
- The exact brand name is used
- No fake claims or placeholder client results were introduced
- The production preview does not include the Astro development toolbar

## Editing approach

When asked to change the site:

1. Inspect the relevant active files.
2. Preserve unrelated work.
3. Make the smallest coherent change.
4. Reuse existing components and styles.
5. Keep client-facing language simple.
6. Run the build.
7. Report what changed and any remaining decision that requires user input.
