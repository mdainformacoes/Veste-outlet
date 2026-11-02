import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categorias, Produto } from "@/lib/produtos";

type Props = {
  titulo: string;
  produtos: Produto[];
  categoriaAtiva?: string;
};

export default function ProductListing({
  titulo,
  produtos,
  categoriaAtiva,
}: Props) {
  return (
    <section className="bg-white pb-20 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* caminho de navegação */}
        <nav className="flex items-center gap-2 py-6 text-xs text-neutral-500">
          <Link href="/" className="hover:text-[#b8946a]">
            Início
          </Link>
          <span>/</span>
          {categoriaAtiva ? (
            <>
              <Link href="/loja" className="hover:text-[#b8946a]">
                Loja
              </Link>
              <span>/</span>
              <span className="text-neutral-900">{titulo}</span>
            </>
          ) : (
            <span className="text-neutral-900">Loja</span>
          )}
        </nav>

        {/* título */}
        <div className="mb-6">
          <span className="text-xs tracking-[0.3em] text-neutral-500">
            {categoriaAtiva ? "CATEGORIA" : "TODOS OS PRODUTOS"}
          </span>
          <h1 className="mt-1 text-3xl font-bold md:text-4xl">{titulo}</h1>
          <p className="mt-2 text-sm text-neutral-500">
            {produtos.length}{" "}
            {produtos.length === 1 ? "produto" : "produtos"}
          </p>
        </div>

        {/* atalhos de categoria */}
        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="/loja"
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              !categoriaAtiva
                ? "border-[#0d1117] bg-[#0d1117] text-white"
                : "border-neutral-300 text-neutral-700 hover:border-[#c4a484] hover:text-[#b8946a]"
            }`}
          >
            Todos
          </Link>
          {categorias.map((c) => (
            <Link
              key={c.slug}
              href={`/categoria/${c.slug}`}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                categoriaAtiva === c.slug
                  ? "border-[#0d1117] bg-[#0d1117] text-white"
                  : "border-neutral-300 text-neutral-700 hover:border-[#c4a484] hover:text-[#b8946a]"
              }`}
            >
              {c.nome}
            </Link>
          ))}
        </div>

        {/* grade de produtos */}
        {produtos.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {produtos.map((p) => (
              <ProductCard key={p.slug} produto={p} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-neutral-500">
            Ainda não temos produtos nessa categoria.
          </p>
        )}
      </div>
    </section>
  );
}