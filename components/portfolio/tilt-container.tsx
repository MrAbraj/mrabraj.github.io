'use client'

import type { PointerEvent, ReactNode } from 'react'

export function TiltContainer({ children }: { children: ReactNode }) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return

    const horizontal = (event.clientX / window.innerWidth - 0.5) * 2
    const vertical = (event.clientY / window.innerHeight - 0.5) * 2

    event.currentTarget.style.setProperty(
      '--tilt-x',
      `${(vertical * -0.4).toFixed(2)}deg`,
    )
    event.currentTarget.style.setProperty(
      '--tilt-y',
      `${(horizontal * 1.5).toFixed(2)}deg`,
    )
  }

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <main
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="tilt-tracker min-h-screen"
    >
      <div
        className="portfolio-shell relative isolate min-h-screen overflow-clip bg-[#11110f] text-[#f7f4ec] selection:bg-amber-300 selection:text-[#11110f]"
      >
        <div className="portfolio-ambient" aria-hidden="true" />
        {children}
      </div>
    </main>
  )
}
