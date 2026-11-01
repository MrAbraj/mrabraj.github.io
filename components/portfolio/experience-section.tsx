import { SectionLabel } from './section-label'
import portfolio from '@/data/portfolio.json'

export function ExperienceSection() {
  const { experience } = portfolio

  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
    >
      <div className="reveal">
        <SectionLabel>Experience</SectionLabel>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="max-w-sm text-4xl leading-tight tracking-[-0.05em] text-white/90 md:text-5xl">
              {experience.title}
              <span className="text-amber-200">.</span>
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-white/45">
              {experience.summary}
            </p>
          </div>
          <div className="relative border-l border-white/15 pl-7 md:pl-10">
            <div className="absolute -left-[5px] top-2 size-2 rounded-full bg-amber-300 shadow-[0_0_20px_rgba(253,230,138,0.8)]" />
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="text-2xl font-semibold">G</span>
              <span className="text-xl text-white/80">{experience.company}</span>
              <span className="rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1 text-xs text-amber-200">
                {experience.dates}
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 text-lg font-medium">
                <span>{experience.role}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                  {experience.product}
                </span>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/55">
                {experience.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
