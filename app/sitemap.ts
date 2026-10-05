import type { MetadataRoute } from "next";
import { rupslbEvents, rupslbHref } from "@/data/rupslb";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...rupslbEvents.map((event) => ({
      url: new URL(rupslbHref(event), site.url).toString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
