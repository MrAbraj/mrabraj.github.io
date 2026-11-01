import portfolio from '@/data/portfolio.json'
import { SectionLabel } from './section-label'

export function AboutSection() {
  const { about } = portfolio

  return (
    <section
      id="about"
      className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-20"
    >
      <div className="reveal">
        <SectionLabel>How I think</SectionLabel>
        <p className="max-w-2xl text-3xl leading-tight tracking-tight text-white/90 md:text-5xl">
          {about.title}{' '}
          <span className="text-white/40">{about.titleAccent}</span>
        </p>
        <p className="mt-8 max-w-lg leading-relaxed text-white/50">
          {about.description}
        </p>
      </div>
      <div className="reveal reveal-delay-1">
        <SectionLabel>Toolkit</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {about.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition-colors hover:border-amber-300/50 hover:text-amber-200"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="text-4xl text-amber-200">{about.yearsExperience}</div>
          <div className="mt-2 text-xs uppercase tracking-widest text-white/35">
            Years building
          </div>
        </div>
      </div>
    </section>
  )
}
