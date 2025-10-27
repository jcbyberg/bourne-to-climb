import type { Metadata } from "next"

import { Container } from "@/components/layout/container"

export const metadata: Metadata = {
  title: "Privacy Policy | Bourne To Climb Tree Service",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This placeholder outlines how we collect, use, and protect your
          personal information when you contact Bourne To Climb Tree Service.
          Update this page with final policy content before launch.
        </p>
      </Container>
    </section>
  )
}
