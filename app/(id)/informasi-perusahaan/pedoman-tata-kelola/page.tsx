import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks, getCompanyInfoContent } from "@/data/companyInfo";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Pedoman Tata Kelola"),
  description: t("Implementasi tata kelola perusahaan yang baik (GCG) PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.governance.href,
}));

export default async function GovernancePage() {
  const { locale, t } = await getI18n();
  const { governance } = getCompanyInfoContent(locale);
  return (
    <CompanyInfoPageLayout title={t("Pedoman Tata Kelola")} activeHref={companyInfoLinks.governance.href}>
      <section aria-labelledby="gcg" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 id="gcg" className="text-xl font-bold text-ink-900">
          {governance.heading}
        </h2>
        <p className="mt-4 leading-relaxed text-ink-800">{governance.text}</p>
      </section>
      <section aria-labelledby="dokumen-gcg" className="mt-8">
        <h2 id="dokumen-gcg" className="mb-3 text-lg font-bold text-ink-900">
          {t("Dokumen Terkait")}
        </h2>
        <DocumentList documents={governance.documents} />
      </section>
    </CompanyInfoPageLayout>
  );
}