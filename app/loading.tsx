import { Container } from "@/components/layout/container"

export default function Loading() {
  return (
    <div className="py-24">
      <Container className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Loading
          </p>
          <p className="max-w-sm text-muted-foreground">
            Please hang tight while we load the page content.
          </p>
        </div>
      </Container>
    </div>
  )
}
