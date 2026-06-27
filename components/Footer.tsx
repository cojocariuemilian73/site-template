import Link from "next/link";
import { CLINIC } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-bg-footer text-text-faint">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xl">🦷</span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl">
                <span className="font-bold text-text-primary">ProliDent</span>
                <span className="font-normal text-text-primary"> Clinic</span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-text-faint">{CLINIC.tagline}</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-text-faint">
            Stomatologie de calitate în centrul Clujului din 2004.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Link-uri rapide</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Acasă"],
              ["/servicii", "Servicii"],
              ["/programare", "Programare"],
              ["/urgente", "Urgențe"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-text-faint transition-colors hover:text-secondary-light">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Contact</h4>
          <ul className="space-y-3 text-sm text-text-faint">
            <li>📍 {CLINIC.address}</li>
            <li>📞 <a href={CLINIC.phoneHref} className="hover:text-secondary-light">{CLINIC.phone}</a></li>
            <li>📞 <a href={CLINIC.phoneFixedHref} className="hover:text-secondary-light">{CLINIC.phoneFixed}</a></li>
            <li>🕐 L–V: {CLINIC.hours[0].value} · S: {CLINIC.hours[5].value}</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Social media</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" className="text-text-faint hover:text-secondary-light">
                Facebook: ProliDent
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-subtle px-4 py-6 text-center text-xs text-text-faint sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {CLINIC.name} · {CLINIC.address}
      </div>
    </footer>
  );
}
