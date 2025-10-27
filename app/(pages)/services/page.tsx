import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { services } from "@/data/services"
import { faqs } from "@/data/faqs"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Tree Services in Durham Region | Removals, Pruning & Stump Grinding",
  description:
    "Discover Bourne To Climb Tree Service offerings: safe tree removals, precision pruning, stump grinding, and 24/7 emergency storm cleanup across Oshawa, Courtice, and Clarington.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary/5 via-background to-background">
        <Container className="space-y-6 py-20 text-center sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            Services
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Complete tree care solutions for residential &amp; commercial
            properties
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
            From sectional removals in tight yards to multi-trunk pruning and
            24/7 storm response, we bring the right equipment, crew, and cleanup
            to protect your property.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Request a consultation</Link>
          </Button>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="grid gap-8 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm lg:grid-cols-[1fr_1fr] lg:gap-12 lg:p-12"
            >
              <div className="space-y-4">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <service.icon className="size-5" />
                </span>
                <h2 className="text-3xl font-semibold">{service.headline}</h2>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 leading-relaxed"
                    >
                      <span className="mt-1 size-2 rounded-full bg-primary/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" asChild className="mt-4 w-fit px-0">
                  <Link href="/contact">
                    {service.cta}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6">
                <div className="rounded-2xl border border-border/60 bg-surface/70 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Our Process
                  </h3>
                  <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {service.process.map((step, index) => (
                      <li key={step} className="flex gap-3 leading-relaxed">
                        <span className="font-semibold text-primary">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl border border-border/60 bg-surface/70 p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    Equipment we bring
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {service.equipment.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Answers to the questions we hear most often from homeowners and property managers."
          />
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index + 1}`}
                className="overflow-hidden rounded-2xl border border-border/60 bg-background"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  )
}
