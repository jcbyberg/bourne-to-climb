'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/app/lib/utils'

export const Tabs = TabsPrimitive.Root

export const TabsList = ({ className, ...props }: TabsPrimitive.TabsListProps) => (
  <TabsPrimitive.List
    className={cn(
      'inline-flex h-12 items-center justify-center rounded-full bg-slate-100 p-1 text-sm font-medium text-slate-500',
      className
    )}
    {...props}
  />
)

export const TabsTrigger = ({ className, ...props }: TabsPrimitive.TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 data-[state=active]:bg-white data-[state=active]:text-slate-900',
      className
    )}
    {...props}
  />
)

export const TabsContent = ({ className, ...props }: TabsPrimitive.TabsContentProps) => (
  <TabsPrimitive.Content
    className={cn('mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', className)}
    {...props}
  />
)
