import type { MetadataRoute } from "next";
import { rupslbEvents, rupslbHref } from "@/data/rupslb";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: new URL("/produk", site.url).toString(), changeFrequency: "monthly", priority: 0.8 },
    { url: new URL("/layanan", site.url).toString(), changeFrequency: "yearly", priority: 0.6 },
    ...services.map((service) => ({
      url: new URL(service.href, site.url).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: new URL("/informasi-perusahaan", site.url).toString(), changeFrequency: "monthly", priority: 0.6 },
    { url: new URL("/pengaduan", site.url).toString(), changeFrequency: "yearly", priority: 0.5 },
    ...rupslbEvents.map((event) => ({
      url: new URL(rupslbHref(event), site.url).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
