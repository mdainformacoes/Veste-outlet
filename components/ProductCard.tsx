"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Produto, reais, descontoPercentual } from "@/lib/produtos";

export default function ProductCard({ produto: p }: { produto: Produto }) {
  const [favorito, setFavorito] = useState(false);
  const desconto = descontoPercentual(p);

  return (
    <article className="group relative">
      <Link href={`/produto/${p.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded bg-neutral-100">
          {p.imagem ? (
            <Image
              src={p.imagem}
              alt={p.nome}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-200 p-4 text-center text-sm font-medium text-neutral-500">
              {p.nome}
            </div>
          )}
        </div>
        <h3 className="mt-3 text-sm font-medium">{p.nome}</h3>
      </Link>

      {/* selo de desconto */}
      <span className="absolute left-2 top-2 rounded bg-neutral-900 px-2 py-0.5 text-xs font-medium text-white">
        -{desconto}%
      </span>

      {/* coração */}
      <button
        onClick={() => setFavorito((atual) => !atual)}
        aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded bg-white/90 shadow-sm transition hover:bg-white"
      >
        <Heart
          size={16}
          className={favorito ? "fill-red-500 text-red-500" : "text-neutral-700"}
        />
      </button>

      {/* preços */}
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-semibold text-red-600">{reais(p.preco)}</span>
        <span className="text-xs text-neutral-400 line-through">
          {reais(p.precoAntigo)}
        </span>
      </div>

      {/* estrelas */}
      <div className="mt-1 flex items-center gap-1">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              size={13}
              className={
                n <= Math.round(p.nota)
                  ? "fill-amber-400 text-amber-400"
                  : "text-neutral-300"
              }
            />
          ))}
        </div>
        <span className="text-xs text-neutral-500">({p.avaliacoes})</span>
      </div>

      {/* bolinhas de cor */}
      <div className="mt-2 flex gap-1.5">
        {p.cores.map((c) => (
          <span
            key={c.nome}
            title={c.nome}
            className="h-3.5 w-3.5 rounded-full border border-neutral-300"
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
    </article>
  );
}