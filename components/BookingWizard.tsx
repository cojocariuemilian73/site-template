"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { TREATMENT_LABELS, type TreatmentType } from "@/lib/reminders";
import { cn } from "@/lib/utils";

type AppointmentKind = "consultatie-noua" | "control" | "altceva";

const SERVICE_OPTIONS: { id: TreatmentType; icon: string; label: string }[] = [
  { id: "consultatie", icon: "🔬", label: "Consultație" },
  { id: "detartraj", icon: "✨", label: "Detartraj" },
  { id: "albire", icon: "💎", label: "Albire" },
  { id: "implant", icon: "🔩", label: "Implant" },
  { id: "extractie", icon: "🦷", label: "Extracție" },
  { id: "ortodontie", icon: "😁", label: "Ortodonție" },
  { id: "altul", icon: "➕", label: "Altul" },
];

function getNextDays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  let added = 0;
  let i = 1;
  while (added < count) {
    const candidate = new Date(d);
    candidate.setDate(d.getDate() + i);
    if (candidate.getDay() !== 0) {
      days.push(candidate);
      added++;
    }
    i++;
  }
  return days;
}

const ALL_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "15:00", "15:30", "16:30"];

// Sloturi simulate ca indisponibile, pentru a demonstra vizual logica de "ocupat".
const BUSY_SLOTS: Record<number, string[]> = {
  0: ["09:00", "10:00", "13:00"],
  1: ["09:30", "11:00", "15:00"],
  2: ["10:30", "14:00"],
};

const personalSchema = z.object({
  nume: z.string().min(2, "Introdu numele complet"),
  telefon: z.string().min(8, "Introdu un număr de telefon valid"),
  email: z.string().email("Email invalid").optional().or(z.literal("")),
  pacientStatus: z.enum(["nou", "existent"]),
  remindere: z.array(z.enum(["whatsapp", "sms", "email"])).min(1, "Selectează cel puțin un canal"),
  mesaj: z.string().optional(),
});

type PersonalForm = z.infer<typeof personalSchema>;

const STEP_LABELS = ["Tip", "Serviciu", "Dată & Oră", "Date personale"];

