import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md space-y-6">
        <span className="tag bg-red-100 text-red-600">404</span>
        <h1 className="font-display text-3xl font-semibold text-slate-900">We couldn’t find that page</h1>
        <p className="text-slate-600">
          Try heading back to the homepage to explore our services, gallery, and contact information.
        </p>
        <Button asChild>
          <Link href="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  )
}
