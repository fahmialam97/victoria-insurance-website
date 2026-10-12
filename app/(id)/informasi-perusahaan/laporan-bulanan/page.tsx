import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { YearlyDocuments } from "@/components/YearlyDocuments";
import { companyInfoLinks } from "@/data/companyInfo";
import { monthlyReports } from "@/data/companyReports";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Laporan Bulanan"),
  description: t("Laporan keuangan bulanan PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.monthly.href,
}));

export default async function MonthlyReportsPage() {
  const { t } = await getI18n();
  return (
    <CompanyInfoPageLayout
      title={t("Laporan Bulanan")}
      description={t("Laporan keuangan bulanan PT Victoria Insurance, Tbk.")}
      activeHref={companyInfoLinks.monthly.href}
    >
      <YearlyDocuments groups={monthlyReports} idPrefix="bulanan" />
    </CompanyInfoPageLayout>
  );
}