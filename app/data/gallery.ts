export type GalleryItem = {
  id: string
  src: string
  alt: string
  category: "Tree Removal" | "Pruning" | "Stump Grinding" | "Emergency"
  location: string
  service: string
  objectPosition?: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "/images/gallery/image1.jpg",
    alt: "Arborist in aerial boom lift performing high-reach sectional removal of a dead ash at the woodlot edge",
    category: "Tree Removal",
    location: "Oshawa, ON",
    service: "Aerial sectional removal of dead ash near property line",
    objectPosition: "center top",
  },
  {
    id: "gallery-2",
    src: "/images/gallery/Image 2.jpg",
    alt: "Fresh wood chips spread beneath mature trees after brush clearing and on-site chipping along a fence line",
    category: "Tree Removal",
    location: "Courtice, ON",
    service: "On-site chipping and mulch installation",
  },
  {
    id: "gallery-3",
    src: "/images/gallery/image 14v2.jpg",
    alt: "Arborist climber secured with spurs and flipline, topping a lakeside conifer during sectional removal (360° tiny-planet view)",
    category: "Tree Removal",
    location: "Kawartha Lakes, ON",
    service: "Technical sectional removal at cottage property",
  },
  {
    id: "gallery-5",
    src: "/images/gallery/Image 5.jpg",
    alt: "Crew chipping storm-damaged limbs into a tow-behind chipper, loading a dump trailer during residential post-storm cleanup",
    category: "Emergency",
    location: "Oshawa, ON",
    service: "Emergency brush removal, on-site chipping, and debris hauling",
  },
  {
    id: "gallery-6",
    src: "/images/gallery/Image 6.jpg",
    alt: "Arborist climber positioned on a long lateral limb performing end-weight reduction with a rigging line for controlled cuts over a backyard",
    category: "Pruning",
    location: "Whitby, ON",
    service: "Crown thinning and end-weight reduction over roofline",
  },
  {
    id: "gallery-7",
    src: "/images/gallery/Image 7.jpg",
    alt: "Crew using an Alaskan-style chainsaw mill to slab a large hardwood trunk into live-edge sections after a residential tree removal",
    category: "Tree Removal",
    location: "Courtice, ON",
    service: "On-site chainsaw milling and slab cutting for reuse",
  },
  {
    id: "gallery-8",
    src: "/images/gallery/Image 8.jpg",
    alt: "Stihl chainsaw with long bar resting on a freshly milled live-edge hardwood slab from urban tree salvage",
    category: "Stump Grinding",
    location: "Oshawa, ON",
    service: "Chainsaw milling and slab preparation for reuse",
  },
  {
    id: "gallery-9",
    src: "/images/gallery/image 9.jpg",
    alt: "Poolside evergreens after selective pruning and debris cleanup around a rock-waterfall feature",
    category: "Pruning",
    location: "Oshawa, ON",
    service: "Poolside clearance pruning, hedge shaping, and debris cleanup",
  },
  {
    id: "gallery-11",
    src: "/images/gallery/image 11.jpg",
    alt: "Limb performing end-weight reduction with a rigging line for controlled cuts over a backyard",
    category: "Tree Removal",
    location: "Courtice, ON",
    service: "Crown thinning and end-weight reduction over roofline",
  },
  {
    id: "gallery-12",
    src: "/images/gallery/image 12.jpg",
    alt: "Rigging lines secured to a dead hardwood while sections are cut and lowered during controlled removal near overhead utility wires",
    category: "Emergency",
    location: "Clarington, ON",
    service: "Rigged sectional removal with utility line clearance",
  },
  {
    id: "gallery-13",
    src: "/images/gallery/image 13.jpg",
    alt: "Detailed view of a clean stump grind flush with the lawn",
    category: "Stump Grinding",
    location: "Bowmanville, ON",
    service: "Precision stump grinding",
  },
  
]
