"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060b14] disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-[linear-gradient(135deg,#3498db,#2b7de9_56%,#52b8ff)] text-white shadow-[0_18px_45px_-18px_rgba(52,152,219,0.7)] hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_24px_54px_-18px_rgba(52,152,219,0.85)]":
        variant === "default",
      "border border-white/10 bg-white/6 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10":
        variant === "secondary",
      "border border-brand-primary/35 bg-brand-primary/10 text-white hover:-translate-y-0.5 hover:border-brand-primary/60 hover:bg-brand-primary/16":
        variant === "outline",
      "text-white/78 hover:bg-white/8 hover:text-white": variant === "ghost",
      "h-10 px-4 py-2": size === "sm",
      "h-12 px-5 py-3": size === "default",
      "h-14 px-7 py-4 text-base": size === "lg",
    },
    className
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
