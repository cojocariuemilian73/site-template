# ProliDent Clinic — Platformă de Achiziție & Fidelizare Pacienți

Platformă Next.js 14 (App Router) pentru ProliDent Clinic (Cluj-Napoca), cu programare online, reminder-e
automate (SMS/Email/WhatsApp), flow dedicat de urgențe, calculator de rate și dosar digital al pacientului.

## Stack tehnic

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** + componente proprii în stilul shadcn/ui (Radix UI + class-variance-authority)
- **Framer Motion** pentru animații
- **React Hook Form + Zod** pentru formulare și validare
- **Resend** (email), **Twilio** (SMS/WhatsApp), **Google Calendar API** — structură de integrare pregătită
- **Supabase** — schema SQL inclusă (`supabase-schema.sql`)

## Instalare

```bash
npm install
cp .env.example .env.local
npm run dev
```

Aplicația pornește pe `http://localhost:3000`.

## Configurare variabile de mediu

Completează `.env.local` cu valorile reale pentru integrările pe care vrei să le activezi. Fără ele,
sistemul funcționează în modul "simulat": SMS-urile, email-urile și evenimentele de calendar sunt
afișate doar în consolă (`console.log`), fără să fie trimise efectiv — util pentru dezvoltare/demo.

| Variabilă | Folosită pentru |
|---|---|
| `TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` / `TWILIO_PHONE_NUMBER` | Trimitere SMS și WhatsApp (`lib/sms.ts`) |
| `RESEND_API_KEY` | Trimitere email (`lib/email.ts`) |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` / `GOOGLE_CALENDAR_ID` | Creare evenimente Google Calendar (`lib/calendar.ts`) |
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` | Conectare bază de date Supabase |
| `WHATSAPP_TOKEN` / `WHATSAPP_PHONE_ID` | Alternativă WhatsApp Business API direct (fără Twilio) |

## Configurare Supabase

1. Creează un proiect nou pe [supabase.com](https://supabase.com).
2. Rulează conținutul fișierului `supabase-schema.sql` în SQL Editor.
3. Copiază URL-ul și cheile din **Project Settings → API** în `.env.local`.
4. Înlocuiește funcțiile mock din `app/api/reminders/*/route.ts` (ex. `getAppointmentsForTomorrow`) cu
   interogări reale către tabela `appointments`, folosind `@supabase/supabase-js`.

## Cron jobs pentru reminder-e automate

Cele 3 endpoint-uri din `app/api/reminders/` trebuie declanșate periodic:

| Endpoint | Frecvență recomandată |
|---|---|
| `POST /api/reminders/evening-before` | Zilnic la 18:00 |
| `POST /api/reminders/morning-of` | Zilnic la 08:00 |
| `POST /api/reminders/post-treatment` | O dată pe oră (verifică programările finalizate de 24-48h) |

Pe Vercel poți folosi [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs) (`vercel.json`), iar pe Netlify
poți folosi [Scheduled Functions](https://docs.netlify.com/functions/scheduled-functions/).

## Structura proiectului

```
/app
  page.tsx                 → Acasă
  servicii/page.tsx
  despre-noi/page.tsx
  programare/page.tsx      → Wizard de programare (4 pași)
  programare/succes/page.tsx
  urgente/page.tsx
  preturi/page.tsx
  contact/page.tsx
  pacient/page.tsx         → Dosar digital (mockup UI)
  api/appointments/route.ts
  api/reminders/{evening-before,morning-of,post-treatment}/route.ts
/components
  ui/                      → Componente de bază (button, card, input, accordion, tabs…)
  BookingWizard.tsx
  ChatWidget.tsx
  RateCalculator.tsx
  EmergencyForm.tsx
/lib
  data.ts                  → Date centralizate (servicii, prețuri, recenzii, echipă)
  reminders.ts              → buildReminderMessage() și restul logicii de mesaje dinamice
  sms.ts / email.ts / calendar.ts
supabase-schema.sql
.env.example
```

## Deployment

### Vercel
```bash
vercel
```

### Netlify
Proiectul include suport implicit pentru Next.js via `@netlify/plugin-nextjs` (instalează-l dacă optezi
pentru Netlify): `npm install -D @netlify/plugin-nextjs` și adaugă în `netlify.toml`:
```toml
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Build de producție

```bash
npm run build
npm run start
```
