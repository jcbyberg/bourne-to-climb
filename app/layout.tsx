import type { Metadata, Viewport } from "next"
import { Manrope, Plus_Jakarta_Sans } from "next/font/google"

import { siteConfig } from "@/config/site"
import { SiteFooter } from "@/components/layout/footer"
import { SiteHeader } from "@/components/layout/header"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import "./globals.css"

const heading = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
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
