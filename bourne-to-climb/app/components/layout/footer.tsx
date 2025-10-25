import Link from 'next/link'
import { contactInformation, navigationLinks } from '@/app/lib/data'

export function Footer() {
  const sanitizedPhone = contactInformation.phone.replace(/[^\d]/g, '')

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container-width grid gap-10 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-white">Bourne To Climb Tree Service</div>
          <p className="text-sm leading-relaxed text-slate-300">
            Owner-operated arborist delivering safe removals, precise pruning, and immaculate cleanup for residential and
            commercial properties across Durham Region.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="tag bg-emerald-400/20 text-emerald-200">Fully Insured</span>
            <span className="tag bg-emerald-400/20 text-emerald-200">WSIB Covered</span>
            <span className="tag bg-emerald-400/20 text-emerald-200">24/7 Emergency</span>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">Navigate</h3>
          <ul className="space-y-3 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="block text-xs uppercase tracking-wide text-slate-400">Phone</span>
              <a href={`tel:${sanitizedPhone}`} className="text-base font-semibold text-white">
                {contactInformation.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-slate-400">Email</span>
              <a href={`mailto:${contactInformation.email}`} className="transition hover:text-white">
                {contactInformation.email}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-slate-400">Service Area</span>
              <p>{contactInformation.address}</p>
            </li>
          </ul>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href={contactInformation.social.instagram} className="hover:text-white">
              Instagram
            </a>
            <a href={contactInformation.social.facebook} className="hover:text-white">
              Facebook
            </a>
            <a href={contactInformation.social.youtube} className="hover:text-white">
              YouTube
            </a>
            <a href={contactInformation.social.linkedin} className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Bourne To Climb Tree Service · Serving Oshawa, Courtice & Clarington
      </div>
    </footer>
  )
}
