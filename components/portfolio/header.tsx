'use client'

import { useState } from 'react'
import { Eye, Menu, X } from 'lucide-react'
import portfolio from '@/data/portfolio.json'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky-header sticky top-0 z-20">
      <div className="sticky-header__content flex w-full items-center justify-between px-6 py-6 md:px-24">
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-baseline gap-2"
        >
          <span className="font-serif text-2xl italic tracking-[-0.07em] text-amber-200 transition-colors group-hover:text-amber-100">
            Δbhīņay Řaj
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 p-1 text-sm text-white/60 md:flex">
          {portfolio.navigation.map((item) => (
            <a
              key={item.href}
              className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-amber-200/10 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="ml-1 flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-4 py-2 text-amber-100 transition-colors duration-200 hover:border-amber-200/40 hover:bg-amber-200/[0.14] hover:text-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
            href={portfolio.resume}
            target="_blank"
            rel="noreferrer"
          >
            <Eye className="size-4" /> Resume
          </a>
        </nav>
        <button
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full border border-white/15 p-2 text-white/70 md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-6 right-6 top-20 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#1b1b17]/95 p-4 text-base shadow-2xl backdrop-blur-xl md:hidden"
          >
            {portfolio.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-amber-200/10 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-xl border border-amber-200/20 bg-amber-200/[0.06] px-4 py-3 text-amber-100 transition-colors hover:bg-amber-200/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
            >
              <Eye className="size-4" /> Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
