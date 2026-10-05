import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks, governance } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Pedoman Tata Kelola",
  description: "Implementasi tata kelola perusahaan yang baik (GCG) PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.governance.href },
};

export default function GovernancePage() {
  return (
    <CompanyInfoPageLayout title="Pedoman Tata Kelola" activeHref={companyInfoLinks.governance.href}>
      <section aria-labelledby="gcg" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 id="gcg" className="text-xl font-bold text-navy-900">
          {governance.heading}
        </h2>
        <p className="mt-4 leading-relaxed text-navy-800">{governance.text}</p>
      </section>
      <section aria-labelledby="dokumen-gcg" className="mt-8">
        <h2 id="dokumen-gcg" className="mb-3 text-lg font-bold text-navy-900">
          Dokumen Terkait
        </h2>
        <DocumentList documents={governance.documents} />
      </section>
    </CompanyInfoPageLayout>
  );
}
