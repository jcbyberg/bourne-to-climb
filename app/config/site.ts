export const siteConfig = {
  name: "Bourne To Climb Tree Service",
  shortName: "BTC Trees",
  description:
    "Owner-operated tree removals, precise pruning, stump grinding, and emergency response across Oshawa, Courtice, and Clarington.",
  phone: "905-449-9019",
  email: "contact@bournetoclimb.com",
  address: "76 Cromwell Ave, Oshawa, ON L1J 4T6",
  serviceAreas: ["Oshawa", "Courtice", "Clarington"],
  emergencyHours: "24/7 Emergency Service",
  social: {
    instagram: "https://www.instagram.com/123_btc",
    facebook: "https://www.facebook.com/bourneto.climb",
    youtube: "https://www.youtube.com/@btc-trees",
    linkedin: "https://www.linkedin.com/in/dustin-bourne",
  },
  navItems: [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ] as const,
}

export type SiteConfig = typeof siteConfig
