import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

function Icone({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="40"
      height="40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const categorias: { slug: string; nome: string; icone: ReactNode }[] = [
  {
    slug: "camisetas",
    nome: "Camisetas",
    icone: (
      <Icone>
        <path d="M16 8 L6 14 L10 22 L14 20 V40 H34 V20 L38 22 L42 14 L32 8 C30 11 26 12 24 12 C22 12 18 11 16 8 Z" />
      </Icone>
    ),
  },
  {
    slug: "blusas",
    nome: "Blusas",
    icone: (
      <Icone>
        <path d="M18 8 C18 12 21 14 24 14 C27 14 30 12 30 8 L38 12 L44 26 L38 28 L36 24 V40 H12 V24 L10 28 L4 26 L10 12 Z" />
        <path d="M21 16 V23 M27 16 V23 M17 32 H31" />
      </Icone>
    ),
  },
  {
    slug: "jaquetas",
    nome: "Jaquetas",
    icone: (
      <Icone>
        <path d="M17 7 L8 12 L4 28 L10 30 L12 22 V41 H36 V22 L38 30 L44 28 L40 12 L31 7 L24 14 Z" />
        <path d="M24 14 V41" />
      </Icone>
    ),
  },
  {
    slug: "calcas",
    nome: "Calças",
    icone: (
      <Icone>
        <path d="M14 6 H34 L36 42 H26 L24 20 L22 42 H12 Z" />
        <path d="M14 11 H34" />
      </Icone>
    ),
  },
  {
    slug: "tenis",
    nome: "Tênis",
    icone: (
      <Icone>
        <path d="M4 30 C4 26 8 26 12 24 L16 18 L20 21 C22 22 26 24 30 25 C38 26 44 28 44 33 V36 H4 Z" />
        <path d="M4 36 H44 M17 24 L20 21 M22 27 L25 24" />
      </Icone>
    ),
  },
  {
    slug: "acessorios",
    nome: "Acessórios",
    icone: (
      <Icone>
        <path d="M9 32 C9 20 16 13 26 13 C34 13 39 19 40 29" />
        <path d="M9 32 H30" />
        <path d="M40 29 C46 30 47 33 45 35 C40 35 33 34 30 32" />
        <path d="M26 13 V10" />
        <path d="M26 13 C22 18 22 26 24 32" />
      </Icone>
    ),
  },
];

export default function CategoryStrip() {
  return (
    <section className="bg-white py-12 text-neutral-900">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-y-10 px-6 md:grid-cols-6">
        {categorias.map((c) => (
          <Link
            key={c.slug}
            href={`/categoria/${c.slug}`}
            className="group flex flex-col items-center gap-3"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 transition duration-300 group-hover:scale-105 group-hover:text-[#b8946a]">
              {c.icone}
            </span>
            <span className="font-semibold">{c.nome}</span>
            <span className="flex items-center gap-1 text-xs text-neutral-500">
              Ver agora <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}