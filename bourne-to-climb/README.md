# Bourne To Climb Tree Service Website

This directory contains the Next.js 14 project for Bourne To Climb Tree Service. It follows the architecture outlined in the documentation package and ships with ready-to-use components, animations, and content tailored for the Durham Region business.

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file using the provided `.env.example` template before running the development server. At minimum you should supply a `RESEND_API_KEY` and `RESEND_TO_EMAIL` so contact form submissions can be delivered.

## Key Features

- App Router with fully typed pages (`/`, `/about`, `/services`, `/gallery`, `/reviews`, `/contact`)
- Framer Motion animations for hero, services, stats, and gallery sections
- React Hook Form + Zod contact form integrated with a Resend email API route
- Responsive header/footer, mobile navigation dialog, and tailored CTA placement
- Tailwind CSS theming with custom Durham Region-inspired colour palette
- Radix UI based accordions, tabs, dialogs, and toast system

Refer to the `Documentation/` folder at the repository root for the full architecture outline, UX maps, and development playbook.
