"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  nume: z.string().min(2, "Introdu numele complet"),
  telefon: z.string().min(8, "Introdu un număr de telefon valid"),
  problema: z.string().min(5, "Descrie pe scurt problema"),
});

type FormData = z.infer<typeof schema>;

export function EmergencyForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appointmentKind: "urgenta",
        service: "extractie",
        serviceLabel: "Urgență stomatologică",
        date: new Date().toISOString(),
        time: new Date().toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" }),
        nume: data.nume,
        telefon: data.telefon,
        pacientStatus: "nou",
        remindere: ["sms"],
        mesaj: data.problema,
      }),
    }).catch(() => {});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-primary/30 bg-primary/10 p-8 text-center">
        <div className="text-4xl">✅</div>
        <h3 className="mt-3 font-semibold text-text-primary">Solicitarea ta a fost trimisă!</h3>
        <p className="mt-2 text-sm text-text-muted">
          Un medic te va contacta în maximum 8 minute. Pentru răspuns imediat, sună-ne direct.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-card border border-urgent/15 bg-bg-card p-6 shadow-warm">
      <h3 className="mb-1 font-semibold text-text-primary">Formular rapid de urgență</h3>
      <p className="mb-5 text-sm text-text-muted">Completează și te contactăm imediat.</p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="nume">Nume *</Label>
          <Input id="nume" className="mt-1.5" placeholder="Numele tău" {...register("nume")} />
          {errors.nume && <p className="mt-1 text-xs text-urgent">{errors.nume.message}</p>}
        </div>
        <div>
          <Label htmlFor="telefon">Telefon *</Label>
          <Input id="telefon" className="mt-1.5" placeholder="07xx xxx xxx" {...register("telefon")} />
          {errors.telefon && <p className="mt-1 text-xs text-urgent">{errors.telefon.message}</p>}
        </div>
        <div>
          <Label htmlFor="problema">Descrie problema în 1 propoziție *</Label>
          <Textarea id="problema" className="mt-1.5" placeholder="Ex: durere puternică la molarul din dreapta jos" {...register("problema")} />
          {errors.problema && <p className="mt-1 text-xs text-urgent">{errors.problema.message}</p>}
        </div>
      </div>

      <Button type="submit" variant="urgent" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? "Se trimite…" : "🚨 Trimite solicitarea de urgență"}
      </Button>
    </form>
  );
}
