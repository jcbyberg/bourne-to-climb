import Image from "next/image"
import Link from "next/link"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneCallIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"

import { Container } from "./container"

const socials = [
  { name: "Instagram", icon: InstagramIcon, href: siteConfig.social.instagram },
  { name: "Facebook", icon: FacebookIcon, href: siteConfig.social.facebook },
  { name: "LinkedIn", icon: LinkedinIcon, href: siteConfig.social.linkedin },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface/60">
      <Container className="py-10 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-40">
                <Image
                  src="/bourne to climb v3.svg"
                  alt="Bourne To Climb Tree Service"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </span>
              
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Owner-operated, certified, and fully insured tree service helping
              Durham Region homeowners keep their properties safe, clean, and
              beautiful.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                WSIB Covered
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                Emergency Service
              </span>
              <span className="rounded-full bg-muted px-3 py-1">
                Serving {siteConfig.serviceAreas.join(" | ")}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Quick Links
            </h3>
            <nav className="grid gap-2 text-sm">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <Link
                href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 px-4 py-3 text-foreground shadow-sm transition-colors hover:border-primary/40"
              >
                <PhoneCallIcon className="size-4 text-primary" />
                <span className="font-semibold">{siteConfig.phone}</span>
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3 transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <MailIcon className="size-4 text-primary" />
                <span>{siteConfig.email}</span>
              </Link>
              <div className="flex items-start gap-3 rounded-lg border border-border/60 px-4 py-3">
                <MapPinIcon className="mt-1 size-4 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">
                    {siteConfig.serviceAreas.join(" | ")}
                  </p>
                  <p>{siteConfig.address}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border/60 bg-background/80">
        <Container className="flex flex-col gap-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            (c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Serving
            <span className="font-semibold text-foreground">
              {siteConfig.serviceAreas.join(", ")}
            </span>
          </p>
        </Container>
      </div>
    </footer>
  )
}



