"use client";

import { Bug, Camera, Mail, MessageSquareText, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const REPORT_EMAIL = "matheus.jk.weber@gmail.com";

export default function BugReportForm() {
  return (
    <Card className="editorial-panel rounded-[34px]">
      <CardContent className="p-6 sm:p-7 lg:p-8">
        <Badge variant="accent" className="mb-5">
          <Bug className="h-3.5 w-3.5" />
          Relatar bug
        </Badge>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
              Encontrou um bug?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">
              Use este formulário para me enviar o problema com uma imagem.
              As mensagens vão direto para contato@cosmohq.org.
            </p>
          </div>
          <div className="hidden rounded-2xl border border-white/10 bg-white/6 p-3 text-brand-accent lg:block">
            <ShieldAlert className="h-5 w-5" />
          </div>
        </div>

        <form
          className="mt-8 space-y-5"
          action={`https://formsubmit.co/${REPORT_EMAIL}`}
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_subject" value="Novo bug reportado no CosmoFinanças" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://cosmohq.org/teste-fechado" />
          <input type="hidden" name="_cc" value="contato@cosmohq.org" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="bug-name" className="mb-2 block text-sm font-medium text-white/78">
                Seu nome
              </label>
              <input
                id="bug-name"
                name="name"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              />
            </div>

            <div>
              <label htmlFor="bug-email" className="mb-2 block text-sm font-medium text-white/78">
                Seu email
              </label>
              <input
                id="bug-email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
              />
            </div>
          </div>

          <div>
            <label htmlFor="bug-title" className="mb-2 block text-sm font-medium text-white/78">
              Resumo do problema
            </label>
            <input
              id="bug-title"
              name="title"
              type="text"
              required
              placeholder="Ex: o botão de salvar não responde"
              className="h-12 w-full rounded-2xl border border-white/10 bg-white/6 px-4 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
            />
          </div>

          <div>
            <label htmlFor="bug-message" className="mb-2 block text-sm font-medium text-white/78">
              Detalhes
            </label>
            <textarea
              id="bug-message"
              name="message"
              required
              rows={5}
              placeholder="Conte o que aconteceu, em qual tela, e o que você esperava ver."
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-brand-primary/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
            />
          </div>

          <div>
            <label htmlFor="bug-attachment" className="mb-2 block text-sm font-medium text-white/78">
              Imagem do erro
            </label>
            <div className="rounded-2xl border border-dashed border-white/14 bg-white/5 p-4">
              <input
                id="bug-attachment"
                name="attachment"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="block w-full text-sm text-white/70 file:mr-4 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/16"
              />
              <p className="mt-3 text-xs leading-6 text-white/46">
                PNG, JPG ou WEBP. Até 10MB no total.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:contato@cosmohq.org?subject=CosmoFinan%C3%A7as%20-%20contato"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "w-full",
              })}
            >
              <Mail className="h-4 w-4" />
              contato@cosmohq.org
            </a>

            <button
              type="submit"
              className={buttonVariants({
                size: "lg",
                className: "w-full",
              })}
            >
              <MessageSquareText className="h-4 w-4" />
              Enviar bug
            </button>
          </div>

          <div className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-black/14 px-4 py-3 text-sm text-white/62">
            <Camera className="h-4 w-4 text-brand-primary" />
            O formulário envia a mensagem e a imagem direto para contato@cosmohq.org.
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
