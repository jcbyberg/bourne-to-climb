'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { serviceCards } from '@/app/lib/data'
import { fadeInUp, staggerChildren } from '@/app/lib/animations'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'

export function ServicesSection() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-width">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="tag bg-tree-green-100 text-tree-green-700">What We Do</span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-900 md:text-4xl">
            Complete Tree Care Tailored to Your Property
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From precision pruning to crane-supported removals, every job is handled by Dustin Bourne and a trusted local
            crew, backed by proper insurance and WSIB coverage.
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCards.map((service, index) => (
            <motion.div key={service.title} variants={fadeInUp} transition={{ delay: index * 0.08 }}>
              <Card className="h-full border border-slate-200/70 bg-white/80 shadow-none backdrop-blur">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tree-green-100 text-tree-green-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">{service.description}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-tree-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="text-sm font-semibold text-tree-green-600 hover:text-tree-green-700">
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
