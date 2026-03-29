"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary" | "accent" | "success";

export function badgeVariants({
  variant = "default",
  className,
}: {
  variant?: BadgeVariant;
  className?: string;
}) {
  return cn(
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
    {
      "border-brand-primary/30 bg-brand-primary/12 text-brand-primary":
        variant === "default",
      "border-white/12 bg-white/7 text-white/82": variant === "secondary",
      "border-brand-accent/30 bg-brand-accent/12 text-brand-accent":
        variant === "accent",
      "border-brand-success/30 bg-brand-success/12 text-brand-success":
        variant === "success",
    },
    className
  );
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  );
}
