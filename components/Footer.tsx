"use client";

import { useState } from "react";
import Link from "next/link";

const linksRapidos = [
  { nome: "Início", href: "/" },
  { nome: "Loja", href: "/loja" },
  { nome: "Sobre", href: "/sobre" },
  { nome: "Contato", href: "/contato" },
];

const categorias = [
  { nome: "Tênis", href: "/categoria/tenis" },
  { nome: "Camisetas", href: "/categoria/camisetas" },
  { nome: "Blusas", href: "/categoria/blusas" },
  { nome: "Jaquetas", href: "/categoria/jaquetas" },
  { nome: "Calças", href: "/categoria/calcas" },
  { nome: "Acessórios", href: "/categoria/acessorios" },
];

function IconeInstagram() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconeFacebook() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconeTikTok() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const redes = [
  { nome: "Instagram", Icone: IconeInstagram },
  { nome: "Facebook", Icone: IconeFacebook },
  { nome: "TikTok", Icone: IconeTikTok },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // por enquanto não salva nada; depois a gente liga ao Supabase
    setEnviado(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-white/10 bg-[#0d1117] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="text-3xl font-bold tracking-wide">VESTA</span>
              <span className="text-[10px] tracking-[0.4em] text-[#c4a484]">
                OUTLET
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Moda masculina multimarcas com preço de outlet. Estilo de sobra,
              sem pesar no bolso.
            </p>
            <div className="mt-6 flex gap-3">
              {redes.map(({ nome, Icone }) => (
                <a
                  key={nome}
                  href="#"
                  aria-label={nome}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#c4a484] hover:text-[#c4a484]"
                >
                  <Icone />
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#c4a484]">
              LINKS RÁPIDOS
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {linksRapidos.map((l) => (
                <li key={l.nome}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#c4a484]">
              CATEGORIAS
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {categorias.map((c) => (
                <li key={c.nome}>
                  <Link href={c.href} className="transition hover:text-white">
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#c4a484]">
              NEWSLETTER
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Receba novidades e ofertas exclusivas direto no seu e-mail.
            </p>

            {enviado ? (
              <p className="mt-5 text-sm font-semibold text-[#c4a484]">
                Obrigado! Você está na lista. ✓
              </p>
            ) : (
              <form onSubmit={aoEnviar} className="mt-5 flex flex-col gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded border border-white/20 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#c4a484] focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded bg-[#c4a484] px-6 py-2.5 text-sm font-semibold text-[#0d1117] transition hover:bg-[#b8946a]"
                >
                  Assinar
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Barra de baixo */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/50 md:flex-row">
          <p>© 2026 Vesta Outlet. Todos os direitos reservados.</p>
          <p>Pix, cartão e boleto</p>
        </div>
      </div>
    </footer>
  );
}