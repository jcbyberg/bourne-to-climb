import { GalleryFilter } from '@/app/gallery/gallery-tabs'
import { Metadata } from 'next'
import { Button } from '@/app/components/ui/button'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Browse recent tree removals, pruning projects, stump grinding, and storm cleanup completed by Bourne To Climb Tree Service.',
}

export default function GalleryPage() {
  return (
    <div className="bg-white">
      <section className="section-spacing text-center">
        <div className="container-width space-y-6">
          <span className="tag bg-purple-100 text-purple-600">Gallery</span>
          <h1 className="font-display text-4xl font-semibold text-slate-900">See Our Crews in Action</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            A snapshot of the pruning, removals, and storm response projects Dustin and the team complete across Oshawa,
            Courtice, and Clarington. Follow along on Instagram for live updates.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <GalleryFilter />
        </div>
      </section>

      <section className="section-spacing bg-slate-900 text-white">
        <div className="container-width flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-semibold">Want more behind-the-scenes?</h2>
          <p className="max-w-2xl text-white/70">
            Dustin posts time-lapses, rigging breakdowns, and seasonal tips throughout the year. Follow @123_btc to see what’s
            happening across Durham Region.
          </p>
          <Button asChild>
            <a href="https://www.instagram.com/123_btc" target="_blank" rel="noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
