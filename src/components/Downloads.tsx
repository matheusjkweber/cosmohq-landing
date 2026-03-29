"use client";

import {
  Apple,
  ArrowRight,
  CalendarClock,
  Globe,
  Mail,
  Smartphone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const platforms = [
  {
    name: "iOS",
    label: "App Store",
    status: "Coming Soon",
    description:
      "A versao mobile faz parte do plano de marca, mas o link oficial ainda nao foi aberto.",
    icon: Apple,
  },
  {
    name: "Android",
    label: "Google Play",
    status: "Coming Soon",
    description:
      "A pagina trata o Android com a mesma honestidade: interesse pode ser capturado, download ainda nao.",
    icon: Smartphone,
  },
  {
    name: "Workspace Web",
    label: "Waitlist",
    status: "Request Access",
    description:
      "Enquanto as lojas nao abrem, a versao web e a melhor CTA para validar demanda e formar base inicial.",
    icon: Globe,
  },
];

export default function Downloads() {
  return (
    <section
      id="downloads"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
          <SectionHeading
            eyebrow="Downloads"
            title="Sem links de loja ainda."
            highlight="Com mensagem certa, isso reforca exclusividade."
            description="A secao deixa claro que iOS e Android continuam em Coming Soon e transforma o momento atual em waitlist, acesso antecipado e captura de demanda qualificada."
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
            className="lg:justify-self-end"
          >
            <div className="glass-panel-strong inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm text-white/70">
              <CalendarClock className="h-4 w-4 text-brand-secondary" />
              Produto ainda nao lancado. O objetivo aqui e converter interesse.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: index * 0.05 }}
            >
              <Card className="hover-lift h-full rounded-[28px]">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-white">
                      <platform.icon className="h-5 w-5" />
                    </div>
                    <Badge
                      variant={
                        platform.status === "Request Access" ? "default" : "secondary"
                      }
                    >
                      {platform.status}
                    </Badge>
                  </div>

                  <div className="mt-8">
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {platform.name}
                    </div>
                    <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/44">
                      {platform.label}
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-6 text-white/60">
                    {platform.description}
                  </p>

                  <div className="mt-auto pt-8">
                    {platform.status === "Request Access" ? (
                      <a
                        href="mailto:hello@cosmohq.app?subject=CosmoHQ%20private%20beta"
                        className={buttonVariants({
                          size: "default",
                          className: "flex w-full",
                        })}
                      >
                        Solicitar acesso
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-center text-sm text-white/42">
                        Link de loja ainda indisponivel
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="mt-10"
        >
          <Card className="editorial-panel spotlight-border rounded-[32px]">
            <CardContent className="flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between md:p-8">
              <div>
                <Badge variant="secondary">Waitlist</Badge>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                  Quer entrar antes da abertura publica?
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/66">
                  Nenhuma promessa falsa de download instantaneo. Apenas um CTA
                  direto para captar interesse real e abrir conversa com quem quer
                  usar o workspace primeiro.
                </p>
              </div>
              <a
                href="mailto:hello@cosmohq.app?subject=CosmoHQ%20waitlist"
                className={buttonVariants({ size: "lg" })}
              >
                <Mail className="h-4 w-4" />
                Entrar na waitlist
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
