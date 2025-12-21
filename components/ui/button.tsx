import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "ghost" | "solid";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = "solid", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const base =
      "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--brand-blue,#48A4DB)] focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";
    const variants: Record<typeof variant, string> = {
      solid: "bg-[var(--brand-orange,#D65527)] text-white hover:brightness-95",
      ghost:
        "border border-[color:rgba(30,34,79,0.18)] text-[var(--brand-navy,#1E224F)] bg-white hover:border-[color:rgba(30,34,79,0.35)]",
    };

    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
