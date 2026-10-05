import { latestNews, newsIndexHref } from "@/data/news";
import { NewsCard } from "./NewsCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function NewsSection() {
  return (
    <section aria-labelledby="berita-heading" className="pb-16 sm:pb-20">
      <Container>
        <SectionHeader
          id="berita-heading"
          title="Berita Terkini"
          description="Artikel dan informasi terbaru dari Victoria Insurance."
          action={{ label: "Lihat Semua", href: newsIndexHref, ariaLabel: "Lihat semua artikel" }}
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
