import { GitBranch, MoveUpRight } from 'lucide-react'
import portfolio from '@/data/portfolio.json'
import { SectionLabel } from './section-label'

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"
    >
      <SectionLabel>Selected work</SectionLabel>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.projects.map((project) => (
          <a
            key={project.number}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`reveal neon-border group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${project.accent} p-7 transition-all duration-500 hover:-translate-y-2 hover:border-amber-200/40`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110f] via-[#11110f]/75 to-transparent" />
            <div className="relative flex items-start justify-between">
              <span className="font-mono text-xs text-white/40">{project.number}</span>
              <MoveUpRight className="text-white/35 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-200" />
            </div>
            <div className="absolute inset-x-7 bottom-7">
              <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-200/70">
                {project.eyebrow}
              </div>
              <h2 className="mb-4 text-3xl tracking-tight">{project.title}</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/55">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-150" />
          </a>
        ))}
      </div>
      <div className="reveal mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-white/40">
        <span>More experiments on GitHub</span>
        <a
          href={portfolio.contact.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-white transition-colors hover:text-amber-200"
        >
          View profile <GitBranch />
        </a>
      </div>
    </section>
  )
}
