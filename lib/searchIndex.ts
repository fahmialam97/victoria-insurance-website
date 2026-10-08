import { aboutLinks } from "@/data/company";
import { articleHref, articles } from "@/data/articles";
import { companyInfoGroups } from "@/data/companyInfo";
import { newsMenuLinks } from "@/data/navigation";
import { productHref, products, productsHref } from "@/data/products";
import { complaintFormLink, services } from "@/data/services";
import type { SearchEntry } from "./search";

const clip = (text: string, max = 140) => (text.length > max ? `${text.slice(0, max).trimEnd()}…` : text);

/** Indeks ringkas (judul + deskripsi pendek) agar isi artikel/produk tidak ikut ke JavaScript browser. */
export function buildSearchIndex(): SearchEntry[] {
  return [
    { title: "Produk Asuransi", href: productsHref, category: "Produk", description: "Semua produk asuransi Victoria Insurance." },
    ...products.map((product) => ({
      title: product.name,
      href: productHref(product),
      category: "Produk",
      description: clip(product.summary ?? product.description[0]),
    })),
    ...services.map((service) => ({
      title: service.name,
      href: service.href,
      category: "Layanan",
      description: service.description,
    })),
    { title: complaintFormLink.label, href: complaintFormLink.href, category: "Layanan", description: "Kirim pengaduan secara online." },
    ...newsMenuLinks.map((link) => ({ title: link.label, href: link.href, category: "Berita" })),
    ...articles.map((article) => ({
      title: article.title,
      href: articleHref(article),
      category: "Artikel",
      description: clip(article.excerpt),
    })),
    ...Object.values(aboutLinks).map((link) => ({ title: link.label, href: link.href, category: "Tentang Kami" })),
    ...companyInfoGroups.flatMap((group) =>
      group.links.map((link) => ({
        title: link.label,
        href: link.href,
        category: "Informasi Perusahaan",
        description: link.description,
      })),
    ),
  ];
}
