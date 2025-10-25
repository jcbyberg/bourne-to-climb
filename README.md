# Bourne To Climb Tree Service Website

This repository now contains the production-ready Next.js 14 implementation for the Bourne To Climb Tree Service marketing site alongside its original planning documentation.

## Repository Layout

- [`Documentation/`](Documentation) – The original architecture and UX documentation bundle. Refer to this for deep dives into the component map, user journeys, and specs.
- [`bourne-to-climb/`](bourne-to-climb) – The full Next.js project including pages, components, styling, and API route for the contact form.

## Getting Started

1. Install dependencies in the Next.js project directory:
   ```bash
   cd bourne-to-climb
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Populate `RESEND_API_KEY` (and optionally `RESEND_TO_EMAIL`) so contact form submissions can be delivered through Resend.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to explore the site.

## Highlights

- Fully designed pages for Home, About, Services, Gallery, Reviews, and Contact.
- Responsive layout with animated hero, service cards, gallery preview, testimonials, and CTAs.
- React Hook Form + Zod contact form wired to a Resend-powered email API route.
- Radix UI + Tailwind CSS component library (buttons, cards, accordions, tabs, dialogs, toast notifications).
- Structured data, SEO metadata, and Durham Region-focused copy ready for launch.

Refer to the documentation bundle for deeper architectural context or future enhancements.
