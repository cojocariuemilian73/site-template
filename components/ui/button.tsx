import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-sans text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-gold shadow-warm hover:bg-primary-dark hover:shadow-warm-lg",
        accent: "bg-secondary text-on-gold shadow-warm hover:bg-secondary-dark hover:shadow-warm-lg",
        urgent: "bg-urgent text-white shadow-glow-urgent hover:bg-urgent-dark",
        outline: "border border-primary text-primary bg-transparent hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/10",
        white: "bg-bg-card text-primary border border-border-subtle hover:border-border-accent",
      },
      size: {
        sm: "h-9 px-5 text-xs",
        md: "h-12 px-7",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
