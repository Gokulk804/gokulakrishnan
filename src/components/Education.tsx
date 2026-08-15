import { GraduationCap, Languages, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { education, languages } from '../data'

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Sparkles size={16} /> 05 — Education
        </p>
        <h2 className="section-heading">
          Academic <span className="text-gradient">foundation</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto]">
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((edu, i) => (
            <Reveal key={edu.qualification} delay={i * 0.1}>
              <div className="card-glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1 hover:border-accent/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-bold leading-snug text-slate-100">{edu.qualification}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{edu.institution}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-mono text-accent-soft">{edu.year}</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-accent">
                    {edu.score}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="card-glass flex h-full min-w-[180px] flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Languages size={22} />
            </div>
            <p className="text-sm font-semibold text-slate-300">Languages</p>
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <span key={lang} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
