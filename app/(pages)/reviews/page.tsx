import type { Metadata } from "next"
import Link from "next/link"
import { Star } from "lucide-react"

import { reviews } from "@/data/reviews"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Customer Reviews | Bourne To Climb Tree Service",
  description:
    "Read verified testimonials for Bourne To Climb Tree Service from Reddit, Industry Oversight, WhoDoYou, Google, and Facebook clients across Durham Region.",
}

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-background to-background">
        <Container className="space-y-6 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Testimonials
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Trusted by homeowners, property managers &amp; contractors
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            See what clients across Durham Region say about our tree removals,
            pruning, stump grinding, and emergency services.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://g.page/r/CQc0o-quote" target="_blank">
                Leave a Google review
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Share your experience</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Real feedback"
            title="Consistently rated 5.0 / 5.0"
            description="We build long-term relationships with homeowners by showing up on time, communicating clearly, and leaving properties spotless."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm"
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
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span className="uppercase tracking-[0.25em]">
                    {review.location}
                  </span>
                  <span>{review.service}</span>
                  <span>{new Date(review.date).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-3xl border border-border/60 bg-surface/80 p-8 text-sm text-muted-foreground">
            <p>
              Need more references? We&apos;re happy to connect you with past
              clients in your neighbourhood. Reach out through the contact form
              and we&apos;ll share relevant project photos and testimonials.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
