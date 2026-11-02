import { Suspense } from "react";
import { supabase } from "@/lib/supabase";

async function Resultado() {
  const { data, error } = await supabase
    .from("produtos")
    .select("nome, preco, categoria_slug")
    .order("nome");

  // clientes tem que estar trancado para o público (teste de segurança)
  const bloqueio = await supabase.from("clientes").select("id").limit(1);
  const trancado = bloqueio.error !== null;

  if (error) {
    return <p className="font-semibold text-red-600">Erro: {error.message}</p>;
  }

  const lista = data ?? [];

  return (
    <>
      <p className="font-semibold text-green-700">
        Conectou! {lista.length} produtos encontrados.
      </p>
      <p
        className={`mt-2 font-semibold ${
          trancado ? "text-green-700" : "text-red-600"
        }`}
      >
        {trancado
          ? "Segurança ok: a tabela de clientes está trancada para o público ✓"
          : "Atenção: a tabela de clientes está aberta para o público!"}
      </p>
      <ul className="mt-4 space-y-1 text-sm">
        {lista.map((p) => (
          <li key={p.nome}>
            {p.nome} - {p.categoria_slug} - R$ {p.preco}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function TesteSupabasePage() {
  return (
    <main className="flex-1 bg-white px-6 py-12 text-neutral-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold">Teste do Supabase</h1>
        <div className="mt-4">
          <Suspense fallback={<p>Carregando...</p>}>
            <Resultado />
          </Suspense>
        </div>
      </div>
    </main>
  );
}