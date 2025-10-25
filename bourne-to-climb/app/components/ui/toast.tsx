'use client'

import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { CheckCircle, XCircle, X } from 'lucide-react'
import { cn } from '@/app/lib/utils'

type ToastVariant = 'success' | 'error'

interface ToastOptions {
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

interface ToastContextValue {
  notify: (options: ToastOptions) => void
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined)

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<ToastOptions[]>([])

  const notify = React.useCallback((options: ToastOptions) => {
    setToasts((prev) => [...prev, options])
  }, [])

  return (
    <ToastContext.Provider value={{ notify }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        <ToastPrimitive.Viewport className="fixed bottom-6 right-6 z-[60] flex w-80 flex-col gap-3" />
        {toasts.map((toastOptions, index) => (
          <ToastPrimitive.Root
            key={index}
            className={cn(
              'relative flex w-full items-start gap-3 rounded-2xl border bg-white p-4 shadow-xl',
              toastOptions.variant === 'error'
                ? 'border-rose-200'
                : 'border-emerald-200'
            )}
            duration={toastOptions.duration ?? 4000}
            onOpenChange={(open) => {
              if (!open) {
                setToasts((prev) => prev.filter((_, i) => i !== index))
              }
            }}
            open
          >
            {(toastOptions.variant ?? 'success') === 'success' ? (
              <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
            ) : (
              <XCircle className="mt-1 h-5 w-5 text-rose-500" />
            )}
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-slate-900">
                {toastOptions.title}
              </h4>
              {toastOptions.description && (
                <p className="mt-1 text-sm text-slate-600">{toastOptions.description}</p>
              )}
            </div>
            <ToastPrimitive.Close className="text-slate-400 transition hover:text-slate-600">
              <X className="h-4 w-4" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        ))}
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  )
}