export function BookingWizard() {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [appointmentKind, setAppointmentKind] = React.useState<AppointmentKind | null>(null);
  const [service, setService] = React.useState<TreatmentType | null>(null);
  const [dayIndex, setDayIndex] = React.useState<number | null>(null);
  const [slot, setSlot] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState(false);

  const days = React.useMemo(() => getNextDays(7), []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PersonalForm>({
    resolver: zodResolver(personalSchema),
    defaultValues: { pacientStatus: "nou", remindere: ["sms"] },
  });

  const remindere = watch("remindere") ?? [];

  function toggleChannel(channel: "whatsapp" | "sms" | "email") {
    const current = remindere.includes(channel);
    setValue(
      "remindere",
      current ? remindere.filter((r) => r !== channel) : [...remindere, channel],
      { shouldValidate: true }
    );
  }

  function nextAvailable() {
    for (let di = 0; di < days.length; di++) {
      const busy = BUSY_SLOTS[di] ?? [];
      const free = ALL_SLOTS.find((s) => !busy.includes(s));
      if (free) {
        return { day: days[di], slot: free, dayIndex: di };
      }
    }
    return null;
  }

  const next = nextAvailable();
  const progressPercent = ((step - 1) / (STEP_LABELS.length - 1)) * 100;

  async function onSubmit(data: PersonalForm) {
    if (dayIndex === null || !slot || !service) return;
    setSubmitting(true);

    const date = days[dayIndex];
    const payload = {
      appointmentKind,
      service,
      serviceLabel: TREATMENT_LABELS[service],
      date: date.toISOString(),
      time: slot,
      ...data,
    };

    try {
      await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Continuăm către pagina de succes — backend-ul de programări e mock pentru acest demo.
    }

    sessionStorage.setItem("lastAppointment", JSON.stringify(payload));
    router.push("/programare/succes");
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="mb-10">
        <div className="relative mb-4 h-1.5 rounded-full bg-bg-alt">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          {STEP_LABELS.map((label, i) => (
            <div key={label} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold transition-all duration-300",
                  step > i + 1
                    ? "bg-primary text-on-gold"
                    : step === i + 1
                    ? "border-2 border-primary bg-primary/10 text-primary"
                    : "border border-text-muted/30 bg-bg-card text-text-muted"
                )}
              >
                {step > i + 1 ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className="hidden text-xs font-semibold text-text-muted sm:inline">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">Ce tip de programare dorești?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { id: "consultatie-noua" as const, label: "Consultație nouă", desc: "Vin pentru prima dată la cabinet", icon: "🆕" },
                { id: "control" as const, label: "Control periodic", desc: "Am fost pacient anterior", icon: "🔁" },
                { id: "altceva" as const, label: "Altceva", desc: "O altă solicitare", icon: "✏️" },
              ].map((opt) => (
                <Card
                  key={opt.id}
                  className={cn(
                    "relative cursor-pointer",
                    appointmentKind === opt.id && "border-primary shadow-glow-sm"
                  )}
                  onClick={() => setAppointmentKind(opt.id)}
                >
                  {appointmentKind === opt.id && (
                    <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-on-gold">
                      <Check className="h-3 w-3" />
                    </div>
                  )}
                  <CardContent className="text-center">
                    <div className="mb-2 text-3xl">{opt.icon}</div>
                    <div className="font-display font-bold text-text-primary">{opt.label}</div>
                    <div className="mt-1 text-sm text-text-muted">{opt.desc}</div>
                  </CardContent>
                </Card>
              ))}
              <a href="/urgente">
                <Card className="h-full cursor-pointer border-urgent/40 bg-urgent/5 hover:border-urgent/70 hover:shadow-glow-urgent">
                  <CardContent className="text-center">
                    <div className="mb-2 text-3xl">🚨</div>
                    <div className="font-display font-bold text-urgent">URGENȚĂ</div>
                    <div className="mt-1 text-sm text-urgent/80">Răspuns în max. 8 minute</div>
                  </CardContent>
                </Card>
              </a>
            </div>
            <div className="mt-8 flex justify-end">
              <Button disabled={!appointmentKind} onClick={() => setStep(2)}>
                Continuă →
              </Button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">Ce serviciu te interesează?</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SERVICE_OPTIONS.map((opt) => (
                <Card
                  key={opt.id}
                  className={cn(
                    "relative cursor-pointer",
                    service === opt.id && "border-primary shadow-glow-sm"
                  )}
                  onClick={() => setService(opt.id)}
                >
                  {service === opt.id && (
                    <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-on-gold">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                  )}
                  <CardContent className="text-center">
                    <div className="mb-2 text-2xl">{opt.icon}</div>
                    <div className="text-sm font-semibold text-text-primary">{opt.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>← Înapoi</Button>
              <Button disabled={!service} onClick={() => setStep(3)}>Continuă →</Button>
            </div>
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h2 className="mb-2 font-display text-2xl font-bold text-text-primary">Alege data și ora</h2>
            {next && (
              <p className="mb-6 text-sm font-semibold text-primary">
                ⚡ Următorul loc disponibil:{" "}
                {next.dayIndex === 0 ? "Mâine" : next.day.toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long" })}
                , {next.slot}
              </p>
            )}

            <div className="flex gap-2 overflow-x-auto pb-2">
              {days.map((d, i) => {
                const hasFree = ALL_SLOTS.some((s) => !(BUSY_SLOTS[i] ?? []).includes(s));
                return (
                  <button
                    key={i}
                    onClick={() => { setDayIndex(i); setSlot(null); }}
                    className={cn(
                      "relative flex min-w-[78px] flex-col items-center rounded-card border px-3 py-3 text-sm transition-colors",
                      dayIndex === i
                        ? "border-primary bg-primary/10 text-text-primary shadow-glow-sm"
                        : "border-text-muted/20 bg-bg-card text-text-primary hover:border-primary/40"
                    )}
                  >
                    {hasFree && (
                      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />
                    )}
                    <span className="text-xs uppercase text-text-muted">{d.toLocaleDateString("ro-RO", { weekday: "short" })}</span>
                    <span className="text-lg font-bold">{d.getDate()}</span>
                    <span className="text-xs text-text-muted">{d.toLocaleDateString("ro-RO", { month: "short" })}</span>
                  </button>
                );
              })}
            </div>

            {dayIndex !== null && (
              <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {ALL_SLOTS.map((s) => {
                  const busy = (BUSY_SLOTS[dayIndex] ?? []).includes(s);
                  return (
                    <button
                      key={s}
                      disabled={busy}
                      onClick={() => setSlot(s)}
                      className={cn(
                        "rounded-btn border px-3 py-2.5 text-sm font-semibold transition-colors",
                        busy && "cursor-not-allowed border-text-muted/15 bg-bg-alt text-text-muted/50 line-through",
                        !busy && slot === s && "border-primary bg-primary text-on-gold shadow-glow-sm",
                        !busy && slot !== s && "border-text-muted/20 bg-bg-card text-text-primary hover:border-primary/40"
                      )}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>← Înapoi</Button>
              <Button disabled={dayIndex === null || !slot} onClick={() => setStep(4)}>Continuă →</Button>
            </div>
          </motion.div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <motion.form
            key="s4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mb-6 font-display text-2xl font-bold text-text-primary">Datele tale</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="nume">Nume complet *</Label>
                <Input id="nume" className="mt-1.5" placeholder="Ion Popescu" {...register("nume")} />
                {errors.nume && <p className="mt-1 text-xs text-urgent">{errors.nume.message}</p>}
              </div>
              <div>
                <Label htmlFor="telefon">Telefon *</Label>
                <Input id="telefon" className="mt-1.5" placeholder="07xx xxx xxx" {...register("telefon")} />
                {errors.telefon && <p className="mt-1 text-xs text-urgent">{errors.telefon.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" className="mt-1.5" placeholder="adresa@email.ro" {...register("email")} />
                {errors.email && <p className="mt-1 text-xs text-urgent">{errors.email.message}</p>}
              </div>

              <div className="sm:col-span-2 flex flex-wrap gap-6">
                <label className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <input type="radio" value="nou" {...register("pacientStatus")} className="h-4 w-4 accent-primary" /> Sunt pacient nou
                </label>
                <label className="flex items-center gap-2 text-sm font-semibold text-text-primary">
                  <input type="radio" value="existent" {...register("pacientStatus")} className="h-4 w-4 accent-primary" /> Sunt pacient existent
                </label>
              </div>

              <div className="sm:col-span-2">
                <Label>Doresc reminder pe:</Label>
                <div className="mt-2 flex flex-wrap gap-5">
                  {(["whatsapp", "sms", "email"] as const).map((ch) => (
                    <label key={ch} className="flex items-center gap-2 text-sm font-semibold text-text-primary capitalize">
                      <Checkbox checked={remindere.includes(ch)} onCheckedChange={() => toggleChannel(ch)} />
                      {ch}
                    </label>
                  ))}
                </div>
                {errors.remindere && <p className="mt-1 text-xs text-urgent">{errors.remindere.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="mesaj">Descrie pe scurt problema (opțional)</Label>
                <Textarea id="mesaj" className="mt-1.5" placeholder="Ex: durere la molarul din stânga sus…" {...register("mesaj")} />
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Button type="button" variant="outline" onClick={() => setStep(3)}>← Înapoi</Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Se confirmă…" : "Confirmă programarea"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
