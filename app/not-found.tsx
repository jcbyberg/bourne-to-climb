import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="max-w-2xl text-center">
        <div className="glass mx-auto grid gap-6 rounded-2xl p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            404
          </p>
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="text-muted-foreground">
            The page you&apos;re looking for may have been pruned or moved. Use
            the navigation above or head back to the homepage to keep exploring
            our tree care services.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/">Return home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
