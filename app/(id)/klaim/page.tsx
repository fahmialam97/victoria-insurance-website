import { ArrowRight, CircleAlert, Mail, PhoneCall } from "lucide-react";
import { ClaimForm } from "@/components/ClaimForm";
import { ClaimPageLayout } from "@/components/ClaimPageLayout";
import { SmartLink } from "@/components/ui/SmartLink";
import { claimDocumentsFor } from "@/data/claimDocuments";
import { getProducts } from "@/data/products";
import { claimHref } from "@/data/services";
import { contact } from "@/data/site";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Klaim Asuransi"),
  description: t("Ajukan laporan klaim asuransi PT Victoria Insurance, Tbk melalui formulir online."),
  href: claimHref,
}));

/** Ringkasan "tindakan pertama" saat terjadi kerugian, dari bagian prosedur klaim RIPLAY. */
const claimNotes = [
  "Laporkan kejadian sesegera mungkin: lisan maksimal 1×24 jam, tertulis maksimal 3×24 jam.",
  "Jangan memperbaiki atau mengganti objek yang rusak sebelum ada persetujuan Victoria Insurance.",
  "Siapkan polis, foto kerusakan, dan laporan kepolisian bila diperlukan.",
];

export default async function ClaimPage() {
  const { locale, t } = await getI18n();
  return (
    <ClaimPageLayout
      title={t("Klaim Asuransi")}
      description={t(
        "Laporkan klaim Anda melalui formulir di bawah ini. Pastikan email dan nomor telepon aktif agar tim klaim kami dapat menghubungi Anda.",
      )}
      activeHref={claimHref}
    >
      <div className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
        <div className="relative rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          {/* Hanya nama produk + daftar dokumennya yang dikirim ke komponen client, bukan seluruh data produk */}
          <ClaimForm
            products={getProducts(locale).map((product) => ({ name: product.name, documents: claimDocumentsFor(product.slug) }))}
          />
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="text-base font-semibold text-ink-900">{t("Sebelum mengajukan klaim")}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-800">
              {claimNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  {t(note)}
                </li>
              ))}
            </ul>
            <SmartLink
              href="/layanan/informasi-transaksi"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              {t("Tahapan pengajuan klaim")}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </SmartLink>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-base font-semibold text-ink-900">{t("Butuh bantuan?")}</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <PhoneCall aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-muted">{t("Kantor pelayanan")}</p>
                  <a href={`tel:${contact.headOffice.phone.tel}`} className="font-medium text-ink-900 hover:text-brand-600">
                    {contact.headOffice.phone.display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-muted">{t(contact.hotline.label)}</p>
                  <a href={`tel:${contact.hotline.tel}`} className="font-medium text-ink-900 hover:text-brand-600">
                    {contact.hotline.display}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-muted">Email</p>
                  <a href={`mailto:${contact.email}`} className="break-all font-medium text-ink-900 hover:text-brand-600">
                    {contact.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </ClaimPageLayout>
  );
}
