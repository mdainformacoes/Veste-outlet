import type { Metadata } from "next";
import ProductListing from "@/components/ProductListing";
import { produtos } from "@/lib/produtos";

export const metadata: Metadata = {
  title: "Loja | Vesta Outlet",
  description: "Todos os produtos da Vesta Outlet",
};

export default function LojaPage() {
  return (
    <main className="flex-1 bg-white">
      <ProductListing titulo="Loja" produtos={produtos} />
    </main>
  );
}