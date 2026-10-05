import type { Metadata } from "next";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { committees, companyInfoLinks } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Komite – komite",
  description: "Susunan komite-komite PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.committees.href },
};

export default function CommitteesPage() {
  return (
    <CompanyInfoPageLayout title="Komite – komite" description={committees.text} activeHref={companyInfoLinks.committees.href}>
      <DocumentList documents={committees.documents} />
    </CompanyInfoPageLayout>
  );
}
