import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { NewsTabs } from "@/components/NewsTabs";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { articles, articlesHref } from "@/data/articles";
import { toNewsItem } from "@/data/news";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel edukasi asuransi, tips, dan informasi klaim dari Victoria Insurance.",
  alternates: { canonical: articlesHref },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        title="Artikel"
        description="Edukasi asuransi, tips, dan informasi klaim bersama #VIns."
        trail={["Berita"]}
      >
        <NewsTabs active={articlesHref} />
      </PageHeader>

      <section aria-label="Daftar artikel" className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <NewsCard item={toNewsItem(article)} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
