import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060b14] px-6 text-white">
      <div className="max-w-lg text-center">
        <div className="text-xs uppercase tracking-[0.26em] text-white/42">
          404
        </div>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">
          Esta pagina saiu da orbita.
        </h1>
        <p className="mt-4 text-base leading-7 text-white/60">
          O endereco solicitado nao existe nesta experiencia do CosmoHQ.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[linear-gradient(135deg,#3498db,#1c6df8)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          Voltar para a landing
        </Link>
      </div>
    </main>
  );
}
