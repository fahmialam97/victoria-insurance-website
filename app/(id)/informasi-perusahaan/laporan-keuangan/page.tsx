import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { YearlyDocuments } from "@/components/YearlyDocuments";
import { companyInfoLinks } from "@/data/companyInfo";
import { financialReports } from "@/data/companyReports";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Laporan Keuangan"),
  description: t("Laporan keuangan triwulanan dan tahunan PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.financial.href,
}));

export default async function FinancialReportsPage() {
  const { t } = await getI18n();
  return (
    <CompanyInfoPageLayout
      title={t("Laporan Keuangan")}
      description={t("Laporan keuangan triwulanan dan tahunan PT Victoria Insurance, Tbk.")}
      activeHref={companyInfoLinks.financial.href}
    >
      <YearlyDocuments groups={financialReports} idPrefix="keuangan" />
    </CompanyInfoPageLayout>
  );
}