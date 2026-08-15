import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { profile } from '../data'

function useTypewriter(words: string[], typingSpeed = 55, deletingSpeed = 30, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? deletingSpeed : typingSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.taglineWords)

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 font-mono text-xs tracking-wide text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for freelance & full-time opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg text-slate-300 sm:text-xl"
          >
            <span>{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: '1.1em' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance leading-relaxed text-slate-400"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-soft px-6 py-3 font-semibold text-base-950 shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              <Mail size={18} /> Get In Touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Download size={18} /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center md:flex"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/25" />
          <div className="absolute inset-6 rounded-full border border-accent-soft/20" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-accent-soft/10 blur-2xl" />
          <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-base-800 to-base-900 shadow-2xl shadow-accent/20">
            <span className="bg-gradient-to-br from-accent to-accent-soft bg-clip-text font-mono text-6xl font-black text-transparent">
              {profile.initials}
            </span>
          </div>
          {['React', '.NET', 'SQL', 'AI'].map((label, i) => (
            <motion.span
              key={label}
              className="absolute rounded-full border border-white/10 bg-base-800/90 px-3 py-1 font-mono text-xs text-accent shadow-lg backdrop-blur-sm"
              style={{
                top: `${[8, 20, 78, 62][i]}%`,
                left: `${[75, 5, 12, 82][i]}%`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-accent"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  )
}
