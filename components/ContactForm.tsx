"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const campo =
  "w-full rounded border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#c4a484] focus:outline-none";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function aoEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // por enquanto não envia nada; depois a gente liga ao Supabase
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded border border-neutral-200 bg-neutral-50 p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c4a484] text-[#0d1117]">
          <Check size={24} />
        </span>
        <h3 className="mt-4 text-xl font-bold">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Obrigado pelo contato. Responderemos o mais rápido possível.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="mt-6 text-sm font-semibold text-[#b8946a] hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={aoEnviar} className="space-y-4">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm font-semibold">
          Nome
        </label>
        <input
          id="nome"
          type="text"
          required
          placeholder="Seu nome"
          className={campo}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="seuemail@exemplo.com"
          className={campo}
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm font-semibold">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          required
          rows={5}
          placeholder="Como podemos ajudar?"
          className={campo}
        />
      </div>
      <button
        type="submit"
        className="rounded bg-[#c4a484] px-8 py-3 text-sm font-semibold text-[#0d1117] transition hover:bg-[#b8946a]"
      >
        Enviar mensagem
      </button>
    </form>
  );
}