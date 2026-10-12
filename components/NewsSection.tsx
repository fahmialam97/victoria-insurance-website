import { latestNews, newsIndexHref } from "@/data/news";
import { getI18n } from "@/lib/i18n/server";
import { NewsCard } from "./NewsCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export async function NewsSection() {
  const { t } = await getI18n();
  return (
    <section aria-labelledby="berita-heading" className="pb-16 sm:pb-20">
      <Container>
        <SectionHeader
          id="berita-heading"
          title={t("Artikel & Berita")}
          description={t("Informasi terbaru, wawasan, dan kabar dari Victoria Insurance.")}
          action={{ label: t("Lihat Semua"), href: newsIndexHref, ariaLabel: t("Lihat semua artikel") }}
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
  );
}
