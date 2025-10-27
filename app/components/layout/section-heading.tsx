"use client"

import { useAutoAnimate } from "@formkit/auto-animate/react"

import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  const [ref] = useAutoAnimate()

  return (
    <div
      ref={ref}
      className={cn(
        "space-y-4",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
