'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/app/lib/utils'

export const Accordion = AccordionPrimitive.Root

export const AccordionItem = ({ className, ...props }: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    className={cn('overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm', className)}
    {...props}
  />
)

export const AccordionTrigger = ({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="px-6">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-slate-900 transition hover:text-tree-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tree-green-200',
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

export const AccordionContent = ({ className, ...props }: AccordionPrimitive.AccordionContentProps) => (
  <AccordionPrimitive.Content
    className={cn('px-6 pb-6 text-base text-slate-600', className)}
    {...props}
  />
)
