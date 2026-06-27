export const CLINIC = {
  name: "ProliDent Clinic",
  shortName: "ProliDent",
  tagline: "Stomatologie Cluj-Napoca · 20 ani experiență",
  city: "Cluj-Napoca",
  district: "Centru",
  founders: "Dr. Paul Prodan și Dr. Aurelia Prodan",
  yearsExperience: 20,
  address: "Str. Memorandumului, nr. 8, Cluj-Napoca, Cluj, 400114",
  // Telefon mobil principal — folosit pentru CTA-uri (hero, urgențe)
  phone: "0744.691.013",
  phoneHref: "tel:0744691013",
  // Telefon fix
  phoneFixed: "0264.542.446",
  phoneFixedHref: "tel:0264542446",
  // Mobil alternativ
  phoneAlt: "+40 741 215 513",
  phoneAltHref: "tel:+40741215513",
  whatsapp: "https://wa.me/40744691013",
  // [DE COMPLETAT de clinică]
  email: "[DE COMPLETAT]",
  facebook: "https://facebook.com/ProliDent",
  mapsUrl: "https://maps.google.com/?q=Strada+Memorandumului+8+Cluj-Napoca",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.8!2d23.5854!3d46.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1a9b2a17c7%3A0x1!2sStrada+Memorandumului+8%2C+Cluj-Napoca!5e0!3m2!1sro!2sro!4v1",
  hours: [
    { day: "Luni", value: "08:00 – 19:00" },
    { day: "Marți", value: "08:00 – 19:00" },
    { day: "Miercuri", value: "08:00 – 19:00" },
    { day: "Joi", value: "08:00 – 19:00" },
    { day: "Vineri", value: "08:00 – 19:00" },
    { day: "Sâmbătă", value: "09:00 – 13:00" },
    { day: "Duminică", value: "Închis" },
  ],
  urgentHours: "Luni–Vineri: 08:00–19:00 · Sâmbătă: 09:00–13:00",
};

import type { TreatmentType } from "@/lib/reminders";

export const SERVICES: {
  id: TreatmentType;
  icon: string;
  name: string;
  desc: string;
}[] = [
  { id: "consultatie", icon: "🔬", name: "Consultație & Diagnoză", desc: "Evaluare completă, radiografie digitală și plan de tratament personalizat." },
  { id: "detartraj", icon: "✨", name: "Detartraj & Igienizare", desc: "Curățare profesională cu ultrasunete pentru gingii sănătoase." },
  { id: "albire", icon: "💎", name: "Albire Dentară", desc: "Albire profesională LED, rezultate vizibile imediat." },
  { id: "implant", icon: "🔩", name: "Implanturi Dentare", desc: "Soluție permanentă, garanție 10 ani." },
  { id: "extractie", icon: "🚨", name: "Urgențe Stomatologice", desc: "Te preluăm prioritar — durere acută, fracturi, lucrări căzute." },
  { id: "ortodontie", icon: "😁", name: "Ortodonție", desc: "Aparate clasice și invizibile pentru adulți și copii." },
];

export const WHY_US = [
  {
    icon: "🏙️",
    title: "Clinică în centrul Clujului",
    desc: "Ne găsești pe Str. Memorandumului nr. 8, în Centru, aproape de Piața Unirii — ușor accesibil din toată zona.",
  },
  {
    icon: "🔔",
    title: "Reminder automat",
    desc: "Primești mesaj cu o seară înainte de programare și din nou dimineața, ca să nu uiți niciodată o vizită.",
  },
  {
    icon: "⚡",
    title: "Waitlist AI",
    desc: "Locurile anulate se redistribuie automat pacienților de pe lista de așteptare în maxim 15 minute.",
  },
  {
    icon: "🚨",
    title: "Urgențe acoperite până la 22:00",
    desc: "Răspuns garantat în maximum 8 minute pentru orice urgență dentară, în fiecare zi a săptămânii.",
  },
  {
    icon: "📁",
    title: "Dosar digital personal",
    desc: "Vezi istoricul tratamentelor, radiografiile și planul tău de tratament oricând, online.",
  },
  {
    icon: "🔁",
    title: "Reactivare inteligentă",
    desc: "Te reamintim automat la 6 luni să revii pentru controlul și igienizarea periodică.",
  },
  {
    icon: "💳",
    title: "Rate 0% calculate instant",
    desc: "Calculatorul nostru îți arată rata lunară exactă, fără dobândă, în câteva secunde.",
  },
];

