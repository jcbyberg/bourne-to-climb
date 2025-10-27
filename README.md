# Bourne To Climb Tree Service Website

Modern marketing site for Bourne To Climb Tree Service built with Next.js 16, the App Router, and a component-driven design system powered by Tailwind CSS, Radix UI, and shadcn/ui.

## Tech Stack
- Next.js 16 (App Router, React Server Components)
- TypeScript
- Tailwind CSS 4 with shadcn/ui and Radix primitives
- Framer Motion & @formkit/auto-animate for animation
- React Hook Form + Zod for form handling and validation
- Resend API for email delivery (serverless route at `/api/send-email`)

## Repository Layout
```
app/                 # Application routes, layouts, and UI sections
  components/        # Layout primitives, sections, and shadcn/ui components
  (pages)/*          # Static pages: about, services, gallery, reviews, contact, etc.
  api/send-email/    # POST handler that relays form submissions via Resend
  lib/               # Shared utilities, validation, and animation variants
public/              # Static assets and image placeholders
styles/              # Global styles (tailwind imports live in app/globals.css)
docs/                # Project briefing (site outline, component map, sitemap, setup notes)
```

Briefing documents now live under `docs/`:
- `docs/README-docs.md` – index of planning documents
- `docs/site-outline.md` – architecture & content breakdown
- `docs/component-map-quickstart.md` – component relationships and quick starts
- `docs/sitemap-user-journey.md` – navigation and user journeys
- `docs/setup.sh` – original automated setup script (retained for reference)

## Getting Started
```bash
npm install
npm run dev
```
App runs on [http://localhost:3000](http://localhost:3000).

### Useful scripts
```bash
npm run lint    # ESLint
npm run build   # Production build check (requires no optional env vars)
```

## Environment Variables
Copy `.env.example` to `.env.local` and populate as needed:
- `RESEND_API_KEY` – required to enable the contact form email handler
- `RESEND_FROM_EMAIL` / `RESEND_TO_EMAIL` – optional overrides
- `NEXT_PUBLIC_*` keys surface business contact details to the UI

Without `RESEND_API_KEY` the API route logs a warning and skips email delivery, allowing local development without credentials.

## Contact Form + Email
The contact page (`/contact`) uses React Hook Form, Zod validation, and toast notifications. Submissions POST to `/api/send-email`, which forwards details (and optional image attachments) via Resend. Update the environment variables above before deploying.

## Next Steps
- Replace placeholder imagery in `public/images/` with branded assets
- Review copy and CTA links with the client team
- Configure analytics and deploy via Vercel or preferred host
