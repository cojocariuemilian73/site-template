import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { TEAM, CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Despre Noi | ProliDent Clinic — Stomatologie Cluj-Napoca",
  description: "Despre ProliDent Clinic – echipa noastră, povestea clinicii din centrul Clujului și valorile care ne ghidează.",
};

const VALUES = [
  { icon: "🤝", title: "Respect", desc: "Față de fiecare pacient, indiferent de complexitatea cazului." },
  { icon: "💙", title: "Compasiune", desc: "Înțelegem că mersul la stomatolog poate fi stresant." },
  { icon: "🔍", title: "Integritate", desc: "Transparență totală în diagnostic și tratament." },
  { icon: "🎓", title: "Profesionalism", desc: "20 de ani de formare continuă." },
];

export default function DespreNoiPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="mx-auto max-w-7xl">
          <Badge>Povestea Noastră</Badge>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary sm:text-5xl">
            O clinică fondată pe respect și profesionalism
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Un cabinet construit pe valori: profesionalism, empatie și dedicare față de fiecare pacient.
          </p>
        </div>
      </div>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-text-muted">
          <FadeIn>
            <p>
              {CLINIC.name} a fost fondată de {CLINIC.founders} la începuturile medicinei dentare private din
              Cluj-Napoca.
            </p>
            <p className="mt-4">
              De-a lungul a {CLINIC.yearsExperience} de ani, am construit relații de încredere cu mii de pacienți
              clujeni, îmbinând experiența acumulată cu tehnicile și materialele moderne din stomatologie.
            </p>
          </FadeIn>

          <FadeIn>
            <ul className="mt-6 space-y-3">
              {[
                "20 de ani de activitate continuă în centrul Clujului",
                "Fondată de Dr. Paul Prodan și Dr. Aurelia Prodan",
                "Mii de pacienți clujeni tratați de-a lungul anilor",
              ].map((it) => (
                <li key={it} className="flex gap-3 text-text-primary">
                  <span className="text-primary">✓</span> {it}
                </li>
              ))}
            </ul>
            <Link href="/programare">
              <Button className="mt-8">Programează o Consultație</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-primary/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Valorile Noastre</Badge>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Ce ne ghidează în fiecare zi</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-2xl">
                      {v.icon}
                    </div>
                    <h3 className="font-display font-bold text-text-primary">{v.title}</h3>
                    <p className="mt-2 text-sm text-text-muted">{v.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Echipa Noastră</Badge>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Medicii care îți poartă de grijă</h2>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.05}>
                <Card className="h-full text-center">
                  <CardContent>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-3xl">
                      {m.avatar}
                    </div>
                    <h3 className="font-display font-bold text-text-primary">{m.name}</h3>
                    <div className="mt-1 text-xs font-semibold text-primary">{m.role}</div>
                    <p className="mt-2 text-sm text-text-muted">{m.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 to-secondary/15" />
        <h2 className="font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Vrei să ne cunoști personal?</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Vino la o consultație fără obligații și descoperă de ce mii de pacienți ne-au ales.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/programare">
            <Button size="lg">Programare Online</Button>
          </Link>
          <Link href="/servicii">
            <Button variant="outline" size="lg">Vezi Serviciile</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
