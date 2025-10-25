import * as React from 'react'
import { cn } from '@/app/lib/utils'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: boolean
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, requiredIndicator, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('mb-1 inline-flex items-center gap-1 text-sm font-semibold text-slate-700', className)}
      {...props}
    >
      {children}
      {requiredIndicator && <span className="text-rose-500">*</span>}
    </label>
  )
)
Label.displayName = 'Label'
