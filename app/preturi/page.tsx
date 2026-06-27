import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { RateCalculator } from "@/components/RateCalculator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CLINIC, PRICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Prețuri | ProliDent Clinic — Stomatologie Cluj-Napoca",
  description: "Prețuri transparente pentru consultație, detartraj, albire, implanturi și toate tratamentele stomatologice.",
};

export default function PreturiPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
        <div className="mx-auto max-w-7xl">
          <Badge>Transparență Totală</Badge>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-text-primary sm:text-5xl">Listă de Prețuri</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Prețuri transparente și corecte. Fără costuri ascunse, fără surprize.
          </p>
        </div>
      </div>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex gap-3 rounded-card border border-primary/15 bg-bg-card p-5 text-sm text-text-muted shadow-warm">
            <span className="text-xl">ℹ️</span>
            <p>
              Prețurile afișate sunt orientative și pot varia în funcție de complexitatea cazului. Suntem
              parteneri CNAS — unele servicii pot fi decontate cu cardul de sănătate. Oferim și{" "}
              <strong className="text-primary">rate 0% dobândă</strong> prin partenerii noștri bancari.
            </p>
          </div>

          <Tabs defaultValue={PRICES[0].id}>
            <TabsList>
              {PRICES.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {PRICES.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="overflow-hidden rounded-card border border-primary/15">
                  <div className="grid grid-cols-[1fr_auto] bg-primary-light px-6 py-3 text-xs font-semibold uppercase tracking-wide text-primary">
                    <span>Serviciu</span>
                    <span>Preț</span>
                  </div>
                  {cat.items.map((item, i) => (
                    <div
                      key={item.name}
                      className={`grid grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 ${i % 2 ? "bg-bg-alt" : "bg-bg-card"}`}
                    >
                      <div>
                        <div className="font-semibold text-text-primary">{item.name}</div>
                        <div className="text-sm text-text-muted">{item.desc}</div>
                      </div>
                      <div className="font-semibold text-primary">{item.price}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="border-y border-primary/10 px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
          <Badge>Plată Flexibilă</Badge>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Calculează rata lunară</h2>
        </FadeIn>
        <FadeIn>
          <RateCalculator />
        </FadeIn>
      </section>

      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/15 to-secondary/15" />
        <h2 className="font-display text-3xl font-extrabold text-text-primary sm:text-4xl">Gata să începi tratamentul?</h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted">
          Consultația inițială costă 100 RON și include planul complet de tratament.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/programare">
            <Button size="lg">Programează Consultația</Button>
          </Link>
          <a href={CLINIC.phoneHref}>
            <Button variant="outline" size="lg">{CLINIC.phone}</Button>
          </a>
        </div>
      </section>
    </>
  );
}
