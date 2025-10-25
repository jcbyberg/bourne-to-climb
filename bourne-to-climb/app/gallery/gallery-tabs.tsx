'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'
import { galleryImages } from '@/app/lib/data'

const categories = ['all', 'Tree Removal', 'Pruning', 'Stump Grinding', 'Storm Cleanup'] as const

type Category = (typeof categories)[number]

export function GalleryFilter() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages
    return galleryImages.filter((image) => image.service === activeCategory)
  }, [activeCategory])

  return (
    <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as Category)}>
      <div className="flex flex-col gap-6">
        <TabsList className="flex flex-wrap justify-center gap-3 bg-slate-100 p-2">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category === 'all' ? 'All Projects' : category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeCategory}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-soft"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-900/80 to-transparent px-5 py-4 text-sm font-semibold text-white">
                  <span>{image.service}</span>
                  <span className="text-xs uppercase tracking-[0.3em]">Durham Region</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}
