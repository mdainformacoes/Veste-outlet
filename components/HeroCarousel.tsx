"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  slug: string;
  kicker: string;
  titulo: string;
  destaque: string;
  texto: string;
  imagem: string;
  posicao: string; // qual parte da foto fica visível
};

const slides: Slide[] = [
  {
    slug: "tenis",
    kicker: "PASSO À FRENTE",
    titulo: "Passos que falam",
    destaque: "mais que palavras",
    texto: "Os tênis mais desejados da temporada, com preço de outlet.",
    imagem: "/hero/tenis.jpg",
    posicao: "right bottom",
  },
  {
    slug: "camisetas",
    kicker: "NOVA COLEÇÃO",
    titulo: "Estilo que fala",
    destaque: "por você",
    texto: "Camisetas básicas e modernas, com caimento perfeito e qualidade premium.",
    imagem: "/hero/camisetas.jpg",
    posicao: "right bottom",
  },
  {
    slug: "blusas",
    kicker: "FRIO CHEGANDO",
    titulo: "Conforto com",
    destaque: "muito estilo",
    texto: "Moletons e blusas para os dias em que você quer conforto sem perder o visual.",
    imagem: "/hero/blusas.jpg",
    posicao: "right bottom",
  },
  {
    slug: "jaquetas",
    kicker: "DESTAQUE",
    titulo: "Atitude em cada",
    destaque: "detalhe",
    texto: "Jaquetas que completam o look e fazem toda a diferença.",
    imagem: "/hero/jaquetas.jpg",
    posicao: "right bottom",
  },
  {
    slug: "calcas",
    kicker: "ESSENCIAIS",
    titulo: "O caimento",
    destaque: "perfeito",
    texto: "Cargo, jeans e alfaiataria para qualquer ocasião, com preço de outlet.",
    imagem: "/hero/calcas.jpg",
    posicao: "right bottom",
  },
];

const INTERVALO = 5000;

export default function HeroCarousel() {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const proximo = () => setAtual((i) => (i + 1) % slides.length);
  const anterior = () => setAtual((i) => (i - 1 + slides.length) % slides.length);

  // troca sozinho; o tempo reinicia a cada mudança (inclusive quando você clica)
  useEffect(() => {
    if (pausado) return;
    const t = setTimeout(proximo, INTERVALO);
    return () => clearTimeout(t);
  }, [atual, pausado]);

  return (
    <section
      className="relative h-[70vh] max-h-[640px] min-h-[480px] w-full overflow-hidden bg-[#0d1117]"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      {slides.map((s, i) => {
        const ativo = i === atual;
        return (
          <div
            key={s.slug}
            aria-hidden={!ativo}
            className={`absolute inset-0 transition-opacity duration-700 ${
              ativo ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={s.imagem}
              alt={s.slug}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: s.posicao }}
            />
            {/* escurece o lado do texto; no celular escurece um pouco mais */}
            <div className="absolute inset-0 bg-[#0d1117]/40 md:bg-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/60 to-transparent md:via-[#0d1117]/30" />

            <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
              <span className="mb-4 text-xs tracking-[0.3em] text-[#c4a484]">{s.kicker}</span>
              <h1 className="max-w-xl text-4xl font-bold leading-tight text-white md:text-6xl">
                {s.titulo} <span className="text-[#c4a484]">{s.destaque}</span>
              </h1>
              <p className="mt-5 max-w-md text-white/80">{s.texto}</p>
              <Link
                href={`/categoria/${s.slug}`}
                className="mt-8 flex w-fit items-center gap-2 rounded bg-[#c4a484] px-8 py-3 text-sm font-semibold text-[#0d1117] transition hover:brightness-110"
              >
                Ver agora <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        );
      })}

      {/* bolinhas + setas */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
        <div className="mr-2 flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.slug}
              aria-label={`Ir para ${s.slug}`}
              onClick={() => setAtual(i)}
              className={`h-2 rounded-full transition-all ${
                i === atual ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={anterior}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={proximo}
          aria-label="Próximo"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}