export const STATS = [
  { value: "2500+", label: "Pacienți mulțumiți" },
  { value: "20 ani", label: "Experiență" },
  { value: "7 min", label: "Timp mediu de răspuns" },
];

export const TESTIMONIALS = [
  {
    name: "Pacient ProliDent Clinic",
    location: "Cluj-Napoca",
    initials: "PD",
    stars: 5,
    text: "Merg la același medic dentist din Cluj de ani de zile și întotdeauna am primit o îngrijire de înaltă calitate. Personalul este prietenos și profesionist, iar cabinetele sunt curate și moderne. Recomand cu mare drag!",
  },
  {
    name: "Pacient ProliDent Clinic",
    location: "Cluj-Napoca",
    initials: "PD",
    stars: 5,
    text: "Am trecut recent la această clinică de stomatologie din Cluj și nu aș putea fi mai mulțumit de nivelul de servicii pe care l-am primit. Medicii sunt bine informați și prietenoși și își fac timp să îmi explice totul.",
  },
  {
    name: "Pacient ProliDent Clinic",
    location: "Cluj-Napoca",
    initials: "PD",
    stars: 5,
    text: "Aveam emoții în legătură cu mersul la medicul dentist, dar echipa ProliDent m-a făcut să mă simt atât de confortabil. Au fost răbdători și minuțioși — am plecat cu un zâmbet frumos. Vă mulțumesc!",
  },
  {
    name: "Pacient fidel ProliDent Clinic",
    location: "Cluj-Napoca",
    initials: "PD",
    stars: 5,
    text: "Sunt pacient la această clinică de ceva vreme și pot spune cu sinceritate că echipa de acolo este cea mai bună pe care am întâlnit-o vreodată.",
  },
];

export const FAQ = [
  {
    q: "Cât timp durează o consultație inițială?",
    a: "O consultație inițială durează în medie 30–45 de minute. Include examinarea clinică completă, eventuala radiografie digitală și discuția planului de tratament.",
  },
  {
    q: "Acceptați asigurările de sănătate?",
    a: "Da! Suntem parteneri cu CNAS. Consultațiile de bilanț și anumite tratamente sunt disponibile cu card de sănătate.",
  },
  {
    q: "Cum funcționează urgențele stomatologice?",
    a: "Sunați direct la 0744.691.013 sau folosiți formularul de urgență din site. Un medic vă contactează cât mai rapid posibil.",
  },
  {
    q: "Tratamentele sunt dureroase?",
    a: "Utilizăm anestezic local modern de înaltă calitate, cu gel topic înainte de injecție pentru disconfort minim.",
  },
  {
    q: "Pot plăti în rate?",
    a: "Da! Oferim rate fără dobândă în 12, 24 sau 36 de luni prin partenerii noștri bancari, cu aprobare în 5 minute.",
  },
];

export const TEAM = [
  { name: "Dr. Paul Prodan", role: "Medic Stomatolog · Fondator", avatar: "👨‍⚕️", desc: "Co-fondator ProliDent Clinic, cu peste 20 de ani de activitate în stomatologia clujeană." },
  { name: "Dr. Aurelia Prodan", role: "Medic Stomatolog · Fondator", avatar: "👩‍⚕️", desc: "Co-fondatoare ProliDent Clinic, dedicată îngrijirii atente și personalizate a fiecărui pacient." },
];

export type PriceItem = { name: string; desc: string; price: string };
export type PriceCategory = { id: string; label: string; icon: string; items: PriceItem[] };

