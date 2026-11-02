import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const beneficios = [
  {
    icone: Truck,
    titulo: "Frete grátis",
    texto: "Acima de R$\u00A0299",
  },
  {
    icone: ShieldCheck,
    titulo: "Pagamento seguro",
    texto: "Pix, cartão e boleto",
  },
  {
    icone: RefreshCw,
    titulo: "Trocas fáceis",
    texto: "Até 30 dias para trocar",
  },
  {
    icone: Headphones,
    titulo: "Suporte",
    texto: "Atendimento de seg. a sáb.",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {beneficios.map((b, i) => {
          const Icone = b.icone;
          return (
            <div
              key={b.titulo}
              className={`flex flex-col items-center gap-3 px-6 py-8 text-center md:flex-row md:text-left ${
                i > 0 ? "md:border-l md:border-neutral-200" : ""
              } ${i % 2 === 1 ? "border-l border-neutral-200 md:border-l" : ""} ${
                i >= 2 ? "border-t border-neutral-200 md:border-t-0" : ""
              }`}
            >
              <Icone
                size={32}
                strokeWidth={1.5}
                className="shrink-0 text-[#c4a484]"
              />
              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  {b.titulo}
                </h4>
                <p className="mt-0.5 text-xs text-neutral-500">{b.texto}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}