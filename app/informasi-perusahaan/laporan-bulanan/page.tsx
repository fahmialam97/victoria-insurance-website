import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { YearlyDocuments } from "@/components/YearlyDocuments";
import { companyInfoLinks } from "@/data/companyInfo";
import { monthlyReports } from "@/data/companyReports";

export const metadata: Metadata = {
  title: "Laporan Bulanan",
  description: "Laporan keuangan bulanan PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.monthly.href },
};

export default function MonthlyReportsPage() {
  return (
    <CompanyInfoPageLayout
      title="Laporan Bulanan"
      description="Laporan keuangan bulanan PT Victoria Insurance, Tbk."
      activeHref={companyInfoLinks.monthly.href}
    >
      <YearlyDocuments groups={monthlyReports} idPrefix="bulanan" />
    </CompanyInfoPageLayout>
  );
}
