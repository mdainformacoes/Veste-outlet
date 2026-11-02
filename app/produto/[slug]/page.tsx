import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductDetails from "@/components/ProductDetails";
import {
  getCategoria,
  getProduto,
  getProdutosPorCategoria,
  produtos,
} from "@/lib/produtos";

type Props = { params: Promise<{ slug: string }> };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// avisa ao Next quais produtos existem, pra ele montar as páginas de antemão
export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const produto = getProduto(slug);
  return {
    title: produto ? produto.nome : "Produto",
    description: produto?.descricao,
    alternates: { canonical: `/produto/${slug}` },
    openGraph: {
      type: "website",
      title: produto?.nome,
      description: produto?.descricao,
      url: `/produto/${slug}`,
    },
  };
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const produto = getProduto(slug);

  if (!produto) notFound();

  const categoria = getCategoria(produto.categoria);

  // "Você também pode gostar": mesma categoria primeiro, completa com outros
  const daCategoria = getProdutosPorCategoria(produto.categoria).filter(
    (p) => p.slug !== produto.slug
  );
  const outros = produtos.filter(
    (p) =>
      p.slug !== produto.slug && !daCategoria.some((d) => d.slug === p.slug)
  );
  const relacionados = [...daCategoria, ...outros].slice(0, 4);

  const trilha = [
    { nome: "Início", url: siteUrl },
    { nome: "Loja", url: `${siteUrl}/loja` },
    ...(categoria
      ? [{ nome: categoria.nome, url: `${siteUrl}/categoria/${categoria.slug}` }]
      : []),
    { nome: produto.nome, url: `${siteUrl}/produto/${produto.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: produto.nome,
        description: produto.descricao,
        sku: produto.slug,
        category: categoria?.nome,
        color: produto.cores.map((c) => c.nome).join(", "),
        ...(produto.imagem && { image: `${siteUrl}${produto.imagem}` }),
        offers: {
          "@type": "Offer",
          url: `${siteUrl}/produto/${produto.slug}`,
          priceCurrency: "BRL",
          price: produto.preco.toFixed(2),
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: trilha.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.nome,
          item: t.url,
        })),
      },
    ],
  };

  return (
    <main className="flex-1 bg-white pb-20 text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        {/* caminho de navegação */}
        <nav className="flex flex-wrap items-center gap-2 py-6 text-xs text-neutral-500">
          <Link href="/" className="hover:text-[#b8946a]">
            Início
          </Link>
          <span>/</span>
          <Link href="/loja" className="hover:text-[#b8946a]">
            Loja
          </Link>
          {categoria && (
            <>
              <span>/</span>
              <Link
                href={`/categoria/${categoria.slug}`}
                className="hover:text-[#b8946a]"
              >
                {categoria.nome}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-neutral-900">{produto.nome}</span>
        </nav>

        <ProductDetails produto={produto} />

        {/* você também pode gostar */}
        {relacionados.length > 0 && (
          <section className="mt-20">
            <span className="text-xs tracking-[0.3em] text-neutral-500">
              SUGESTÕES
            </span>
            <h2 className="mt-1 mb-8 text-2xl font-bold md:text-3xl">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {relacionados.map((p) => (
                <ProductCard key={p.slug} produto={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}