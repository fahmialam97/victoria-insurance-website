import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { NewsCard } from "@/components/NewsCard";
import { articles, articlesHref } from "@/data/articles";
import { toNewsItem } from "@/data/news";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Artikel & Berita"),
  description: t("Artikel edukasi asuransi, tips, dan informasi klaim dari Victoria Insurance."),
  href: articlesHref,
}));

export default async function ArticlesPage() {
  const { locale, t } = await getI18n();
  return (
    <CompanyInfoPageLayout
      title={t("Artikel & Berita")}
      description={
        locale === "en"
          ? `${t("Edukasi asuransi, tips, dan informasi klaim bersama #VIns.")} ${t("Artikel tersedia dalam Bahasa Indonesia.")}`
          : t("Edukasi asuransi, tips, dan informasi klaim bersama #VIns.")
      }
      activeHref={articlesHref}
    >
      <ul aria-label={t("Daftar artikel")} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <li key={article.slug}>
            <NewsCard item={toNewsItem(article)} />
          </li>
        ))}
      </ul>
    </CompanyInfoPageLayout>
  );
}
