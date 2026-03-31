import { getBackendEndpoint } from "@/lib/backend";

export type TesterSignupPayload = {
  name: string;
  email: string;
  source?: string;
  pageUrl?: string;
};

export async function submitTesterSignup(payload: TesterSignupPayload) {
  const normalizedPayload = {
    ...payload,
    source: payload.source ?? "landing:teste-fechado",
  };

  const backendUrl = getBackendEndpoint("/api/public/tester-signups");
  const shouldUseBackend = backendUrl !== "/api/public/tester-signups";

  if (shouldUseBackend) {
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalizedPayload),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data?.error ?? "Não foi possível enviar seu cadastro.");
    }

    return data as {
      ok: boolean;
      leadId?: string;
      message?: string;
    };
  }

  const response = await fetch("https://formsubmit.co/ajax/matheus.jk.weber@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      name: normalizedPayload.name,
      email: normalizedPayload.email,
      source: normalizedPayload.source ?? "landing:teste-fechado",
      pageUrl: normalizedPayload.pageUrl ?? "",
      _subject: "Novo cadastro para o teste fechado do CosmoFinanças",
      _template: "table",
      _captcha: "false",
    }).toString(),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message ?? "Não foi possível enviar seu cadastro.");
  }

  return {
    ok: true,
    message:
      "Cadastro recebido. Você receberá um email com o link do teste fechado.",
  } as {
    ok: boolean;
    message?: string;
  };
}
