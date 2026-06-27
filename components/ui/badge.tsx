import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-bg-alt px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary",
        className
      )}
      {...props}
    />
  );
}
