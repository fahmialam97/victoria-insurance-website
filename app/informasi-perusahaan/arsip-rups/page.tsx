import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks } from "@/data/companyInfo";
import { rupsArchive } from "@/data/companyReports";

export const metadata: Metadata = {
  title: "Arsip RUPS & Keterbukaan Informasi",
  description: "Arsip dokumen RUPST, RUPSLB, dan PMTHMETD PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.rupsArchive.href },
};

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function RupsArchivePage() {
  return (
    <CompanyInfoPageLayout
      title="Arsip RUPS & Keterbukaan Informasi"
      description="Dokumen RUPST, RUPSLB, dan PMTHMETD tahun 2020–2026."
      activeHref={companyInfoLinks.rupsArchive.href}
    >
      <Link
        href={companyInfoLinks.rupslb2026.href}
        className="group flex items-center gap-4 rounded-2xl bg-navy-900 p-5 text-white transition-colors hover:bg-navy-800 sm:p-6"
      >
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
          <Megaphone aria-hidden="true" className="size-5" />
        </span>
        <span className="flex-1">
          <span className="block font-semibold">RUPSLB 2026</span>
          <span className="block text-sm text-white/70">{companyInfoLinks.rupslb2026.description}</span>
        </span>
        <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
      </Link>

      <nav aria-label="Pilih rapat" className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {rupsArchive.map((group) => (
            <li key={group.title}>
              <a
                href={`#${slug(group.title)}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-800 hover:border-brand-600 hover:text-brand-600"
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 space-y-6">
        {rupsArchive.map((group) => (
          <section
            key={group.title}
            id={slug(group.title)}
            aria-labelledby={`${slug(group.title)}-heading`}
            className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
          >
            <h2 id={`${slug(group.title)}-heading`} className="text-xl font-bold text-navy-900">
              {group.title}
            </h2>
            <div className="mt-5 space-y-5">
              {group.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-2 text-xs font-semibold uppercase leading-relaxed tracking-wider text-navy-700">
                    {section.title}
                  </h3>
                  <DocumentList documents={section.documents} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </CompanyInfoPageLayout>
  );
}
