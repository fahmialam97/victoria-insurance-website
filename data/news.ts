import { articleHref, articles, articlesHref } from "./articles";

export type NewsItem = {
  title: string;
  /** Tanggal publikasi (ISO) dari WordPress REST API website resmi. */
  date: string;
  summary: string;
  href: string;
  category?: string;
};

export const newsHref = "/berita";

export const newsIndexHref = articlesHref;

export const toNewsItem = (article: (typeof articles)[number]): NewsItem => ({
  title: article.title,
  date: article.date,
  summary: article.excerpt,
  href: articleHref(article),
  category: categoryLabel(article.category),
});

/** Kategori bawaan WordPress "Uncategorized" tidak ditampilkan. */
export function categoryLabel(category: string) {
  return category === "Uncategorized" ? undefined : category;
}

/** Tiga artikel terbaru untuk homepage. */
export const latestNews: NewsItem[] = articles.slice(0, 3).map(toNewsItem);
