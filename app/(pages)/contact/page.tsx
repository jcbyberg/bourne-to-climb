import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Clock, Facebook, Instagram, Linkedin, MapPin, PhoneCall } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { ContactFormSection } from "@/components/sections/contact-form"

export const metadata: Metadata = {
  title: "Contact Bourne To Climb Tree Service | Free Quotes",
  description:
    "Request a free tree service quote from Bourne To Climb. Call 905-449-9019 or use the contact form for removals, pruning, stump grinding, and emergency service in Durham Region.",
}

const socials = [
  { name: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
  { name: "Facebook", icon: Facebook, href: siteConfig.social.facebook },
  { name: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
]

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

export default function ContactPage() {
  return (
    <>
      {recaptchaSiteKey ? (
        <Script
          id="recaptcha-enterprise"
          src={`https://www.google.com/recaptcha/enterprise.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <section className="bg-gradient-to-br from-primary/5 via-background to-background">
        <Container className="space-y-6 pt-12 pb-20 sm:pt-16 sm:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Contact
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Get your free quote
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Tell us about your tree project or storm concern and Dustin will
            reach out personally with next steps, pricing, and scheduling
            availability.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Quote Request"
              title="Tell us about your tree care needs"
              description="Share photos, describe the location, and let us know the best time to reach you. We respond within 24 hours and can often schedule a walkthrough within 48 hours."
            />
            <ContactFormSection />
          </div>

          <div className="space-y-6 rounded-3xl border border-border/60 bg-surface/80 p-8">
            <div className="rounded-2xl border border-border/60 bg-background/90 p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Contact details
              </h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <Link
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/80 px-4 py-3 font-semibold text-foreground transition hover:border-primary/40"
                >
                  <PhoneCall className="size-4 text-primary" />
                  {siteConfig.phone}
                </Link>
                <div className="flex items-start gap-3 rounded-xl border border-border/60 px-4 py-3">
                  <MapPin className="mt-1 size-4 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {siteConfig.address}
                    </p>
                    <p>Serving {siteConfig.serviceAreas.join(", ")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 px-4 py-3">
                  <Clock className="size-4 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {siteConfig.emergencyHours}
                    </p>
                    <p>By appointment for estimates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/90 p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Find us online
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <social.icon className="size-4" />
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/60">
              <iframe
                className="h-64 w-full"
                src="https://maps.google.com/maps?q=76%20Cromwell%20Ave%20Oshawa%20ON&z=12&output=embed"
                loading="lazy"
                allowFullScreen
                title="Map to Bourne To Climb Tree Service"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
