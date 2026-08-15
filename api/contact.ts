import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

// Required env vars (set these in Vercel Project Settings → Environment Variables):
//   RESEND_API_KEY            — from https://resend.com/api-keys
//   CONTACT_TO_EMAIL          — the address you want to receive messages at (e.g. gokulk804@gmail.com)
//   CONTACT_FROM_EMAIL        — optional, defaults to Resend's shared "onboarding@resend.dev" sender,
//                                which works out of the box but can only deliver to the email address
//                                registered on your Resend account. Verify your own domain in Resend to
//                                send from/to any address.
//   SUPABASE_URL              — from Supabase Project Settings → API → Project URL
//   SUPABASE_SERVICE_ROLE_KEY — from Supabase Project Settings → API → service_role secret key.
//                                Server-side only — never expose this in frontend code or a VITE_ var.
//                                It bypasses Row Level Security, which is exactly what this function needs.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!apiKey || !toEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars')
    return res.status(500).json({ error: 'Server is not configured yet.' })
  }

  const { name, email, subject, message } = (req.body ?? {}) as {
    name?: string
    email?: string
    subject?: string
    message?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  // Log the submission to Supabase. Best-effort: a logging failure should never block
  // the visitor's message from being emailed, so errors here are only logged server-side.
  if (supabaseUrl && supabaseServiceKey) {
    try {
      const supabase = createClient(supabaseUrl, supabaseServiceKey)
      const forwardedFor = req.headers['x-forwarded-for']
      const ip = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor?.split(',')[0]?.trim()

      const { error: dbError } = await supabase.from('contact_submissions').insert({
        name,
        email,
        subject: subject || null,
        message,
        user_agent: req.headers['user-agent'] ?? null,
        ip: ip ?? null,
      })

      if (dbError) console.error('Supabase insert error:', dbError)
    } catch (err) {
      console.error('Unexpected error logging to Supabase:', err)
    }
  } else {
    console.warn('SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set — skipping contact log')
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: subject ? `Portfolio: ${subject}` : `New portfolio message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio site</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(502).json({ error: 'Failed to send email.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Unexpected error sending email:', err)
    return res.status(500).json({ error: 'Unexpected server error.' })
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
