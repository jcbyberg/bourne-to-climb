"use client"

import Link from "next/link"
import { Star } from "lucide-react"

import { featuredReviews } from "@/data/reviews"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"

export function ReviewsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Reviews"
            title="What our customers say"
            description="Homeowners, property managers, and contractors count on Bourne To Climb for honest quotes, careful work, and spotless cleanups."
          />
          <Button variant="outline" size="lg" asChild>
            <Link href="/reviews">Read all testimonials</Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={review.id}
              className="relative flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {review.author}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {review.source}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className="size-4"
                        fill={index < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-base font-semibold text-foreground">
                  {review.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {review.text}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-[0.25em]">
                  {review.location}
                </span>
                <span>{review.service}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/80 p-6 text-sm text-muted-foreground">
          <span>
            Have we pruned or removed trees for you? Share your experience and
            help local homeowners choose a trusted arborist.
          </span>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://g.page/r/CQc0o-quote" target="_blank">
                Leave a Google Review
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Submit Testimonial</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
