"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/data";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg-navbar">
      {/* Bandă de sus, auriu, cu telefonul */}
      <div className="bg-primary px-4 py-1.5 text-center sm:px-6 lg:px-8">
        <a
          href={CLINIC.phoneHref}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[1.5px] text-on-gold transition-colors hover:text-bg-navbar"
        >
          <Phone className="h-3.5 w-3.5" />
          {CLINIC.phone}
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl">🦷</span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg sm:text-xl">
              <span className="font-bold text-text-primary">ProliDent</span>
              <span className="font-normal text-text-primary"> Clinic</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">{CLINIC.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={pathname === link.href}
              className={cn(
                "nav-link-glow rounded-btn px-4 py-2 text-xs font-semibold uppercase tracking-[1.5px] text-text-muted transition-colors hover:text-secondary-light",
                pathname === link.href && "text-secondary-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/urgente">
            <Button variant="urgent" size="sm">Urgență</Button>
          </Link>
          <Link href="/programare">
            <Button size="sm">Programează-te</Button>
          </Link>
        </div>

        <button
          className="text-primary lg:hidden"
          aria-label="Meniu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-subtle bg-bg-navbar px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-btn px-4 py-3 text-sm font-semibold uppercase tracking-wide text-text-muted hover:bg-primary/10 hover:text-secondary-light",
                  pathname === link.href && "bg-primary/10 text-secondary-light"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/urgente" onClick={() => setOpen(false)} className="mt-2">
              <Button variant="urgent" className="w-full">Urgență Acum</Button>
            </Link>
            <Link href="/programare" onClick={() => setOpen(false)}>
              <Button className="w-full">Programează-te</Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
