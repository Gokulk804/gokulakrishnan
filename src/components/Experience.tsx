import { Briefcase, CheckCircle2, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Sparkles size={16} /> 03 — Experience
        </p>
        <h2 className="section-heading">
          8 years of <span className="text-gradient">hands-on delivery</span>
        </h2>
      </Reveal>

      <div className="relative mt-14 border-l border-white/10 pl-8 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[calc(2rem+7px)] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent shadow-[0_0_0_4px_rgba(63,208,255,0.15)] sm:-left-[calc(2.5rem+7px)]" />
            <div className="card-glass rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{job.title}</h3>
                    <p className="text-sm text-slate-400">{job.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                  {job.period}
                </span>
              </div>

              <p className="mt-5 font-semibold text-accent-soft">{job.project}</p>

              <ul className="mt-4 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
