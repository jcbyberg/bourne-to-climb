# Bourne To Climb - Component Map & Quick Start Guide

## Visual Component Hierarchy

```
app/
│
├── layout.tsx (Root Layout)
│   ├── <Header />
│   │   ├── <Logo />
│   │   ├── <DesktopNav />
│   │   │   └── <NavLink />
│   │   ├── <MobileMenu />
│   │   │   └── <Dialog /> (Radix)
│   │   └── <CallButton />
│   │
│   ├── {children} (Page Content)
│   │
│   └── <Footer />
│       ├── <CompanyInfo />
│       ├── <QuickLinks />
│       ├── <ContactInfo />
│       └── <SocialLinks />
│
├── page.tsx (Homepage)
│   ├── <Hero />
│   │   ├── <AnimatedBackground />
│   │   ├── <HeroTitle /> (Framer Motion)
│   │   ├── <HeroSubtitle />
│   │   └── <CtaButtons />
│   │
│   ├── <ServicesSection />
│   │   ├── <SectionHeader />
│   │   └── <ServiceCard /> × 4
│   │       ├── <LucideIcon />
│   │       ├── <CardTitle />
│   │       ├── <BulletList />
│   │       └── <LearnMoreLink />
│   │
│   ├── <ServiceAreaSection />
│   │   ├── <AreaMap />
│   │   └── <LocationList />
│   │
│   ├── <GalleryPreview />
│   │   ├── <ImageGrid />
│   │   │   └── <GalleryImage /> × 6
│   │   └── <LightboxDialog /> (Radix)
│   │
│   ├── <ReviewsSection />
│   │   ├── <ReviewCard /> × 3
│   │   │   ├── <StarRating />
│   │   │   ├── <ReviewText />
│   │   │   └── <ReviewerInfo />
│   │   └── <ReviewCta />
│   │
│   └── <FinalCtaSection />
│       ├── <CtaHeading />
│       └── <CtaButtons />
│
├── about/page.tsx
│   ├── <AboutHero />
│   │   ├── <OwnerPhoto />
│   │   └── <HeroText />
│   │
│   ├── <StorySection />
│   │   └── <Paragraph />
│   │
│   ├── <AnimatedStats />
│   │   └── <StatCard /> × 4
│   │       └── <CountUpAnimation />
│   │
│   ├── <CertificationsSection />
│   │   └── <BadgeGrid />
│   │
│   └── <WhyChooseSection />
│       └── <FeatureList />
│
├── services/page.tsx
│   ├── <ServicesHero />
│   │
│   ├── <ServiceDetail /> × 4
│   │   ├── <ServiceIcon />
│   │   ├── <ServiceDescription />
│   │   ├── <ProcessList />
│   │   ├── <EquipmentInfo />
│   │   ├── <BeforeAfter />
│   │   └── <ServiceCta />
│   │
│   └── <FaqSection />
│       └── <Accordion /> (Radix)
│           └── <AccordionItem /> × 6
│
├── gallery/page.tsx
│   ├── <GalleryHero />
│   │
│   ├── <FilterTabs /> (Radix)
│   │   └── <TabsTrigger /> × 5
│   │
│   ├── <MasonryGrid />
│   │   └── <GalleryImage /> × N
│   │       └── (click) → <Lightbox />
│   │
│   └── <SocialCta />
│       ├── <InstagramEmbed />
│       └── <YouTubeLink />
│
├── reviews/page.tsx
│   ├── <ReviewsHero />
│   │   └── <OverallRating />
│   │
│   ├── <ReviewGrid />
│   │   └── <ReviewCard /> × N
│   │
│   └── <LeaveReviewSection />
│       ├── <PlatformLinks />
│       └── <TestimonialForm />
│
└── contact/page.tsx
    ├── <ContactHero />
    │
    └── <TwoColumnLayout />
        │
        ├── <ContactForm /> (Left)
        │   ├── <Input /> (Shadcn) × 5
        │   ├── <Select /> (Shadcn)
        │   ├── <Textarea /> (Shadcn)
        │   ├── <FileUpload />
        │   ├── <SubmitButton />
        │   │   └── <LoadingSpinner />
        │   └── <Toast /> (Radix)
        │
        └── (Right Column)
            ├── <ContactInfo />
            │   ├── <PhoneDisplay />
            │   ├── <AddressDisplay />
            │   └── <HoursDisplay />
            │
            ├── <MapEmbed />
            │
            └── <SocialLinks />
```

---

## Component Dependencies Map

