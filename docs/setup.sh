#!/bin/bash

# Bourne To Climb Tree Service - Automated Project Setup Script
# This script automates the initial project setup for faster development

set -e  # Exit on error

echo "🌲 Setting up Bourne To Climb Tree Service Website..."
echo "=================================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${BLUE}▶${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Step 1: Create Next.js Project
print_step "Step 1: Creating Next.js project..."
npx create-next-app@latest bourne-to-climb \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*" \
  --use-npm \
  --no-git

cd bourne-to-climb
print_success "Next.js project created"

# Step 2: Install Core Dependencies
print_step "Step 2: Installing core dependencies..."
npm install framer-motion auto-animate lucide-react clsx tailwind-merge
print_success "Core dependencies installed"

# Step 3: Install Form & Validation
print_step "Step 3: Installing form and validation libraries..."
npm install react-hook-form zod @hookform/resolvers
print_success "Form libraries installed"

# Step 4: Install Email Handler
print_step "Step 4: Installing email handler..."
npm install resend
print_success "Email handler installed"

# Step 5: Install Radix UI Primitives
print_step "Step 5: Installing Radix UI primitives..."
npm install @radix-ui/react-dialog \
            @radix-ui/react-dropdown-menu \
            @radix-ui/react-accordion \
            @radix-ui/react-tabs \
            @radix-ui/react-toast \
            @radix-ui/react-label \
            @radix-ui/react-select
print_success "Radix UI primitives installed"

# Step 6: Install Additional Utilities
print_step "Step 6: Installing additional utilities..."
npm install react-intersection-observer @tailwindcss/forms @tailwindcss/typography
print_success "Additional utilities installed"

# Step 7: Initialize Shadcn/ui
print_step "Step 7: Initializing Shadcn/ui..."
npx shadcn-ui@latest init -y
print_success "Shadcn/ui initialized"

# Step 8: Add Shadcn Components
print_step "Step 8: Adding Shadcn components..."
npx shadcn-ui@latest add button -y
npx shadcn-ui@latest add card -y
npx shadcn-ui@latest add input -y
npx shadcn-ui@latest add label -y
npx shadcn-ui@latest add textarea -y
npx shadcn-ui@latest add select -y
npx shadcn-ui@latest add dialog -y
npx shadcn-ui@latest add accordion -y
npx shadcn-ui@latest add tabs -y
npx shadcn-ui@latest add toast -y
print_success "Shadcn components added"

# Step 9: Create Folder Structure
print_step "Step 9: Creating folder structure..."
mkdir -p app/components/{ui,layout,sections}
mkdir -p app/lib
mkdir -p app/api/send-email
mkdir -p app/{about,services,gallery,reviews,contact}
mkdir -p public/images/{hero,services,gallery,team}
print_success "Folder structure created"

# Step 10: Create Utility Files
print_step "Step 10: Creating utility files..."

# Create lib/utils.ts if it doesn't exist
cat > app/lib/utils.ts << 'EOF'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Create lib/validations.ts
cat > app/lib/validations.ts << 'EOF'
import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(["removal", "pruning", "grinding", "emergency", "other"], {
    required_error: "Please select a service",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
EOF

# Create lib/animations.ts
cat > app/lib/animations.ts << 'EOF'
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
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.2 } 
  }
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
EOF

print_success "Utility files created"

# Step 11: Create Environment Template
print_step "Step 11: Creating environment template..."
cat > .env.example << 'EOF'
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
NEXT_PUBLIC_INSTAGRAM=https://www.instagram.com/btctrees?igsh=ZDUwY3pycG52eWFz&utm_source=qr
NEXT_PUBLIC_FACEBOOK=https://www.facebook.com/bourneto.climb
NEXT_PUBLIC_YOUTUBE=https://www.youtube.com/@BTCtreesBournetoclimb
NEXT_PUBLIC_LINKEDIN=https://www.linkedin.com/in/dustin-bourne

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EOF

cat > .env.local << 'EOF'
# Copy from .env.example and fill in real values
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=905-449-9019
EOF

print_success "Environment files created"

# Step 12: Update Tailwind Config
print_step "Step 12: Updating Tailwind configuration..."
cat > tailwind.config.ts << 'EOF'
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
EOF
print_success "Tailwind configuration updated"

# Step 13: Create Basic API Route
print_step "Step 13: Creating email API route..."
cat > app/api/send-email/route.ts << 'EOF'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/app/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = contactFormSchema.parse(body)
    
    const emailHtml = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
    
    await resend.emails.send({
      from: 'quotes@bournetoclimb.com',
      to: 'dustin@bournetoclimb.com',
      subject: `New Quote Request: ${data.service}`,
      html: emailHtml,
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
EOF
print_success "Email API route created"

# Step 14: Create README
print_step "Step 14: Creating README..."
cat > README.md << 'EOF'
# Bourne To Climb Tree Service - Website

Professional tree care services website for Oshawa, Clarington & Courtice area.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Auto Animate
- **UI Components**: Radix UI, Shadcn/ui
- **Forms**: React Hook Form, Zod
- **Email**: Resend API

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Add your RESEND_API_KEY and other values
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── api/send-email/      # Email API endpoint
├── components/
│   ├── ui/              # Shadcn components
│   ├── layout/          # Header, Footer
│   └── sections/        # Page sections
├── lib/                 # Utilities, validations
├── about/              # About page
├── services/           # Services page
├── gallery/            # Gallery page
├── contact/            # Contact page
└── page.tsx            # Homepage
```

## Development Workflow

### Phase 1: Foundation (Days 1-2)
- [x] Project setup
- [ ] Header & Footer components
- [ ] Basic layout

### Phase 2: Homepage (Days 3-5)
- [ ] Hero section
- [ ] Services overview
- [ ] Gallery preview
- [ ] Reviews section

### Phase 3: Pages (Days 6-8)
- [ ] About page
- [ ] Services detail page
- [ ] Gallery page
- [ ] Contact page with form

### Phase 4: Polish (Days 9-11)
- [ ] Animations
- [ ] Scroll effects
- [ ] Mobile optimization

### Phase 5: Launch (Days 12-14)
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Deploy to Vercel

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required variables (add to `.env.local`):

```
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_PHONE=905-449-9019
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

Deploy to Vercel:

```bash
vercel deploy --prod
```

Set environment variables in Vercel dashboard.

## License

Private - Bourne To Climb Tree Service
EOF
print_success "README created"

# Step 15: Initialize Git
print_step "Step 15: Initializing Git repository..."
git init
git add .
git commit -m "Initial project setup with all dependencies"
print_success "Git repository initialized"

# Step 16: Create .gitignore additions
print_step "Step 16: Updating .gitignore..."
cat >> .gitignore << 'EOF'

# Additional ignores
.env.local
.env.production
.vercel
*.log
.DS_Store
EOF
print_success ".gitignore updated"

echo ""
echo "=================================================="
echo -e "${GREEN}✓ Setup Complete!${NC}"
echo "=================================================="
echo ""
echo "Next steps:"
echo "  1. cd bourne-to-climb"
echo "  2. Add your RESEND_API_KEY to .env.local"
echo "  3. npm run dev"
echo "  4. Open http://localhost:3000"
echo ""
echo "Documentation:"
echo "  - See site-outline.md for full architecture"
echo "  - See component-map-quickstart.md for development guide"
echo ""
echo -e "${YELLOW}⚠ Don't forget to:${NC}"
echo "  - Configure your Resend API key"
echo "  - Replace placeholder content with real data"
echo "  - Add actual photos to public/images/"
echo ""
echo "Happy coding! 🌲"
