import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { categorias, descontoPercentual, produtos } from "@/lib/produtos";

export const metadata: Metadata = {
  title: "Sobre | Vesta Outlet",
  description:
    "Conheça a Vesta Outlet, moda masculina multimarcas com preço de outlet",
};

// o maior desconto é calculado a partir dos produtos, pra nunca ficar diferente da loja
const maiorDesconto = Math.max(...produtos.map(descontoPercentual));

const numeros = [
  { valor: `Até ${maiorDesconto}%`, rotulo: "de desconto" },
  { valor: "30 dias", rotulo: "para trocar" },
  { valor: "R$ 299", rotulo: "frete grátis acima de" },
  { valor: String(categorias.length), rotulo: "categorias de moda" },
];

const curadoria = [
  "Marcas conhecidas com preço de outlet",
  "Cortes atuais e tecidos confortáveis",
  "Do básico ao look completo",
];

const passos = [
  {
    numero: "01",
    titulo: "Escolha",
    texto: "Ache a peça, a cor e o tamanho que combinam com você.",
  },
  {
    numero: "02",
    titulo: "Receba",
    texto: "Pague com Pix, cartão ou boleto e receba em casa.",
  },
  {
    numero: "03",
    titulo: "Troque se quiser",
    texto: "Não serviu? São 30 dias para trocar, sem burocracia.",
  },
];

export default function SobrePage() {
  return (
    <main className="flex-1 bg-white text-neutral-900">
      {/* topo com foto */}
      <section className="relative h-[360px] overflow-hidden bg-[#0d1117] md:h-[460px]">
        <Image
          src="/hero/jaquetas.jpg"
          alt="Jaquetas Vesta Outlet"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "right bottom" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#0d1117]/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <span className="text-xs tracking-[0.3em] text-[#c4a484]">
            SOBRE A VESTA OUTLET
          </span>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Estilo de sobra, sem pesar no bolso
          </h1>
        </div>
      </section>

      {/* frase curta */}
      <section className="mx-auto max-w-xl px-6 py-12 text-center">
        <p className="text-lg leading-relaxed text-neutral-600">
          Peças de várias marcas, escolhidas a dedo, com preço de outlet o ano
          inteiro.
        </p>
      </section>

      {/* faixa de números */}
      <section className="bg-[#c4a484] text-[#0d1117]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4">
          {numeros.map((n) => (
            <div key={n.rotulo} className="text-center">
              <p className="text-3xl font-bold md:text-4xl">{n.valor}</p>
              <p className="mt-1 text-xs tracking-wide md:text-sm">
                {n.rotulo}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* foto + texto */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded bg-neutral-100">
          <Image
            src="/produtos/camisa.jpg"
            alt="Camisa Oversized"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-xs tracking-[0.3em] text-neutral-500">
            CURADORIA
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Peças escolhidas a dedo
          </h2>
          <ul className="mt-8 space-y-4">
            {curadoria.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c4a484] text-[#0d1117]">
                  <Check size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* três passos */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold">Comprar é simples</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {passos.map((p) => (
              <div key={p.numero} className="text-center">
                <p className="text-6xl font-bold text-[#c4a484]">{p.numero}</p>
                <h3 className="mt-2 text-xl font-bold">{p.titulo}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-neutral-600">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* chamada final */}
      <section className="bg-[#0d1117] px-6 py-16 text-center text-white">
        <h2 className="text-2xl font-bold md:text-3xl">
          Pronto pra montar o seu look?
        </h2>
        <Link
          href="/loja"
          className="mt-6 inline-block rounded bg-[#c4a484] px-8 py-3 text-sm font-semibold text-[#0d1117] transition hover:bg-[#b8946a]"
        >
          Ver a loja
        </Link>
      </section>
    </main>
  );
}