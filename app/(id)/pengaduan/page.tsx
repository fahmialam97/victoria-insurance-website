import Link from "@/components/ui/Link";
import { FileText, Mail, PhoneCall, ShieldAlert } from "lucide-react";
import { ComplaintForm } from "@/components/ComplaintForm";
import { Container } from "@/components/ui/Container";
import { HeaderDecor } from "@/components/ui/HeaderDecor";
import { SmartLink } from "@/components/ui/SmartLink";
import { complaintDocs } from "@/data/complaint";
import { contact } from "@/data/site";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Form Pengaduan Konsumen"),
  description: t("Sampaikan pengaduan Anda kepada PT Victoria Insurance, Tbk melalui formulir online."),
  href: "/pengaduan",
}));

export default async function ComplaintPage() {
  const { t } = await getI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line bg-surface">
        <HeaderDecor />
        <Container className="py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  {t("Beranda")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>{t("Klaim")}</li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink-900">
                {t("Form Pengaduan")}
              </li>
            </ol>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{t("Form Pengaduan Konsumen")}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {t(
              "Sampaikan pengaduan Anda melalui formulir di bawah ini. Pastikan email yang Anda isi aktif agar kami dapat menindaklanjuti pengaduan Anda.",
            )}
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="relative rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
            <ComplaintForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-base font-semibold text-ink-900">{t("Kanal pengaduan lain")}</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-muted">{t("Email pengaduan")}</p>
                    <a href={`mailto:${contact.complaintEmail}`} className="break-all font-medium text-ink-900 hover:text-brand-600">
                      {contact.complaintEmail}
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
                  <ShieldAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <p className="text-muted">{t("Pengaduan bersifat rahasia (whistleblowing)")}</p>
                    <a
                      href={`mailto:${contact.whistleblowingEmail}`}
                      className="break-all font-medium text-ink-900 hover:text-brand-600"
                    >
                      {contact.whistleblowingEmail}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <h2 className="text-base font-semibold text-ink-900">{t("Dokumen terkait")}</h2>
              <ul className="mt-3 divide-y divide-line">
                {complaintDocs.map((doc) => (
                  <li key={doc.url}>
                    <SmartLink href={doc.url} className="flex items-center gap-3 py-3 text-sm text-ink-800 hover:text-brand-600">
                      <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
                      {t(doc.title)}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
