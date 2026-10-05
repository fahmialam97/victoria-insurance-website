import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ShieldAlert } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { complaint } from "@/data/layanan";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Pengaduan Konsumen",
  description: "Prosedur, kanal, dan laporan pengaduan konsumen PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/layanan/pengaduan-konsumen" },
};

export default function ComplaintInfoPage() {
  return (
    <ServicePageLayout title="Pengaduan Konsumen" description={complaint.intro} activeHref="/layanan/pengaduan-konsumen">
      <div className="space-y-6">
        <section className="flex flex-col gap-5 rounded-2xl bg-navy-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">Sampaikan pengaduan secara online</h2>
            <p className="mt-1 text-sm text-white/75">Isi formulir pengaduan dan dapatkan nomor referensi.</p>
          </div>
          <Link
            href="/pengaduan"
            className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 sm:self-auto"
          >
            Form Pengaduan
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <section aria-labelledby="kanal-email" className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <Mail aria-hidden="true" className="size-6 text-brand-600" />
            <h2 id="kanal-email" className="mt-3 text-base font-semibold text-navy-900">
              Email Pengaduan
            </h2>
            <a href={`mailto:${contact.complaintEmail}`} className="mt-1 block break-all text-sm font-medium text-navy-800 hover:text-brand-600">
              {contact.complaintEmail}
            </a>
          </section>
          <section aria-labelledby="kanal-wbs" className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <ShieldAlert aria-hidden="true" className="size-6 text-brand-600" />
            <h2 id="kanal-wbs" className="mt-3 text-base font-semibold text-navy-900">
              Whistleblowing
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-muted">{complaint.whistleblowingIntro}</p>
            <a
              href={`mailto:${contact.whistleblowingEmail}`}
              className="mt-2 block break-all text-sm font-medium text-navy-800 hover:text-brand-600"
            >
              {contact.whistleblowingEmail}
            </a>
          </section>
        </div>

        <section aria-labelledby="prosedur" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 id="prosedur" className="text-lg font-bold text-navy-900">
            Prosedur
          </h2>
          <div className="mt-4">
            <DocumentList documents={complaint.documents} />
          </div>
          <h2 className="mt-8 text-lg font-bold text-navy-900">Laporan</h2>
          <div className="mt-4">
            <DocumentList documents={complaint.reports} />
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}
