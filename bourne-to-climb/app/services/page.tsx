import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion'
import { Button } from '@/app/components/ui/button'
import { faqItems, serviceCards } from '@/app/lib/data'

export const metadata: Metadata = {
  title: 'Tree Services in Oshawa, Courtice & Clarington',
  description:
    'Detailed overview of Bourne To Climb Tree Service offerings including tree removal, pruning, stump grinding, and emergency cleanup.',
}

const serviceDetails = {
  removal: {
    title: 'Tree Removal',
    summary:
      'Safe dismantling of hazardous, storm-damaged, or end-of-life trees using advanced rigging and equipment suited for tight properties.',
    process: [
      'On-site evaluation of structure, lean, and surrounding targets',
      'Permitting guidance and ESA coordination if required',
      'Sectional removal with rigging, cranes, or aerial lift',
      'Brush chipping, log hauling, and site cleanup',
      'Optional stump grinding and replanting prep',
    ],
  },
  pruning: {
    title: 'Pruning & Trimming',
    summary:
      'Structural pruning, deadwood removal, and hedge shaping to promote healthy canopy growth and maintain clearances around buildings and utilities.',
    process: [
      'Walkthrough with Dustin to identify goals and hazards',
      'Crown cleaning, thinning, and balance adjustments',
      'Roofline, driveway, and utility clearance pruning',
      'View and light restoration for yards or solar panels',
      'Debris removal and growth management schedule',
    ],
  },
  grinding: {
    title: 'Stump Grinding',
    summary:
      'Professional stump removal with turf-friendly grinders that leave your yard level and ready for fresh sod or landscaping.',
    process: [
      'Utility locate coordination prior to grinding',
      'Surface root tracing and removal',
      'Depth grinding 6-10 inches below grade',
      'Chip backfill and grade restoration',
      'Topsoil and seed application if requested',
    ],
  },
  emergency: {
    title: 'Storm & Emergency Response',
    summary:
      'Rapid mobilization for windfall, ice storm damage, or after-hours hazards with full insurance documentation for claims.',
    process: [
      'Immediate hazard assessment and stabilization',
      'Communication with insurers or property managers',
      'Controlled dismantling of compromised limbs',
      'Debris removal and temporary protection of structures',
      'Follow-up pruning or removal recommendations',
    ],
  },
} as const

type ServiceKey = keyof typeof serviceDetails

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="section-spacing">
        <div className="container-width space-y-6 text-center">
          <span className="tag bg-tree-green-100 text-tree-green-700">Services</span>
          <h1 className="font-display text-4xl font-semibold text-slate-900">Complete Tree Care Solutions</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Homeowners and property managers rely on Bourne To Climb for professional, insured tree services. Explore the full
            process for each offering below and reach out for a custom quote.
          </p>
        </div>
      </section>

      <div className="space-y-16">
        {serviceCards.map((service) => {
          const key = service.href.split('#')[1] as ServiceKey
          const detail = serviceDetails[key]
          return (
            <section key={service.title} id={key} className="section-spacing bg-slate-50">
              <div className="container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-5">
                  <span className="tag bg-white text-tree-green-600">{detail.title}</span>
                  <h2 className="font-display text-3xl font-semibold text-slate-900">{service.title}</h2>
                  <p className="text-lg text-slate-600">{detail.summary}</p>
                  <ol className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-left text-slate-700">
                    {detail.process.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-tree-green-500 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <Button asChild>
                    <a href="/contact">Book a walkthrough</a>
                  </Button>
                </div>
                <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">What to expect</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-tree-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-2xl border border-dashed border-tree-green-200 bg-tree-green-50 px-4 py-3 text-sm text-tree-green-700">
                    Free quotes · WSIB covered · Fully insured
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <section className="section-spacing">
        <div className="container-width">
          <h2 className="mb-6 text-center font-display text-3xl font-semibold text-slate-900">
            Common Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
