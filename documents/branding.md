# ZakTec Solutions Brand Guide

## Official name

Always write the public company name exactly as:

**ZakTec Solutions**

Preserve the capital letters, spacing and spelling. Do not concatenate the words or use alternative capitalisation.

Machine identifiers such as the repository name, npm package name and domain may remain lowercase:

- Repository and package: `zaktecsolutions`
- Domain and email: `zaktecsolutions.com`
- Contact email: `hello@zaktecsolutions.com`

## Company description

ZakTec Solutions is a UK-based AI, web and digital consultancy. It supports:

- Small businesses
- Tutors and education providers
- Charities and community organisations
- Independent professionals

Its main services are:

- Business websites
- AI and automation
- Education technology
- Digital consultancy and training

## Positioning

The company should feel:

- Professional
- Modern
- Trustworthy
- Calm
- Practical
- Easy to understand
- Focused on useful technology

Present ZakTec Solutions as a focused consultancy. Do not suggest a large team, global scale, partnerships, awards, certifications or client results unless evidence has been supplied.

## Voice and writing

Use plain British English.

Content should be:

- Short and direct
- Friendly but professional
- Easy for a non-technical client to understand
- Focused on the client's need and next step
- Specific without making unsupported promises

Avoid:

- Repeating the same benefit across several sections
- Long technical explanations
- Buzzwords and exaggerated claims
- Unnecessary use of words such as “innovative,” “revolutionary” or “cutting-edge”
- Presenting AI as a replacement for human judgement
- Invented statistics, testimonials or project outcomes

Prefer:

- “We build websites, AI tools and education systems.”
- “Tell us what you want to improve.”
- “You will receive a written scope and quote before work starts.”

## Visible wordmark

The live header and footer use a text wordmark:

**ZakTec Solutions**

The name appears in white inside a clean purple border. There is no separate visible symbol beside it.

Implementation:

- Reusable component: `src/components/Logo.astro`
- Header use: compact bordered version
- Footer use: larger bordered version
- Logo links must use the accessible label `ZakTec Solutions home`

The favicon is a separate compact graphic because the full company name is not readable at browser-tab size.

## Colours

The site uses a dark, calm palette:

- Main background: near-black navy
- Cards: slightly lighter navy
- Primary accent: purple
- Main text: white
- Supporting text: light slate

Current CSS variables are defined in `src/styles/global.css`.

Key values include:

- Background: `hsl(228 35% 7%)`
- Primary purple: `hsl(265 82% 66%)`
- Focus ring: the same purple family
- Header background: `#0b0d18`
- Footer background: `#090b14`

Use purple as an accent. Avoid excessive glow, gradients or decorative effects.

## Typography and layout

- Use the existing system font stack and Tailwind typography.
- Keep headings bold and easy to scan.
- Body text should be at least approximately `1rem` with comfortable line height.
- Use generous but not excessive spacing.
- Keep cards concise, especially on mobile.
- Maintain strong contrast on the dark background.

## Accessibility

All brand and content changes must preserve:

- One H1 per page
- Sequential heading levels
- Visible keyboard focus
- Descriptive link text
- Minimum 44px touch targets
- High text and button contrast
- Reduced-motion support
- Accessible logo and navigation labels

Do not communicate meaning through colour alone.
