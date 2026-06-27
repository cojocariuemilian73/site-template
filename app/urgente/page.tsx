import type { Metadata } from "next";
import { CLINIC } from "@/lib/data";
import { EmergencyForm } from "@/components/EmergencyForm";
import { ResponseTimer } from "@/components/ResponseTimer";

export const metadata: Metadata = {
  title: "Urgențe Stomatologice | ProliDent Clinic — Cluj-Napoca",
  description: "Durere dentară în Cluj? ProliDent Clinic te preia prioritar la urgențe.",
};

const TIPS = [
  { title: "Durere dentară puternică", tip: "Ia un calmant fără aspirină (ex. paracetamol), clătește cu apă călduță cu sare și evită alimentele foarte calde/reci." },
  { title: "Dinte fracturat", tip: "Păstrează fragmentul (dacă îl găsești) într-un pahar cu lapte sau salivă și vino cât mai rapid la cabinet." },
  { title: "Lucrare protetică căzută", tip: "Nu lipi coroana/puntea cu adeziv universal — păstreaz-o curată și sună-ne pentru recimentare." },
  { title: "Dinte scos complet din alveolă", tip: "Ține dintele de coroană (nu de rădăcină), pune-l în lapte și vino în maximum 30-60 de minute." },
];

export default function UrgentePage() {
  return (
    <div className="bg-urgent-light">
      <section className="px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-urgent shadow-warm">
            🚨 Urgențe Stomatologice
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold text-text-primary sm:text-5xl">
            Urgență dentară în Cluj? Suntem aici.
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Echipa {CLINIC.name} răspunde urgențelor în intervalul programului nostru.
          </p>

          <div className="mt-8 flex justify-center">
            <ResponseTimer />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CLINIC.phoneHref}
              className="flex h-14 items-center gap-2 rounded-btn bg-urgent px-8 font-semibold text-white shadow-glow-urgent transition-transform hover:scale-105"
            >
              📞 Sună acum: {CLINIC.phone}
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center gap-2 rounded-btn border-2 border-urgent/40 bg-bg-card px-8 font-semibold text-urgent transition-colors hover:bg-urgent/5"
            >
              💬 Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg-deep px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <EmergencyForm />

          <div>
            <div className="rounded-card border border-urgent/15 bg-bg-card p-6 shadow-warm">
              <h3 className="font-semibold text-text-primary">🕐 Program Urgențe</h3>
              <p className="mt-2 text-sm text-text-muted">Vă preluăm prioritar în intervalul:</p>
              <p className="mt-3 text-2xl font-bold text-urgent">{CLINIC.urgentHours}</p>
              <p className="mt-2 text-xs text-text-muted">Adresă: {CLINIC.address}</p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-semibold text-text-primary">Ce faci până ajungi la noi</h3>
              <div className="space-y-4">
                {TIPS.map((t) => (
                  <div key={t.title} className="rounded-card border border-urgent/10 bg-bg-card p-5 shadow-warm">
                    <h4 className="font-semibold text-text-primary">⚠️ {t.title}</h4>
                    <p className="mt-1.5 text-sm text-text-muted">{t.tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
