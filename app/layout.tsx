import "./globals.css"

import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

import type { Metadata, Viewport } from "next"
import { Manrope, Plus_Jakarta_Sans } from "next/font/google"
import Script from "next/script"

const heading = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
})

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bournetoclimb.com"
const metadataTitle = "Tree Removal, Pruning & Emergency Service in Durham Region"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${metadataTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "tree removal Oshawa",
    "tree trimming Clarington",
    "stump grinding Courtice",
    "emergency tree service Durham Region",
    "Bourne To Climb Tree Service",
  ],
  category: "Home & Garden",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${metadataTitle}`,
    description: siteConfig.description,
    phoneNumbers: [siteConfig.phone],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${metadataTitle}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Dustin Bourne" }],
  creator: "Bourne To Climb Tree Service",
  publisher: "Bourne To Climb Tree Service",
}

export const viewport: Viewport = {
  themeColor: "#0f2f25",
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bournetoclimb.com"

  // LocalBusiness Schema for Google Local Search
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: siteConfig.name,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "76 Cromwell Ave",
      addressLocality: "Oshawa",
      addressRegion: "ON",
      postalCode: "L1J 4T6",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8509,
      longitude: -79.0204,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Oshawa",
      },
      {
        "@type": "City",
        name: "Courtice",
      },
      {
        "@type": "City",
        name: "Clarington",
      },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ],
    description: siteConfig.description,
    image: `${siteUrl}/og-image.png`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
    priceRange: "$$",
    serviceArea: {
      "@type": "City",
      name: "Durham Region, ON",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                    anonymize_ip: true,
                    allow_google_signals: true,
                    allow_ad_personalization_signals: true,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          sans.variable,
          heading.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-surface">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      </body>
    </html>
  )
}
