import { Metadata } from 'next'
import { testimonials } from '@/app/lib/data'
import { Button } from '@/app/components/ui/button'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description:
    'Read testimonials from homeowners and property managers who trust Bourne To Climb Tree Service across Oshawa, Courtice, and Clarington.',
}

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <section className="section-spacing text-center">
        <div className="container-width space-y-6">
          <span className="tag bg-amber-100 text-amber-700">Reviews</span>
          <h1 className="font-display text-4xl font-semibold text-slate-900">Loved by Neighbours & Businesses</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            These words come from Durham Region homeowners, property managers, and local businesses who appreciate responsive
            communication and tidy results.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1 text-amber-500">★★★★★</span>
            <span>5.0 rating from local clients</span>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="container-width grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="mt-4 text-lg text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{testimonial.source}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-slate-900">Share Your Experience</h2>
            <p className="text-lg text-slate-600">
              Reviews help local homeowners feel confident when choosing an arborist. If we have worked on your property,
              please consider leaving feedback on your favourite platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="https://www.google.com/search?q=bourne+to+climb+tree+service+reviews" target="_blank" rel="noreferrer">
                Leave a Google Review
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.facebook.com/bourneto.climb" target="_blank" rel="noreferrer">
                Review on Facebook
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.instagram.com/123_btc" target="_blank" rel="noreferrer">
                DM on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
