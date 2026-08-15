import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

// 1. Create a free form at https://formspree.io (sign up, "New Form").
// 2. Copy the endpoint it gives you, e.g. https://formspree.io/f/abcdwxyz
// 3. Paste it below, replacing the placeholder.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 flex items-center gap-2 font-mono text-sm text-accent">
          <Send size={16} /> 06 — Contact
        </p>
        <h2 className="section-heading">
          Let's build something <span className="text-gradient">great together</span>
        </h2>
        <p className="mt-4 max-w-xl text-slate-400">
          Open to full-time roles, freelance projects, and collaborations. Drop a message and I'll get back to you soon.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            {[
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
              { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-accent/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
                  <p className="font-medium text-slate-200">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="card-glass glow-border rounded-2xl p-7 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Your Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project opportunity"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.07]"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-soft py-3 font-semibold text-base-950 shadow-lg shadow-accent/25 transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} /> Message sent — thanks for reaching out! I'll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 flex items-center gap-2 text-sm text-rose-400">
                <XCircle size={16} />
                Couldn't send right now — please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
