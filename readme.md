# Liz Alvarez Scudeller — Portfolio 2026

A static portfolio for a Technical Business Analyst and Full-Stack / Integration Developer working across business requirements, web applications, APIs, automation, reporting, and customer-facing systems.

The site is intentionally more than a gallery of interfaces. Its case studies explain the operational problem, requirements, architecture, business rules, validation, exception handling, tradeoffs, and review workflows behind each project.

## Purpose

The portfolio is designed to communicate a consistent professional story:

> Translate operational workflows into understandable requirements, then build the software, integration, automation, or reporting system that supports them.

Selected work covers:

- ADP ↔ ServiceTitan timesheet and payroll integration;
- Spotio ↔ ServiceTitan CRM integration;
- job-costing and operational reporting;
- an SEO AI and analytics platform;
- a WordPress pricing calculator; and
- a reusable website and local-SEO content system.

## Case Study Strategy

Each case study is organized around evidence and engineering decisions instead of unsupported marketing claims. Depending on the project, it documents:

- the business or customer problem;
- requirements and operational constraints;
- data flow or application architecture;
- matching, mapping, and business rules;
- validation, error handling, and reconciliation;
- the implemented contribution;
- accessibility and measurement considerations;
- outcome statements supported by available evidence; and
- limitations or next improvements.

The shared case-study data lives in `case-studies.js`. Individual pages provide focused metadata and select the relevant case by key, keeping structure and terminology consistent across the site.

## Public Portfolio vs. Confidential Work

Some case studies describe systems built in a professional environment. This public repository does **not** contain the private source code, credentials, API payloads, customer records, proprietary configuration, or internal datasets for those systems.

Professional projects are represented through sanitized architectural descriptions and purpose-built overview images. The content focuses on transferable engineering decisions—such as mapping, validation, deduplication, exception handling, and reconciliation—without reproducing confidential implementation details.

Public descriptions should still be reviewed whenever disclosure permissions or project circumstances change.

## Architecture

```text
Static HTML project pages
        ↓
Shared case-study content and rendering
        ↓
Responsive CSS and accessible JavaScript interactions
        ↓
Build validation and static dist/ output
        ↓
Netlify deployment
```

This is a deliberately small static system:

- semantic HTML provides the document structure;
- CSS owns layout, responsive behavior, and visual presentation;
- vanilla JavaScript renders project data and interactive filtering;
- a Node.js build script validates required assets, local links, and encoding;
- Netlify serves the generated `dist/` directory with security and caching headers.

## Technology

- HTML5
- CSS3
- JavaScript
- Node.js build tooling
- Netlify
- JSON-LD structured data
- Open Graph metadata

There are no runtime npm dependencies.

## Repository Structure

```text
.
├── index.html               # Main portfolio page
├── projects/                # Individual case-study entry pages
├── case-studies.js          # Shared case-study content and rendering
├── script.js                # Navigation, filtering, and interactions
├── assets/
│   ├── css/                 # Global and case-study styles
│   ├── docs/                # Public résumé
│   └── images/              # Social preview and sanitized visuals
├── build.mjs                # Validation and production build
├── netlify.toml             # Hosting, headers, and cache policy
├── robots.txt
└── sitemap.xml
```

## Accessibility

Accessibility decisions in the current implementation include:

- a skip link to the main content;
- semantic landmarks and headings;
- an accessible primary-navigation label;
- keyboard-operable native links, buttons, and controls;
- `aria-expanded` and `aria-controls` for the mobile navigation;
- text alternatives for project imagery;
- visible text in addition to color for statuses and project meaning;
- `aria-live` for the changing project preview; and
- responsive layouts intended to preserve content hierarchy.

The case studies also document accessibility considerations that belong to the described systems without claiming that every private implementation has been independently audited.

## SEO and Content Decisions

- Unique titles and descriptions identify the homepage and case-study pages.
- Canonical URLs point to the production domain.
- Open Graph metadata and a social-preview image support link sharing.
- JSON-LD describes the portfolio owner as a `Person`.
- `robots.txt` references the XML sitemap.
- The sitemap lists the public case-study routes.
- Case-study headings and copy use business language alongside relevant technical terms.
- Claims avoid unsupported performance metrics and clearly label prototypes or work in development.

## Local Development

### Prerequisites

- Node.js 20 or newer

### Install

```bash
npm install
```

### Start a local static server

```bash
npm run dev
```

### Validate the site

```bash
npm run check
```

The check verifies:

- required pages and assets exist;
- relative links and script/style references resolve;
- tracked HTML and JavaScript files do not contain known encoding-corruption markers; and
- the expected portfolio routes are present.

### Lint JavaScript syntax

```bash
npm run lint
```

### Build production output

```bash
npm run build
```

The build creates `dist/`, which is excluded from Git.

## Deployment

The site is configured for Netlify:

```text
Build command: npm run build
Publish directory: dist
Node version: 20
```

`netlify.toml` also configures:

- `X-Content-Type-Options: nosniff`;
- a strict-origin referrer policy;
- disabled camera, microphone, and geolocation permissions; and
- long-lived immutable caching for versioned static assets.

No runtime environment variables are required by the public portfolio.

For a manual Netlify deployment, run `npm run build` and upload the contents of `dist/`.

## Content Maintenance

When adding or updating a case study:

1. Confirm that the material is approved for public disclosure.
2. Remove customer, employee, credential, payload, and proprietary-data details.
3. Add or update the structured entry in `case-studies.js`.
4. Add the corresponding project page and metadata.
5. Use only public or purpose-built sanitized images.
6. Update `sitemap.xml` when the public route set changes.
7. Run `npm run check` and `npm run build` before deployment.

## Tradeoffs

- Shared case-study content is stored in JavaScript rather than a CMS or static-site generator.
- Individual project pages require manual route and sitemap maintenance.
- Build validation checks structure and references but is not a full accessibility, SEO, or browser-compatibility audit.
- The static architecture favors clarity and low operational overhead over component-level reuse.
- Public case studies explain architecture without providing runnable versions of confidential professional systems.

## What I Built

I designed and implemented the portfolio structure, responsive interface, case-study system, static build validation, deployment configuration, SEO metadata, accessibility behavior, and the sanitized presentation of professional integration and automation work.
