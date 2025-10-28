import type { Metadata } from "next"

import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { GalleryGrid } from "@/components/sections/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Tree Removal, Pruning & Stump Grinding Projects",
  description:
    "Browse recent work from Bourne To Climb Tree Service. See removals, hedge restorations, stump grinding, and emergency storm response projects across Durham Region.",
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-background to-background">
        <Container className="space-y-6 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Gallery
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Our workmanship in the trees and on the ground
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Explore sectional removals, pruning transformations, hedge
            clean-ups, and 24/7 emergency responses across Oshawa, Courtice,
            Clarington, and surrounding communities.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Project Highlights"
            title="Filter by service to see similar projects"
            description="Select a category to view tree removals, pruning, stump grinding, or emergency response work."
            align="left"
          />
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </Container>
      </section>
    </>
  )
}
