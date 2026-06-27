import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";
import { CLINIC, FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | ProliDent Clinic — Stomatologie Cluj-Napoca",
  description: "Contactați ProliDent Clinic, în centrul Clujului — telefon, adresă, orar și programare online.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="mx-auto max-w-7xl">
          <Badge>Suntem la un pas distanță</Badge>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary sm:text-5xl">Găsește-ne în centrul Clujului</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Sună-ne direct sau programează-te online — îți răspundem rapid în orice situație.
          </p>
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <FadeIn className="space-y-6">
            <Card>
              <CardContent>
                <h3 className="mb-4 font-display font-bold text-text-primary">📞 Date de Contact</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-xl">📱</span>
                    <div>
                      <div className="font-semibold text-text-primary">Telefon (mobil)</div>
                      <a href={CLINIC.phoneHref} className="text-primary">{CLINIC.phone}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <div className="font-semibold text-text-primary">Telefon (fix)</div>
                      <a href={CLINIC.phoneFixedHref} className="text-primary">{CLINIC.phoneFixed}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">💬</span>
                    <div>
                      <div className="font-semibold text-text-primary">WhatsApp</div>
                      <a href={CLINIC.whatsapp} className="text-primary">{CLINIC.phone}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <div className="font-semibold text-text-primary">Email</div>
                      <span className="text-text-muted">{CLINIC.email}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <div className="font-semibold text-text-primary">Adresă</div>
                      <span className="text-text-muted">{CLINIC.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="mb-4 font-display font-bold text-text-primary">🕐 Program de Lucru</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {CLINIC.hours.map((h) => (
                      <tr key={h.day} className="border-b border-primary/10 last:border-0">
                        <td className="py-2 text-text-muted">{h.day}</td>
                        <td className={`py-2 text-right font-semibold ${h.value === "Închis" ? "text-urgent" : "text-text-primary"}`}>
                          {h.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 rounded-2xl border border-primary/15 bg-bg-alt p-3 text-xs text-text-muted">
                  🚨 <strong className="text-primary">Urgențe:</strong> Disponibili zilnic {CLINIC.urgentHours}.
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0">
              <iframe
                src={CLINIC.mapsEmbedUrl}
                title={`Locație ${CLINIC.shortName} pe Google Maps`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>

            <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Card className="border-primary/30 bg-gradient-to-br from-primary/15 to-secondary/15">
                <CardContent className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <div className="font-display font-bold text-text-primary">{CLINIC.address}</div>
                    <div className="text-sm text-primary">Deschide în Google Maps →</div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent>
                <h2 className="font-display text-2xl font-bold text-text-primary">Programare Online</h2>
                <p className="mt-2 text-sm text-text-muted">
                  Folosește wizard-ul nostru de programare — alegi serviciul, data și ora în câteva secunde.
                </p>
                <Link href="/programare">
                  <Button className="mt-6 w-full" size="lg">Mergi la Programare</Button>
                </Link>

                <div className="mt-6 border-t border-primary/10 pt-6">
                  <p className="text-sm text-text-muted">Ai o urgență chiar acum?</p>
                  <Link href="/urgente">
                    <Button variant="urgent" className="mt-3 w-full">Pagina de Urgențe</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-10 text-center">
            <Badge>Întrebări Frecvente</Badge>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary">Răspunsuri la întrebările voastre</h2>
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
    </>
  );
}
