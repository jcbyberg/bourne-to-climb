# Bourne To Climb Tree Service - Site Map & User Journey

## Visual Site Map

```
                         ┌─────────────────────┐
                         │     HOMEPAGE        │
                         │   (Landing Page)    │
                         └──────────┬──────────┘
                                    │
                ┌───────────────────┼───────────────────┐
                │                   │                   │
                ▼                   ▼                   ▼
        ┌───────────┐       ┌───────────┐      ┌───────────┐
        │  SERVICES │       │   ABOUT   │      │  GALLERY  │
        │   Page    │       │   Page    │      │   Page    │
        └─────┬─────┘       └───────────┘      └───────────┘
              │
              └──────────────┐
                             │
                ┌────────────┼────────────┐
                │            │            │
                ▼            ▼            ▼
        ┌───────────┐  ┌───────────┐  ┌───────────┐
        │  CONTACT  │  │  REVIEWS  │  │   (More   │
        │   Page    │  │   Page    │  │  Services)│
        └───────────┘  └───────────┘  └───────────┘
```

## Detailed Page Hierarchy

```
Bourne To Climb Tree Service Website
│
├── 🏠 HOME (/)
│   ├── Hero Section
│   ├── Services Overview
│   ├── Service Area Map
│   ├── Gallery Preview
│   ├── Reviews Section
│   └── Final CTA
│
├── 🔧 SERVICES (/services)
│   ├── Services Hero
│   ├── Tree Removal Details
│   ├── Pruning & Trimming Details
│   ├── Stump Grinding Details
│   ├── Storm Cleanup Details
│   └── FAQ Section
│
├── 👤 ABOUT (/about)
│   ├── About Hero (Dustin Photo)
│   ├── Story Section
│   ├── Animated Stats
│   ├── Certifications
│   └── Why Choose Us
│
├── 📸 GALLERY (/gallery)
│   ├── Gallery Hero
│   ├── Filter Tabs (All/Removal/Pruning/etc)
│   ├── Masonry Grid
│   └── Social Media Links
│
├── ⭐ REVIEWS (/reviews)
│   ├── Reviews Hero
│   ├── Overall Rating
│   ├── Review Grid
│   └── Leave Review CTA
│
└── 📞 CONTACT (/contact)
    ├── Contact Hero
    ├── Contact Form (Left Column)
    │   ├── Name Field
    │   ├── Email Field
    │   ├── Phone Field
    │   ├── Service Dropdown
    │   ├── Message Field
    │   └── Photo Upload
    └── Contact Info (Right Column)
        ├── Phone Number
        ├── Address
        ├── Map Embed
        └── Social Links
```

## User Journey Flows

### Flow 1: First-Time Visitor (Browsing)

```
┌──────────────┐
│   Lands on   │
│   Homepage   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Reads Hero  │
│   Message    │
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│ Scrolls Down │────▶│   Views      │
│   to View    │     │  Services    │
│   Services   │     │   Section    │
└──────┬───────┘     └──────┬───────┘
       │                    │
       ▼                    ▼
┌──────────────┐     ┌──────────────┐
│   Clicks     │     │   Clicks     │
│ "Learn More" │     │ "View More"  │
│   Services   │     │   Gallery    │
└──────┬───────┘     └──────┬───────┘
       │                    │
       └──────┬─────────────┘
              │
              ▼
       ┌──────────────┐
       │   Reviews    │
       │   Section    │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │  "Get Free   │
       │   Quote"     │
       │    Button    │
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   Contact    │
       │     Page     │
       └──────────────┘
```

### Flow 2: Ready-to-Book Visitor (Direct)

```
┌──────────────┐
│   Lands on   │
│   Homepage   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Clicks     │
│ "Get Free    │
│   Quote"     │
│   (Header)   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Contact    │
│     Page     │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Fills Out   │
│  Contact     │
│    Form      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Submits    │
│   Request    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Success     │
│  Message     │
│  + Toast     │
└──────────────┘
```

### Flow 3: Mobile User (Quick Call)

```
┌──────────────┐
│  Mobile User │
│  Lands on    │
│   Homepage   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Taps       │
│   Phone #    │
│  (Header)    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Phone Dialer│
│    Opens     │
│ 905-449-9019 │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Direct     │
│   Call to    │
│   Dustin     │
└──────────────┘
```

### Flow 4: Research-Oriented Visitor

