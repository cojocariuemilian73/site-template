import { NextResponse } from "next/server";
import { buildPostTreatmentMessage, type TreatmentType } from "@/lib/reminders";
import { sendSms } from "@/lib/sms";
import { sendEmail, wrapEmailHtml } from "@/lib/email";

type DueAppointment = {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  treatmentType: TreatmentType;
};

/**
 * Endpoint declanșat de un cron job care rulează la 24-48h după marcarea unei
 * programări ca "Finalizată" (status = 'completed' în tabela appointments).
 * În producție: SELECT * FROM appointments WHERE status = 'completed'
 * AND completed_at <= now() - interval '24 hours' AND post_treatment_sent = false.
 */
async function getCompletedAppointmentsDueFollowUp(): Promise<DueAppointment[]> {
  return [];
}

export async function POST() {
  const appointments = await getCompletedAppointmentsDueFollowUp();
  let sent = 0;

  for (const appt of appointments) {
    const message = buildPostTreatmentMessage(appt.treatmentType, appt.patientName);

    await sendSms(appt.patientPhone, message);
    if (appt.patientEmail) {
      await sendEmail(appt.patientEmail, "Cum te simți după vizită?", wrapEmailHtml(message));
    }

    // TODO: UPDATE appointments SET post_treatment_sent = true WHERE id = appt.id
    sent++;
  }

  return NextResponse.json({ processed: appointments.length, sent });
}

// Vercel Cron declanșează endpoint-urile cu GET — îl tratăm identic cu POST.
export const GET = POST;
