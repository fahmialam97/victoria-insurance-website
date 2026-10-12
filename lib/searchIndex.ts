import { aboutLinks } from "@/data/company";
import { articleHref, articles } from "@/data/articles";
import { companyInfoGroups } from "@/data/companyInfo";
import { getProducts, productHref, productsHref } from "@/data/products";
import { claimMenuLinks, complaintFormLink, services } from "@/data/services";
import type { Locale } from "./i18n/locale";
import { translator } from "./i18n/translate";
import type { SearchEntry } from "./search";

const clip = (text: string, max = 140) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text);

/**
 * Indeks ringkas (judul + deskripsi pendek) agar isi artikel/produk tidak ikut ke JavaScript browser.
 * Teks sesuai bahasa halaman; href tetap path Indonesia (prefix /en ditambahkan navbar). Artikel tetap berbahasa Indonesia.
 */
export function buildSearchIndex(locale: Locale = "id"): SearchEntry[] {
  const t = translator(locale);
  const optional = (text?: string) => (text ? t(text) : undefined);
  return [
    { title: t("Produk Asuransi"), href: productsHref, category: t("Produk"), description: t("Semua produk asuransi Victoria Insurance.") },
    ...getProducts(locale).map((product) => ({
      title: product.name,
      href: productHref(product),
      category: t("Produk"),
      description: clip(product.summary ?? product.description[0]),
    })),
    // Kategori mengikuti menu tempat layanan berada sekarang (Klaim atau Tentang Kami)
    ...services.map((service) => ({
      title: t(service.name),
      href: service.href,
      category: t(claimMenuLinks.some((link) => link.href === service.href) ? "Klaim" : "Tentang Kami"),
      description: t(service.description),
    })),
    { title: t(complaintFormLink.label), href: complaintFormLink.href, category: t("Klaim"), description: t("Kirim pengaduan secara online.") },
    ...articles.map((article) => ({
      title: article.title,
      href: articleHref(article),
      category: t("Artikel"),
      description: clip(article.excerpt),
    })),
    ...Object.values(aboutLinks).map((link) => ({ title: t(link.label), href: link.href, category: t("Tentang Kami") })),
    ...companyInfoGroups.flatMap((group) =>
      group.links.map((link) => ({
        title: t(link.label),
        href: link.href,
        category: t(link.href.startsWith("/berita") ? "Berita" : "Informasi Perusahaan"),
        description: optional(link.description),
      })),
    ),
  ];
}
