"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060b14] px-6 text-white">
      <div className="max-w-lg text-center">
        <div className="text-xs uppercase tracking-[0.26em] text-white/42">
          500
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">
          Algo saiu da orbita.
        </h1>
        <p className="mt-4 text-base leading-7 text-white/60">
          Ocorreu um erro inesperado ao renderizar esta pagina.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-2xl bg-[linear-gradient(135deg,#3498db,#1c6df8)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
