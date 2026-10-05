import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { annualReports, companyInfoLinks } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Laporan Tahunan",
  description: "Annual report, laporan keuangan berkelanjutan, dan prospektus PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.annual.href },
};

export default function AnnualReportsPage() {
  const sections = [
    { id: "annual-report", title: "Annual Report", documents: annualReports.annual },
    { id: "keuangan-berkelanjutan", title: "Laporan Penerapan Keuangan Berkelanjutan", documents: annualReports.sustainability },
    { id: "prospektus", title: "Prospektus", documents: annualReports.prospectus },
  ];

  return (
    <CompanyInfoPageLayout
      title="Laporan Tahunan"
      description="Annual report, laporan keuangan berkelanjutan, dan prospektus."
      activeHref={companyInfoLinks.annual.href}
    >
      <div className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className="rounded-2xl border border-line bg-white p-6 shadow-card"
          >
            <h2 id={section.id} className="flex items-center justify-between gap-3 text-xl font-bold text-navy-900">
              {section.title}
              <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted">
                {section.documents.length} dokumen
              </span>
            </h2>
            <div className="mt-4">
              <DocumentList documents={section.documents} />
            </div>
          </section>
        ))}
      </div>
    </CompanyInfoPageLayout>
  );
}
