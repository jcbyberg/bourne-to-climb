import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export function FinalCallToAction() {
  return (
    <section className="section-spacing bg-gradient-to-br from-tree-green-500 via-tree-green-600 to-emerald-500 text-white">
      <div className="container-width grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to Transform Your Property?</h2>
          <p className="text-lg text-white/90">
            Get a free, no-obligation quote from Dustin Bourne. Expect clear communication, fair pricing, and an owner on-site
            for every job.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button size="lg" variant="outline" asChild>
            <a href="tel:9054499019">Call 905-449-9019</a>
          </Button>
          <Button size="lg" className="bg-white text-tree-green-600 hover:bg-white/90" asChild>
            <Link href="/contact">Request Quote Online</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
