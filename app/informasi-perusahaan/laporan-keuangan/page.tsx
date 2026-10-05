import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { YearlyDocuments } from "@/components/YearlyDocuments";
import { companyInfoLinks } from "@/data/companyInfo";
import { financialReports } from "@/data/companyReports";

export const metadata: Metadata = {
  title: "Laporan Keuangan",
  description: "Laporan keuangan triwulanan dan tahunan PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.financial.href },
};

export default function FinancialReportsPage() {
  return (
    <CompanyInfoPageLayout
      title="Laporan Keuangan"
      description="Laporan keuangan triwulanan dan tahunan PT Victoria Insurance, Tbk."
      activeHref={companyInfoLinks.financial.href}
    >
      <YearlyDocuments groups={financialReports} idPrefix="keuangan" />
    </CompanyInfoPageLayout>
  );
}
