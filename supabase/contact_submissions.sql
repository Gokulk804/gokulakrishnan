-- Run this once in your Supabase project's SQL Editor (Project → SQL Editor → New query)
-- to create the table that logs every contact-form submission.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  user_agent text,
  ip text,
  created_at timestamptz not null default now()
);

-- Row Level Security is enabled with NO policies added on purpose: the contact form
-- writes through the serverless function using your service_role key, which bypasses
-- RLS entirely. This keeps the table completely inaccessible from the browser/anon key.
alter table contact_submissions enable row level security;

-- Optional: index for sorting/filtering the inbox view by most recent first.
create index if not exists contact_submissions_created_at_idx
  on contact_submissions (created_at desc);
