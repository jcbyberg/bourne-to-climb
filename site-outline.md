# Bourne To Climb Tree Service - Website Architecture Outline

## Project Overview
**Business**: Bourne To Climb Tree Service (BTC Trees)  
**Owner**: Dustin Bourne  
**Location**: Oshawa, Clarington, Courtice (Durham Region, ON)  
**Phone**: 905-449-9019  
**Address**: 76 Cromwell Ave, Oshawa, ON L1J 4T6

---

## Tech Stack

### Core
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**

### UI & Components
- **Radix UI** primitives (Dialog, Dropdown, Accordion, Tabs)
- **Shadcn/ui** (pre-styled Radix components)
- **Lucide React** (icons)

### Animation
- **Framer Motion** (complex animations, page transitions)
- **Auto Animate** (simple DOM animations)
- **React Intersection Observer** (scroll-triggered animations)

### Forms & Email
- **React Hook Form** (form handling)
- **Zod** (validation)
- **Resend API** (email sending)

### Utilities
- **clsx / cn** (className management)
- **tailwind-merge** (Tailwind class merging)

---

## Complete File Structure

```
bourne-to-climb/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts              # Resend email handler
│   │
│   ├── (pages)/
│   │   ├── about/
│   │   │   └── page.tsx              # About Dustin & Business
│   │   ├── services/
│   │   │   └── page.tsx              # Detailed services page
│   │   ├── gallery/
│   │   │   └── page.tsx              # Work photos gallery
│   │   ├── reviews/
│   │   │   └── page.tsx              # Customer testimonials
│   │   └── contact/
│   │       └── page.tsx              # Contact form & info
│   │
│   ├── components/
│   │   ├── ui/                       # Shadcn components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   └── dropdown-menu.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── header.tsx            # Sticky nav with blur
│   │   │   ├── footer.tsx            # Contact, social links
│   │   │   ├── mobile-menu.tsx       # Hamburger menu
│   │   │   ├── container.tsx         # Max-width wrapper
│   │   │   └── section.tsx           # Consistent spacing
│   │   │
│   │   └── sections/
│   │       ├── hero.tsx              # Animated hero section
│   │       ├── services.tsx          # Service cards grid
│   │       ├── service-area.tsx      # Coverage map/list
│   │       ├── gallery.tsx           # Photo grid w/ lightbox
│   │       ├── reviews.tsx           # Testimonial cards
│   │       ├── contact-form.tsx      # Form with validation
│   │       ├── cta-section.tsx       # Call-to-action blocks
│   │       └── stats.tsx             # Animated statistics
│   │
│   ├── lib/
│   │   ├── utils.ts                  # cn() utility, helpers
│   │   ├── validations.ts            # Zod schemas
│   │   ├── resend.ts                 # Resend configuration
│   │   └── animations.ts             # Framer Motion variants
│   │
│   ├── styles/
│   │   └── globals.css               # Global styles
│   │
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── loading.tsx                   # Loading states
│   ├── error.tsx                     # Error boundaries
│   └── not-found.tsx                 # 404 page
│
├── public/
│   ├── images/
│   │   ├── hero/                     # Hero backgrounds
│   │   ├── services/                 # Service icons/photos
│   │   ├── gallery/                  # Work photos
│   │   └── team/                     # Dustin's photo
│   ├── favicon.ico
│   └── logo.svg
│
├── .env.local                        # Environment variables
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Page Architecture

### 1. Homepage (`/`)

#### Hero Section
```typescript
<Hero>
  - Animated gradient background (purple-blue)
  - H1: "Professional Tree Care in Oshawa & Clarington"
  - Subhead: "Owner-operated. Safe removals, precise pruning, thorough clean-ups"
  - CTA Buttons:
    • "Get Free Quote" (primary) → /contact
    • "View Services" (secondary) → /services
  - Scroll indicator animation
  - Tap-to-call: 905-449-9019
