import Image from "next/image"
import type { Metadata } from "next"
import { CheckCircle2, Leaf, ShieldCheck, Zap } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { StatsStrip } from "@/components/sections/stats"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Dustin Bourne | Licensed Tree Service Arborist Oshawa",
  description:
    "Meet Dustin Bourne, certified arborist and owner of Bourne To Climb Tree Service. Licensed, WSIB-insured, delivering professional tree removals, pruning, and stump grinding throughout Oshawa, Courtice, and Clarington.",
  keywords: [
    "Dustin Bourne arborist",
    "certified tree service Oshawa",
    "licensed tree removal Durham Region",
    "WSIB insured tree service",
    "professional tree climber",
    "certified arborist Clarington",
    "tree service owner",
  ],
}

const certifications = [
  {
    icon: ShieldCheck,
    title: "Fully insured & WSIB covered",
    description:
      "Comprehensive liability insurance and WSIB coverage for residential and commercial projects.",
  },
  {
    icon: CheckCircle2,
    title: "Certified & safety-focused",
    description:
      "Training includes chainsaw safety, aerial rescue, and Electrical Safety Authority protocols.",
  },
  {
    icon: Leaf,
    title: "Sustainable practices",
    description:
      "Responsible disposal, chip recycling, and pruning approaches that preserve tree health.",
  },
  {
    icon: Zap,
    title: "Emergency ready",
    description:
      "Storm kits, lighting, and rigging gear ready for day or night emergency response.",
  },
]

const differentiators = [
  "Owner-operated on every job with a consistent crew.",
  "Professional-grade equipment sized for tight suburban access.",
  "We communicate clearly, arrive on time, and leave spaces cleaner than we found them.",
  "Competitive, transparent pricing with itemized quotes.",
  "Available day or night when storms bring unexpected damage.",
]

export default function AboutPage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24 lg:gap-16">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              Meet the owner
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              Dustin Bourne – local, licensed, and experienced
            </h1>
            <p className="text-lg text-muted-foreground">
              Dustin founded Bourne To Climb to deliver small-company care with
              professional standards. Each job is personally scoped, quoted, and
              completed with a focus on safety, communication, and a spotless
              finish.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/dustin-bourne-a2363375/" target="_blank">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 shadow-2xl">
            <Image
              src="/images/gallery/image 14v2.jpg"
              alt="Owner Dustin Bourne standing next to professional tree equipment"
              fill
              sizes="(min-width: 1280px) 480px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-6 text-muted-foreground">
            <SectionHeading
              eyebrow="Our Story"
              title="Owner-operated with a safety-first approach"
              description=""
            />
            <p>
              Dustin started in tree work over a decade ago, learning rope rigging,
              crane removals, and arborist best practices across the GTA. In 2013,
              he launched Bourne To Climb to bring that expertise back home to
              Durham Region with a focus on hometown service.
            </p>
            <p>
              Every job begins with a walk-around and honest conversation. We
              explain the plan, set expectations for access and cleanup, and work
              courteously around neighbours, pets, and gardens. When the job is
              complete, we rake, blow, and leave the space ready to enjoy.
            </p>
            <p>
              Whether it’s a tight removal over a pool, a hedge restoration, or a
              middle-of-the-night storm response, Dustin leads the crew with the
              right equipment, detailed planning, and a commitment to safety.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Why local homeowners choose Bourne To Climb
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed">
                  <span className="mt-[6px] size-2 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container>
        <StatsStrip className="mt-4" />
      </Container>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Certifications"
              title="Certified, insured, and prepared for every job"
              description="We invest in ongoing training, maintain detailed safety procedures, and bring professional-grade equipment to every site."
            />
          </div>
          <div className="grid gap-6">
            {certifications.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/90 p-6"
              >
                <span className="mt-1 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container className="grid gap-10 rounded-3xl border border-border/60 bg-surface/70 p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to put our team to work on your property?
            </h2>
            <p className="text-muted-foreground">
              Call {siteConfig.phone} or send us photos of your tree challenges.
              We&apos;ll schedule a walkthrough, provide a detailed quote, and set a
              date that works for you.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <Button size="lg" asChild>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
                Call {siteConfig.phone}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Request a quote</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
