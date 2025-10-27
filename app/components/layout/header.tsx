"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PhoneCallIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        isScrolled && "border-border/60 bg-surface/95 shadow-sm backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-16 w-64 sm:h-20 sm:w-80">
            <Image
              src="/bourne to climb v3.svg"
              alt="Bourne To Climb Tree Service"
              fill
              priority
              sizes="(max-width: 640px) 15rem, (max-width: 1024px) 18rem, 22rem"
              className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </span>
         
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="lg" asChild>
            <Link href={phoneHref}>
              <PhoneCallIcon className="size-4" />
              <span className="font-semibold">{siteConfig.phone}</span>
            </Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}


