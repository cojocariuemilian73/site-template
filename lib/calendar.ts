import { CLINIC } from "@/lib/data";

export type CalendarEvent = {
  title: string;
  description: string;
  location: string;
  start: Date;
  end: Date;
};

function toGoogleDate(d: Date) {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

/** Construiește link-ul "Adaugă în Google Calendar" pentru o programare. */
export function buildGoogleCalendarUrl(event: CalendarEvent) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${toGoogleDate(event.start)}/${toGoogleDate(event.end)}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function toIcsDate(d: Date) {
  return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

/** Generează conținutul unui fișier .ics pentru Apple Calendar / Outlook. */
export function buildIcsContent(event: CalendarEvent) {
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//ProliDentClinic//Programare//RO",
    "BEGIN:VEVENT",
    // [DE COMPLETAT] — domeniu real ProliDent Clinic (drprodan.ro nu mai e activ)
    `UID:${Date.now()}@prolidentclinic.ro`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(event.start)}`,
    `DTEND:${toIcsDate(event.end)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, "\\n")}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcsFile(event: CalendarEvent, filename = "programare-prolident-clinic.ics") {
  const blob = new Blob([buildIcsContent(event)], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function appointmentToCalendarEvent(opts: {
  serviceName: string;
  date: Date;
  durationMinutes?: number;
}): CalendarEvent {
  const start = opts.date;
  const end = new Date(start.getTime() + (opts.durationMinutes ?? 45) * 60000);
  return {
    title: `Programare ${CLINIC.name} — ${opts.serviceName}`,
    description: `Programare la ${CLINIC.name}. Adresă: ${CLINIC.address}. Telefon: ${CLINIC.phone}.`,
    location: CLINIC.address,
    start,
    end,
  };
}

/**
 * Stub pentru integrarea reală cu Google Calendar API (server-side).
 * Necesită GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALENDAR_ID în .env.
 */
export async function createGoogleCalendarEvent(_event: CalendarEvent): Promise<{ id: string } | null> {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CALENDAR_ID) {
    return null;
  }
  // TODO la conectarea unui cont Google real: folosește googleapis pentru a crea evenimentul
  // în calendarul GOOGLE_CALENDAR_ID, autentificat cu GOOGLE_CLIENT_ID/SECRET (OAuth2).
  return null;
}