```
┌──────────────┐
│   Lands on   │
│   Homepage   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Clicks     │
│  "Services"  │
│  (Nav Menu)  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Services   │
│  Detail Page │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Reads FAQs │
│  (Accordion) │
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│   Clicks     │────▶│   Views      │
│  "Gallery"   │     │  Work Photos │
└──────────────┘     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Clicks     │
                     │  "About"     │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │  Learns About│
                     │    Dustin    │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Clicks     │
                     │  "Reviews"   │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │ Gains Trust  │
                     │    → CTA     │
                     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Contact    │
                     │     Page     │
                     └──────────────┘
```

## Conversion Funnels

### Primary Conversion Path

```
┌─────────────────────────────────────────────────────┐
│                    AWARENESS                        │
│  • Google Search: "tree removal oshawa"             │
│  • Local directory listing                          │
│  • Social media (Instagram)                         │
│  • Word of mouth                                    │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│                   INTEREST                          │
│  • Lands on homepage                                │
│  • Reads hero message                               │
│  • Views service cards                              │
│  • Sees local service area                          │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│                 CONSIDERATION                       │
│  • Browses detailed services                        │
│  • Views work photos in gallery                     │
│  • Reads customer reviews                           │
│  • Learns about owner (About page)                  │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│                   INTENT                            │
│  • Clicks "Get Free Quote" CTA                      │
│  • Navigates to contact page                        │
│  • Begins filling out form                          │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│                   ACTION                            │
│  • Completes contact form                           │
│  • OR Calls phone number                            │
│  • Receives confirmation                            │
└────────────────────┬────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────┐
│                  FOLLOW-UP                          │
│  • Dustin receives email notification               │
│  • Responds within 24 hours                         │
│  • Books consultation                               │
└─────────────────────────────────────────────────────┘
```

## Call-to-Action (CTA) Placement Map

### Homepage CTAs

```
Section                  Primary CTA              Secondary CTA
────────────────────────────────────────────────────────────────
Hero                    "Get Free Quote"         "View Services"
Services Section        "Learn More" (each)      —
Service Area           —                         —
Gallery Preview        "View More on Instagram"  —
Reviews Section        —                         —
Final CTA Section      "Call: 905-449-9019"     "Request Quote"
```

### Header CTAs (All Pages)

```
Desktop:  [Phone: 905-449-9019]  [Get Free Quote]
Mobile:   [☰ Menu]  [📞 Call]
```

### Footer CTAs (All Pages)

```
Contact Info:  Phone, Address, Email
Social Links:  Instagram, Facebook, YouTube, LinkedIn
Quick Action:  "Get Your Free Quote Today"
```

## Navigation Structure

### Primary Navigation (Desktop)

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]   Home  Services  Gallery  About  Reviews  Contact   │
│                                      [📞 Call] [Get Quote]    │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Navigation

```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]                                   [📞 Call]  [☰ Menu] │
└──────────────────────────────────────────────────────────────┘
                                                          │
                                                          ▼
                                              ┌───────────────┐
                                              │   Overlay     │
                                              │   Menu        │
                                              ├───────────────┤
                                              │ Home          │
                                              │ Services      │
                                              │ Gallery       │
                                              │ About         │
                                              │ Reviews       │
                                              │ Contact       │
                                              │───────────────│
                                              │ [Get Quote]   │
                                              └───────────────┘
```

## Content Hierarchy by Page

### Homepage Content Priority

```
1. ⭐⭐⭐⭐⭐ Hero Message (Above fold)
   • Company name
   • Primary service areas
   • Main value proposition
   • Primary CTA

2. ⭐⭐⭐⭐ Services Overview
   • 4 main services
   • Quick descriptions
   • Visual icons

3. ⭐⭐⭐ Service Area
   • Coverage map
   • Main cities served

4. ⭐⭐⭐ Gallery Preview
   • 6 best work photos
   • Link to full gallery

5. ⭐⭐ Reviews
   • 3 testimonials
   • Social proof

6. ⭐ Final CTA
   • Conversion push
```

### Services Page Content Priority

```
1. ⭐⭐⭐⭐⭐ Service Descriptions
   • Detailed explanations
   • Process breakdown
   • Equipment info

2. ⭐⭐⭐⭐ Before/After Examples
   • Visual proof
   • Result showcases

3. ⭐⭐⭐ FAQs
   • Common questions
   • Pricing info
   • Timeline expectations

4. ⭐⭐ Service CTAs
   • "Get Quote" buttons
   • Direct phone links
```

