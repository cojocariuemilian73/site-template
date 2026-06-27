import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { HealthProgressBar } from "@/components/HealthProgressBar";

export const metadata: Metadata = {
  title: "Dosarul Meu | ProliDent Clinic — Cluj-Napoca",
  description: "Dosarul digital al pacientului — istoric tratamente, documente și programări viitoare.",
};

const PATIENT = {
  name: "Ioana Cristea",
  lastVisit: "12 Mai 2026",
  nextAppointment: "28 Iunie 2026, 10:30 — Control igienizare",
  nextHygiene: "12 Noiembrie 2026",
  healthScore: 86,
};

const TIMELINE = [
  { date: "12 Mai 2026", treatment: "Control + Detartraj", doctor: "Dr. Paul Prodan", status: "Finalizat" },
  { date: "3 Februarie 2026", treatment: "Coroană ceramică molar 26", doctor: "Dr. Aurelia Prodan", status: "Finalizat" },
  { date: "15 Octombrie 2025", treatment: "Tratament de canal premolar 24", doctor: "Dr. Aurelia Prodan", status: "Finalizat" },
  { date: "8 Mai 2025", treatment: "Albire dentară LED", doctor: "Dr. Paul Prodan", status: "Finalizat" },
  { date: "20 Noiembrie 2024", treatment: "Consultație inițială + radiografie", doctor: "Dr. Paul Prodan", status: "Finalizat" },
];

const DOCUMENTS = [
  { name: "Radiografie panoramică OPG", date: "20 Noiembrie 2024", type: "Radiografie" },
  { name: "Plan de tratament — coroană molar 26", date: "3 Februarie 2026", type: "Plan tratament" },
  { name: "Radiografie retro-alveolară 24", date: "15 Octombrie 2025", type: "Radiografie" },
];

export default function PacientPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <Badge>Dosar Digital</Badge>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Bună, {PATIENT.name}!</h1>
          <p className="mt-2 text-text-muted">Aici găsești tot istoricul tratamentelor și documentele tale.</p>
        </FadeIn>

        <FadeIn>
          <Card className="mt-8 border-primary/25 bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardContent className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-primary">🦷 Următoarea igienizare recomandată</div>
                <div className="font-display text-xl font-extrabold text-text-primary">{PATIENT.nextHygiene}</div>
              </div>
              <Link href="/programare">
                <Button>Programează igienizarea</Button>
              </Link>
            </CardContent>
          </Card>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <FadeIn>
            <Card>
              <CardContent>
                <div className="text-sm text-text-muted">Ultima vizită</div>
                <div className="mt-1 font-display text-lg font-bold text-text-primary">{PATIENT.lastVisit}</div>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Card>
              <CardContent>
                <div className="text-sm text-text-muted">Următoarea programare</div>
                <div className="mt-1 font-display text-lg font-bold text-primary">{PATIENT.nextAppointment}</div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn>
          <Card className="mt-6">
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-text-primary">Sănătate dentară generală</span>
                <span className="font-mono text-sm font-bold text-primary">{PATIENT.healthScore}/100</span>
              </div>
              <HealthProgressBar value={PATIENT.healthScore} />
              <p className="mt-2 text-xs text-text-muted">Calculat din frecvența igienizărilor și starea tratamentelor active.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <h2 className="mb-5 mt-12 font-display text-xl font-bold text-text-primary">Cronologia Tratamentelor</h2>
          <div className="space-y-4 border-l-2 border-primary/25 pl-6 shadow-[inset_2px_0_8px_-4px_rgba(44,95,93,0.25)]">
            {TIMELINE.map((t) => (
              <div key={t.date} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-glow-sm" />
                <Card>
                  <CardContent className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold text-text-primary">{t.treatment}</div>
                      <div className="text-sm text-text-muted">{t.date} · {t.doctor}</div>
                    </div>
                    <Badge className="border-primary/30 bg-primary/10 text-primary">{t.status}</Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="mb-5 mt-12 font-display text-xl font-bold text-text-primary">Documentele Mele</h2>
          <div className="space-y-3">
            {DOCUMENTS.map((d) => (
              <Card key={d.name}>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">📄</span>
                    <div>
                      <div className="font-semibold text-text-primary">{d.name}</div>
                      <div className="text-sm text-text-muted">{d.type} · {d.date}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Vizualizează</Button>
                </CardContent>
              </Card>
            ))}
            <Card className="border-dashed border-text-muted/30 bg-transparent">
              <CardContent className="flex items-center justify-center gap-2 text-sm font-semibold text-text-muted">
                ⬆️ Încarcă document nou (radiografie, plan tratament)
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
