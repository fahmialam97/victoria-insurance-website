import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { NewsCard } from "@/components/NewsCard";
import { articles, articlesHref } from "@/data/articles";
import { toNewsItem } from "@/data/news";

export const metadata: Metadata = {
  title: "Artikel & Berita",
  description: "Artikel edukasi asuransi, tips, dan informasi klaim dari Victoria Insurance.",
  alternates: { canonical: articlesHref },
};

export default function ArticlesPage() {
  return (
    <CompanyInfoPageLayout
      title="Artikel & Berita"
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
    </CompanyInfoPageLayout>
  );
}
