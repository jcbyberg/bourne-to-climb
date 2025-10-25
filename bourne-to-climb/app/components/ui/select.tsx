import * as React from 'react'
import { cn } from '@/app/lib/utils'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  options: SelectOption[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, placeholder, options, value, defaultValue, ...rest }, ref) => {
    const finalValue = (value as string | undefined) ?? (defaultValue as string | undefined) ?? ''

    return (
      <div className="relative">
        <select
          ref={ref}
          value={finalValue}
          className={cn(
            'flex h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-base text-slate-900 shadow-sm transition focus:border-tree-green-400 focus:outline-none focus:ring-4 focus:ring-tree-green-100 disabled:cursor-not-allowed disabled:opacity-60',
            className
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
          ▾
        </span>
      </div>
    )
  }
)
Select.displayName = 'Select'