</Hero>
```

#### Services Overview
```typescript
<Services>
  Grid: 2x2 mobile → 4x1 desktop
  
  Card 1: Tree Removal
  - Icon: TreeDeciduous
  - Safe rigging, tight-space dismantles
  - Storm-damaged tree removal
  - Sectional dismantling
  
  Card 2: Pruning & Hedge Trimming
  - Icon: Scissors
  - Canopy shaping
  - Deadwood removal
  - Clearance from roofs/driveways
  
  Card 3: Stump Grinding
  - Icon: Drill
  - Flush stumps
  - Prep for sod/gardens
  - Multiple stump removal
  
  Card 4: Storm/Windfall Cleanup
  - Icon: Wind
  - Emergency response
  - Debris removal
  - Safety assessments
  
  Animations: Fade-in on scroll, hover lift + shadow
</Services>
```

#### Service Area
```typescript
<ServiceArea>
  - Heading: "Proudly Serving Durham Region"
  - Primary Areas: Oshawa, Courtice, Clarington
  - Map or location pins
  - "24/7 Emergency Service Available"
</ServiceArea>
```

#### Gallery Preview
```typescript
<GalleryPreview>
  - 6-image grid from Instagram
  - Hover effects (scale, overlay)
  - Lightbox on click (Radix Dialog)
  - CTA: "View More on Instagram" → @123_btc
</GalleryPreview>
```

#### Reviews Section
```typescript
<Reviews>
  - Heading: "What Our Customers Say"
  - 3 testimonial cards:
    1. Reddit: "Honest and friendly" (r/Oshawa)
    2. Industry Oversight: Multi-year pruning/landscaping
    3. whodoyou: 8 stumps removed referral
  - Star ratings (5/5 placeholders)
  - CTA: "Leave Us a Review"
</Reviews>
```

#### Final CTA
```typescript
<CtaSection>
  - Heading: "Ready to Transform Your Property?"
  - Subhead: "Get your free, no-obligation quote today"
  - Button: "Call Now: 905-449-9019"
  - Secondary: "Request Quote Online"
</CtaSection>
```

---

### 2. About Page (`/about`)

```typescript
<AboutPage>
  <HeroSection>
    - Photo: Dustin Bourne
    - Heading: "Meet the Owner"
    - Subhead: "Dustin Bourne – Local, Licensed & Experienced"
  </HeroSection>
  
  <StorySection>
    - Owner-operated business
    - Safety-first approach
    - Clean-up and respect for neighbors
    - Local to Oshawa emphasis
    - Link to LinkedIn profile
  </StorySection>
  
  <StatsSection> (Animated on scroll)
    - Years in Business
    - Trees Removed
    - Happy Customers
    - Service Area (sq km)
  </StatsSection>
  
  <CertificationsSection>
    - ISA Certification (if available)
    - WSIB Coverage
    - Insurance Information
    - "Certified & Insured"
  </CertificationsSection>
  
  <WhyChooseSection>
    - Local expertise
    - Professional equipment
    - Thorough clean-up
    - Competitive pricing
    - Emergency services
  </WhyChooseSection>
</AboutPage>
```

---

### 3. Services Page (`/services`)

```typescript
<ServicesPage>
  <ServiceHero>
    - Heading: "Complete Tree Care Solutions"
    - Subhead: "Professional services for residential & commercial properties"
  </ServiceHero>
  
  <ServiceDetail id="tree-removal">
    - Icon & Title
    - Full description
    - Process breakdown:
      1. Assessment & quote
      2. Safety setup
      3. Sectional removal
      4. Debris cleanup
      5. Site restoration
    - Equipment used
    - Before/After examples
    - CTA: "Get Quote for Removal"
  </ServiceDetail>
  
  <ServiceDetail id="pruning">
    - Similar structure for Pruning & Hedges
  </ServiceDetail>
  
  <ServiceDetail id="stump-grinding">
    - Similar structure for Stump Grinding
  </ServiceDetail>
  
  <ServiceDetail id="emergency">
    - Similar structure for Emergency Services
  </ServiceDetail>
  
  <FaqSection> (Radix Accordion)
    - How much does tree removal cost?
    - Do you have insurance?
    - How long does a typical job take?
    - Do you clean up debris?
    - Can you work near power lines?
    - Do you offer emergency services?
  </FaqSection>
