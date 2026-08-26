export type LegalSection = {
  title: string;
  content: string[];
};

export type LegalDocument = {
  lang: "pt-BR" | "en";
  icon: "shield" | "file";
  eyebrow: string;
  title: string;
  intro: string;
  backLabel: string;
  contactLabel: string;
  contactIntro: string;
  sections: LegalSection[];
};

export const privacyPt: LegalDocument = {
  lang: "pt-BR",
  icon: "shield",
  eyebrow: "Política em português",
  title: "Política de Privacidade",
  intro:
    "Aqui explicamos de forma simples como a CosmoHQ trata dados pessoais no site, nos canais de contato e nos nossos aplicativos.",
  backLabel: "Voltar para o site",
  contactLabel: "Contato:",
  contactIntro:
    "se você tiver dúvidas sobre esta política ou sobre o tratamento de dados pessoais, escreva para",
  sections: [
  {
    title: "1. Quem somos",
    content: [
      "A CosmoHQ é uma agência digital que oferece serviços de criação de sites, aplicativos, sistemas, gestão de redes sociais e campanhas.",
      "Esta Política explica como tratamos dados pessoais quando você navega no site, entra em contato, envia um briefing ou usa um dos nossos aplicativos.",
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
    title: "8. Nossos aplicativos",
    content: [
      "Além do site, publicamos aplicativos para iOS e Android, como o CosmoPrompter. Esta seção descreve o tratamento de dados dentro desses aplicativos e prevalece sobre as seções anteriores quando houver divergência.",
      "A câmera e o microfone são usados somente enquanto você grava, para produzir o seu vídeo. O reconhecimento de fala é executado no próprio aparelho e serve para acompanhar a leitura do roteiro e gerar legendas.",
      "Seus roteiros, gravações, legendas e ajustes de edição ficam armazenados apenas no seu aparelho. Não enviamos esse conteúdo para nossos servidores, não temos acesso a ele e não o utilizamos para treinar modelos.",
      "Os aplicativos não exigem cadastro nem login, não exibem anúncios e não fazem rastreamento entre aplicativos ou sites.",
      "As compras são processadas pela App Store ou pelo Google Play. Utilizamos a RevenueCat para validar assinaturas: ela recebe um identificador pseudônimo gerado pelo aplicativo e o status da assinatura. Dados de pagamento, como cartão e endereço de cobrança, são tratados exclusivamente pela loja e nunca chegam até nós.",
      "Para remover os dados dos aplicativos, basta desinstalá-los: o conteúdo local é apagado junto. Como não mantemos conta nem cópia em servidor, não há dados de aplicativo a solicitar exclusão conosco.",
    ],
  },
  {
    title: "9. Atualizações",
    content: [
      "Podemos atualizar esta política periodicamente para refletir mudanças no site, na operação ou na legislação.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
],
};

export const termsPt: LegalDocument = {
  lang: "pt-BR",
  icon: "file",
  eyebrow: "Documento legal",
  title: "Termos de Uso",
  intro:
    "Estas regras definem as condições de acesso e uso do site da CosmoHQ e dos recursos pagos dos nossos aplicativos.",
  backLabel: "Voltar para o site",
  contactLabel: "Contato:",
  contactIntro: "para dúvidas sobre estes termos, escreva para",
  sections: [
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
    title: "9. Aplicativos e assinaturas",
    content: [
      "Nossos aplicativos podem oferecer recursos pagos por meio de assinatura ou de compra única, contratados dentro do próprio aplicativo.",
      "As assinaturas são renovadas automaticamente ao fim de cada período, salvo cancelamento feito com pelo menos 24 horas de antecedência. A cobrança da renovação ocorre nas 24 horas anteriores ao fim do período vigente.",
      "O gerenciamento e o cancelamento da assinatura são feitos nos ajustes da sua conta na App Store ou no Google Play, e não por nós. Compras vitalícias são pagamentos únicos e não se renovam.",
      "Períodos de teste gratuito, quando oferecidos, convertem-se em assinatura paga caso não sejam cancelados antes do fim do teste. Qualquer parte não utilizada de um teste é perdida ao contratar a assinatura.",
      "Pedidos de reembolso seguem as políticas da App Store e do Google Play.",
    ],
  },
  {
    title: "10. Alterações",
    content: [
      "Estes Termos de Uso podem ser modificados periodicamente para refletir mudanças no site, nos serviços ou em requisitos legais.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },
],
};

export const privacyEn: LegalDocument = {
  lang: "en",
  icon: "shield",
  eyebrow: "Policy in English",
  title: "Privacy Policy",
  intro:
    "This explains, in plain terms, how CosmoHQ handles personal data on the site, in our contact channels and in our apps.",
  backLabel: "Back to the site",
  contactLabel: "Contact:",
  contactIntro:
    "if you have questions about this policy or about how we handle personal data, write to",
  sections: [
    {
      title: "1. Who we are",
      content: [
        "CosmoHQ is a digital agency offering website, app and software development, social media management and campaigns.",
        "This Policy explains how we handle personal data when you browse the site, get in touch, send a brief or use one of our apps.",
      ],
    },
    {
      title: "2. What data we collect",
      content: [
        "We may collect your name, email address, phone number, company name, project type, goal, message and anything else you send through the forms on this site.",
        "We may also record technical browsing information such as IP address, device type, browser, pages visited and essential cookies.",
      ],
    },
    {
      title: "3. What we use data for",
      content: [
        "We use the data to respond to enquiries, review requests, deliver our services, improve the site experience and keep in commercial contact where we have a legal basis to do so.",
        "We may also use the information for security, fraud prevention, auditing and to meet legal obligations.",
      ],
    },
    {
      title: "4. Sharing",
      content: [
        "We do not sell your personal data.",
        "We may share data with suppliers needed to operate the site and support you, always under appropriate contracts and safeguards.",
      ],
    },
    {
      title: "5. Cookies and analytics",
      content: [
        "We may use essential cookies and analytics tools to understand how the site is used and to improve content, performance and conversion.",
        "You can control cookies in your browser, but parts of the site may stop working correctly if essential cookies are blocked.",
      ],
    },
    {
      title: "6. Storage and security",
      content: [
        "We keep data for as long as needed for the purposes described in this policy, or for the period required by law.",
        "We apply reasonable technical and organisational measures to protect information against unauthorised access, loss, alteration or improper disclosure.",
      ],
    },
    {
      title: "7. Your rights",
      content: [
        "You may request access, correction, updating, deletion, portability, anonymisation or review of consent, as applicable law allows.",
        "To exercise your rights, get in touch at contato@cosmohq.org.",
      ],
    },
    {
      title: "8. Our apps",
      content: [
        "Alongside this website we publish apps for iOS and Android, such as CosmoPrompter. This section describes how data is handled inside those apps and prevails over the sections above where the two differ.",
        "The camera and microphone are used only while you are recording, to produce your video. Speech recognition runs on the device itself and is used to follow your reading of the script and to generate captions.",
        "Your scripts, recordings, captions and editing settings are stored only on your device. We do not upload that content to our servers, we have no access to it, and we do not use it to train models.",
        "The apps require no sign-up or login, show no advertising, and do no cross-app or cross-site tracking.",
        "Purchases are processed by the App Store or Google Play. We use RevenueCat to validate subscriptions: it receives a pseudonymous identifier generated by the app and the subscription status. Payment details such as card and billing address are handled solely by the store and never reach us.",
        "To remove app data, simply uninstall the app: the local content is deleted with it. Because we hold no account and no server-side copy, there is no app data to request deletion of from us.",
      ],
    },
    {
      title: "9. Updates",
      content: [
        "We may update this policy from time to time to reflect changes to the site, to our operations or to the law.",
        "The most recent version will always be available on this page.",
      ],
    },
  ],
};

export const termsEn: LegalDocument = {
  lang: "en",
  icon: "file",
  eyebrow: "Legal document",
  title: "Terms of Service",
  intro:
    "These rules set out the conditions for accessing and using the CosmoHQ website, and the paid features of our apps.",
  backLabel: "Back to the site",
  contactLabel: "Contact:",
  contactIntro: "for questions about these terms, write to",
  sections: [
    {
      title: "1. Acceptance",
      content: [
        "By accessing and using the CosmoHQ website, you agree to these Terms of Service and to applicable law.",
        "If you do not agree with any part of these terms, we recommend that you do not use the site.",
      ],
    },
    {
      title: "2. Purpose of the site",
      content: [
        "The site presents company information, our portfolio, services, contact channels and forms for requesting a quote or submitting a brief.",
        "The content is informational and commercial in nature, and may be updated, adjusted or removed at any time.",
      ],
    },
    {
      title: "3. Permitted use",
      content: [
        "You agree to use the site lawfully, without infringing the rights of others, without attempting to disrupt the platform's operation, and without engaging in any abusive activity.",
        "You may not use the site to send fraudulent, offensive or malicious content, or content that compromises the security of the operation.",
      ],
    },
    {
      title: "4. Intellectual property",
      content: [
        "The text, trade marks, layouts, visual elements, code, images and all other content on the site belong to CosmoHQ or are used with authorisation.",
        "You may not copy, reproduce, distribute or commercially exploit those materials without prior written authorisation.",
      ],
    },
    {
      title: "5. Forms and contact",
      content: [
        "By sending information through the forms or contact channels, you confirm that the data provided is true and that you are entitled to share it.",
        "Sending a brief or a message does not automatically create any contractual relationship between you and CosmoHQ.",
      ],
    },
    {
      title: "6. Third-party links and services",
      content: [
        "The site may contain links to third-party platforms, tools or services, such as email, WhatsApp and external networks.",
        "CosmoHQ is not responsible for the policies, content, availability or practices of third-party sites and services.",
      ],
    },
    {
      title: "7. Limitation of liability",
      content: [
        "CosmoHQ aims to keep the site up to date, secure and available, but does not guarantee uninterrupted operation, the complete absence of errors, or compatibility with every device and browser.",
        "To the fullest extent permitted by law, we are not liable for indirect damages, data loss, temporary unavailability, or decisions taken solely on the basis of the site's content.",
      ],
    },
    {
      title: "8. Privacy",
      content: [
        "The handling of personal data in the context of the site follows CosmoHQ's Privacy Policy.",
        "By using the site, you also acknowledge and accept the practices described in the applicable policy.",
      ],
    },
    {
      title: "9. Apps and subscriptions",
      content: [
        "Our apps may offer paid features through a subscription or a one-time purchase, taken out inside the app itself.",
        "Subscriptions renew automatically at the end of each period unless cancelled at least 24 hours beforehand. The renewal is charged within the 24 hours before the current period ends.",
        "Managing and cancelling a subscription is done in your App Store or Google Play account settings, not with us. Lifetime purchases are one-time payments and do not renew.",
        "Free trial periods, where offered, convert into a paid subscription if they are not cancelled before the trial ends. Any unused part of a trial is forfeited when the subscription begins.",
        "Refund requests follow App Store and Google Play policy.",
      ],
    },
    {
      title: "10. Changes",
      content: [
        "These Terms of Service may be amended from time to time to reflect changes to the site, to our services or to legal requirements.",
        "The most recent version will always be available on this page.",
      ],
    },
  ],
};
