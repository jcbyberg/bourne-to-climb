"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { services } from "@/data/services"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Tree care solutions tailored to your property"
          description="From hazardous removals to precise pruning and clean stump grinding, we protect your property and keep your landscape thriving."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-left leading-snug"
                  >
                    <span className="mt-1 size-2 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="ghost"
                asChild
                className="mt-6 justify-start px-0 text-primary hover:bg-transparent"
              >
                <Link href={`/services#${service.id}`}>{service.cta}</Link>
              </Button>
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition group-hover:border-primary/40" />
            </motion.article>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/70 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Not sure where to start?
            </p>
            <p className="text-lg font-semibold text-foreground">
              Book a walkthrough and we&apos;ll build a tree care plan together.
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Request Site Visit</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

