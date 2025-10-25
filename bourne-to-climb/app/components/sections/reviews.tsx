'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/app/lib/data'
import { fadeInUp } from '@/app/lib/animations'

export function ReviewsSection() {
  return (
    <section className="section-spacing bg-slate-900 text-white">
      <div className="container-width">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <span className="tag bg-white/15 text-white/90">Community Trusted</span>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Neighbours Across Durham Recommend Dustin
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Homeowners, property managers, and fellow trades count on Bourne To Climb Tree Service for responsive
            communication, tidy cleanups, and safe, technical rigging.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.quote}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 text-amber-300">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/90">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm font-semibold text-white">{testimonial.name}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/50">{testimonial.source}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/search?q=bourne+to+climb+tree+service+reviews"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Leave a Google Review →
          </a>
        </div>
      </div>
    </section>
  )
}
