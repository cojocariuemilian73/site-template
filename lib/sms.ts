import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

function getClient() {
  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) return null;
  return twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
}

/** Trimite un SMS prin Twilio. Necesită TWILIO_* în .env — fără ele, simulează trimiterea (log). */
export async function sendSms(to: string, body: string) {
  const client = getClient();

  if (!client || !TWILIO_PHONE_NUMBER) {
    console.log(`[SMS-SIMULAT] către ${to}:\n${body}`);
    return { simulated: true, sid: null };
  }

  const message = await client.messages.create({
    to,
    from: TWILIO_PHONE_NUMBER,
    body,
  });

  return { simulated: false, sid: message.sid };
}

/** Trimite un mesaj WhatsApp prin Twilio (sandbox/business number). */
export async function sendWhatsApp(to: string, body: string) {
  const client = getClient();

  if (!client || !TWILIO_PHONE_NUMBER) {
    console.log(`[WHATSAPP-SIMULAT] către ${to}:\n${body}`);
    return { simulated: true, sid: null };
  }

  const message = await client.messages.create({
    to: `whatsapp:${to}`,
    from: `whatsapp:${TWILIO_PHONE_NUMBER}`,
    body,
  });

  return { simulated: false, sid: message.sid };
}
