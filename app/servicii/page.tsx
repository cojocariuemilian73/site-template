import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicii | ProliDent Clinic — Stomatologie Cluj-Napoca",
  description: "Servicii ProliDent Clinic: detartraj, albire dentară, implanturi, urgențe, consultații, în centrul Clujului.",
};

const SERVICES_DETAIL = [
  {
    icon: "🔬",
    tag: "Prevenție",
    name: "Consultație & Diagnoză",
    desc: "Prima vizită include un examen clinic complet, discuția istoricului medical și un plan de tratament transparent.",
    items: ["Examen clinic complet cavitate bucală", "Radiografie panoramică digitală (la nevoie)", "Evaluare gingii și parodonțiu", "Plan de tratament detaliat cu costuri"],
  },
  {
    icon: "✨",
    tag: "Igienă",
    name: "Detartraj & Igienizare Profesională",
    desc: "Detartrajul cu ultrasunete îndepărtează tartrul și placa bacteriană, prevenind bolile parodontale și caria dentară.",
    items: ["Detartraj supra/subgingival cu ultrasunete", "Periaj profesional cu pastă profilactică", "Airflow pentru pete persistente", "Aplicare fluoruri de protecție"],
  },
  {
    icon: "💎",
    tag: "Estetică",
    name: "Albire Dentară Profesională",
    desc: "Sistem de albire cu gel peroxid și activare LED — rezultate cu până la 8 nuanțe mai albe, într-o singură ședință.",
    items: ["Albire în cabinet cu lampă LED (1–2 ore)", "Atele individuale pentru albire la domiciliu", "Tratament desensibilizant inclus", "Rezultate durabile 2–3 ani"],
  },
  {
    icon: "🔩",
    tag: "Chirurgie",
    name: "Implanturi Dentare",
    desc: "Soluția permanentă pentru dinții lipsă. Implanturi titan de calitate premium, rată de succes 98%.",
    items: ["Evaluare CT 3D preoperatorie", "Implanturi titan calitate europeană", "Chirurgie ghidată digital", "Garanție 10 ani"],
  },
  {
    icon: "👑",
    tag: "Restaurare",
    name: "Protetică Dentară",
    desc: "Coroane, punți și fațete din materiale premium (zirconiu, ceramică) pentru un rezultat estetic natural.",
    items: ["Coroane ceramice și din zirconiu", "Punți dentare fixe", "Fațete ceramice (veneer)", "Coroane provizorii CAD/CAM"],
  },
  {
    icon: "😬",
    tag: "Aliniere",
    name: "Ortodonție",
    desc: "Corectarea alinierii dentare cu aparate clasice sau alignere transparente. Consultație inițială gratuită.",
    items: ["Aparat dentar metalic clasic", "Aparat ceramic estetic", "Alignere transparente", "Monitorizare lunară inclusă"],
  },
  {
    icon: "🌿",
    tag: "Gingii",
    name: "Parodontologie",
    desc: "Tratamentul bolilor gingivale și parodontale cu metode moderne nechirurgicale și chirurgicale.",
    items: ["Chiuretaj parodontal subgingival", "Tratament laser antibacterian", "Grefare gingivală", "Plan de mentenanță"],
  },
  {
    icon: "👶",
    tag: "Copii",
    name: "Pedodonție",
    desc: "Medici special pregătiți pentru tratamentul copiilor, cu o abordare blândă și răbdătoare.",
    items: ["Consultații copii de la 2 ani", "Tratamente dinți de lapte și permanenți", "Sigilări preventive molari", "Educație igienă orală"],
  },
];

export default function ServiciiPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="mx-auto max-w-7xl">
          <Badge>Ce Oferim</Badge>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary sm:text-5xl">Serviciile Noastre</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Tratamente complete pentru o sănătate dentară impecabilă — de la prevenție la proceduri avansate.
          </p>
        </div>
      </div>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
          {SERVICES_DETAIL.map((s, i) => (
            <FadeIn key={s.name} delay={(i % 4) * 0.05}>
              <Card className="h-full">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card border border-primary/20 bg-primary/10 text-3xl">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-text-primary">{s.name}</h3>
                      <Badge className="mt-1">{s.tag}</Badge>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-text-muted">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-text-muted">
                        <span className="text-primary">✓</span> {it}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}

          <FadeIn className="sm:col-span-2">
            <Card className="border-urgent/30 bg-urgent/10">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-card border border-urgent/30 bg-bg-card text-3xl">
                    🚨
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-text-primary">Urgențe Stomatologice</h3>
                    <Badge className="mt-1 border-urgent/40 bg-urgent/10 text-urgent">Program Extins</Badge>
                  </div>
                </div>
                <p className="mt-4 text-sm text-text-muted">
                  Nu lăsa durerea să aștepte! Suntem disponibili pentru urgențe zilnic între 08:00–22:00, cu
                  răspuns garantat în maximum 8 minute.
                </p>
                <a href={CLINIC.phoneHref}>
                  <Button variant="urgent" className="mt-6">Sună Acum: {CLINIC.phone}</Button>
                </a>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 to-secondary/15" />
        <h2 className="font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Programează-te astăzi!</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Consultația inițială include evaluare completă și plan de tratament detaliat.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/programare">
            <Button size="lg">Programează Online</Button>
          </Link>
          <Link href="/preturi">
            <Button variant="outline" size="lg">Vezi Prețurile</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
