import { NextResponse } from "next/server";
import { buildMorningOfMessage } from "@/lib/reminders";
import { sendSms, sendWhatsApp } from "@/lib/sms";

type DueAppointment = {
  id: string;
  patientName: string;
  patientPhone: string;
  time: string;
  channels: ("sms" | "whatsapp" | "email")[];
};

/**
 * Endpoint declanșat de un cron job zilnic la 08:00, în ziua programării.
 * În producție: SELECT * FROM appointments WHERE date = today AND reminder_morning_sent = false.
 */
async function getAppointmentsToday(): Promise<DueAppointment[]> {
  return [];
}

export async function POST() {
  const appointments = await getAppointmentsToday();
  let sent = 0;

  for (const appt of appointments) {
    const message = buildMorningOfMessage(appt.patientName, appt.time);

    if (appt.channels.includes("sms")) await sendSms(appt.patientPhone, message);
    if (appt.channels.includes("whatsapp")) await sendWhatsApp(appt.patientPhone, message);

    // TODO: UPDATE appointments SET reminder_morning_sent = true WHERE id = appt.id
    sent++;
  }

  return NextResponse.json({ processed: appointments.length, sent });
}

// Vercel Cron declanșează endpoint-urile cu GET — îl tratăm identic cu POST.
export const GET = POST;
