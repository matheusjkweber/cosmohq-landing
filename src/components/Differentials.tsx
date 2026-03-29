"use client";

import { BarChart3, MessageSquare, Rocket, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { motion, ease, fadeUp, stagger } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const differentials = [
  {
    number: "01",
    title: "Entregamos rápido sem abrir mão de qualidade",
    description:
      "Velocidade sem gambiarras. Processos enxutos, ferramentas modernas e um time que sabe priorizar.",
    Icon: Zap,
    badgeVariant: "default" as const,
  },
  {
    number: "02",
    title: "Usamos dados para tomar decisões melhores",
    description:
      "Cada ajuste é baseado em números reais. Nada de achismo ou feeling sem fundamento.",
    Icon: BarChart3,
    badgeVariant: "accent" as const,
  },
  {
    number: "03",
    title: "Comunicação direta",
    description:
      "Sem reuniões intermináveis. Conversamos no ponto, entregamos no prazo e mantemos tudo transparente.",
    Icon: MessageSquare,
    badgeVariant: "secondary" as const,
  },
  {
    number: "04",
    title: "Somos clientes dos nossos próprios produtos",
    description:
      "Usamos o que construímos. Isso garante que cada ferramenta resolva problemas de verdade.",
    Icon: Rocket,
    badgeVariant: "success" as const,
  },
] as const;

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que a CosmoHQ"
          highlight="é diferente."
          description="Não somos mais uma agência genérica. Combinamos execução rápida, inteligência de dados e transparência para entregar resultado real."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="story-grid mt-14"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={item.number}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.05 }}
              className="col-span-12 md:col-span-6"
            >
              <Card
                className={cn(
                  "hover-lift spotlight-border group h-full rounded-[30px] border-white/10"
                )}
              >
                <CardContent className="flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={cn(
                        "rounded-2xl border border-white/10 bg-white/7 p-3 text-brand-primary transition duration-300",
                        "group-hover:scale-[1.03] group-hover:border-brand-primary/35"
                      )}
                    >
                      <item.Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <Badge variant={item.badgeVariant}>{item.number}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-white/66">
                      {item.description}
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
