import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | CosmoHQ",
  description:
    "Entenda como a CosmoHQ coleta, usa, armazena e protege dados pessoais no site e nos formulários de contato.",
  alternates: {
    canonical: "https://cosmohq.org/privacidade",
  },
};

const sections = [
  {
    title: "1. Quem somos",
    content: [
      "A CosmoHQ é uma agência digital que oferece serviços de criação de sites, aplicativos, sistemas, gestão de redes sociais e campanhas.",
      "Esta Política explica como tratamos dados pessoais quando você navega no site, entra em contato ou envia um briefing.",
    ],
  },
  {
    title: "2. Quais dados coletamos",
    content: [
      "Podemos coletar nome, e-mail, telefone, nome da empresa, tipo de projeto, objetivo, mensagem e dados enviados pelos formulários do site.",
      "Também podemos registrar informações técnicas de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e cookies essenciais.",
    ],
  },
  {
    title: "3. Para que usamos os dados",
    content: [
      "Usamos os dados para responder contatos, analisar solicitações, prestar serviços, melhorar a experiência no site e manter comunicação comercial quando houver base legal para isso.",
      "Também podemos usar as informações para segurança, prevenção a fraudes, auditoria e cumprimento de obrigações legais.",
    ],
  },
  {
    title: "4. Compartilhamento",
    content: [
      "Não vendemos seus dados pessoais.",
      "Podemos compartilhar dados com fornecedores necessários para operação do site e atendimento, sempre com contratos e salvaguardas adequadas.",
    ],
  },
  {
    title: "5. Cookies e analytics",
    content: [
      "Podemos usar cookies essenciais e ferramentas de análise para entender o uso do site e melhorar conteúdo, performance e conversão.",
      "Você pode controlar cookies no seu navegador, mas algumas partes do site podem deixar de funcionar corretamente se cookies essenciais forem bloqueados.",
    ],
  },
  {
    title: "6. Armazenamento e segurança",
    content: [
      "Mantemos os dados pelo tempo necessário para as finalidades descritas nesta política ou pelo período exigido por lei.",
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger as informações contra acesso não autorizado, perda, alteração ou divulgação indevida.",
    ],
  },
  {
    title: "7. Seus direitos",
    content: [
      "Você pode solicitar acesso, correção, atualização, exclusão, portabilidade, anonimização ou revisão de consentimento, conforme a legislação aplicável.",
      "Para exercer seus direitos, entre em contato pelo e-mail contato@cosmohq.org.",
    ],
  },
  {
    title: "8. Atualizações",
    content: [
      "Podemos atualizar esta política periodicamente para refletir mudanças no site, na operação ou na legislação.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="section-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="editorial-panel rounded-[34px] px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-success" />
                Política em português
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Política de Privacidade
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/68 sm:text-lg">
                Aqui explicamos de forma simples como a CosmoHQ trata dados pessoais no site e
                nos canais de contato.
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
            <strong className="text-white">Contato:</strong> se você tiver dúvidas sobre esta
            política ou sobre o tratamento de dados pessoais, escreva para{" "}
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
