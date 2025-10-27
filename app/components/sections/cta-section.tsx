import Link from "next/link"
import { ArrowRight, PhoneCall } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-background p-8 sm:p-12">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
              Ready when you are
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to transform your property?
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Request a free, no-obligation quote and we&apos;ll respond within
              24 hours with a clear plan, honest pricing, and a cleanup promise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href={phoneHref}>
                  <PhoneCall className="size-4" />
                  Call {siteConfig.phone}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Request Quote Online
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
