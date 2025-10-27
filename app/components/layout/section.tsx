import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  className?: string
  children: ReactNode
  padded?: boolean
} & ComponentPropsWithoutRef<"section">

export function Section({
  id,
  className,
  children,
  padded = true,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        padded && "py-16 sm:py-20 lg:py-24",
        "scroll-mt-24",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
