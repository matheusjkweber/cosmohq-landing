"use client";

import { Hammer, Search, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { motion, ease, fadeUp, stagger } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Entender o problema",
    description:
      "Ouvimos sua ideia, analisamos o mercado e mapeamos o que precisa ser construído.",
    Icon: Search,
    kickerClass: "text-brand-primary",
    cardClass: cn(
      "border-brand-primary/30 bg-[linear-gradient(165deg,rgba(52,152,219,0.12),rgba(255,255,255,0.02))]",
      "shadow-[0_24px_70px_-28px_rgba(52,152,219,0.42)]"
    ),
    iconWrapClass:
      "border-brand-primary/35 bg-brand-primary/10 text-brand-primary group-hover:border-brand-primary/55 group-hover:shadow-[0_0_28px_-4px_rgba(52,152,219,0.5)]",
  },
  {
    number: "02",
    title: "Construir a solução",
    description:
      "Desenvolvemos com velocidade e qualidade — apps, sites, sistemas ou presença nas redes.",
    Icon: Hammer,
    kickerClass: "text-brand-accent",
    cardClass: cn(
      "border-brand-accent/28 bg-[linear-gradient(165deg,rgba(241,196,15,0.1),rgba(255,255,255,0.02))]",
      "shadow-[0_24px_70px_-28px_rgba(241,196,15,0.22)]"
    ),
    iconWrapClass:
      "border-brand-accent/35 bg-brand-accent/10 text-brand-accent group-hover:border-brand-accent/55 group-hover:shadow-[0_0_28px_-4px_rgba(241,196,15,0.35)]",
  },
  {
    number: "03",
    title: "Analisar e melhorar",
    description:
      "Usamos dados e inteligência para entender o que funciona e ajustar continuamente. Sem achismo.",
    Icon: TrendingUp,
    kickerClass: "text-brand-success",
    cardClass: cn(
      "border-brand-success/30 bg-[linear-gradient(165deg,rgba(46,204,113,0.1),rgba(255,255,255,0.02))]",
      "shadow-[0_24px_70px_-28px_rgba(46,204,113,0.28)]"
    ),
    iconWrapClass:
      "border-brand-success/35 bg-brand-success/10 text-brand-success group-hover:border-brand-success/55 group-hover:shadow-[0_0_28px_-4px_rgba(46,204,113,0.4)]",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Três etapas para tirar sua ideia do papel"
          highlight="com resultado real."
          description="Nosso diferencial aparece no processo: usamos dados e inteligência para entender o que está funcionando e ajustar continuamente."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.06 }}
              className="col-span-12 md:col-span-4"
            >
              <Card
                className={cn(
                  "spotlight-border group relative h-full overflow-hidden rounded-[30px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1",
                  step.cardClass
                )}
              >
                <CardContent className="flex h-full flex-col gap-6">
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className={cn(
                        "display-kicker font-semibold tabular-nums",
                        step.kickerClass
                      )}
                      aria-hidden
                    >
                      {step.number}
                    </p>
                    <div
                      className={cn(
                        "rounded-2xl border p-3 transition duration-300",
                        step.iconWrapClass
                      )}
                    >
                      <step.Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/66">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
