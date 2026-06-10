export function getBackendBaseUrl() {
  const baseUrl =
    process.env.NEXT_PUBLIC_COSMOHQ_BACKEND_URL?.trim() ||
    process.env.NEXT_PUBLIC_APP_URL?.trim() ||
    "";

  if (!baseUrl) {
    return "";
  }

  if (typeof window !== "undefined") {
    const currentHost = window.location.hostname;
    const isProductionHost = currentHost !== "localhost" && currentHost !== "127.0.0.1";
    const isLocalBackend =
      /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(baseUrl) ||
      baseUrl === "http://0.0.0.0:3000";

    if (isProductionHost && isLocalBackend) {
      return "";
    }
  }

  return baseUrl;
}

export function getBackendEndpoint(path: string) {
  const base = getBackendBaseUrl().replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return base ? `${base}${normalizedPath}` : normalizedPath;
}
