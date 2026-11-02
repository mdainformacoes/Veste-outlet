import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Vesta Outlet",
  description: "Fale com a Vesta Outlet",
};

// dados fictícios da loja de demonstração
const dados = [
  {
    icone: MessageCircle,
    titulo: "WhatsApp",
    texto: "(11) 90000-0000",
  },
  {
    icone: Mail,
    titulo: "E-mail",
    texto: "contato@vestaoutlet.com.br",
  },
  {
    icone: MapPin,
    titulo: "Endereço",
    texto: "Rua Exemplo, 123 - Centro",
  },
  {
    icone: Clock,
    titulo: "Horário de atendimento",
    texto: "Seg. a sáb., das 10h às 19h",
  },
];

export default function ContatoPage() {
  return (
    <main className="flex-1 bg-white pb-20 text-neutral-900">
      {/* topo escuro */}
      <section className="bg-[#0d1117] px-6 py-14 text-center text-white md:py-20">
        <span className="text-xs tracking-[0.3em] text-[#c4a484]">CONTATO</span>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">
          Fale com a gente
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
          Dúvidas sobre produtos, pedidos ou trocas? Estamos aqui pra ajudar.
        </p>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:grid-cols-2">
        {/* dados da loja */}
        <div>
          <h2 className="text-2xl font-bold">Nossos canais</h2>
          <ul className="mt-6 space-y-6">
            {dados.map((d) => {
              const Icone = d.icone;
              return (
                <li key={d.titulo} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
                    <Icone
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#c4a484]"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-bold">{d.titulo}</p>
                    <p className="text-sm text-neutral-600">{d.texto}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* formulário */}
        <div>
          <h2 className="text-2xl font-bold">Envie uma mensagem</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}