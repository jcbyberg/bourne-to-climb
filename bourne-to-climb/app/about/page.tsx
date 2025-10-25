import Image from 'next/image'
import { Metadata } from 'next'
import { StatsShowcase } from '@/app/components/sections/stats'
import { Button } from '@/app/components/ui/button'

export const metadata: Metadata = {
  title: 'About Dustin Bourne',
  description:
    'Learn about Dustin Bourne, the owner-operator behind Bourne To Climb Tree Service serving Oshawa, Courtice, and Clarington.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="section-spacing">
        <div className="container-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="tag bg-tree-green-100 text-tree-green-700">Owner Operated</span>
            <h1 className="font-display text-3xl font-semibold text-slate-900 md:text-5xl">
              Meet Dustin Bourne
            </h1>
            <p className="text-lg text-slate-600">
              Dustin launched Bourne To Climb after a decade of working alongside some of Ontario’s most respected arborists.
              Every assessment, climb, and cleanup is handled directly by him to guarantee consistent quality.
            </p>
            <p className="text-base text-slate-600">
              Safety-first rigging, spotless yards, and clear communication are the foundation of the business. Dustin is
              fully insured, WSIB covered, and continues ongoing training to stay ahead of industry standards.
            </p>
            <Button asChild>
              <a href="https://www.linkedin.com/in/dustin-bourne" target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e1?auto=format&fit=crop&w=900&q=80"
              alt="Arborist smiling while standing beside climbing gear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <StatsShowcase />

      <section className="section-spacing bg-slate-900 text-white">
        <div className="container-width grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-semibold">Why Homeowners Choose Bourne To Climb</h2>
            <ul className="space-y-4 text-base text-white/80">
              <li>
                <strong className="text-white">Owner on every job:</strong> Dustin is the first on-site and the last to leave,
                ensuring nothing is missed.
              </li>
              <li>
                <strong className="text-white">Professional equipment:</strong> Rigging gear, stump grinders, and aerial lifts
                are maintained meticulously for safe operation.
              </li>
              <li>
                <strong className="text-white">Neighbour-friendly cleanups:</strong> Lawns are raked, driveways swept, and
                debris hauled away.
              </li>
              <li>
                <strong className="text-white">Transparent pricing:</strong> Quotes outline each step so you understand exactly
                what’s included.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Credentials & Insurance</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Fully insured and WSIB covered',
                'Working at Heights certified',
                'Chainsaw & aerial rescue trained',
                'Member of the International Society of Arboriculture',
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/15 bg-white/5 p-4 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
