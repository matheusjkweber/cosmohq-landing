"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion, fadeUp, stagger, ease } from "./motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { submitContactLead } from "@/lib/contact";

const WHATSAPP_URL =
  "https://wa.me/5551980602335?text=Ol%C3%A1%20CosmoHQ!%20Quero%20conversar%20sobre%20um%20projeto.";
const CONTACT_EMAIL = "contato@cosmohq.org";

export default function Contact() {
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [contactMessage, setContactMessage] = useState<string | null>(null);

  async function submitProjectBriefing(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("nome") ?? "").trim();
    const projectType = String(formData.get("tipo_projeto") ?? "").trim();
    const objective = String(formData.get("objetivo") ?? "").trim();

    setContactStatus("sending");
    setContactMessage(null);

    try {
      const result = await submitContactLead({
        name,
        projectType,
        objective,
        source: "landing:contact",
        pageUrl: window.location.href,
      });

      form.reset();
      setContactStatus("success");
      setContactMessage(result.message ?? "Recebemos seu contato. Vamos responder em breve.");
    } catch (error) {
      setContactStatus("error");
      setContactMessage(error instanceof Error ? error.message : "Não foi possível enviar a mensagem.");
    }
  }

  return (
    <section
      id="contato"
      className="section-shell px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Vamos conversar"
          title="Tem uma ideia ou um projeto?"
          highlight="Fale com a gente."
          description="Sem formulário eterno, sem processo burocrático. Conte o que precisa e a gente responde rápido."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }}>
            <Card className="editorial-panel spotlight-border h-full rounded-[30px]">
              <CardContent className="flex h-full flex-col gap-6 p-7 md:p-8">
                <div>
                  <Badge variant="success" className="mb-5">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Resposta rápida
                  </Badge>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    Pelo WhatsApp é mais rápido.
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-white/66">
                    Prefere conversar direto? Manda uma mensagem no WhatsApp que
                    a gente responde em poucas horas — sem robô, sem fila.
                  </p>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "mt-auto flex w-full bg-[linear-gradient(135deg,#25d366,#128c7e)] shadow-[0_18px_45px_-18px_rgba(37,211,102,0.6)] hover:brightness-110 hover:shadow-[0_24px_54px_-18px_rgba(37,211,102,0.8)]",
                  })}
                >
                  <MessageCircle className="h-5 w-5" />
                  Abrir WhatsApp
                </a>

                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/38">
                    ou por email
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <a
                  href="mailto:contato@cosmohq.org?subject=Novo%20projeto"
                  className="text-center text-sm text-white/58 transition hover:text-white"
                >
                  contato@cosmohq.org
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease, delay: 0.08 }}
          >
            <Card className="hover-lift h-full rounded-[30px]">
              <CardContent className="p-7 md:p-8">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  Conte sobre o seu projeto
                </h3>
                <p className="mt-2 text-sm text-white/56">
                  Três campos, sem complicação.
                </p>

                <form onSubmit={submitProjectBriefing} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-white/78"
                    >
                      Seu nome
                    </label>
                    <input
                      id="contact-name"
                      name="nome"
                      type="text"
                      required
                      placeholder="Como podemos te chamar?"
                      className="h-12 w-full rounded-2xl border border-white/12 bg-white/6 px-4 text-sm text-white placeholder:text-white/32 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-project"
                      className="mb-2 block text-sm font-medium text-white/78"
                    >
                      Tipo de projeto
                    </label>
                    <select
                      id="contact-project"
                      name="tipo_projeto"
                      required
                      defaultValue=""
                      className="h-12 w-full appearance-none rounded-2xl border border-white/12 bg-white/6 px-4 text-sm text-white transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 [&:invalid]:text-white/32 [&>option]:bg-cosmo-bg [&>option]:text-white"
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option value="app">Desenvolvimento de App</option>
                      <option value="site">Criação de Site</option>
                      <option value="social">Gestão de Redes Sociais</option>
                      <option value="ads">Campanhas e Ads</option>
                      <option value="analytics">Análise de Dados</option>
                      <option value="completo">Pacote completo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-goal"
                      className="mb-2 block text-sm font-medium text-white/78"
                    >
                      Objetivo
                    </label>
                    <textarea
                      id="contact-goal"
                      name="objetivo"
                      required
                      rows={4}
                      placeholder="O que você quer alcançar com esse projeto?"
                      className="w-full resize-none rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/32 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    className={buttonVariants({
                      size: "lg",
                      className: "flex w-full disabled:pointer-events-none disabled:opacity-70",
                    })}
                  >
                    {contactStatus === "sending" ? "Enviando..." : "Enviar mensagem"}
                    <Send className="h-4 w-4" />
                  </button>

                  {contactMessage && (
                    <p className={`text-center text-xs ${contactStatus === "error" ? "text-rose-300" : "text-emerald-300"}`}>
                      {contactMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