</ServicesPage>
```

---

### 4. Gallery Page (`/gallery`)

```typescript
<GalleryPage>
  <GalleryHero>
    - Heading: "Our Work"
    - Subhead: "See the quality and precision we bring to every job"
  </GalleryHero>
  
  <GalleryGrid>
    - Masonry layout
    - Categories filter:
      • All
      • Tree Removal
      • Pruning
      • Stump Grinding
      • Before/After
    - Images from Instagram (@123_btc)
    - Lightbox viewer (Radix Dialog)
    - Image metadata (location, service type)
  </GalleryGrid>
  
  <SocialCTA>
    - "Follow us on Instagram for more"
    - Instagram embed widget
    - YouTube channel link (BTC trees Bourne to climb)
  </SocialCTA>
</GalleryPage>
```

---

### 5. Reviews Page (`/reviews`)

```typescript
<ReviewsPage>
  <ReviewHero>
    - Heading: "Customer Testimonials"
    - Overall rating: 5.0 / 5.0 (based on available reviews)
  </ReviewHero>
  
  <ReviewGrid>
    - Reddit recommendations (r/Oshawa)
    - Industry Oversight reviews
    - whodoyou testimonials
    - Each card includes:
      • Customer name/initial
      • Rating (stars)
      • Date
      • Service type
      • Review text
      • Location (if available)
  </ReviewGrid>
  
  <LeaveReviewSection>
    - "Had a great experience?"
    - Links to:
      • Google Reviews
      • Facebook
      • Submit testimonial form
  </LeaveReviewSection>
</ReviewsPage>
```

---

### 6. Contact Page (`/contact`)

```typescript
<ContactPage>
  <ContactHero>
    - Heading: "Get Your Free Quote"
    - Subhead: "We respond within 24 hours"
  </ContactHero>
  
  <TwoColumnLayout>
    <LeftColumn>
      <ContactForm> (React Hook Form + Zod)
        Fields:
        - Name* (min 2 chars)
        - Email* (valid format)
        - Phone (optional, formatted)
        - Service* (dropdown):
          • Tree Removal
          • Pruning & Trimming
          • Stump Grinding
          • Emergency Service
          • Other
        - Message* (min 10 chars)
        - Photo Upload (optional, tree photos)
        
        - Submit button with loading state
        - Success toast notification
        - Error handling
      </ContactForm>
    </LeftColumn>
    
    <RightColumn>
      <ContactInfo>
        - Phone: 905-449-9019 (tap-to-call)
        - Address: 76 Cromwell Ave, Oshawa, ON L1J 4T6
        - Email: [if available]
        - Hours: By appointment / 24/7 Emergency
        - Payment: Cash, Cheque
      </ContactInfo>
      
      <MapEmbed>
        - Google Maps embed (76 Cromwell Ave)
        - Service radius indicator
      </MapEmbed>
      
      <SocialLinks>
        - Instagram: @123_btc
        - Facebook: facebook.com/bourneto.climb
        - YouTube: BTC trees Bourne to climb
        - LinkedIn: Dustin Bourne
      </SocialLinks>
    </RightColumn>
  </TwoColumnLayout>
</ContactPage>
```

---

## Component Details

### Navigation Component

```typescript
// components/layout/header.tsx

<Header>
  Desktop Navigation:
  - Logo (left)
  - Menu items:
    • Home
    • Services
    • Gallery
    • About
    • Reviews
    • Contact
  - Phone: 905-449-9019 (button, right)
  - "Get Quote" CTA (primary button)
  
  Mobile Navigation:
  - Logo
  - Hamburger menu (Radix Dialog)
  - Slide-in menu with navigation
  - Tap-to-call button
  
  Scroll Behavior:
  - Starts transparent
  - Becomes solid with blur on scroll
  - Smooth scroll to sections
  - Active link indicators
</Header>
```

### Footer Component

```typescript
// components/layout/footer.tsx

