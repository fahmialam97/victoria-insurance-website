import type { Metadata } from "next";
import { HeartHandshake, Newspaper } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { articles, articlesHref } from "@/data/articles";
import { csr, csrHref } from "@/data/csr";
import { latestNews } from "@/data/news";

export const metadata: Metadata = {
  title: "Berita",
  description: "Artikel edukasi asuransi dan kegiatan CSR PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/berita" },
};

export default function NewsPage() {
  const sections = [
    {
      icon: Newspaper,
      name: "Artikel",
      description: `${articles.length} artikel edukasi asuransi, tips, dan informasi klaim.`,
      href: articlesHref,
    },
    {
      icon: HeartHandshake,
      name: "CSR",
      description: `Agenda CSR ${csr.agendas.map((a) => a.year).sort().join(", ")} dan komitmen tanggung jawab sosial perusahaan.`,
      href: csrHref,
    },
  ];

  return (
    <>
      <PageHeader title="Berita" description="Artikel dan kegiatan CSR dari Victoria Insurance." />

      <section aria-label="Kategori berita" className="pt-12 sm:pt-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.href}>
                <ServiceCard service={section} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="artikel-terbaru" className="py-12 sm:py-16">
        <Container>
          <SectionHeader
            id="artikel-terbaru"
            title="Artikel Terbaru"
            action={{ label: "Lihat Semua", href: articlesHref, ariaLabel: "Lihat semua artikel" }}
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((item) => (
              <li key={item.href}>
                <NewsCard item={item} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
