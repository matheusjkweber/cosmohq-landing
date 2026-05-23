import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso | CosmoHQ",
  description:
    "Leia os termos de uso do site da CosmoHQ, incluindo regras de navegação, propriedade intelectual, contato e limitações aplicáveis.",
  alternates: {
    canonical: "https://cosmohq.org/termos",
  },
};

const sections = [
  {
    title: "1. Aceitação",
    content: [
      "Ao acessar e usar o site da CosmoHQ, você concorda com estes Termos de Uso e com a legislação aplicável.",
      "Se você não concordar com qualquer parte destes termos, recomendamos que não utilize o site.",
    ],
  },
  {
    title: "2. Finalidade do site",
    content: [
      "O site apresenta informações institucionais, portfólio, serviços, canais de contato e formulários para solicitação de orçamento ou briefing.",
      "O conteúdo tem caráter informativo e comercial, podendo ser atualizado, ajustado ou removido a qualquer momento.",
    ],
  },
  {
    title: "3. Uso permitido",
    content: [
      "Você concorda em utilizar o site de forma lícita, sem violar direitos de terceiros, sem tentar interromper o funcionamento da plataforma e sem praticar qualquer atividade abusiva.",
      "Não é permitido usar o site para envio de conteúdo fraudulento, ofensivo, malicioso ou que comprometa a segurança da operação.",
    ],
  },
  {
    title: "4. Propriedade intelectual",
    content: [
      "Os textos, marcas, layouts, elementos visuais, código, imagens e demais conteúdos do site pertencem à CosmoHQ ou são usados com autorização.",
      "Você não pode copiar, reproduzir, distribuir ou explorar comercialmente esses materiais sem autorização prévia por escrito.",
    ],
  },
  {
    title: "5. Formulários e contato",
    content: [
      "Ao enviar informações pelos formulários ou canais de contato, você declara que os dados fornecidos são verdadeiros e que tem legitimidade para compartilhá-los.",
      "O envio de um briefing ou mensagem não cria automaticamente qualquer vínculo contratual entre você e a CosmoHQ.",
    ],
  },
  {
    title: "6. Links e serviços de terceiros",
    content: [
      "O site pode conter links para plataformas, ferramentas ou serviços de terceiros, como e-mail, WhatsApp e redes externas.",
      "A CosmoHQ não se responsabiliza por políticas, conteúdos, disponibilidade ou práticas adotadas por sites e serviços de terceiros.",
    ],
  },
  {
    title: "7. Limitação de responsabilidade",
    content: [
      "A CosmoHQ busca manter o site atualizado, seguro e disponível, mas não garante operação ininterrupta, ausência total de erros ou compatibilidade com todos os dispositivos e navegadores.",
      "Na máxima extensão permitida por lei, não nos responsabilizamos por danos indiretos, perda de dados, indisponibilidade temporária ou decisões tomadas com base exclusiva no conteúdo do site.",
    ],
  },
  {
    title: "8. Privacidade",
    content: [
      "O tratamento de dados pessoais realizado no contexto do site segue a Política de Privacidade da CosmoHQ.",
      "Ao usar o site, você também reconhece e aceita as práticas descritas na política aplicável.",
    ],
  },
  {
    title: "9. Alterações",
    content: [
      "Estes Termos de Uso podem ser modificados periodicamente para refletir mudanças no site, nos serviços ou em requisitos legais.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="section-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="editorial-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                <FileText className="h-3.5 w-3.5 text-brand-primary" />
                Documento legal
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Termos de Uso
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                Estas regras definem as condições de acesso e uso do site da CosmoHQ.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o site
            </Link>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 md:px-6"
              >
                <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/70 sm:text-base">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-brand-primary/20 bg-[linear-gradient(135deg,rgba(52,152,219,0.12),rgba(241,196,15,0.08))] px-5 py-5 text-sm leading-7 text-white/72 md:px-6">
            <strong className="text-white">Contato:</strong> para dúvidas sobre estes termos,
            escreva para{" "}
            <a
              href="mailto:contato@cosmohq.org"
              className="font-medium text-brand-primary transition hover:text-white"
            >
              contato@cosmohq.org
            </a>
            .
          </div>
        </div>
      </div>
    </main>
  );
}