<Footer>
  <ThreeColumnLayout>
    <Column1 - Company>
      - Logo
      - Tagline: "Professional Tree Care in Durham Region"
      - Certifications badges
    </Column1>
    
    <Column2 - Quick Links>
      - All navigation links
      - Privacy Policy
      - Terms of Service
    </Column2>
    
    <Column3 - Contact>
      - Phone: 905-449-9019
      - Address: 76 Cromwell Ave, Oshawa
      - Email (if available)
      - Social media icons
    </Column3>
  </ThreeColumnLayout>
  
  <BottomBar>
    - Copyright: © 2025 Bourne To Climb Tree Service
    - "Serving Oshawa, Courtice & Clarington"
  </BottomBar>
</Footer>
```

---

## Animation Specifications

### Framer Motion Variants

```typescript
// lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

export const heroTextStagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }
}
```

### Service Card Hover Effect

```typescript
// components/sections/services.tsx

<motion.div
  initial="initial"
  whileHover="hover"
  variants={{
    initial: { y: 0 },
    hover: { 
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
    }
  }}
  className="relative overflow-hidden rounded-xl border border-transparent hover:border-gradient"
>
  {/* Gradient border on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity" />
  
  {/* Card content */}
</motion.div>
```

### Scroll-Triggered Animations

```typescript
// Use React Intersection Observer

import { useInView } from 'react-intersection-observer'

const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
})

<motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeInUp}
>
  {/* Content */}
</motion.div>
```

---

## API Routes

### Email Handler

```typescript
// app/api/send-email/route.ts

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(['removal', 'pruning', 'grinding', 'emergency', 'other']),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)
    
    const emailHtml = `
      <h2>New Quote Request from ${data.name}</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
    
    await resend.emails.send({
      from: 'quotes@bournetoclimb.com',
      to: 'dustin@bournetoclimb.com', // Replace with actual email
      subject: `New Quote Request: ${data.service}`,
      html: emailHtml,
    })
    
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

---

## Form Validation Schema

```typescript
// lib/validations.ts

import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  
  email: z.string()
    .email("Please enter a valid email address"),
  
  phone: z.string()
    .regex(/^[\d\s\-\(\)]+$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal('')),
  
  service: z.enum([
    'removal',
    'pruning',
    'grinding',
    'emergency',
    'other'
  ], {
    required_error: "Please select a service"
  }),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
  
  photos: z.instanceof(FileList).optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (tree/nature theme)
        'tree-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'earth-brown': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

---

## Environment Variables

```bash
# .env.local

# Resend API
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Bourne To Climb Tree Service"

# Contact Information
NEXT_PUBLIC_PHONE=905-449-9019
NEXT_PUBLIC_EMAIL=contact@bournetoclimb.com
NEXT_PUBLIC_ADDRESS="76 Cromwell Ave, Oshawa, ON L1J 4T6"

# Social Media
NEXT_PUBLIC_INSTAGRAM=https://www.instagram.com/123_btc
NEXT_PUBLIC_FACEBOOK=https://www.facebook.com/bourneto.climb
NEXT_PUBLIC_YOUTUBE=https://www.youtube.com/@BTCtreesBournetoclimb
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/dustin-bourne

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## SEO Strategy

### Homepage Metadata

```typescript
// app/page.tsx

