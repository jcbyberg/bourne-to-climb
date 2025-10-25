import { HeroSection } from '@/app/components/sections/hero'
import { ServicesSection } from '@/app/components/sections/services'
import { ServiceAreaSection } from '@/app/components/sections/service-area'
import { GalleryPreview } from '@/app/components/sections/gallery-preview'
import { ReviewsSection } from '@/app/components/sections/reviews'
import { FinalCallToAction } from '@/app/components/sections/final-cta'

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ServicesSection />
      <ServiceAreaSection />
      <GalleryPreview />
      <ReviewsSection />
      <FinalCallToAction />
    </div>
  )
}
