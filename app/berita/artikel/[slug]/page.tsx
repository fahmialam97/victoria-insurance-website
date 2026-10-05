import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { NewsCard } from "@/components/NewsCard";
import { Container } from "@/components/ui/Container";
import { articleHref, articles, articlesHref, getArticle } from "@/data/articles";
import { categoryLabel, toNewsItem } from "@/data/news";
import { formatDate } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(props: PageProps<"/berita/artikel/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: articleHref(article) },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: articleHref(article),
      publishedTime: article.date,
      images: [{ url: article.cover.src, width: article.cover.width, height: article.cover.height }],
    },
  };
}

export default async function ArticlePage(props: PageProps<"/berita/artikel/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const category = categoryLabel(article.category);
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-line bg-surface">
          <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-brand-600">
                    Beranda
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href="/berita" className="hover:text-brand-600">
                    Berita
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={articlesHref} className="hover:text-brand-600">
                    Artikel
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <p className="flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" className="size-4" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </p>
              {category && (
                <span className="rounded-full bg-brand-50 px-3 py-0.5 text-xs font-semibold text-brand-700">
                  {category}
                </span>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src={article.cover.src}
              alt=""
              width={article.cover.width}
              height={article.cover.height}
              sizes="(min-width: 896px) 832px, 100vw"
              preload
              className="h-auto w-full"
            />
          </div>

          {/* Konten statis dari website resmi, sudah dibersihkan ke tag teks dasar */}
          <div className="article-body mx-auto mt-10 max-w-3xl" dangerouslySetInnerHTML={{ __html: article.content }} />

          <div className="mx-auto mt-12 max-w-3xl border-t border-line pt-6">
            <Link
              href={articlesHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Kembali ke Artikel
            </Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="artikel-lainnya" className="border-t border-line bg-surface py-12 sm:py-16">
        <Container>
          <h2 id="artikel-lainnya" className="mb-8 text-2xl font-bold tracking-tight text-navy-900">
            Artikel Lainnya
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <NewsCard item={toNewsItem(other)} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
