export type GalleryItem = {
  id: string
  src: string
  alt: string
  category: "Tree Removal" | "Pruning" | "Stump Grinding" | "Before/After" | "Emergency"
  location: string
  service: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "https://images.unsplash.com/photo-1522293712270-eba0736b9610?auto=format&fit=crop&w=1200&q=80",
    alt: "Climber rigging a large maple tree for sectional removal",
    category: "Tree Removal",
    location: "Courtice, ON",
    service: "Sectional removal over home",
  },
  {
    id: "gallery-2",
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    alt: "Crew stump grinding in a backyard with wood chips",
    category: "Stump Grinding",
    location: "Oshawa, ON",
    service: "Fence line stump grinding",
  },
  {
    id: "gallery-3",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    alt: "Freshly pruned cedar hedge",
    category: "Pruning",
    location: "Bowmanville, ON",
    service: "Canopy lift & hedge trim",
  },
  {
    id: "gallery-4",
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    alt: "Before and after tree removal showing clear yard",
    category: "Before/After",
    location: "Clarington, ON",
    service: "Backyard oak removal",
  },
  {
    id: "gallery-5",
    src: "https://images.unsplash.com/photo-1563306406-17ea67b9c081?auto=format&fit=crop&w=1200&q=80",
    alt: "Emergency response removing storm-damaged limb",
    category: "Emergency",
    location: "Oshawa, ON",
    service: "Storm response",
  },
  {
    id: "gallery-6",
    src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=1200&q=80",
    alt: "Crew performing structural pruning on mature tree",
    category: "Pruning",
    location: "Whitby, ON",
    service: "Structural pruning",
  },
]
