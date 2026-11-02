"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Heart, Minus, Plus, RefreshCw, Star, Truck } from "lucide-react";
import { Produto, reais, descontoPercentual } from "@/lib/produtos";

export default function ProductDetails({ produto: p }: { produto: Produto }) {
  const [corIndex, setCorIndex] = useState(0);
  const [tamanho, setTamanho] = useState<string | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [favorito, setFavorito] = useState(false);
  const [erroTamanho, setErroTamanho] = useState(false);
  const [adicionado, setAdicionado] = useState(false);

  const desconto = descontoPercentual(p);
  const corAtual = p.cores[corIndex];

  function escolherTamanho(t: string) {
    setTamanho(t);
    setErroTamanho(false);
  }

  function adicionarAoCarrinho() {
    if (!tamanho) {
      setErroTamanho(true);
      return;
    }
    // por enquanto só mostra a confirmação; o carrinho de verdade vem depois
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 2500);
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {/* foto */}
      <div className="relative aspect-square overflow-hidden rounded bg-neutral-100">
        {p.imagem ? (
          <Image
            src={p.imagem}
            alt={p.nome}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-200 p-6 text-center text-lg font-medium text-neutral-500">
            {p.nome}
          </div>
        )}
        <span className="absolute left-3 top-3 rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white">
          -{desconto}%
        </span>
      </div>

      {/* informações */}
      <div>
        <h1 className="text-3xl font-bold md:text-4xl">{p.nome}</h1>

        {/* estrelas */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                size={16}
                className={
                  n <= Math.round(p.nota)
                    ? "fill-amber-400 text-amber-400"
                    : "text-neutral-300"
                }
              />
            ))}
          </div>
          <span className="text-sm text-neutral-500">
            {p.nota.toFixed(1).replace(".", ",")} ({p.avaliacoes} avaliações)
          </span>
        </div>

        {/* preços */}
        <div className="mt-5 flex items-baseline gap-3">
          <span className="text-3xl font-bold text-red-600">
            {reais(p.preco)}
          </span>
          <span className="text-base text-neutral-400 line-through">
            {reais(p.precoAntigo)}
          </span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">
          ou 3x de {reais(p.preco / 3)} sem juros
        </p>

        <p className="mt-5 text-sm leading-relaxed text-neutral-600">
          {p.descricao}
        </p>

        {/* cor */}
        <div className="mt-6">
          <p className="text-sm font-semibold">
            Cor: <span className="font-normal text-neutral-600">{corAtual.nome}</span>
          </p>
          <div className="mt-3 flex gap-3">
            {p.cores.map((c, i) => (
              <button
                key={c.nome}
                type="button"
                onClick={() => setCorIndex(i)}
                title={c.nome}
                aria-label={`Cor ${c.nome}`}
                className={`h-8 w-8 rounded-full border border-neutral-300 transition ${
                  i === corIndex
                    ? "ring-2 ring-[#c4a484] ring-offset-2"
                    : "hover:scale-110"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* tamanho */}
        <div className="mt-6">
          <p className="text-sm font-semibold">
            Tamanho:{" "}
            <span className="font-normal text-neutral-600">
              {tamanho ?? "escolha uma opção"}
            </span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tamanhos.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => escolherTamanho(t)}
                className={`min-w-12 rounded border px-4 py-2 text-sm font-medium transition ${
                  tamanho === t
                    ? "border-[#0d1117] bg-[#0d1117] text-white"
                    : "border-neutral-300 text-neutral-700 hover:border-[#c4a484]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          {erroTamanho && (
            <p className="mt-2 text-sm text-red-600">
              Escolha um tamanho antes de adicionar ao carrinho.
            </p>
          )}
        </div>

        {/* quantidade + botões */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded border border-neutral-300">
            <button
              type="button"
              onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
              aria-label="Diminuir quantidade"
              className="flex h-11 w-11 items-center justify-center text-neutral-700 hover:text-[#b8946a]"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center text-sm font-semibold">
              {quantidade}
            </span>
            <button
              type="button"
              onClick={() => setQuantidade((q) => Math.min(10, q + 1))}
              aria-label="Aumentar quantidade"
              className="flex h-11 w-11 items-center justify-center text-neutral-700 hover:text-[#b8946a]"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            type="button"
            onClick={adicionarAoCarrinho}
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded bg-[#c4a484] px-6 text-sm font-semibold text-[#0d1117] transition hover:bg-[#b8946a]"
          >
            {adicionado ? (
              <>
                <Check size={16} /> Adicionado!
              </>
            ) : (
              "Adicionar ao carrinho"
            )}
          </button>

          <button
            type="button"
            onClick={() => setFavorito((f) => !f)}
            aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            className="flex h-11 w-11 items-center justify-center rounded border border-neutral-300 transition hover:border-[#c4a484]"
          >
            <Heart
              size={18}
              className={favorito ? "fill-red-500 text-red-500" : "text-neutral-700"}
            />
          </button>
        </div>

        {/* mini benefícios */}
        <div className="mt-8 space-y-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <Truck size={20} strokeWidth={1.5} className="text-[#c4a484]" />
            Frete grátis em compras acima de R$&nbsp;299
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw size={20} strokeWidth={1.5} className="text-[#c4a484]" />
            Troca em até 30 dias
          </div>
        </div>
      </div>
    </div>
  );
}