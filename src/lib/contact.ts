import { getBackendEndpoint } from "@/lib/backend";

export type ContactLead = {
  name: string;
  projectType: string;
  objective: string;
  email?: string;
  phone?: string;
  source?: string;
  pageUrl?: string;
};

export function getContactEndpoint() {
  return getBackendEndpoint("/api/public/contact");
}

export async function submitContactLead(payload: ContactLead) {
  const response = await fetch(getContactEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      source: payload.source ?? "landing",
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.error ?? "Não foi possível enviar o contato.");
  }

  return data as {
    ok: boolean;
    delivered?: boolean;
    leadId?: string;
    recipientEmail?: string;
    message?: string;
  };
}
