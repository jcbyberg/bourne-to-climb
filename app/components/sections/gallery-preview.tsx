"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { galleryItems } from "@/data/gallery"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Instagram } from "lucide-react"

export function GalleryPreviewSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const previewItems = galleryItems.slice(0, 6)
  const selectedItem = previewItems.find((item) => item.id === selectedId)

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-12">
        <SectionHeading eyebrow="Gallery" title="Arborist Projects – Completed with Care" />
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-surface/70 p-6 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex flex-1 flex-col gap-2 text-base text-muted-foreground sm:text-lg">
            <p>
              Recent removals, pruning transformations, and clean stump grinds. Follow @btctrees on Instagram for daily updates.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary/10"
            asChild
          >
            <Link href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
              <Instagram className="size-4" />
              Follow @btctrees
            </Link>
          </Button>
        </div>

        <Dialog onOpenChange={(open) => !open && setSelectedId(null)}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item) => (
              <DialogTrigger
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  "group relative aspect-square overflow-hidden rounded-3xl border border-border/60",
                  "bg-muted transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: item.objectPosition ?? "center center",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4 text-white opacity-0 transition group-hover:opacity-100">
                  <p className="text-sm font-semibold">{item.service}</p>
                  <p className="text-xs uppercase tracking-[0.25em]">
                    {item.location}
                  </p>
                </div>
              </DialogTrigger>
            ))}
          </div>

          <DialogContent className="max-w-4xl gap-6 p-4 sm:p-6">
            {selectedItem ? (
              <>
                <DialogTitle className="sr-only">
                  {selectedItem.service}
                </DialogTitle>
                <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.alt}
                    fill
                    sizes="(min-width: 1280px) 1024px, 100vw"
                    className="object-cover"
                    style={{
                      objectPosition: selectedItem.objectPosition ?? "center center",
                    }}
                  />
                </div>
                <div className="space-y-1 px-1 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">
                    {selectedItem.service}
                  </p>
                  <p>{selectedItem.location}</p>
                  <p>{selectedItem.alt}</p>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/70 p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Follow our work
            </p>
            <p className="text-lg font-semibold text-foreground">
              Daily stories and project highlights @btctrees
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link
              href="https://www.instagram.com/btctrees?igsh=ZDUwY3pycG52eWFz&utm_source=qr"
              target="_blank"
            >
              View more on Instagram →
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
