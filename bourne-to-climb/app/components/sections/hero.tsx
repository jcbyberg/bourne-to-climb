'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Phone } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { heroTextStagger } from '@/app/lib/animations'
import { emergencyCta } from '@/app/lib/data'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 gradient-hero" />
      <div className="container-width relative flex min-h-[90vh] flex-col items-center justify-center gap-12 py-20 text-center">
        <motion.div
          variants={heroTextStagger.container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6"
        >
          <motion.span
            variants={heroTextStagger.item}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-white/80"
          >
            Durham Region Arborist
          </motion.span>
          <motion.h1
            variants={heroTextStagger.item}
            className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          >
            Safe, Owner-Operated Tree Care for Oshawa, Courtice & Clarington
          </motion.h1>
          <motion.p variants={heroTextStagger.item} className="text-lg text-white/80 md:text-xl">
            Precise removals, meticulous pruning, stump grinding, and emergency cleanup backed by full insurance and a
            decade of hands-on experience.
          </motion.p>
          <motion.div
            variants={heroTextStagger.item}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild>
              <Link href="/contact">Request Your Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={emergencyCta.href}>
                <Phone className="mr-2 h-5 w-5" />
                {emergencyCta.label}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 text-white/70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <span className="text-sm font-medium uppercase tracking-[0.35em]">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  )
}
