import type { MetadataRoute } from "next";
import { produtos } from "@/data/produtos";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = ["", "/pecas", "/feito-a-mao", "/emily", "/universo", "/tuluzi"];
  return [
    ...base.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...produtos.map((p) => ({ url: `${SITE_URL}/pecas/${p.slug}`, changeFrequency: "weekly" as const, priority: 0.9 })),
  ];
}
