import { Layers, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Sparkles size={16} /> 04 — Projects
        </p>
        <h2 className="section-heading">
          Selected <span className="text-gradient">work & builds</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <div className="card-glass group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-soft/20 text-accent">
                  <Layers size={22} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-accent-soft">
                  {project.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
