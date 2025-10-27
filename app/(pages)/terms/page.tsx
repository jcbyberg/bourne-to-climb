import type { Metadata } from "next"

import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Terms of Service | Bourne To Climb Tree Service",
}

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">Terms of Service</h1>
        <p className="text-muted-foreground">
          This placeholder outlines the working agreements, payment expectations,
          and service guarantees for Bourne To Climb Tree Service. Replace with
          final legal content before launch.
        </p>
      </Container>
    </section>
  )
}
