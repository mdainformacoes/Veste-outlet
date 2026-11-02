import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const chave = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !chave) {
  throw new Error(
    "Faltam as variáveis do Supabase no .env.local (URL e chave pública)."
  );
}

export const supabase = createClient(url, chave);