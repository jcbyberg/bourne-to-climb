# Site Architecture & Design Guide

## Overview
This is a modern, professional Next.js website built with a focus on clean design, smooth animations, and excellent user experience. The site uses a component-based architecture with a sophisticated design system.

---

## Tech Stack

### Core Framework
- **Next.js 16.0.0** (App Router) - React framework with server-side rendering
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling & Design System
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** (New York style) - Component library built on Radix UI
- **OKLCH color space** - Modern color system for better color consistency
- **Custom CSS variables** - Theme-based color system with dark mode support

### UI Components & Libraries
- **Radix UI** - Headless, accessible component primitives:
  - Accordion, Dialog, Dropdown Menu, Label, Select, Tabs, Toast
- **Framer Motion 12.23.24** - Advanced animations and transitions
- **Lucide React** - Icon library
- **@formkit/auto-animate** - Automatic animations for list/container changes
- **react-intersection-observer** - Scroll-triggered animations

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Features
- **Resend** - Email service integration
- **Sonner** - Toast notifications
- **class-variance-authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional class name utilities

---

## Design System

### Color Palette (OKLCH)
The site uses OKLCH color space for better color consistency and perceptual uniformity:

**Light Mode:**
- Background: `oklch(0.98 0.02 150)` - Very light green-tinted white
- Surface: `oklch(0.992 0.012 150)` - Slightly lighter than background
- Primary: `oklch(0.45 0.09 151)` - Forest green
- Accent: `oklch(0.93 0.045 120)` - Light green accent
- Foreground: `oklch(0.18 0.02 150)` - Dark text

**Dark Mode:**
- Full dark mode support with inverted color scheme
- Maintains same hue relationships for consistency

### Typography
- **Headings**: Manrope (weights: 400, 500, 600, 700, 800)
- **Body**: Plus Jakarta Sans (weights: 400, 500, 600, 700)
- Fonts loaded via Next.js font optimization with `display: swap`

### Spacing & Layout
- Consistent spacing scale using Tailwind defaults
- Max-width container: `max-w-7xl` (1280px)
- Responsive padding: `px-4 sm:px-6 lg:px-10`
- Section padding: `py-12 sm:py-16 lg:py-20`

### Border Radius
- Base radius: `0.875rem` (14px)
- Variants: `sm`, `md`, `lg`, `xl` calculated from base
- Cards use `rounded-2xl` (1rem)

---

## Component Architecture

### Layout Components
Located in `app/components/layout/`:

1. **Container** - Wrapper component with max-width and responsive padding
2. **Header** - Sticky header with scroll-based styling changes
3. **Footer** - Site footer with links and information
4. **Section** - Reusable section wrapper
5. **SectionHeading** - Standardized section titles with eyebrow text

### Section Components
Located in `app/components/sections/`:

- **Hero** - Full-width hero with background image and overlay
- **Services** - Grid of service cards with hover effects
- **ServiceArea** - Service area information
- **GalleryPreview** - Image gallery preview
- **Reviews** - Customer reviews section
- **CTA Section** - Call-to-action sections
- **Stats** - Statistics display

### UI Components
Located in `app/components/ui/`:

All components follow shadcn/ui patterns:
- Built on Radix UI primitives
- Styled with Tailwind CSS
- Variant-based styling using `class-variance-authority`
- Accessible by default

---

## Key Design Patterns

### 1. Hero Section Pattern
```typescript
// Full-width background image with gradient overlays
// Staggered text animations using Framer Motion
// Glass-morphism cards with backdrop blur
// Multiple CTA buttons with different styles
```

**Features:**
- Background image with dual gradient overlays (linear + radial)
- Staggered text reveal animations
- Glass-morphism sidebar card
- Badge/pill components with backdrop blur
- Responsive layout switching from column to row

### 2. Card Components
```typescript
// Hover effects: translate-y, border color change, shadow increase
// Icon containers with primary color background
// Bullet points with colored dots
// Smooth transitions on all interactive elements
```

**Features:**
- Hover: `-translate-y-1`, border color change, shadow increase
- Icon containers with `bg-primary/10`
- Custom bullet points using colored dots
- Smooth transitions: `transition hover:...`

### 3. Section Structure
```typescript
// Consistent section padding
// SectionHeading component with eyebrow, title, description
// Container wrapper for max-width
// Grid layouts for content
```

**Pattern:**
- Section wrapper with responsive padding
- SectionHeading with optional eyebrow text (uppercase, tracked)
- Container for content width management
- Grid layouts: `md:grid-cols-2 xl:grid-cols-4`

### 4. Animation Patterns

**Scroll-triggered animations:**
```typescript
// Framer Motion with whileInView
// Staggered children animations
// Spring physics for natural motion
```

**Common animations:**
- `fadeInUp` - Fade in with upward motion
- `staggerContainer` - Staggered children reveal
- `heroTextStagger` - Hero-specific staggered text
- `scaleOnHover` - Subtle scale on hover

### 5. Glass Morphism
```css
/* Used in hero section and header */
.glass {
  border: border-border/70;
  background: bg-surface/80;
  backdrop-blur: backdrop-blur-lg;
}
```

