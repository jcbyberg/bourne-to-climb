'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { navigationLinks, emergencyCta } from '@/app/lib/data'
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/app/components/ui/dialog'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-width flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white font-semibold">
            BTC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-tree-green-600">
              Bourne To Climb
            </span>
            <span className="text-base font-bold text-slate-900">
              Tree Service
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-tree-green-600 ${
                pathname === link.href ? 'text-tree-green-600' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <a href={emergencyCta.href}>
              <Phone className="mr-2 h-4 w-4" />
              {emergencyCta.label}
            </a>
          </Button>
          <Button asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-sm">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-slate-900">Navigation</div>
              <DialogClose asChild>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                  <X className="h-5 w-5" />
                </button>
              </DialogClose>
            </div>
            <div className="mt-6 space-y-3">
              {navigationLinks.map((link) => (
                <DialogClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className={`block rounded-2xl border border-slate-200 px-4 py-3 text-base font-semibold text-slate-700 transition hover:border-tree-green-400 hover:text-tree-green-600 ${
                      pathname === link.href ? 'border-tree-green-500 text-tree-green-600' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </DialogClose>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <Button className="w-full" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href={emergencyCta.href}>
                  <Phone className="mr-2 h-4 w-4" />
                  {emergencyCta.label}
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}
