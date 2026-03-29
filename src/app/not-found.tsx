"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-dark-muted text-lg mb-6">Pagina nao encontrada</p>
        <a
          href="/"
          className="inline-block rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Voltar ao inicio
        </a>
      </div>
    </div>
  );
}
