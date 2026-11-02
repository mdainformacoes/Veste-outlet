import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const banners = [
  {
    kicker: "QUALIDADE PREMIUM",
    titulo: "Clássicos para toda ocasião",
    texto: null,
    botao: "Ver coleção",
    href: "/categoria/blusas",
    imagem: "/banners/classicos.jpg",
    claro: true,
  },
  {
    kicker: "DÊ O PRIMEIRO PASSO",
    titulo: "Novidades",
    texto: ["Looks novos", "e visual moderno."],
    botao: "Ver agora",
    href: "/categoria/tenis",
    imagem: "/banners/novidades.jpg",
    claro: false,
  },
];

export default function PromoBanners() {
  return (
    <section className="bg-white">
      <div className="grid gap-1 md:grid-cols-2">
        {banners.map((b) => (
          <div
            key={b.titulo}
            className="relative h-64 overflow-hidden md:aspect-[12/5] md:h-auto"
          >
            <Image
              src={b.imagem}
              alt={b.titulo}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "right center" }}
            />

            {/* no celular: degradê forte à esquerda (texto) que some à direita (produto) */}
            <div
              className={`absolute inset-0 md:hidden ${
                b.claro
                  ? "bg-gradient-to-r from-white/90 via-white/50 to-transparent"
                  : "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
              }`}
            />

            <div
              className={`relative flex h-full flex-col justify-center px-8 pr-[25%] md:px-14 ${
                b.claro ? "text-neutral-900" : "text-white"
              }`}
            >
              <span
                className={`text-[11px] tracking-[0.3em] ${
                  b.claro ? "text-neutral-600" : "text-white/80"
                }`}
              >
                {b.kicker}
              </span>
              <h3 className="mt-2 max-w-xs text-2xl font-bold leading-tight md:text-4xl">
                {b.titulo}
              </h3>
              {b.texto && (
                <p className="mt-2 text-sm text-white/80">
                  {b.texto[0]}
                  {/* quebra de linha só no celular */}
                  <br className="md:hidden" /> {b.texto[1]}
                </p>
              )}
              <Link
                href={b.href}
                className={`mt-5 flex w-fit items-center gap-2 px-6 py-2.5 text-sm font-semibold transition ${
                  b.claro
                    ? "rounded bg-[#c4a484] text-[#0d1117] hover:brightness-110"
                    : "rounded border border-white/70 text-white hover:bg-white/10"
                }`}
              >
                {b.botao} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}