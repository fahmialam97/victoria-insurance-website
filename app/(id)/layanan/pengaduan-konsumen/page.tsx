import Link from "@/components/ui/Link";
import { ArrowRight, Mail, ShieldAlert } from "lucide-react";
import { ClaimPageLayout } from "@/components/ClaimPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { getLayananContent } from "@/data/layanan";
import { contact } from "@/data/site";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Pengaduan Konsumen"),
  description: t("Prosedur, kanal, dan laporan pengaduan konsumen PT Victoria Insurance, Tbk."),
  href: "/layanan/pengaduan-konsumen",
}));

export default async function ComplaintInfoPage() {
  const { locale, t } = await getI18n();
  const { complaint } = getLayananContent(locale);
  return (
    <ClaimPageLayout title={t("Pengaduan Konsumen")} description={complaint.intro} activeHref="/layanan/pengaduan-konsumen">
      <div className="space-y-6">
        <section className="flex flex-col gap-5 rounded-2xl bg-ink-800 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">{t("Sampaikan pengaduan secara online")}</h2>
            <p className="mt-1 text-sm text-white/75">{t("Isi formulir pengaduan dan dapatkan nomor referensi.")}</p>
          </div>
          <Link
            href="/pengaduan"
            className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 sm:self-auto"
          >
            {t("Form Pengaduan")}
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section aria-labelledby="kanal-email" className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <Mail aria-hidden="true" className="size-6 text-brand-600" />
            <h2 id="kanal-email" className="mt-3 text-base font-semibold text-ink-900">
              {t("Email Pengaduan")}
            </h2>
            <a href={`mailto:${contact.complaintEmail}`} className="mt-1 block break-all text-sm font-medium text-ink-800 hover:text-brand-600">
              {contact.complaintEmail}
            </a>
          </section>
          <section aria-labelledby="kanal-wbs" className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <ShieldAlert aria-hidden="true" className="size-6 text-brand-600" />
            <h2 id="kanal-wbs" className="mt-3 text-base font-semibold text-ink-900">
              Whistleblowing
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted">{complaint.whistleblowingIntro}</p>
            <a
              href={`mailto:${contact.whistleblowingEmail}`}
              className="mt-2 block break-all text-sm font-medium text-ink-800 hover:text-brand-600"
            >
              {contact.whistleblowingEmail}
            </a>
          </section>
        </div>

        <section aria-labelledby="prosedur" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 id="prosedur" className="text-lg font-bold text-ink-900">
            {t("Prosedur")}
          </h2>
          <div className="mt-4">
            <DocumentList documents={complaint.documents} />
          </div>
          <h2 className="mt-8 text-lg font-bold text-ink-900">{t("Laporan")}</h2>
          <div className="mt-4">
            <DocumentList documents={complaint.reports} />
          </div>
        </section>
      </div>
    </ClaimPageLayout>
  );
}
