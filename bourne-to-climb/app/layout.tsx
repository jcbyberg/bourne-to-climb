import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/app/components/layout/header'
import { Footer } from '@/app/components/layout/footer'
import { ToastProvider } from '@/app/components/ui/toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' })

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bournetoclimb.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Bourne To Climb Tree Service',
  image: `${baseUrl}/images/og-image.svg`,
  description:
    'Professional tree removal, pruning, stump grinding, and emergency services in Oshawa, Courtice, and Clarington.',
  url: baseUrl,
  telephone: '905-449-9019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '76 Cromwell Ave',
    addressLocality: 'Oshawa',
    addressRegion: 'ON',
    postalCode: 'L1J 4T6',
    addressCountry: 'CA',
  },
  areaServed: ['Oshawa', 'Courtice', 'Clarington', 'Durham Region'],
  openingHours: 'Mo-Su 00:00-24:00',
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bourne To Climb Tree Service | Professional Arborist in Durham Region',
    template: '%s | Bourne To Climb Tree Service',
  },
  description:
    'Owner-operated tree service delivering safe removals, precise pruning, and meticulous cleanup across Oshawa, Courtice, and Clarington.',
  keywords: [
    'tree service oshawa',
    'tree removal clarington',
    'arborist durham region',
    'stump grinding oshawa',
    'storm cleanup courtice',
  ],
  openGraph: {
    title: 'Bourne To Climb Tree Service',
    description:
      'Safe, insured, and owner-operated tree care for Oshawa, Courtice, and Clarington. Call 905-449-9019 for a free quote.',
    url: baseUrl,
    siteName: 'Bourne To Climb Tree Service',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: `${baseUrl}/images/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'Bourne To Climb Tree Service crew working on a mature tree',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-slate-50">
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ToastProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
