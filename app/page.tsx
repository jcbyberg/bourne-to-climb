import { FinalCtaSection } from "@/components/sections/cta-section"
import { GalleryPreviewSection } from "@/components/sections/gallery-preview"
import { HeroSection } from "@/components/sections/hero"
import { ReviewsSection } from "@/components/sections/reviews"
import { ServiceAreaSection } from "@/components/sections/service-area"
import { ServicesSection } from "@/components/sections/services"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ServiceAreaSection />
      <GalleryPreviewSection />
      <ReviewsSection />
      <FinalCtaSection />
    </>
  )
}
