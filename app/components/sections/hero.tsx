"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, PhoneCall, ShieldCheck, Sun } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { fadeInUp, heroTextStagger } from "@/lib/animations"

export function HeroSection() {
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/btc-hero-cropped.jpg"
          alt="Bourne To Climb crew rigging a maple removal"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 70%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,32,24,0.55)_0%,rgba(6,24,20,0.32)_55%,rgba(2,8,6,0.45)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,88,66,0.26)_0%,_rgba(0,0,0,0)_68%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
        <motion.div
          variants={heroTextStagger.container}
          initial="hidden"
          animate="show"
          className="space-y-8 text-white lg:max-w-3xl"
        >
          <motion.span
            variants={heroTextStagger.item}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-white/75 shadow-lg backdrop-blur"
          >
            <Sun className="size-3.5" />
            Trusted Tree Experts
          </motion.span>

          <motion.h1
            variants={heroTextStagger.item}
            className="text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Professional Tree Care in Oshawa & Clarington
          </motion.h1>

          <motion.p
            variants={heroTextStagger.item}
            className="max-w-xl text-lg text-white/80 sm:text-xl"
          >
            Owner-operated and fully insured. Safe removals, precise pruning,
            clean finishes, and 24/7 emergency response across Durham Region.
          </motion.p>

          <motion.div
            variants={heroTextStagger.item}
            className="flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="border border-white/30 text-white hover:border-white/60" asChild>
              <Link href="/services">View Services</Link>
            </Button>
            <a
              href={phoneHref}
              className="group inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:bg-white/20"
            >
              <PhoneCall className="size-4" />
              Tap to call {siteConfig.phone}
            </a>
          </motion.div>

          <motion.div
            variants={heroTextStagger.item}
            className="flex flex-wrap gap-4 text-sm text-white/75"
          >
            <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 shadow-lg backdrop-blur">
              <ShieldCheck className="size-4 text-primary-foreground" />
              Licensed, insured &amp; WSIB covered
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 shadow-lg backdrop-blur">
              24/7 Emergency Service
            </span>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="grid gap-4 rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-xl lg:mb-1 lg:w-96"
        >
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Serving Durham Region
            </p>
            <p className="text-2xl font-semibold">
              Oshawa | Courtice | Clarington
            </p>
            <p className="text-sm text-white/70">
              Tight-space removals, hedge maintenance, and storm cleanup with
              professional equipment and meticulous clean-up every time.
            </p>
          </div>
          <div className="grid gap-2 text-sm text-white/80">
            <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
              <span>Tree removals</span>
              <span className="text-xs uppercase text-white/60"></span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
              <span>Pruning / trimming incl. hedges</span>
              <span className="text-xs uppercase text-white/60"></span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
              <span>Stump grinding</span>
              <span className="text-xs uppercase text-white/60"></span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}














