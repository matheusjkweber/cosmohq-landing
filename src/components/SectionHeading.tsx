"use client";

import { motion, fadeUp, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <Badge
        variant="secondary"
        className={cn(
          "mb-5 bg-white/5",
          align === "center" ? "mx-auto w-fit justify-center" : "w-fit"
        )}
      >
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.6rem] lg:text-[3.5rem]">
        {title}{" "}
        {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-white/66 sm:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
