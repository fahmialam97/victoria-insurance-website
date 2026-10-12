import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks, getCompanyInfoContent } from "@/data/companyInfo";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Anggaran Dasar (AD/ART)"),
  description: t("Anggaran Dasar PT Victoria Insurance, Tbk yang berlaku."),
  href: companyInfoLinks.articles.href,
}));

export default async function ArticlesPage() {
  const { locale, t } = await getI18n();
  const { articlesOfAssociation } = getCompanyInfoContent(locale);
  return (
    <CompanyInfoPageLayout title={t("Anggaran Dasar (AD/ART)")} activeHref={companyInfoLinks.articles.href}>
      <p className="rounded-2xl border border-line bg-white p-6 leading-relaxed text-ink-800 shadow-card sm:p-8">
        {articlesOfAssociation.text}
      </p>
      <div className="mt-6">
        <DocumentList documents={articlesOfAssociation.documents} />
      </div>
    </CompanyInfoPageLayout>
  );
}