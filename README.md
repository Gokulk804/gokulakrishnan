# Gokulakrishnan — Portfolio

Animated, professional portfolio site built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, generated from resume content. Ready to deploy on Vercel's free tier.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Before deploying

1. **Contact form** — this uses [Formspree](https://formspree.io) (free tier: 50 submissions/month) so the "Contact" form can email you without a backend.
   - Sign up at formspree.io → create a new form → copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`).
   - Paste it into `src/components/Contact.tsx`, replacing the `FORMSPREE_ENDPOINT` placeholder.
   - Until you do this, the form will show a friendly error telling visitors to email you directly — nothing breaks.

2. **Resume file** — `public/resume.pdf` is your resume, downloadable from the site's "Resume" buttons. Replace it any time you update your resume (keep the filename `resume.pdf`, or update the path in `src/data.ts`).

3. **Content** — all resume text (summary, skills, experience, projects, education) lives in `src/data.ts`. Edit that one file to update copy without touching components.

## Deploy to Vercel (free)

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite — framework preset "Vite", build command `npm run build`, output directory `dist`. Just click Deploy.

**Option B — via Vercel CLI:**
```bash
npm i -g vercel
vercel
```
Follow the prompts (first time asks to link/create a project). Then `vercel --prod` to publish.

## Tech stack

- **Vite + React 18 + TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll reveals, hero animations, and micro-interactions
- **lucide-react** for icons
- Zero backend — fully static, Formspree handles the contact form
