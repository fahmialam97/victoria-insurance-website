import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { articlesOfAssociation, companyInfoLinks } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Anggaran Dasar (AD/ART)",
  description: "Anggaran Dasar PT Victoria Insurance, Tbk yang berlaku.",
  alternates: { canonical: companyInfoLinks.articles.href },
};

export default function ArticlesPage() {
  return (
    <CompanyInfoPageLayout title="Anggaran Dasar (AD/ART)" activeHref={companyInfoLinks.articles.href}>
      <p className="rounded-2xl border border-line bg-white p-6 leading-relaxed text-navy-800 shadow-card sm:p-8">
        {articlesOfAssociation.text}
      </p>
      <div className="mt-6">
        <DocumentList documents={articlesOfAssociation.documents} />
      </div>
    </CompanyInfoPageLayout>
  );
}
