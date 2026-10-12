import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { annualReports, companyInfoLinks } from "@/data/companyInfo";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Laporan Tahunan"),
  description: t("Annual report, laporan keuangan berkelanjutan, dan prospektus PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.annual.href,
}));

export default async function AnnualReportsPage() {
  const { t } = await getI18n();
  const sections = [
    { id: "annual-report", title: t("Annual Report"), documents: annualReports.annual },
    { id: "keuangan-berkelanjutan", title: t("Laporan Penerapan Keuangan Berkelanjutan"), documents: annualReports.sustainability },
    { id: "prospektus", title: t("Prospektus"), documents: annualReports.prospectus },
  ];

  return (
    <CompanyInfoPageLayout
      title={t("Laporan Tahunan")}
      description={t("Annual report, laporan keuangan berkelanjutan, dan prospektus.")}
      activeHref={companyInfoLinks.annual.href}
    >
      <div className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className="rounded-2xl border border-line bg-white p-6 shadow-card"
          >
            <h2 id={section.id} className="flex items-center justify-between gap-3 text-xl font-bold text-ink-900">
              {section.title}
              <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted">
                {t("{n} dokumen", { n: section.documents.length })}
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