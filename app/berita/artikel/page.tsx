import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { NewsPageLayout } from "@/components/NewsPageLayout";
import { articles, articlesHref } from "@/data/articles";
import { toNewsItem } from "@/data/news";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel edukasi asuransi, tips, dan informasi klaim dari Victoria Insurance.",
  alternates: { canonical: articlesHref },
};

export default function ArticlesPage() {
  return (
    <NewsPageLayout
      title="Artikel"
      description="Edukasi asuransi, tips, dan informasi klaim bersama #VIns."
      activeHref={articlesHref}
    >
      <ul aria-label="Daftar artikel" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <NewsCard item={toNewsItem(article)} />
          </li>
        ))}
      </ul>
    </NewsPageLayout>
  );
}
