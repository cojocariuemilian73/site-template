import { NextResponse } from "next/server";
import { buildReminderMessage, type TreatmentType } from "@/lib/reminders";
import { sendSms, sendWhatsApp } from "@/lib/sms";
import { sendEmail, wrapEmailHtml } from "@/lib/email";

type DueAppointment = {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  treatmentType: TreatmentType;
  time: string;
  channels: ("sms" | "whatsapp" | "email")[];
};

/**
 * Endpoint declanșat de un cron job (ex: Vercel Cron / GitHub Actions) zilnic la 18:00.
 * În producție, înlocuiește `getAppointmentsForTomorrow` cu o interogare reală în Supabase:
 * SELECT * FROM appointments WHERE date = tomorrow AND reminder_evening_sent = false.
 */
async function getAppointmentsForTomorrow(): Promise<DueAppointment[]> {
  // Mock — fără conexiune Supabase configurată, nu există programări reale de procesat.
  return [];
}

export async function POST() {
  const appointments = await getAppointmentsForTomorrow();
  let sent = 0;

  for (const appt of appointments) {
    const message = buildReminderMessage(appt.treatmentType, appt.patientName, appt.time);

    if (appt.channels.includes("sms")) await sendSms(appt.patientPhone, message);
    if (appt.channels.includes("whatsapp")) await sendWhatsApp(appt.patientPhone, message);
    if (appt.channels.includes("email") && appt.patientEmail) {
      await sendEmail(appt.patientEmail, "Reminder programare — mâine", wrapEmailHtml(message));
    }

    // TODO: UPDATE appointments SET reminder_evening_sent = true WHERE id = appt.id
    sent++;
  }

  return NextResponse.json({ processed: appointments.length, sent });
}

// Vercel Cron declanșează endpoint-urile cu GET — îl tratăm identic cu POST.
export const GET = POST;
