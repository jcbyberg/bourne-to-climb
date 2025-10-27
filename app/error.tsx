"use client"

import Link from "next/link"
import { useEffect } from "react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="py-24">
      <Container className="max-w-2xl text-center">
        <div className="glass mx-auto grid gap-4 rounded-2xl p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Something went wrong
          </p>
          <h1 className="text-3xl font-bold">We&apos;ll get this fixed.</h1>
          <p className="text-muted-foreground">
            An unexpected error occurred while loading the page. Our team has
            been notified. Please try again, or contact us directly at{" "}
            <a
              className="font-semibold text-primary underline-offset-4 hover:underline"
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
            >
              {siteConfig.phone}
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button onClick={reset}>Try again</Button>
            <Button variant="outline" asChild>
              <Link href="/">Back to homepage</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