### Core UI Components (Shadcn)
```
ui/
├── button.tsx          → Used everywhere
├── card.tsx            → Services, Reviews, Gallery
├── input.tsx           → Contact Form
├── label.tsx           → Contact Form
├── textarea.tsx        → Contact Form
├── select.tsx          → Contact Form (service dropdown)
├── dialog.tsx          → Mobile Menu, Gallery Lightbox
├── accordion.tsx       → Services FAQ
├── tabs.tsx            → Gallery Filters
├── toast.tsx           → Form Success/Error
└── dropdown-menu.tsx   → Mobile Navigation
```

### Animation Components
```
Framer Motion:
├── Hero text stagger
├── Service cards (fade in on scroll)
├── Page transitions
├── Hover effects (buttons, cards, images)
└── Stats counter animation

Auto Animate:
├── Mobile menu open/close
├── Accordion expand/collapse
├── Form error messages
└── Toast notifications
```

### Form Components
```
<ContactForm>
└── Uses:
    ├── React Hook Form (form state)
    ├── Zod (validation schema)
    ├── Shadcn Input/Select/Textarea
    ├── Toast (notifications)
    └── Resend API (email sending)
```

---

## Installation Commands

### 1. Initialize Project
```bash
npx create-next-app@latest bourne-to-climb \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd bourne-to-climb
```

### 2. Install Core Dependencies
```bash
npm install framer-motion auto-animate lucide-react clsx tailwind-merge
```

### 3. Install Form & Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

### 4. Install Email Handler
```bash
npm install resend
```

### 5. Install Radix UI Primitives
```bash
npm install @radix-ui/react-dialog \
            @radix-ui/react-dropdown-menu \
            @radix-ui/react-accordion \
            @radix-ui/react-tabs \
            @radix-ui/react-toast \
            @radix-ui/react-label \
            @radix-ui/react-select
```

### 6. Install Shadcn/ui
```bash
npx shadcn-ui@latest init

# Add components as needed:
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add toast
```

### 7. Install Additional Utilities
```bash
npm install react-intersection-observer  # Scroll animations
npm install @tailwindcss/forms @tailwindcss/typography
```

---

## Quick Start Development Workflow

### Step 1: Setup Foundation (Day 1)
```bash
# After installation, create base structure:

1. Create folder structure:
   mkdir -p app/components/{ui,layout,sections}
   mkdir -p app/lib
   mkdir -p public/images/{hero,services,gallery,team}

2. Configure Tailwind:
   # Edit tailwind.config.ts with custom colors

3. Create environment file:
   cp .env.example .env.local
   # Add RESEND_API_KEY

4. Create utility files:
   touch app/lib/utils.ts
   touch app/lib/validations.ts
   touch app/lib/animations.ts
```

### Step 2: Build Layout Components (Day 1-2)
```typescript
// Order of creation:

1. app/lib/utils.ts           // cn() utility function
2. app/components/layout/header.tsx
3. app/components/layout/footer.tsx
4. app/components/layout/mobile-menu.tsx
5. app/layout.tsx              // Wire up Header/Footer
```

### Step 3: Homepage Hero (Day 2-3)
```typescript
// Build in this order:

1. app/lib/animations.ts       // Framer Motion variants
2. app/components/sections/hero.tsx
3. Test animations work
4. Add to app/page.tsx
```

### Step 4: Services Section (Day 3)
```typescript
1. Create service data:
   // app/lib/data.ts
   export const services = [...]

2. Build component:
   // app/components/sections/services.tsx
   - Map over services array
   - Add Lucide icons
   - Implement scroll animations

3. Add to homepage
```

### Step 5: Contact Form (Day 4-5)
```typescript
// Most complex component - build incrementally:

1. Create validation schema:
   // app/lib/validations.ts
   export const contactFormSchema = z.object({...})

2. Create API route:
   // app/api/send-email/route.ts
   - Test with console.log first
   - Add Resend later

3. Build form component:
   // app/components/sections/contact-form.tsx
   - Start with basic inputs
   - Add validation
   - Add loading states
   - Add toast notifications

4. Test thoroughly!
```

### Step 6: Other Pages (Day 6-8)
```bash
# Create pages in order of importance:

1. app/contact/page.tsx        # Contact page with form
2. app/services/page.tsx       # Detailed services
3. app/about/page.tsx          # About Dustin
4. app/gallery/page.tsx        # Work photos
5. app/reviews/page.tsx        # Testimonials (optional)
```

### Step 7: Animations & Polish (Day 9-11)
```typescript
1. Add Framer Motion to all sections
2. Implement scroll-triggered animations:
   - Use react-intersection-observer
   - Add to services, gallery, reviews

3. Add hover effects:
   - Service cards
   - Gallery images
   - Buttons

4. Page transitions:
   - Wrap pages in motion.div
   - Add exit animations
```

