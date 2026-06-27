-- Schema Supabase pentru ProliDent Clinic (Cluj-Napoca)
-- Rulează acest fișier în SQL Editor din dashboard-ul Supabase.

create extension if not exists "uuid-ossp";

-- ============================================================
-- PATIENTS
-- ============================================================
create table if not exists patients (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  phone text not null unique,
  email text,
  created_at timestamptz not null default now(),
  last_visit date,
  next_appointment timestamptz
);

-- ============================================================
-- APPOINTMENTS
-- ============================================================
create type appointment_status as enum ('scheduled', 'completed', 'cancelled', 'no-show');

create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid not null references patients(id) on delete cascade,
  date date not null,
  time time not null,
  treatment_type text not null,
  status appointment_status not null default 'scheduled',
  reminder_evening_sent boolean not null default false,
  reminder_morning_sent boolean not null default false,
  post_treatment_sent boolean not null default false,
  notes text,
  created_at timestamptz not null default now()
);

create index if not exists idx_appointments_patient on appointments(patient_id);
create index if not exists idx_appointments_date on appointments(date);

-- ============================================================
-- REMINDERS LOG
-- ============================================================
create type reminder_type as enum ('evening_before', 'morning_of', 'post_treatment');
create type reminder_channel as enum ('sms', 'email', 'whatsapp');
create type reminder_status as enum ('sent', 'failed', 'simulated');

create table if not exists reminders_log (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid not null references appointments(id) on delete cascade,
  type reminder_type not null,
  sent_at timestamptz not null default now(),
  channel reminder_channel not null,
  status reminder_status not null default 'sent'
);

create index if not exists idx_reminders_log_appointment on reminders_log(appointment_id);

-- ============================================================
-- WAITLIST
-- ============================================================
create table if not exists waitlist (
  id uuid primary key default uuid_generate_v4(),
  patient_id uuid not null references patients(id) on delete cascade,
  preferred_date_range daterange not null,
  treatment_type text not null,
  notified_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_waitlist_patient on waitlist(patient_id);

-- ============================================================
-- ROW LEVEL SECURITY (recomandare pentru producție)
-- ============================================================
alter table patients enable row level security;
alter table appointments enable row level security;
alter table reminders_log enable row level security;
alter table waitlist enable row level security;

-- Politicile de mai jos sunt orientative — ajustează-le pentru autentificarea reală a pacienților/staff-ului.
create policy "Service role acces deplin - patients" on patients for all using (true) with check (true);
create policy "Service role acces deplin - appointments" on appointments for all using (true) with check (true);
create policy "Service role acces deplin - reminders_log" on reminders_log for all using (true) with check (true);
create policy "Service role acces deplin - waitlist" on waitlist for all using (true) with check (true);
