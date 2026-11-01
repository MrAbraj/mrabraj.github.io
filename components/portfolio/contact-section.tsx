import { ArrowUpRight, BriefcaseBusiness, Mail, Sparkles } from 'lucide-react'
import portfolio from '@/data/portfolio.json'
import { SectionLabel } from './section-label'

export function ContactSection() {
  const { contact } = portfolio

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32"
    >
      <div className="reveal rounded-[2rem] border border-amber-200/20 bg-amber-200/[0.06] p-8 md:p-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <SectionLabel>Let&apos;s make something matter</SectionLabel>
            <h2 className="max-w-3xl text-5xl tracking-[-0.05em] md:text-7xl">
              {contact.title}
              <br />
              <span className="font-serif italic text-amber-200">
                {contact.titleAccent}
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="group flex w-fit items-center gap-3 whitespace-nowrap text-lg text-white transition-colors hover:text-amber-200"
            >
              <Mail className="text-amber-300" /> Email me
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-lg text-white/60 transition-colors hover:text-amber-200"
            >
              <BriefcaseBusiness className="text-amber-300" /> LinkedIn
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
      <footer className="flex flex-col justify-between gap-4 pt-8 text-xs text-white/30 md:flex-row">
        <span>© {new Date().getFullYear()} Abhinay Raj</span>
        <span className="flex items-center gap-2">
          <Sparkles className="size-3 text-amber-300" /> {contact.location}
        </span>
      </footer>
    </section>
  )
}
