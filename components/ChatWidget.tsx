"use client";

import * as React from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLINIC } from "@/lib/data";

type Message = {
  from: "bot" | "user";
  text: React.ReactNode;
};

const QUICK_REPLIES: { label: string; reply: React.ReactNode }[] = [
  {
    label: "Vreau o programare",
    reply: (
      <>
        Sigur! Poți face o programare în doar 3 pași.{" "}
        <Link href="/programare" className="font-semibold text-primary underline">
          Apasă aici pentru a te programa
        </Link>
        .
      </>
    ),
  },
  {
    label: "Am o urgență",
    reply: (
      <>
        Pentru urgențe te ajutăm imediat — răspuns garantat în max. 8 minute, între 08:00–22:00.{" "}
        <Link href="/urgente" className="font-semibold text-urgent underline">
          Mergi la pagina de urgențe
        </Link>{" "}
        sau sună direct la {CLINIC.phone}.
      </>
    ),
  },
  {
    label: "Întrebare despre prețuri",
    reply: (
      <>
        Avem prețuri transparente pentru fiecare tratament, plus un calculator de rate 0%.{" "}
        <Link href="/preturi" className="font-semibold text-primary underline">
          Vezi lista de prețuri
        </Link>
        .
      </>
    ),
  },
  {
    label: "Program cabinet",
    reply: (
      <>
        Suntem deschiși Luni–Vineri 9:00–18:00 și Sâmbătă 9:00–13:00. Pentru urgențe, suntem disponibili zilnic
        între 08:00–22:00.
      </>
    ),
  },
];

export function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { from: "bot", text: "Bună! Sunt asistentul virtual al cabinetului. Cu ce te pot ajuta?" },
  ]);

  function handleQuickReply(qr: { label: string; reply: React.ReactNode }) {
    setMessages((prev) => [...prev, { from: "user", text: qr.label }, { from: "bot", text: qr.reply }]);
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 flex h-[480px] w-[340px] flex-col overflow-hidden rounded-card border border-border-subtle bg-bg-card shadow-warm-lg sm:w-[380px]">
          <div className="flex items-center gap-3 border-b border-border-subtle bg-primary-light px-4 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-deep text-xl">🦷</div>
            <div>
              <div className="font-semibold text-text-primary">Asistent Virtual</div>
              <div className="text-xs text-primary">Online • răspunde instant</div>
            </div>
            <button className="ml-auto text-text-muted hover:text-primary" onClick={() => setOpen(false)} aria-label="Închide chat">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-bg-deep p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  m.from === "bot"
                    ? "bg-bg-deep text-text-primary shadow-warm"
                    : "ml-auto bg-primary text-on-gold"
                )}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border-subtle p-3">
            {QUICK_REPLIES.map((qr) => (
              <button
                key={qr.label}
                onClick={() => handleQuickReply(qr)}
                className="rounded-full border border-primary/25 bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-on-gold"
              >
                {qr.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Deschide chat"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-gold shadow-warm-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
