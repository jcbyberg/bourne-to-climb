"use client"

import { useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { stats } from "@/data/stats"
import { cn } from "@/lib/utils"

type StatProps = {
  className?: string
}

export function StatsStrip({ className }: StatProps) {
  const controls = useAnimationControls()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass grid gap-6 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-lg md:grid-cols-2 lg:grid-cols-4 lg:p-8",
        className,
      )}
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 0, y: 30 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, staggerChildren: 0.1 },
        },
      }}
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          className="space-y-1 rounded-xl border border-border/40 bg-surface/70 p-4"
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            {item.label}
          </p>
          <p className="text-3xl font-bold text-primary">{item.value}</p>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
