import { motion } from 'framer-motion'
import { Braces, Cpu, Database, Layers, Sparkles, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import { skillGroups } from '../data'

const icons = [Braces, Cpu, Database, Layers, Sparkles, Wrench]

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Sparkles size={16} /> 02 — Skills
        </p>
        <h2 className="section-heading">
          A toolkit built for <span className="text-gradient">full-stack ownership</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="card-glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-soft/20 text-accent transition-transform group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mb-4 text-lg font-bold text-slate-100">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.04 }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
