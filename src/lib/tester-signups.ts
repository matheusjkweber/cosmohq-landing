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
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(normalizedPayload),
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({}));
        return data as {
          ok: boolean;
          leadId?: string;
          message?: string;
        };
      }

      return submitViaFormsubmit(normalizedPayload);
    } catch {
      return submitViaFormsubmit(normalizedPayload);
    }
  }

  return submitViaFormsubmit(normalizedPayload);
}

async function submitViaFormsubmit(payload: TesterSignupPayload) {
  await fetch("https://formsubmit.co/ajax/matheus.jk.weber@gmail.com", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams({
      name: payload.name,
      email: payload.email,
      source: payload.source ?? "landing:teste-fechado",
      pageUrl: payload.pageUrl ?? "",
      _subject: "Novo cadastro para o teste fechado do CosmoFinanças",
      _template: "table",
      _captcha: "false",
    }).toString(),
  });

  return {
    ok: true,
    message:
      "Cadastro recebido. Você receberá um email com o link do teste fechado.",
  } as {
    ok: boolean;
    message?: string;
  };
}
