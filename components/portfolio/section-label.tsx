import type { ReactNode } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
      <span className="h-px w-8 bg-amber-300" />
      {children}
    </div>
  )
}
