"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RATE_TREATMENTS } from "@/lib/data";

const TERMS = [12, 24, 36];

export function RateCalculator() {
  const [treatmentIndex, setTreatmentIndex] = React.useState(0);
  const [months, setMonths] = React.useState(12);

  const treatment = RATE_TREATMENTS[treatmentIndex];
  const monthlyRon = treatment.price / months;
  const monthlyEur = monthlyRon / 5; // curs orientativ RON -> EUR

  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent>
        <h3 className="font-display text-xl font-bold text-text-primary">💳 Calculator Rate 0% Dobândă</h3>
        <p className="mt-1 text-sm text-text-muted">Vezi instant rata lunară pentru tratamentul ales.</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Tratament</Label>
            <Select
              value={String(treatmentIndex)}
              onValueChange={(v) => setTreatmentIndex(Number(v))}
            >
              <SelectTrigger className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {RATE_TREATMENTS.map((t, i) => (
                  <SelectItem key={t.name} value={String(i)}>
                    {t.name} — {t.price.toLocaleString("ro-RO")} RON
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Număr de rate</Label>
            <Select value={String(months)} onValueChange={(v) => setMonths(Number(v))}>
              <SelectTrigger className="mt-1.5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TERMS.map((t) => (
                  <SelectItem key={t} value={String(t)}>
                    {t} luni
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 rounded-card border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 text-center">
          <div className="text-sm text-text-muted">Plătești</div>
          <div className="mt-1 font-mono text-3xl font-extrabold text-primary">
            {monthlyRon.toFixed(0)} RON
            <span className="ml-2 text-base font-semibold text-text-muted">
              (~{monthlyEur.toFixed(0)} EUR)
            </span>
            <span className="text-lg font-semibold text-text-muted"> / lună</span>
          </div>
          <div className="mt-1 text-sm font-semibold text-secondary">dobândă 0%</div>
        </div>

        <p className="mt-4 text-center text-xs text-text-muted">
          Aprobare în 5 minute prin partenerul nostru bancar. Discutăm la cabinet.
        </p>
      </CardContent>
    </Card>
  );
}
