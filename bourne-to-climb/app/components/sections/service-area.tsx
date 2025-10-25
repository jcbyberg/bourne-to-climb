'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { serviceAreas } from '@/app/lib/data'
import { fadeInUp } from '@/app/lib/animations'

export function ServiceAreaSection() {
  return (
    <section className="section-spacing bg-slate-50">
      <div className="container-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="space-y-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
        >
          <span className="tag bg-blue-100 text-blue-700">Service Area</span>
          <h2 className="font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Proudly Serving Durham Region
          </h2>
          <p className="text-lg text-slate-600">
            From Oshawa’s mature neighbourhoods to rural properties throughout Clarington, we arrive with the right gear,
            crew, and insurance for every scenario. Emergency support is available day or night.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <MapPin className="h-5 w-5 text-tree-green-500" />
                <span className="font-semibold text-slate-800">{area}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-medium text-amber-900">
            <strong>24/7 Emergency Response:</strong> Call 905-449-9019 for immediate support after storms or windfall.
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-purple-100 via-sky-100 to-emerald-100 p-6 shadow-soft"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900">Local Knowledge Matters</h3>
            <p>
              Dustin grew up in Oshawa and understands how Lake Ontario winds and seasonal weather impact local trees.
              You’ll get practical recommendations tailored to your property and neighbours.
            </p>
            <p className="text-sm text-slate-600">
              Coverage includes Oshawa, Courtice, Clarington, Bowmanville, Whitby, and nearby communities throughout the
              Durham Region.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
