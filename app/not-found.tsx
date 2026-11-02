import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | Vesta Outlet",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-white px-6 py-24 text-neutral-900">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-[#c4a484] md:text-8xl">404</p>
        <span className="mt-4 block text-xs tracking-[0.3em] text-neutral-500">
          PÁGINA NÃO ENCONTRADA
        </span>
        <h1 className="mt-2 text-2xl font-bold md:text-3xl">
          Ops, essa peça saiu de linha
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          O endereço que você abriu não existe ou foi removido. Que tal dar uma
          olhada nos nossos produtos?
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/loja"
            className="rounded bg-[#c4a484] px-6 py-2.5 text-sm font-semibold text-[#0d1117] transition hover:bg-[#b8946a]"
          >
            Voltar para a loja
          </Link>
          <Link
            href="/"
            className="rounded border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-[#c4a484] hover:text-[#b8946a]"
          >
            Ir para o início
          </Link>
        </div>
      </div>
    </main>
  );
}