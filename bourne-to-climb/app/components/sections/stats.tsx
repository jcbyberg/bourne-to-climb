'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { stats } from '@/app/lib/data'

export function StatsShowcase() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="section-spacing bg-slate-50" ref={ref}>
      <div className="container-width grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.6 },
              },
            }}
          >
            <div className="text-4xl font-semibold text-tree-green-600">
              <AnimatedNumber value={stat.value} />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function AnimatedNumber({ value }: { value: number }) {
  return <span>{value.toLocaleString('en-CA')}</span>
}
