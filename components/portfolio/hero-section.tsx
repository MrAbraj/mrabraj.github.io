import { ArrowDown } from 'lucide-react'
import portfolio from '@/data/portfolio.json'

export function HeroSection() {
  const { hero } = portfolio

  return (
    <section
      id="top"
      className="relative z-10 mx-auto flex min-h-[600px] max-w-6xl items-center px-6 pb-12 pt-12 md:min-h-[680px] md:px-10 md:pt-4"
    >
      <div className="max-w-5xl">
        <h1 className="reveal max-w-5xl text-[clamp(3.4rem,10vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
          {hero.title}
          <br />
          <span className="font-serif italic text-amber-200">{hero.titleAccent}</span>
        </h1>
        <div className="reveal reveal-delay-1 mt-12 flex max-w-2xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="text-lg leading-relaxed text-white/55 md:max-w-md">
            {hero.description}
          </p>
          <a
            href="#experience"
            className="group flex w-fit items-center gap-3 text-sm font-medium text-white"
          >
            {hero.linkLabel}
            <span className="flex size-10 items-center justify-center rounded-full bg-amber-300 text-[#11110f] transition-transform group-hover:translate-x-1">
              <ArrowDown />
            </span>
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-10 right-8 hidden select-none font-mono text-[10px] uppercase tracking-[0.3em] text-white/25 md:block [writing-mode:vertical-rl]">
        Scroll to explore · {hero.year}
      </div>
    </section>
  )
}