export const PRICES: PriceCategory[] = [
  {
    id: "consultatie",
    label: "Consultație",
    icon: "🔬",
    items: [
      { name: "Consultație inițială", desc: "Examen clinic complet + plan tratament", price: "100 RON" },
      { name: "Consultație de control", desc: "Pacienți existenți", price: "50 RON" },
      { name: "Radiografie retro-alveolară", desc: "Per dinte", price: "40 RON" },
      { name: "Radiografie panoramică OPG", desc: "Arcadă completă", price: "120 RON" },
      { name: "CT Cone Beam 3D", desc: "Planificare implant", price: "300 RON" },
    ],
  },
  {
    id: "igiena",
    label: "Igienă",
    icon: "✨",
    items: [
      { name: "Detartraj ultrasonic + periaj", desc: "Curățare completă", price: "180 RON" },
      { name: "Airflow (sablare)", desc: "Pete cafea, tutun, ceai", price: "100 RON" },
      { name: "Pachet Igienă Completă", desc: "Detartraj + periaj + airflow + fluorizare", price: "320 RON" },
      { name: "Sigilare molari", desc: "Per dinte", price: "80 RON" },
    ],
  },
  {
    id: "albire",
    label: "Albire",
    icon: "💎",
    items: [
      { name: "Albire în cabinet (LED)", desc: "1–2 ședințe, până la 8 nuanțe", price: "600 RON" },
      { name: "Albire la domiciliu (kit)", desc: "Atele + 2 seringi gel", price: "350 RON" },
      { name: "Pachet Albire Completă", desc: "Cabinet + kit domiciliu", price: "850 RON" },
    ],
  },
  {
    id: "restaurare",
    label: "Restaurare",
    icon: "🦷",
    items: [
      { name: "Obturație compozit simplă", desc: "1 suprafață", price: "150 RON" },
      { name: "Tratament de canal (monoradicular)", desc: "Dinte frontal", price: "400 RON" },
      { name: "Tratament de canal (molar)", desc: "3–4 canale", price: "800–1.000 RON" },
      { name: "Extracție simplă", desc: "Dinte cu mobilitate", price: "150 RON" },
    ],
  },
  {
    id: "protetica",
    label: "Protetică",
    icon: "👑",
    items: [
      { name: "Coroană ceramică pe metal", desc: "Clasică metalo-ceramică", price: "600 RON" },
      { name: "Coroană zirconiu", desc: "Rezistență maximă", price: "1.200 RON" },
      { name: "Fațetă ceramică (veneer)", desc: "Per dinte", price: "900–1.100 RON" },
      { name: "Punte dentară 3 elemente", desc: "2 coroane + 1 intermediar", price: "de la 1.800 RON" },
    ],
  },
  {
    id: "implant",
    label: "Implanturi",
    icon: "🔩",
    items: [
      { name: "Implant dentar (corp titan)", desc: "Marcă premium, garanție 10 ani", price: "1.800 RON" },
      { name: "Coroană pe implant", desc: "Ceramică/zirconiu", price: "1.000–1.200 RON" },
      { name: "Pachet Implant Complet", desc: "Corp + bont + coroană", price: "de la 2.500 RON" },
      { name: "All-on-4 (arcadă completă)", desc: "4 implanturi + lucrare fixă", price: "de la 12.000 RON" },
    ],
  },
  {
    id: "ortodontie",
    label: "Ortodonție",
    icon: "😬",
    items: [
      { name: "Consultație ortodontică inițială", desc: "Evaluare + plan tratament", price: "Gratuită" },
      { name: "Aparat dentar metalic", desc: "Per arcadă", price: "2.500 RON" },
      { name: "Aparat dentar ceramic", desc: "Per arcadă", price: "3.500 RON" },
      { name: "Alignere transparente", desc: "De la 14 alignere", price: "de la 4.500 RON" },
    ],
  },
  {
    id: "urgente",
    label: "Urgențe",
    icon: "🚨",
    items: [
      { name: "Consultație de urgență", desc: "Stabilizare durere acută", price: "150 RON" },
      { name: "Drenaj abces dentar", desc: "Incizie + tratament", price: "250 RON" },
      { name: "Extracție de urgență", desc: "Dinte cu durere severă", price: "200 RON" },
    ],
  },
];

export const RATE_TREATMENTS = [
  { name: "Implant dentar complet", price: 2500 },
  { name: "All-on-4 arcadă completă", price: 12000 },
  { name: "Aparat dentar ceramic", price: 3500 },
  { name: "Alignere transparente Full", price: 6500 },
  { name: "Pachet Albire Completă", price: 850 },
  { name: "Punte dentară 3 elemente", price: 1800 },
];

export const EMERGENCY_TIPS = [
  { title: "Durere dentară puternică", tip: "Ia un calmant fără aspirină (ex. paracetamol), clătește cu apă călduță cu sare și evită alimentele foarte calde/reci." },
  { title: "Dinte fracturat", tip: "Păstrează fragmentul (dacă îl găsești) într-un pahar cu lapte sau salivă și vino cât mai rapid la cabinet." },
  { title: "Lucrare protetică căzută", tip: "Nu lipi coroana/puntea cu adeziv universal — păstreaz-o curată și sunat-ne pentru recimentare." },
  { title: "Dinte scos complet din alveolă", tip: "Ține dintele de coroană (nu de rădăcină), pune-l în lapte și vino în maximum 30-60 de minute." },
];
