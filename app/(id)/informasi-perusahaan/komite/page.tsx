import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks, getCompanyInfoContent } from "@/data/companyInfo";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Komite – komite"),
  description: t("Susunan komite-komite PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.committees.href,
}));

export default async function CommitteesPage() {
  const { locale, t } = await getI18n();
  const { committees } = getCompanyInfoContent(locale);
  return (
    <CompanyInfoPageLayout title={t("Komite – komite")} description={committees.text} activeHref={companyInfoLinks.committees.href}>
      <DocumentList documents={committees.documents} />
    </CompanyInfoPageLayout>
  );
}