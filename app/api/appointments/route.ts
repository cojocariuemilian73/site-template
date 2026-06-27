import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail, wrapEmailHtml } from "@/lib/email";
import { sendSms, sendWhatsApp } from "@/lib/sms";
import { CLINIC } from "@/lib/data";

const appointmentSchema = z.object({
  appointmentKind: z.string(),
  service: z.string(),
  serviceLabel: z.string(),
  date: z.string(),
  time: z.string(),
  nume: z.string(),
  telefon: z.string(),
  email: z.string().optional(),
  pacientStatus: z.enum(["nou", "existent"]),
  remindere: z.array(z.enum(["whatsapp", "sms", "email"])),
  mesaj: z.string().optional(),
});

/**
 * Creează o programare nouă.
 * În producție: salvează în tabela `appointments` din Supabase (vezi supabase-schema.sql),
 * creează evenimentul în Google Calendar și trimite confirmarea pe canalele alese.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;
  const confirmationText = `Programarea ta la ${CLINIC.name} pentru "${data.serviceLabel}" a fost confirmată pentru data ${new Date(data.date).toLocaleDateString("ro-RO")} la ora ${data.time}.`;

  if (data.remindere.includes("sms")) {
    await sendSms(data.telefon, confirmationText);
  }
  if (data.remindere.includes("whatsapp")) {
    await sendWhatsApp(data.telefon, confirmationText);
  }
  if (data.remindere.includes("email") && data.email) {
    await sendEmail(data.email, "Confirmare programare", wrapEmailHtml(confirmationText));
  }

  // TODO integrare reală: insert în Supabase `appointments` + `patients`.
  return NextResponse.json({ success: true });
}
