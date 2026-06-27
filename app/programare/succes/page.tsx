"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/data";
import { appointmentToCalendarEvent, buildGoogleCalendarUrl, downloadIcsFile } from "@/lib/calendar";

type StoredAppointment = {
  serviceLabel: string;
  date: string;
  time: string;
  nume: string;
};

export default function SuccesPage() {
  const [appt, setAppt] = React.useState<StoredAppointment | null>(null);

  React.useEffect(() => {
    const raw = sessionStorage.getItem("lastAppointment");
    if (raw) setAppt(JSON.parse(raw));
  }, []);

  if (!appt) {
    return (
      <section className="px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-text-muted">Nu am găsit detaliile programării.</p>
        <Link href="/programare" className="mt-4 inline-block text-primary underline">
          Fă o programare nouă
        </Link>
      </section>
    );
  }

  const [h, m] = appt.time.split(":").map(Number);
  const date = new Date(appt.date);
  date.setHours(h, m);

  const event = appointmentToCalendarEvent({ serviceName: appt.serviceLabel, date });

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-4xl shadow-glow-sm">
          ✅
        </div>
        <h1 className="font-display text-3xl font-extrabold text-text-primary">Vă mulțumim!</h1>
        <p className="mt-2 font-semibold text-primary">
          Programarea la {CLINIC.name} a fost înregistrată.
        </p>
        <p className="mt-3 text-text-muted">
          Veți primi un reminder cu o seară înainte și în dimineața programării, pe canalele alese.
        </p>

        <Card className="mt-8 text-left">
          <CardContent>
            <h3 className="mb-4 font-display font-bold text-text-primary">Rezumatul programării</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-text-muted">Pacient</dt>
                <dd className="font-semibold text-text-primary">{appt.nume}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Serviciu</dt>
                <dd className="font-semibold text-text-primary">{appt.serviceLabel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Data</dt>
                <dd className="font-semibold text-text-primary">
                  {date.toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long" })}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Ora</dt>
                <dd className="font-semibold text-text-primary">{appt.time}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-text-muted">Adresă</dt>
                <dd className="font-semibold text-text-primary">{CLINIC.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={buildGoogleCalendarUrl(event)} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Adaugă în Google Calendar</Button>
          </a>
          <Button variant="outline" onClick={() => downloadIcsFile(event)}>
            Adaugă în Apple Calendar
          </Button>
        </div>

        <Link href="/" className="mt-8 inline-block">
          <Button>Înapoi Acasă</Button>
        </Link>
      </div>
    </section>
  );
}
