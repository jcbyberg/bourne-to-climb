"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, PhoneCallIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton
        className="glass w-[min(420px,92vw)] border border-border/60 bg-background/95 p-0 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-6 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
              Navigation
            </p>
            <nav className="mt-4 space-y-3">
              {siteConfig.navItems.map((item) => {
                const isActive = pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/90 hover:bg-muted/80 hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-colors",
                        isActive ? "bg-primary" : "bg-border",
                      )}
                    />
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="grid gap-4 rounded-lg bg-muted/60 p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PhoneCallIcon className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Call or Text
                </p>
                <Link
                  href={phoneHref}
                  className="text-lg font-semibold text-foreground/90"
                >
                  {siteConfig.phone}
                </Link>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {siteConfig.emergencyHours} • Serving{" "}
              {siteConfig.serviceAreas.join(", ")}
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={phoneHref}>Call Now</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{siteConfig.address}</span>
            <span className="font-medium text-primary">{siteConfig.shortName}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
