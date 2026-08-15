import { MapPin, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import Counter from './Counter'
import { profile, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Sparkles size={16} /> 01 — About Me
        </p>
        <h2 className="section-heading">
          Building reliable software, <span className="text-gradient">one migration at a time</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.1}>
          <div className="card-glass glow-border rounded-2xl p-8">
            <p className="leading-relaxed text-slate-300">{profile.summary}</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={16} className="text-accent" />
              {profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid h-full grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-glass flex flex-col justify-center rounded-2xl p-5 text-center transition-transform hover:-translate-y-1 hover:border-accent/30"
              >
                <span className="text-gradient font-mono text-3xl font-extrabold sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-2 text-xs leading-tight text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
