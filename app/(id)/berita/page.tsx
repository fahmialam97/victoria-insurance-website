import { HeartHandshake, Newspaper } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { articles, articlesHref } from "@/data/articles";
import { csr, csrHref } from "@/data/csr";
import { latestNews } from "@/data/news";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Berita"),
  description: t("Artikel edukasi asuransi dan kegiatan CSR PT Victoria Insurance, Tbk."),
  href: "/berita",
}));

export default async function NewsPage() {
  const { t } = await getI18n();
  const sections = [
    {
      icon: Newspaper,
      name: t("Artikel & Berita"),
      description: t("{n} artikel edukasi asuransi, tips, dan informasi klaim.", { n: articles.length }),
      href: articlesHref,
    },
    {
      icon: HeartHandshake,
      name: "CSR",
      description: t("Agenda CSR {tahun} dan komitmen tanggung jawab sosial perusahaan.", {
        tahun: csr.agendas.map((a) => a.year).sort().join(", "),
      }),
      href: csrHref,
    },
  ];

  return (
    <>
      <PageHeader title={t("Berita")} description={t("Artikel dan kegiatan CSR dari Victoria Insurance.")} />

      <section aria-label={t("Kategori berita")} className="pt-12 sm:pt-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.href}>
                <ServiceCard service={section} translated />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="artikel-terbaru" className="py-12 sm:py-16">
        <Container>
          <SectionHeader
            id="artikel-terbaru"
            title={t("Artikel Terbaru")}
            action={{ label: t("Lihat Semua"), href: articlesHref, ariaLabel: t("Lihat semua artikel") }}
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
