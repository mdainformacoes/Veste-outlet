import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getMaisVendidos } from "@/lib/produtos";

export default function BestSellers() {
  const produtos = getMaisVendidos();

  return (
    <section className="bg-white pb-16 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        {/* título da seção */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-xs tracking-[0.3em] text-neutral-500">
              PRODUTOS EM DESTAQUE
            </span>
            <h2 className="mt-1 text-3xl font-bold">Mais vendidos</h2>
          </div>
          <Link
            href="/loja"
            className="flex items-center gap-1 text-sm text-neutral-700 hover:text-[#b8946a]"
          >
            Ver todos os produtos <ArrowRight size={14} />
          </Link>
        </div>

        {/* cartões */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {produtos.map((p) => (
            <ProductCard key={p.slug} produto={p} />
          ))}
        </div>
      </div>
    </section>
  );
}