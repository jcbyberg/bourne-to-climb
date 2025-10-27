"use client"

import Image from "next/image"
import Link from "next/link"

import { galleryItems } from "@/data/gallery"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const categories = [
  { value: "All", label: "All" },
  { value: "Tree Removal", label: "Tree Removal" },
  { value: "Pruning", label: "Pruning" },
  { value: "Stump Grinding", label: "Stump Grinding" },
  { value: "Before/After", label: "Before / After" },
  { value: "Emergency", label: "Emergency" },
]

export function GalleryGrid() {
  return (
    <Tabs defaultValue="All" className="space-y-8">
      <TabsList className="flex w-full flex-wrap justify-start gap-3 overflow-x-auto border border-border/60 bg-background/90 p-2">
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => {
        const filtered =
          category.value === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === category.value)

        return (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-muted"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1 p-4">
                    <p className="text-sm font-semibold text-foreground">
                      {item.service}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {item.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        )
      })}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/80 p-6">
        <div className="text-sm text-muted-foreground">
          Want to see more? We share daily stories and before/after reels on
          Instagram and YouTube.
        </div>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="https://www.instagram.com/123_btc" target="_blank">
              Instagram
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://www.youtube.com/@btc-trees" target="_blank">
              YouTube Channel
            </Link>
          </Button>
        </div>
      </div>
    </Tabs>
  )
}
