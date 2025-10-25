'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { galleryImages } from '@/app/lib/data'
import { fadeInUp } from '@/app/lib/animations'

export function GalleryPreview() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-width">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <span className="tag bg-purple-100 text-purple-600">Proof of Work</span>
          <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Recent Jobs Around Durham Region
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            See how we handle removals, pruning, and storm cleanup. Follow along on Instagram for weekly project updates and
            behind-the-scenes rigging shots.
          </p>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="group relative overflow-hidden rounded-3xl border border-white/80 bg-slate-100 shadow-soft"
              variants={fadeInUp}
              transition={{ delay: index * 0.08 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800">
                {image.service}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="https://www.instagram.com/123_btc"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-tree-green-400 hover:text-tree-green-600"
          >
            View more work on Instagram →
          </Link>
        </div>
      </div>
    </section>
  )
}
