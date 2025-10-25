import {
  Drill,
  PhoneCall,
  Scissors,
  TreeDeciduous,
  Wind,
} from 'lucide-react'

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export const serviceCards = [
  {
    icon: TreeDeciduous,
    title: 'Tree Removal',
    description:
      'Safe rigging for tight spaces, storm-damaged removals, and sectional dismantling.',
    features: [
      'ISA-aligned safety practices',
      'Complete debris cleanup',
      'Tight access expertise',
    ],
    href: '/services#tree-removal',
  },
  {
    icon: Scissors,
    title: 'Pruning & Trimming',
    description:
      'Canopy shaping, deadwood removal, and precision hedge trimming tailored to your property.',
    features: [
      'Seasonal maintenance plans',
      'Clearance from structures',
      'Aesthetic shaping',
    ],
    href: '/services#pruning',
  },
  {
    icon: Drill,
    title: 'Stump Grinding',
    description:
      'Flush grinding and removal services that prep your space for fresh sod, gardens, or patios.',
    features: [
      'Minimal turf disruption',
      'Multi-stump packages',
      'Replant-ready finish',
    ],
    href: '/services#stump-grinding',
  },
  {
    icon: Wind,
    title: 'Storm Cleanup',
    description:
      'Rapid emergency response for fallen trees, broken limbs, and hazardous debris.',
    features: [
      '24/7 emergency availability',
      'On-site safety assessments',
      'Full site cleanup',
    ],
    href: '/services#emergency',
  },
]

export const stats = [
  { label: 'Trees Safely Removed', value: 850 },
  { label: 'Properties Served', value: 640 },
  { label: 'Emergency Callouts', value: 120 },
  { label: 'Years Owner-Operated', value: 12 },
]

export const serviceAreas = [
  'Oshawa',
  'Courtice',
  'Clarington',
  'Whitby',
  'Bowmanville',
]

export const testimonials = [
  {
    source: 'Reddit · r/Oshawa',
    quote:
      'Dustin handled a massive maple over our garage with total professionalism. Honest, friendly, and meticulous cleanup.',
    name: 'Jordan L.',
    rating: 5,
  },
  {
    source: 'IndustryOversight Review',
    quote:
      'We trust Bourne To Climb for annual pruning and shaping across multiple properties. Always punctual and safety-first.',
    name: 'Claire P.',
    rating: 5,
  },
  {
    source: 'Whodoyou Referral',
    quote:
      'Removed eight stumps in a single morning. Yard was spotless afterwards and pricing was more than fair.',
    name: 'Tyler S.',
    rating: 5,
  },
]

export const faqItems = [
  {
    question: 'How much does tree removal cost?',
    answer:
      'Every tree is different. We provide free on-site assessments and detailed quotes based on size, location, and risk.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. Bourne To Climb Tree Service carries full liability coverage and WSIB, and works to ISA safety standards.',
  },
  {
    question: 'Do you handle cleanup?',
    answer:
      'Absolutely. All jobs include brush chipping, debris removal, and a final rake so your property looks spotless.',
  },
  {
    question: 'Can you work near power lines?',
    answer:
      'We coordinate with local utilities and deploy proper rigging techniques to safely manage trees near service lines.',
  },
  {
    question: 'Do you offer emergency services?',
    answer:
      'Yes. Call 905-449-9019 any time for windfall or storm damage assistance across the Durham Region.',
  },
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1508614999368-9260051291ea?auto=format&fit=crop&w=900&q=80',
    alt: 'Arborist lowering tree limb with rigging',
    service: 'Tree Removal',
  },
  {
    src: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=900&q=80',
    alt: 'Tree pruning with pole saw',
    service: 'Pruning',
  },
  {
    src: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=900&q=80',
    alt: 'Stump grinding machine finishing job',
    service: 'Stump Grinding',
  },
  {
    src: 'https://images.unsplash.com/photo-1504306260643-75b8d7862ade?auto=format&fit=crop&w=900&q=80',
    alt: 'Arborist team cleaning storm damage',
    service: 'Storm Cleanup',
  },
]

export const contactInformation = {
  phone: '905-449-9019',
  email: 'contact@bournetoclimb.com',
  address: '76 Cromwell Ave, Oshawa, ON L1J 4T6',
  hours: '24/7 Emergency Service',
  social: {
    instagram: 'https://www.instagram.com/123_btc',
    facebook: 'https://www.facebook.com/bourneto.climb',
    youtube: 'https://www.youtube.com/@BTCtreesBournetoclimb',
    linkedin: 'https://www.linkedin.com/in/dustin-bourne',
  },
}

export const primaryCta = {
  label: 'Get Free Quote',
  href: '/contact',
}

export const emergencyCta = {
  label: 'Call 905-449-9019',
  href: 'tel:9054499019',
  icon: PhoneCall,
}
