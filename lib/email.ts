import { Resend } from "resend";
import { CLINIC } from "@/lib/data";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

/** Trimite un email prin Resend. Fără RESEND_API_KEY în .env, simulează trimiterea (log). */
export async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.log(`[EMAIL-SIMULAT] către ${to} — ${subject}\n${html}`);
    return { simulated: true, id: null };
  }

  const resend = new Resend(RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    // [DE COMPLETAT] — domeniu real ProliDent Clinic (drprodan.ro nu mai e activ)
    from: `${CLINIC.name} <programari@prolidentclinic.ro>`,
    to,
    subject,
    html,
  });

  if (error) throw new Error(error.message);
  return { simulated: false, id: data?.id ?? null };
}

export function wrapEmailHtml(bodyText: string) {
  return `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 540px; margin: 0 auto; color: #1a202c;">
      <div style="background: #1a6bcc; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <span style="font-size: 28px;">🦷</span>
        <h1 style="color: white; font-size: 18px; margin: 8px 0 0;">${CLINIC.name}</h1>
      </div>
      <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; white-space: pre-line; line-height: 1.7;">
        ${bodyText}
      </div>
    </div>
  `;
}