### Step 8: Testing & Deploy (Day 12-14)
```bash
1. Test all forms
2. Check mobile responsiveness
3. Run Lighthouse audit
4. Optimize images
5. Deploy to Vercel:
   vercel deploy --prod
```

---

## Code Snippets to Get Started

### 1. CN Utility (app/lib/utils.ts)
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 2. Basic Header Component
```typescript
// app/components/layout/header.tsx

"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { cn } from "@/app/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-tree-green-700">
            BTC Trees
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-tree-green-600 transition">
              Home
            </Link>
            <Link href="/services" className="hover:text-tree-green-600 transition">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-tree-green-600 transition">
              Gallery
            </Link>
            <Link href="/about" className="hover:text-tree-green-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-tree-green-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="tel:9054499019">
                <Phone className="w-4 h-4 mr-2" />
                905-449-9019
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (implement with Radix Dialog later) */}
    </header>
  )
}
```

### 3. Basic Hero Component
```typescript
// app/components/sections/hero.tsx

"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 opacity-90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional Tree Care in <br />
            <span className="text-green-300">Oshawa & Clarington</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Owner-operated. Safe removals, precise pruning, thorough clean-ups.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" asChild className="text-lg">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg">
            <Link href="/services">View Services</Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>
    </section>
  )
}
```

### 4. Service Card Component
```typescript
// app/components/sections/services.tsx

"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TreeDeciduous, Scissors, Drill, Wind, ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: TreeDeciduous,
    title: "Tree Removal",
    description: "Safe rigging and tight-space dismantles",
    features: [
      "Storm-damaged tree removal",
      "Sectional dismantling",
      "Complete debris cleanup",
    ],
  },
  {
    icon: Scissors,
    title: "Pruning & Trimming",
    description: "Expert canopy shaping and maintenance",
    features: [
      "Deadwood removal",
      "Clearance from structures",
      "Hedge trimming",
    ],
  },
  {
    icon: Drill,
    title: "Stump Grinding",
    description: "Complete stump removal services",
    features: [
      "Flush grinding",
      "Garden preparation",
      "Multiple stump removal",
    ],
  },
  {
    icon: Wind,
    title: "Storm Cleanup",
    description: "Emergency response services",
    features: [
      "24/7 availability",
      "Debris removal",
      "Safety assessments",
    ],
  },
]

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Complete tree care solutions for your property
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-tree-green-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-tree-green-700" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-tree-green-600 mr-2">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="text-tree-green-600 hover:text-tree-green-700 font-medium flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

### 5. Contact Form Validation Schema
```typescript
// app/lib/validations.ts

import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.enum(["removal", "pruning", "grinding", "emergency", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## Testing Checklist

### Before Each Git Commit
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Mobile responsive (test on 375px width)
- [ ] All links work
- [ ] Forms validate correctly

### Before Deployment
- [ ] All environment variables set
- [ ] Contact form sends emails
- [ ] Images optimized (use next/image)
- [ ] SEO metadata complete
- [ ] Lighthouse score >90 on all metrics
- [ ] Test on real devices (iPhone, Android)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

---

## Common Gotchas & Solutions

### Issue: Framer Motion hydration errors
**Solution**: Use `"use client"` directive at top of animated components

### Issue: Tailwind styles not applying
**Solution**: Check `content` array in tailwind.config.ts includes your files

### Issue: Icons not showing
**Solution**: Ensure Lucide React is installed: `npm install lucide-react`

### Issue: Forms not submitting
**Solution**: Check API route is in `app/api/` and uses proper HTTP methods

### Issue: Environment variables not working
**Solution**: 
- Prefix with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables

---

## Git Workflow

```bash
# Initial commit
git init
git add .
git commit -m "Initial project setup"

# Feature branches
git checkout -b feature/header-component
# ... make changes
git add .
git commit -m "Add responsive header with mobile menu"
git checkout main
git merge feature/header-component

# Deploy
git push origin main
# Vercel auto-deploys on push to main
```

---

## Resources

### Documentation Links
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Resend](https://resend.com/docs)

### Design Inspiration
- [Vercel](https://vercel.com) - Clean, modern
- [Linear](https://linear.app) - Smooth animations
- [Stripe](https://stripe.com) - Professional gradients

---

**Ready to start coding!** 🚀

Begin with Phase 1 (Foundation & Setup) and work through each phase sequentially.
Remember to test frequently and commit often.