**Usage:**
- Hero sidebar cards
- Header when scrolled
- Badge/pill components
- Overlay elements

### 6. Gradient Backgrounds
```css
/* Section gradient utility */
.section-gradient {
  background: radial-gradient(
    circle at top left,
    color-mix(in oklab, var(--primary) 25%, transparent),
    transparent 55%
  ),
  radial-gradient(
    circle at bottom right,
    color-mix(in oklab, var(--accent) 25%, transparent),
    transparent 60%
  );
}
```

---

## Styling Approach

### 1. CSS Variables
All colors defined as CSS variables in `globals.css`:
- Theme-based (light/dark mode)
- OKLCH color space
- Semantic naming (primary, secondary, accent, etc.)

### 2. Tailwind Configuration
- Custom theme variables mapped to CSS variables
- Custom variants: `dark`, `hocus` (hover + focus)
- Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`

### 3. Utility Classes
- Consistent spacing scale
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Custom utilities: `.glass`, `.section-gradient`

### 4. Component Variants
Using `class-variance-authority` for component variants:
- Button: default, destructive, outline, secondary, ghost, link
- Sizes: default, sm, lg, icon variants

---

## Animation Strategy

### 1. Page Load Animations
- Hero section: Staggered text reveal with spring physics
- Service cards: Staggered fade-in on scroll
- Smooth, natural motion using spring animations

### 2. Scroll Animations
- `react-intersection-observer` for scroll detection
- Framer Motion `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` to animate only once

### 3. Hover Effects
- Subtle transforms: `hover:-translate-y-1`
- Border color changes: `hover:border-primary/40`
- Shadow increases: `hover:shadow-xl`
- Scale effects: `hover:scale-[1.02]`

### 4. Auto-Animate
- `@formkit/auto-animate` for list changes
- Used in SectionHeading for smooth content updates

---

## Responsive Design

### Breakpoints
- Mobile: Default (< 640px)
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+)
- Large: `lg:` (1024px+)
- XL: `xl:` (1280px+)

### Mobile-First Approach
- Base styles for mobile
- Progressive enhancement for larger screens
- Mobile menu component for navigation
- Responsive image sizing with Next.js Image

### Layout Patterns
- Single column on mobile
- 2 columns on tablet (`md:grid-cols-2`)
- 4 columns on desktop (`xl:grid-cols-4`)
- Flexible layouts with `flex-wrap`

---

## Performance Optimizations

### 1. Next.js Features
- Image optimization with `next/image`
- Font optimization with `next/font/google`
- Server-side rendering
- Route-based code splitting

### 2. Animation Performance
- GPU-accelerated transforms
- `will-change` for animated elements
- Reduced motion support consideration

### 3. Code Organization
- Component-based architecture
- Reusable utilities
- Type-safe with TypeScript

---

## Accessibility Features

### 1. Semantic HTML
- Proper heading hierarchy
- Semantic section elements
- ARIA labels where needed

### 2. Radix UI Components
- Built-in accessibility
- Keyboard navigation
- Screen reader support
- Focus management

### 3. Color Contrast
- OKLCH ensures proper contrast ratios
- Dark mode support
- Accessible color combinations

---

## File Structure Patterns

```
app/
├── (pages)/          # Route groups
│   ├── about/
│   ├── contact/
│   └── ...
├── api/              # API routes
├── components/
│   ├── layout/       # Layout components
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── config/           # Site configuration
├── data/             # Static data
├── lib/              # Utilities
└── globals.css       # Global styles
```

---

## Key Design Principles

1. **Consistency**: Reusable components and consistent spacing
2. **Performance**: Optimized images, fonts, and animations
3. **Accessibility**: Semantic HTML and ARIA support
4. **Modern Aesthetics**: Glass morphism, gradients, smooth animations
5. **Responsive**: Mobile-first, works on all devices
6. **Type Safety**: Full TypeScript coverage
7. **Maintainability**: Component-based, well-organized code

---

## Color Psychology

The site uses green tones (hue 150-151) which convey:
- Nature and growth (appropriate for tree service)
- Trust and reliability
- Professionalism
- Environmental consciousness

The OKLCH color space ensures:
- Perceptually uniform color steps
- Better color mixing
- Consistent appearance across devices

---

## Animation Philosophy

Animations are:
- **Subtle**: Not overwhelming or distracting
- **Purposeful**: Guide user attention
- **Natural**: Spring physics for organic motion
- **Performance-focused**: GPU-accelerated transforms
- **Accessible**: Respect reduced motion preferences

---

## Component Reusability

The architecture emphasizes:
- **Composable components**: Build complex UIs from simple parts
- **Variant-based styling**: Flexible component variants
- **Consistent patterns**: Similar components work similarly
- **Type safety**: TypeScript ensures correct usage

---

## Summary

This site demonstrates modern web development best practices:
- Next.js App Router for optimal performance
- Tailwind CSS for rapid, consistent styling
- shadcn/ui for accessible, customizable components
- Framer Motion for smooth, professional animations
- OKLCH color system for better color management
- TypeScript for type safety and developer experience
- Component-based architecture for maintainability

The design is clean, professional, and focuses on user experience with smooth animations, clear hierarchy, and excellent responsive behavior.



