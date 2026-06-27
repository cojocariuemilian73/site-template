"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function HealthProgressBar({ value }: { value: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-bg-alt">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary-light shadow-glow-sm"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