## Key User Actions & Tracking Points

### Critical Conversion Events

```
Event Name                  Trigger                    Priority
─────────────────────────────────────────────────────────────────
Page View                  Any page load              Low
Hero CTA Click            "Get Free Quote" click      High
Phone Number Click        Click phone in header       High
Form Started              Contact form interaction    High
Form Submitted            Contact form success        Critical
Service Card Click        "Learn More" click          Medium
Gallery Image Click       Photo lightbox open         Low
Social Link Click         Instagram/FB/etc click      Low
Review CTA Click         "Leave Review" click        Medium
```

### Analytics Goals Setup

```
Goal Name              Type         Criteria
─────────────────────────────────────────────────────────────
Quote Request          Event        Form submission success
Phone Call            Event        Click tel: link
Service Inquiry       Event        Click service "Learn More"
Instagram Visit       Event        Click Instagram link
Page Engagement       Metric       Time on page >30s
```

## Mobile-First Considerations

### Mobile User Journey Optimization

```
Mobile Homepage Flow:
┌──────────────────┐
│  Hero (1 screen) │
│  • Clear headline│
│  • Tap-to-call   │
│  • Primary CTA   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Services (Cards) │
│  • Swipeable     │
│  • Large touch   │
│    targets       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Gallery Grid   │
│  • 2 column max  │
│  • Tap to expand │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Sticky Footer   │
│   CTA Bar        │
│  [📞] [Quote]    │
└──────────────────┘
```

## Cross-Page Navigation Patterns

### Internal Linking Strategy

```
From Page    To Page      Link Text / Context
───────────────────────────────────────────────────────────────
Home         Services     "View Services", "Learn More"
Home         Gallery      "View More on Instagram"
Home         Contact      "Get Free Quote", "Call Now"
Home         About        "About Us", Footer link

Services     Contact      "Get Quote for [Service]"
Services     Home         Logo, "Home" nav
Services     About        "Learn About Owner"
Services     Gallery      "See Our Work"

Gallery      Services     "Learn About Services"
Gallery      Contact      "Request Quote"
Gallery      Instagram    "Follow Us" external

About        Contact      "Get in Touch"
About        Services     "Our Services"
About        Home         Logo, breadcrumb

Contact      Home         "Back to Home"
Contact      Services     "View Services"
Contact      —            Form submission confirmation

All Pages    Contact      Header CTA, Footer CTA
All Pages    Home         Logo click
All Pages    Phone        Header phone number
```

## SEO-Optimized URL Structure

```
URL                          Primary Keywords
─────────────────────────────────────────────────────────────────
/                           tree service oshawa, home
/services                   tree removal clarington
/services#removal           tree removal oshawa
/services#pruning          arborist oshawa, tree pruning
/services#grinding         stump grinding oshawa
/services#emergency        emergency tree service durham
/about                     dustin bourne arborist
/gallery                   tree service portfolio oshawa
/contact                   tree service quote oshawa
/reviews                   tree service reviews oshawa
```

## Breadcrumb Navigation Pattern

```
Home                     →  Home

Services Page           →  Home  >  Services

Service Detail          →  Home  >  Services  >  Tree Removal

About Page              →  Home  >  About

Gallery Page            →  Home  >  Gallery

Contact Page            →  Home  >  Contact

(Note: Simple 2-level breadcrumbs, always showing Home as root)
```

## Exit Intent & Engagement Strategy

### Exit Popups / CTAs

```
Page Exit Point          Exit Intent Action
─────────────────────────────────────────────────────────────────
Homepage (no scroll)    → "Wait! Get 10% off your first service"
Services (browsing)     → "Have questions? Text us: 905-449-9019"
Contact (form started)  → "Need help? Call us now: 905-449-9019"
About (long read)       → "Ready to book? Get your free quote"
Gallery (many views)    → "Like what you see? Let's work together"
```

---

## Summary: Key User Paths

### The Express Path (2 clicks)
```
Homepage → [Get Quote] → Contact Form → Submit
```

### The Research Path (5+ clicks)
```
Homepage → Services → Gallery → Reviews → About → Contact
```

### The Mobile Quick Path (1 tap)
```
Homepage → [📞 Tap to Call] → Phone Call
```

### The Social Path (external)
```
Homepage → Instagram Link → @123_btc → DM or Comment
```

---

**Note**: This site map prioritizes simplicity and conversion. Every page has clear CTAs leading to contact, making it easy for users to request quotes at any point in their journey.
