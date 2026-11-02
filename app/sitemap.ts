import type { MetadataRoute } from "next";
import { produtos } from "@/lib/produtos";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/loja`, changeFrequency: "weekly", priority: 0.9 },
    ...produtos.map((p) => ({
      url: `${siteUrl}/produto/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}