import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import BugReportForm from "@/components/BugReportForm";
import TesterSignupForm from "@/components/TesterSignupForm";

export const metadata: Metadata = {
  title: "Teste fechado | CosmoFinanças",
  description:
    "Página de inscrição para o teste fechado do CosmoFinanças. Deixe seu nome e email para receber o link do Google Play e participar do teste.",
  alternates: {
    canonical: "https://cosmohq.org/teste-fechado",
  },
};

const highlights = [
  "A gente revisa os cadastros manualmente.",
  "Depois você recebe o link de opt-in do Google Play.",
  "O teste precisa ficar ativo por 14 dias com pelo menos 12 pessoas.",
];

const expectations = [
  "Instalar o app a partir do link oficial do Google Play.",
  "Manter a conta opt-in durante todo o período do teste.",
  "Usar o app de verdade e mandar feedback quando encontrar algo estranho.",
];

export default function TesterSignupPage() {
  return (
    <main className="section-shell noise-overlay relative px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/72 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a landing
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.03fr_0.97fr] lg:items-start">
          <Card className="editorial-panel rounded-[34px]">
            <CardContent className="relative overflow-hidden p-7 sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(52,152,219,0.16),transparent_28%),radial-gradient(circle_at_86%_14%,rgba(241,196,15,0.1),transparent_18%)]" />

              <div className="relative">
                <Badge variant="secondary" className="mb-5 w-fit">
                  <Sparkles className="h-3.5 w-3.5" />
                  CosmoFinanças em pré-lançamento
                </Badge>

                <h1 className="max-w-3xl text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-[4.2rem] lg:text-[5rem]">
                  Ajude a testar antes da versão pública.
                </h1>

                <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-white/72 sm:text-lg">
                  Queremos fechar o ciclo do teste fechado do jeito certo:
                  coletar os emails, adicionar cada pessoa no Play Console e
                  mandar o link de participação manualmente ou por automação depois.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[26px] border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-success" />
                      <p className="mt-3 text-sm leading-6 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-black/14 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                    O que pedimos de quem entra
                  </div>
                  <div className="mt-4 grid gap-3">
                    {expectations.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-7 text-white/68">
                        <Users className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <div className="text-xs uppercase tracking-[0.24em] text-white/40">
                    Suporte direto
                  </div>
                  <a
                    href="mailto:contato@cosmohq.org"
                    className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-brand-primary"
                  >
                    contato@cosmohq.org
                  </a>
                  <p className="mt-2 text-sm leading-7 text-white/60">
                    Se preferir, use esse email para falar diretamente com a gente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <TesterSignupForm />

            <Card className="rounded-[30px] border-white/10 bg-white/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  Como vamos usar esse cadastro
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                  <li>1. A gente acompanha os cadastros diariamente.</li>
                  <li>2. Depois adiciona o email na lista de testers do Google Play.</li>
                  <li>3. Em seguida envia o link para a pessoa entrar no teste.</li>
                </ul>
              </CardContent>
            </Card>

            <BugReportForm />
          </div>
        </div>
      </div>
    </main>
  );
}
