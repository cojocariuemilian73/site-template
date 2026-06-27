"use client";

import * as React from "react";

function format(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

export function ResponseTimer() {
  // Contor demonstrativ care simulează timpul mediu de răspuns al echipei de urgențe.
  const [seconds, setSeconds] = React.useState(7 * 60 + 32);

  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const interval = setInterval(() => {
      setSeconds((s) => {
        const next = s + (Math.random() > 0.5 ? 1 : -1);
        return Math.min(Math.max(next, 5 * 60), 9 * 60);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-col items-center gap-1 rounded-card bg-bg-card px-8 py-4 shadow-warm">
      <span className="text-xs uppercase tracking-wider text-text-muted">Timp mediu de răspuns</span>
      <span className="text-3xl font-bold tabular-nums text-urgent">
        {format(seconds)}
      </span>
    </div>
  );
}
