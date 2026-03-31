"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { submitTesterSignup } from "@/lib/tester-signups";

type FormStatus = "idle" | "sending" | "success" | "error";

const steps = [
  "Você envia nome e email no formulário.",
  "A gente revisa os cadastros e adiciona você ao teste fechado.",
  "Você recebe o link do Google Play e precisa ficar opt-in por 14 dias.",
];

export default function TesterSignupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    setStatus("sending");
    setMessage(null);

    try {
      const result = await submitTesterSignup({
        name,
        email,
        source: "landing:teste-fechado",
        pageUrl: window.location.href,
      });

      form.reset();
      setStatus("success");
      setMessage(
        result.message ??
          "Cadastro recebido. Vamos revisar e te enviar o link de opt-in do teste fechado."
      );
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Não foi possível enviar o cadastro.");
    }
  }

  return (
    <Card className="editorial-panel relative overflow-hidden rounded-[34px]">
      <CardContent className="relative p-6 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(52,152,219,0.14),transparent_25%),radial-gradient(circle_at_10%_0%,rgba(241,196,15,0.08),transparent_16%)]" />

        <div className="relative">
          <Badge variant="success" className="mb-5">
            <ShieldCheck className="h-3.5 w-3.5" />
            Convite controlado
          </Badge>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Entrar no teste fechado
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/64">
                Deixe seu nome e email. A gente usa isso para adicionar você na lista do
                Google Play e te mandar o link de participação.
              </p>
            </div>
            <div className="hidden rounded-2xl border border-white/10 bg-white/6 p-3 text-brand-primary lg:block">
              <Mail className="h-5 w-5" />
            </div>
          </div>

          {status === "success" ? (
            <div className="mt-8 rounded-[28px] border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <div>
                  <div className="text-base font-semibold">Cadastro enviado</div>
                  <p className="mt-2 text-sm leading-7 text-emerald-50/82">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="tester-name"
                    className="mb-2 block text-sm font-medium text-white/78"
                  >
                    Nome
                  </label>
                  <input
                    id="tester-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tester-email"
                    className="mb-2 block text-sm font-medium text-white/78"
                  >
                    Email
                  </label>
                  <input
                    id="tester-email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "flex w-full justify-center disabled:pointer-events-none disabled:opacity-70",
                })}
              >
                {status === "sending" ? "Enviando..." : "Quero participar"}
                <ArrowRight className="h-4 w-4" />
              </button>

              {message && (
                <p className={`text-center text-xs ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>
                  {message}
                </p>
              )}
            </form>
          )}

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-white/10 bg-white/5 p-4"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/36">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-sm leading-6 text-white/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
