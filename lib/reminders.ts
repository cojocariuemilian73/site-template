import { CLINIC } from "@/lib/data";

export type TreatmentType =
  | "consultatie"
  | "detartraj"
  | "albire"
  | "implant"
  | "extractie"
  | "ortodontie"
  | "copil"
  | "altul";

const EVENING_TIPS: Record<TreatmentType, string> = {
  consultatie:
    "✅ Nu e necesar să fii nemâncat. Poți mânca normal înainte. Evită cafeaua cu 1h înainte dacă poți.",
  detartraj:
    "✅ Poți mânca normal. Periază-te bine dimineața. Evită fumatul 2h înainte pentru rezultate mai bune.",
  albire:
    "⚠️ Nu consuma cafea, ceai, vin roșu sau alimente colorante cu 24h înainte și 48h după. Nu fuma înainte de ședință.",
  implant:
    "⚠️ Vino nemâncat (4-6 ore fără mâncare solidă). Nu consuma alcool cu 24h înainte. Ia medicamentele prescrise dacă ai. Vino însoțit dacă e posibil.",
  extractie:
    "⚠️ Vino nemâncat 4 ore. Nu lua aspirină sau anticoagulante fără acordul medicului. Anunță dacă iei orice medicament.",
  ortodontie:
    "✅ Mănâncă bine înainte — după montare vei evita alimentele tari câteva zile. Periază-te bine.",
  copil:
    "✅ Explică-i copilului că mergem să vedem un doctor prietenos care are grijă de dinți. Evitați cuvintele 'durere' sau 'ace'. Recompensă după!",
  altul:
    "✅ Poți mânca normal înainte de vizită. Dacă ai întrebări despre programare, dă-ne un telefon.",
};

const POST_TREATMENT_TIPS: Record<TreatmentType, string> = {
  consultatie:
    "Mulțumim pentru vizită! Urmează sfaturile din planul de tratament discutat și nu hesita să ne contactezi pentru întrebări.",
  detartraj:
    "Excelent! Revino peste 6 luni pentru menținerea rezultatelor igienizării.",
  albire:
    "Evită alimente colorante 48h pentru rezultate optime.",
  implant:
    "Ia medicamentele prescrise, revino la control conform indicațiilor medicului.",
  extractie:
    "Nu fuma 48h, nu clăti energic 24h, aplică compresă rece dacă simți umflătură.",
  ortodontie:
    "Este normal să simți o ușoară presiune primele zile. Evită alimentele tari și lipicioase.",
  copil:
    "Felicită-l pe cel mic pentru curaj! Continuă periajul de două ori pe zi împreună.",
  altul:
    "Sperăm că tratamentul a fost conform așteptărilor. Suntem aici pentru orice întrebare.",
};

/** Construiește mesajul de reminder din seara premergătoare programării (SMS + email). */
export function buildReminderMessage(
  treatmentType: TreatmentType,
  patientName: string,
  time: string
): string {
  const tip = EVENING_TIPS[treatmentType] ?? EVENING_TIPS.altul;

  return `Bună ${patientName}! Mâine la ${time} ai programare la ${CLINIC.name}.

📋 Câteva sfaturi pentru o consultație optimă:
${tip}

Te așteptăm la ${CLINIC.address}. Dacă ai nevoie să reprogramezi, dă reply la acest mesaj sau sună la ${CLINIC.phone}.

Ne vedem mâine! 🦷`;
}

/** Construiește mesajul scurt trimis în dimineața programării. */
export function buildMorningOfMessage(patientName: string, time: string): string {
  return `Bună dimineața ${patientName}! 🌅 Astăzi la ${time} te așteptăm.
Adresă: ${CLINIC.address}.
Parcare disponibilă în curte.
Ne vedem în curând! — ${CLINIC.name}`;
}

/** Construiește mesajul trimis la 24-48h după finalizarea unui tratament. */
export function buildPostTreatmentMessage(
  treatmentType: TreatmentType,
  patientName: string,
  googleReviewLink = "https://maps.google.com"
): string {
  const tip = POST_TREATMENT_TIPS[treatmentType] ?? POST_TREATMENT_TIPS.altul;

  return `Bună ${patientName}! Sperăm că te simți bine după vizita de ieri. 😊

${tip}

Ai întrebări sau ceva te îngrijorează? Răspunde direct la acest mesaj.

Dacă ești mulțumit(ă) de experiență, ne-ar ajuta enorm o recenzie pe Google: ${googleReviewLink}`;
}

export const TREATMENT_LABELS: Record<TreatmentType, string> = {
  consultatie: "Consultație generală",
  detartraj: "Detartraj / Igienizare",
  albire: "Albire dentară",
  implant: "Implant / Chirurgie",
  extractie: "Extracție",
  ortodontie: "Ortodonție (montare aparat)",
  copil: "Consultație copil",
  altul: "Altceva",
};