export const metadata = {
  title: "Bourne To Climb Tree Service | Professional Tree Care in Oshawa, Clarington & Courtice",
  description: "Expert tree removal, pruning, and stump grinding services in Durham Region. Owner-operated, licensed & insured. Call 905-449-9019 for a free quote.",
  keywords: [
    "tree service oshawa",
    "tree removal clarington",
    "arborist oshawa",
    "stump grinding oshawa",
    "tree pruning courtice",
    "emergency tree removal durham region",
    "tree care oshawa",
  ],
  openGraph: {
    title: "Bourne To Climb Tree Service",
    description: "Professional tree care in Oshawa, Clarington & Courtice",
    images: ['/og-image.jpg'],
  },
}
```

### H2 Headers with Local Keywords

- "Tree Removal Services in Oshawa & Clarington"
- "Professional Arborist Serving Durham Region"
- "Stump Grinding Specialists in Oshawa"
- "Emergency Tree Service in Clarington & Courtice"

### Structured Data (LocalBusiness Schema)

```typescript
// app/layout.tsx

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bourne To Climb Tree Service",
  "image": "https://bournetoclimb.com/logo.jpg",
  "description": "Professional tree removal, pruning, and stump grinding",
  "@id": "https://bournetoclimb.com",
  "url": "https://bournetoclimb.com",
  "telephone": "905-449-9019",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "76 Cromwell Ave",
    "addressLocality": "Oshawa",
    "addressRegion": "ON",
    "postalCode": "L1J 4T6",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.9,
    "longitude": -78.85
  },
  "areaServed": [
    "Oshawa",
    "Clarington",
    "Courtice",
    "Durham Region"
  ],
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-24:00"
}
```

---

## Deployment Checklist

### Pre-Launch
- [ ] All environment variables configured
- [ ] Real content added (no Lorem Ipsum)
- [ ] Photos from Instagram (with permission)
- [ ] Contact form tested and working
- [ ] All links functional
- [ ] Mobile responsive on all pages
- [ ] SEO metadata complete
- [ ] Analytics installed
- [ ] Performance optimized (Lighthouse score >90)
- [ ] Accessibility audit passed (WCAG AA)

### Launch Day
- [ ] Deploy to Vercel
- [ ] Custom domain connected
- [ ] SSL certificate active
- [ ] Submit sitemap to Google Search Console
- [ ] Test email notifications
- [ ] Verify all social links
- [ ] Monitor error logs

### Post-Launch
- [ ] Set up Google My Business
- [ ] Request customer reviews
- [ ] Monitor contact form submissions
- [ ] Track analytics & conversions
- [ ] Regular content updates

---

## Priority Development Order

### Week 1: Foundation (Phases 1-3)
**Days 1-2**: Setup & Design System
- Initialize project
- Install dependencies
- Configure Tailwind theme
- Build Header/Footer

**Days 3-5**: Homepage Core
- Hero section with animations
- Services grid
- Gallery preview
- Basic content

### Week 2: Features (Phases 4-5)
**Days 6-8**: Additional Pages
- About page
- Services detail page
- Gallery page
- Reviews page

**Days 9-10**: Contact & Email
- Contact form with validation
- Resend API integration
- Testing email flow

### Week 3: Polish (Phases 6-7)
**Days 11-13**: Animations & Interactions
- Framer Motion implementations
- Scroll-triggered animations
- Hover effects
- Interactive elements

**Days 14-15**: Final Polish & Launch
- SEO optimization
- Performance tuning
- Content finalization
- Deployment

---

## Success Metrics

### Technical KPIs
- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Lighthouse SEO: >95
- Time to Interactive: <3s
- First Contentful Paint: <1.5s

### Business KPIs
- Contact form submissions
- Phone call clicks
- Instagram click-through
- Average session duration
- Bounce rate <50%

---

## Maintenance Plan

### Monthly Tasks
- Review contact form submissions
- Update gallery with new work photos
- Check for broken links
- Monitor site performance
- Update service information if needed

### Quarterly Tasks
- Content refresh
- Add new customer reviews
- SEO keyword analysis
- Analytics review
- Backup site files

---

## Notes & Considerations

1. **Certifications**: Confirm ISA certification number, WSIB, insurance details before publishing
2. **Photos**: Get explicit permission from Instagram before embedding
3. **Email**: Set up dedicated business email before launch
4. **24/7 Claims**: Verify emergency availability before promoting
5. **Pricing**: Consider adding "Starting at $X" or request-quote CTA instead of specific prices
6. **Service Area**: Clearly define coverage radius (how far from Oshawa?)
7. **Booking**: Consider adding online booking/scheduling in Phase 2
8. **Reviews**: Set up Google My Business and actively collect reviews post-launch

---

**Last Updated**: Initial Draft  
**Status**: Ready for Development  
**Estimated Completion**: 3 weeks from start
