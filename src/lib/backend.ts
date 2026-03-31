export function getBackendBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_COSMOHQ_BACKEND_URL?.trim() ||
    process.env.NEXT_PUBLIC_APP_URL?.trim() ||
    ""
  );
}

export function getBackendEndpoint(path: string) {
  const base = getBackendBaseUrl().replace(/\/+$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return base ? `${base}${normalizedPath}` : normalizedPath;
}
