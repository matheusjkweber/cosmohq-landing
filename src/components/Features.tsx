"use client";

import {
  LayoutDashboard,
  Megaphone,
  BarChart3,
  Share2,
  PenTool,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { motion, fadeUp, stagger, ease } from "./motion";

const features = [
  {
    icon: LayoutDashboard,
    title: "Painel de Controle",
    description:
      "Visualize metricas como desempenho de campanhas, engagement e conversoes em um painel totalmente personalizavel.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/10",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: Megaphone,
    title: "Campanhas",
    description:
      "Crie e otimize campanhas em Instagram, Facebook, Twitter e mais.",
    gradient: "from-violet-500 to-purple-400",
    glow: "group-hover:shadow-violet-500/10",
    span: "",
    large: false,
  },
  {
    icon: BarChart3,
    title: "Analytics Real-Time",
    description:
      "Dados atualizados em tempo real para decisoes mais inteligentes.",
    gradient: "from-emerald-500 to-teal-400",
    glow: "group-hover:shadow-emerald-500/10",
    span: "",
    large: false,
  },
  {
    icon: Share2,
    title: "Redes Sociais",
    description:
      "Conecte todas as suas contas e publique conteudo de forma centralizada.",
    gradient: "from-orange-500 to-amber-400",
    glow: "group-hover:shadow-orange-500/10",
    span: "",
    large: false,
  },
  {
    icon: PenTool,
    title: "Otimizacao de Conteudo",
    description:
      "Sugestoes inteligentes de palavras-chave e formatos para maximizar alcance.",
    gradient: "from-rose-500 to-pink-400",
    glow: "group-hover:shadow-rose-500/10",
    span: "",
    large: false,
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificacoes automaticas sobre mudancas de performance e oportunidades.",
    gradient: "from-indigo-500 to-blue-400",
    glow: "group-hover:shadow-indigo-500/10",
    span: "",
    large: false,
  },
  {
    icon: ShieldCheck,
    title: "Seguranca Avancada",
    description:
      "Criptografia, MFA e controle de acesso para proteger seus dados.",
    gradient: "from-brand-primary to-cyan-400",
    glow: "group-hover:shadow-brand-primary/10",
    span: "",
    large: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-primary/[0.04] blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-500/[0.03] blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary mb-4">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tudo que voce precisa em{" "}
            <span className="text-gradient">um so lugar</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-dark-muted text-lg leading-relaxed">
            Ferramentas poderosas para gerenciar sua presenca digital e
            impulsionar resultados.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              className={`group relative rounded-2xl glass glass-hover transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${feature.glow} ${feature.span} ${feature.large ? "p-8" : "p-6"}`}
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${feature.large ? "h-14 w-14" : "h-11 w-11"}`}
              >
                <feature.icon
                  className={`text-white ${feature.large ? "h-7 w-7" : "h-5 w-5"}`}
                />
              </div>

              <h3
                className={`font-semibold text-white mb-2 ${feature.large ? "text-xl" : "text-base"}`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-dark-muted leading-relaxed ${feature.large ? "text-base" : "text-sm"}`}
              >
                {feature.description}
              </p>

              {/* Subtle gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
