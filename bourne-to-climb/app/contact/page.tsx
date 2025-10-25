import { Metadata } from 'next'
import { ContactForm } from '@/app/components/sections/contact-form'
import { contactInformation } from '@/app/lib/data'
import { Button } from '@/app/components/ui/button'

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Contact Bourne To Climb Tree Service for tree removal, pruning, stump grinding, or emergency support across Oshawa, Courtice, and Clarington.',
}

export default function ContactPage() {
  const sanitizedPhone = contactInformation.phone.replace(/[^\d]/g, '')

  return (
    <div className="bg-white">
      <section className="section-spacing text-center">
        <div className="container-width space-y-6">
          <span className="tag bg-tree-green-100 text-tree-green-700">Contact</span>
          <h1 className="font-display text-4xl font-semibold text-slate-900">Get Your Free Quote</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Share a few details about your trees and Dustin will respond within one business day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <a href={`tel:${sanitizedPhone}`}>Call {contactInformation.phone}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${contactInformation.email}`}>Email {contactInformation.email}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50">
        <div className="container-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Tell us about your project</h2>
            <p className="mt-2 text-sm text-slate-600">All fields marked with * are required.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Direct Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">Phone</span>
                  <a href={`tel:${sanitizedPhone}`} className="text-base font-semibold text-slate-900">
                    {contactInformation.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">Email</span>
                  <a href={`mailto:${contactInformation.email}`} className="text-slate-600">
                    {contactInformation.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">Address</span>
                  <p>{contactInformation.address}</p>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate-400">Hours</span>
                  <p>{contactInformation.hours}</p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Service Radius</h3>
              <p className="mt-2 text-sm text-slate-600">
                Oshawa · Courtice · Clarington · Bowmanville · Whitby · Durham Region
              </p>
              <div className="mt-4 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <iframe
                  title="Bourne To Climb Tree Service location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.2447675794987!2d-78.85960222374109!3d43.88620493862851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d508a5fca04d13%3A0x316d36fb0a2256c6!2s76%20Cromwell%20Ave%2C%20Oshawa%2C%20ON%20L1J%204T6!5e0!3m2!1sen!2sca!4v1714185600000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Connect</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>
                  <a href={contactInformation.social.instagram} target="_blank" rel="noreferrer" className="hover:text-tree-green-600">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={contactInformation.social.facebook} target="_blank" rel="noreferrer" className="hover:text-tree-green-600">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={contactInformation.social.youtube} target="_blank" rel="noreferrer" className="hover:text-tree-green-600">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href={contactInformation.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-tree-green-600">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
