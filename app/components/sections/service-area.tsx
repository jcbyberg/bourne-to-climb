"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"

import { serviceAreas } from "@/data/service-area"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"

export function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Service Area"
            title="Proudly serving Durham Region homeowners"
            description="Based in Oshawa and in the trees across Courtice, Bowmanville, and Clarington every week. We handle tight downtown lots and wide rural properties with the same care."
          />

          <div className="grid gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="group rounded-2xl border border-border/60 bg-background/90 p-5 transition hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {area.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border/60 bg-surface/80 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Storm Damage Services
              </p>
              <p className="text-lg font-semibold text-foreground">
                Storm damage cleanup and prevention available.
              </p>
            </div>
            <Button asChild>
              <Link href="tel:19054499019">Call 905-449-9019</Link>
            </Button>
          </div>
        </div>

        <div className="glass rounded-3xl border border-border/40 bg-background/90 p-4 shadow-lg">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
            <iframe
              className="size-full"
              src="https://maps.google.com/maps?q=76%20Cromwell%20Ave%20Oshawa%20ON&z=12&output=embed"
              loading="lazy"
              allowFullScreen
              title="Bourne To Climb Service Area"
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Centrally located near downtown Oshawa with quick access to highway
            routes for efficient arrival across Durham Region.
          </p>
          <Button variant="ghost" asChild className="mt-3 justify-start px-0">
            <Link
              href="https://maps.app.goo.gl/46Hy8jcgS6NFGDqD7"
              target="_blank"
            >
              Open in Google Maps →
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
