import type { Metadata } from "next";
import { BookingWizard } from "@/components/BookingWizard";
import { Badge } from "@/components/ui/badge";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programare Online | ProliDent Clinic — Cluj-Napoca",
  description: "Programează-te online în 4 pași simpli — alege serviciul, data și ora care îți convin.",
};

export default function ProgramarePage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Badge>Programare Online</Badge>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-text-primary sm:text-4xl">
          Programează-te la {CLINIC.name}
        </h1>
        <p className="mt-3 text-text-muted">{CLINIC.address} · {CLINIC.phone}</p>
      </div>
      <BookingWizard />
    </section>
  );
}
