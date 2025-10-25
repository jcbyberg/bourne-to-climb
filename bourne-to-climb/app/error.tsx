'use client'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md space-y-4">
        <h1 className="font-display text-3xl font-semibold text-slate-900">Something went wrong</h1>
        <p className="text-slate-600">{error.message || 'Please refresh the page or try again shortly.'}</p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-tree-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-tree-green-600"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
