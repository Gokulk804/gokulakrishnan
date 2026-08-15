import { Heart } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent" fill="currentColor" /> using React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  )
}
