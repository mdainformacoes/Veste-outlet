import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductListing from "@/components/ProductListing";
import {
  categorias,
  getCategoria,
  getProdutosPorCategoria,
} from "@/lib/produtos";

type Props = { params: Promise<{ slug: string }> };

// avisa ao Next quais categorias existem, pra ele montar as páginas de antemão
export function generateStaticParams() {
  return categorias.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoria = getCategoria(slug);
  return {
    title: categoria
      ? `${categoria.nome} | Vesta Outlet`
      : "Categoria | Vesta Outlet",
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const categoria = getCategoria(slug);

  if (!categoria) notFound();

  return (
    <main className="flex-1 bg-white">
      <ProductListing
        titulo={categoria.nome}
        produtos={getProdutosPorCategoria(slug)}
        categoriaAtiva={slug}
      />
    </main>
  );
}