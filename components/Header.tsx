"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

const categorias = [
  { href: "/categoria/tenis", nome: "Tênis" },
  { href: "/categoria/camisetas", nome: "Camisetas" },
  { href: "/categoria/blusas", nome: "Blusas" },
  { href: "/categoria/jaquetas", nome: "Jaquetas" },
  { href: "/categoria/calcas", nome: "Calças" },
  { href: "/categoria/acessorios", nome: "Acessórios" },
];

const loja = [
  { href: "/loja", nome: "Todos os produtos" },
  { href: "/loja?filtro=promocoes", nome: "Promoções" },
];

function Dropdown({ titulo, itens }: { titulo: string; itens: { href: string; nome: string }[] }) {
  return (
    <div className="group relative flex h-full items-center">
      <button className="flex items-center gap-1 text-sm text-white/90 hover:text-white">
        {titulo} <ChevronDown size={14} />
      </button>
      <div className="invisible absolute left-0 top-full min-w-48 border border-white/10 bg-[#0d1117] py-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
        {itens.map((item) => (
          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">
            {item.nome}
          </Link>
        ))}
      </div>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const ativo = pathname === href;
  return (
    <Link
      href={href}
      className={`flex h-full items-center border-b-2 text-sm transition ${
        ativo ? "border-white text-white" : "border-transparent text-white/90 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117] text-white">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6">
        {/* logo */}
        <Link href="/" className="justify-self-start leading-none">
          <span className="block text-3xl font-semibold tracking-[0.25em]">VESTA</span>
          <span className="mt-1 block text-[10px] tracking-[0.4em] text-white/70">OUTLET</span>
        </Link>

        {/* menu (desktop) */}
        <nav className="hidden h-full items-center gap-8 md:flex">
          <NavLink href="/">Início</NavLink>
          <Dropdown titulo="Loja" itens={loja} />
          <Dropdown titulo="Categorias" itens={categorias} />
          <NavLink href="/sobre">Sobre</NavLink>
          <NavLink href="/contato">Contato</NavLink>
        </nav>

        {/* ícones */}
        <div className="flex items-center gap-5 justify-self-end">
          <button aria-label="Buscar" className="hover:text-white/70"><Search size={20} /></button>
          <button aria-label="Minha conta" className="hidden hover:text-white/70 sm:block"><User size={20} /></button>
          <button aria-label="Carrinho" className="relative hover:text-white/70">
            <ShoppingBag size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#c4a484] text-[10px] font-bold text-[#0d1117]">
              0
            </span>
          </button>
          <button aria-label="Menu" onClick={() => setAberto(!aberto)} className="md:hidden">
            {aberto ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* menu (celular) */}
      {aberto && (
        <nav className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" onClick={() => setAberto(false)}>Início</Link></li>
            <li><Link href="/loja" onClick={() => setAberto(false)}>Loja</Link></li>
            {categorias.map((c) => (
              <li key={c.href} className="pl-4 text-white/70">
                <Link href={c.href} onClick={() => setAberto(false)}>{c.nome}</Link>
              </li>
            ))}
            <li><Link href="/sobre" onClick={() => setAberto(false)}>Sobre</Link></li>
            <li><Link href="/contato" onClick={() => setAberto(false)}>Contato</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
