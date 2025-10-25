export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-3 text-slate-600">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-tree-green-500 border-t-transparent" />
        <p className="text-sm font-medium">Loading Bourne To Climb...</p>
      </div>
    </div>
  )
}
