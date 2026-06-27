import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CLINIC, SERVICES, WHY_US, TESTIMONIALS, FAQ } from "@/lib/data";

const STEPS = [
  { icon: "🖱️", title: "Alege serviciul", desc: "Selectezi tratamentul de care ai nevoie." },
  { icon: "📅", title: "Alege data", desc: "Selectezi ziua și ora care îți convin cel mai bine." },
  { icon: "✅", title: "Vii la cabinet", desc: "Primești confirmare și reminder automat înainte de vizită." },
];

const RESULTS = [
  {
    src: "/images/detartraj-placa-bacteriana-tartru-qmed-stomatologie.png",
    title: "Igienizare Dentară",
    desc: "Îndepărtarea tartrului și a plăcii bacteriene pentru un zâmbet sănătos",
  },
  {
    src: "/images/pacient-16_1.jpg",
    title: "Restaurare Completă",
    desc: "Transformare completă cu coroane ceramice și implanturi",
  },
  {
    src: "/images/inainte-dupa-coroane-ceramice-pe-zirconiu_jpg.webp",
    title: "Coroane Zirconiu",
    desc: "Coroane pe zirconiu pentru estetică și durabilitate maximă",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-bg-deep px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[45%_55%]">
          <FadeIn className="order-2 lg:order-1">
            <Badge>✦ 20 de ani de excelență stomatologică în Cluj</Badge>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-[52px]">
              Zâmbetul tău, grija noastră — de 20 de ani
            </h1>
            <p className="mt-6 max-w-md text-lg text-text-muted">
              Dr. Paul Prodan și echipa {CLINIC.name} te așteaptă în centrul Clujului. Programează-te online în 3 clickuri.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/programare">
                <Button size="lg" className="transition-all duration-300 hover:scale-105 hover:bg-primary-dark">
                  Programează-te acum →
                </Button>
              </Link>
              <a href={CLINIC.phoneHref} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                Sună: {CLINIC.phone}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-bg-alt pt-6 text-sm font-medium text-text-muted">
              <span>✓ 20 ani experiență</span>
              <span>✓ Centrul Clujului</span>
              <span>✓ Rate 0% disponibile</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2 h-full">
            <Link
              href="/programare"
              className="group relative block h-full min-h-[420px] overflow-hidden rounded-2xl border border-border-subtle transition-colors hover:border-border-accent"
            >
              <Image
                src="/images/images.jpg"
                alt="Echipa ProliDent Clinic — apasă pentru programare"
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-opacity duration-300 group-hover:bg-ink/60 group-hover:opacity-100">
                <span className="font-display text-2xl font-bold" style={{ color: "#C4A882" }}>
                  Programează-te →
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* REZULTATE REALE */}
      <section className="bg-bg-card px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Cazuri Tratate</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">Înainte &amp; După</h2>
            <p className="mt-3 text-text-muted">Rezultate reale ale pacienților noștri din Cluj-Napoca</p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3">
            {RESULTS.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-card border border-border-subtle transition-all duration-300 hover:border-border-accent hover:scale-[1.02]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={r.src}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold text-secondary-light">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-text-muted">{r.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CUM FUNCȚIONEAZĂ */}
      <section className="bg-bg-alt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <Badge>Simplu și rapid</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">Cum funcționează</h2>
          </FadeIn>
          <div className="grid items-stretch gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.08} className="h-full">
                <div className="relative h-full text-center">
                  <Card className="flex h-full flex-col justify-center">
                    <CardContent>
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-3xl">
                        {step.icon}
                      </div>
                      <h3 className="font-semibold text-text-primary">{step.title}</h3>
                      <p className="mt-2 text-sm text-text-muted">{step.desc}</p>
                    </CardContent>
                  </Card>
                  {i < STEPS.length - 1 && (
                    <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-2xl text-primary/40 sm:block">→</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* URGENT BANNER */}
      <section className="border-y border-dashed border-urgent/30 bg-gradient-to-r from-urgent-light via-urgent-light to-bg-deep">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="animate-pulse text-3xl">🚨</span>
            <div>
              <h3 className="font-semibold text-text-primary">Urgențe Stomatologice — Program Extins</h3>
              <p className="text-sm text-text-muted">Durere dentară? Te preluăm prioritar, zilnic până la 22:00.</p>
            </div>
          </div>
          <Link href="/urgente">
            <Button variant="urgent">Sună Acum</Button>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Serviciile Noastre</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Tratamente complete pentru întreaga familie
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.06}>
                <Card className="h-full border-l-4 border-l-primary">
                  <CardContent>
                    <div className="mb-4 text-3xl">{s.icon}</div>
                    <h3 className="font-semibold text-text-primary">{s.name}</h3>
                    <p className="mt-2 text-sm text-text-muted">{s.desc}</p>
                    <Link href="/servicii" className="mt-4 inline-block text-sm font-semibold text-primary">
                      Programează →
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-bg-alt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>De Ce Noi</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">
              Grijă umană, susținută de sisteme care nu te lasă să aștepți
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <Card className="h-full border-t-2 border-t-primary">
                  <CardContent>
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary/25 to-primary/20 text-3xl">
                        {item.icon}
                      </div>
                      <span className="font-display text-4xl font-bold text-primary/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-semibold text-text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 text-center sm:grid-cols-3">
          {[
            { value: 2500, suffix: "+", label: "Pacienți mulțumiți" },
            { value: 20, suffix: " ani", label: "Experiență" },
            { value: 98, suffix: "%", label: "Satisfacție" },
          ].map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-text-muted">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-bg-alt px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <Badge>Recenzii Pacienți</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">Ce spun pacienții noștri</h2>
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <Card className="relative h-full overflow-hidden">
                  <CardContent>
                    <span className="absolute -top-2 left-3 font-display text-[100px] leading-none text-primary/5">&ldquo;</span>
                    <div className="relative mb-3 flex gap-1 text-secondary">
                      {Array.from({ length: t.stars }).map((_, idx) => (
                        <svg key={idx} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                          <path d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L10 14.9 4.4 18.1l1.4-6.3L1 7.5l6.4-.6z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="relative font-quote text-lg italic leading-relaxed text-text-primary">
                      {t.text}
                    </blockquote>
                    <div className="relative mt-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-on-gold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                        <div className="text-xs text-text-muted">{t.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-14 text-center">
            <Badge>Întrebări Frecvente</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary sm:text-4xl">Răspunsuri la întrebările voastre</h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-light px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Gata pentru un zâmbet mai sănătos?</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Prima consultație este simplă și relaxantă. Programează-te online în câteva secunde.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/programare">
            <Button size="lg">Programează Online</Button>
          </Link>
          <a href={CLINIC.phoneHref}>
            <Button variant="outline" size="lg">{CLINIC.phone}</Button>
          </a>
        </div>
      </section>
    </>
  );
}
