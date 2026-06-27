import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full border-0 border-b-2 border-text-muted/30 bg-transparent px-1 text-sm text-text-primary placeholder:text-text-muted/70 outline-none transition-colors focus:border-primary",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
