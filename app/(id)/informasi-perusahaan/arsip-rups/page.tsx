import Link from "@/components/ui/Link";
import { ArrowRight, Megaphone } from "lucide-react";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { companyInfoLinks } from "@/data/companyInfo";
import { rupsArchive } from "@/data/companyReports";
import { docTitle } from "@/lib/i18n/docTitles";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Arsip RUPS & Keterbukaan Informasi"),
  description: t("Arsip dokumen RUPST, RUPSLB, dan PMTHMETD PT Victoria Insurance, Tbk."),
  href: companyInfoLinks.rupsArchive.href,
}));

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function RupsArchivePage() {
  const { locale, t } = await getI18n();
  return (
    <CompanyInfoPageLayout
      title={t("Arsip RUPS & Keterbukaan Informasi")}
      description={t("Dokumen RUPST, RUPSLB, dan PMTHMETD tahun 2020–2026.")}
      activeHref={companyInfoLinks.rupsArchive.href}
    >
      <Link
        href={companyInfoLinks.rupslb2026.href}
        className="group flex items-center gap-4 rounded-2xl bg-ink-800 p-5 text-white transition-colors hover:bg-ink-900 sm:p-6"
      >
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
          <Megaphone aria-hidden="true" className="size-5" />
        </span>
        <span className="flex-1">
          <span className="block font-semibold">{t("RUPSLB 2026")}</span>
          <span className="block text-sm text-white/70">{t(companyInfoLinks.rupslb2026.description)}</span>
        </span>
        <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
      </Link>

      <nav aria-label={t("Pilih rapat")} className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {rupsArchive.map((group) => (
            <li key={group.title}>
              <a
                href={`#${slug(group.title)}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-600"
              >
                {docTitle(locale, group.title)}
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
            <h2 id={`${slug(group.title)}-heading`} className="text-xl font-bold text-ink-900">
              {docTitle(locale, group.title)}
            </h2>
            <div className="mt-5 space-y-5">
              {group.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-2 text-xs font-semibold uppercase leading-relaxed tracking-wider text-ink-700">
                    {docTitle(locale, section.title)}
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
