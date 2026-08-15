# Gokulakrishnan — Portfolio

Animated, professional portfolio site built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, generated from resume content. Ready to deploy on Vercel's free tier.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Before deploying

1. **Contact form (Resend)** — the form posts to a Vercel Serverless Function at `api/contact.ts`, which sends the email via your [Resend](https://resend.com) account. Nothing is exposed to the browser.
   - Get an API key: [resend.com/api-keys](https://resend.com/api-keys) → Create API Key.
   - In your **Vercel project** → Settings → Environment Variables, add:
     - `RESEND_API_KEY` — the key from above
     - `CONTACT_TO_EMAIL` — the address you want messages delivered to (e.g. `gokulk804@gmail.com`)
     - `CONTACT_FROM_EMAIL` *(optional)* — only set this once you've verified your own sending domain in Resend (e.g. `Portfolio Contact <hello@yourdomain.com>`). Until then, leave it unset — it falls back to Resend's shared `onboarding@resend.dev` sender.
   - **Sandbox limitation:** without a verified domain, Resend only lets `onboarding@resend.dev` deliver to the email address registered on your own Resend account. That's fine here since the form is meant to email *you* — just make sure `CONTACT_TO_EMAIL` matches your Resend account's email. To accept mail at any address / send from your own domain, verify a domain under Resend → Domains, then set `CONTACT_FROM_EMAIL`.
   - Redeploy after adding/changing env vars (Vercel doesn't hot-reload them).
   - To test locally: `npm i -g vercel`, copy `.env.example` to `.env` and fill it in, then run `vercel dev` (plain `npm run dev` won't run the `/api` function since that's a Vite-only dev server).

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
