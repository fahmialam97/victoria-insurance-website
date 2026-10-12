import Image from "next/image";
import { Phone } from "lucide-react";
import { ClaimPageLayout } from "@/components/ClaimPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { getLayananContent } from "@/data/layanan";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Bengkel Rekanan"),
  description: t("Daftar bengkel rekanan PT Victoria Insurance, Tbk wilayah Jabodetabek dan Non Jabodetabek."),
  href: "/layanan/bengkel-rekanan",
}));

export default async function WorkshopPage() {
  const { locale, t } = await getI18n();
  const { workshop } = getLayananContent(locale);
  const { image, contact } = workshop;

  return (
    <ClaimPageLayout
      title={t("Bengkel Rekanan")}
      description={t("Daftar bengkel rekanan wilayah Jabodetabek dan Non Jabodetabek.")}
      activeHref="/layanan/bengkel-rekanan"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface md:aspect-auto md:min-h-[420px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 340px, 100vw"
            className="object-cover object-[50%_25%]"
          />
        </div>

        <div className="space-y-6">
          <section aria-labelledby="daftar-bengkel" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
            <h2 id="daftar-bengkel" className="text-xl font-bold text-ink-900">
              {workshop.heading}
            </h2>
            <div className="mt-4">
              <DocumentList documents={workshop.documents} />
            </div>
          </section>

          <section aria-labelledby="info-klaim" className="rounded-2xl bg-ink-800 p-6 text-white sm:p-8">
            <h2 id="info-klaim" className="text-lg font-bold">
              {t("Informasi")}
            </h2>
            <p className="mt-1 text-sm text-white/75">{t("Untuk informasi, hubungi {kontak}", { kontak: contact.label })}</p>
            <a
              href={`tel:${contact.tel}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 hover:bg-brand-50"
            >
              <Phone aria-hidden="true" className="size-4 text-brand-600" />
              {contact.name} ({contact.phone})
            </a>
          </section>
        </div>
      </div>
    </ClaimPageLayout>
  );
}
