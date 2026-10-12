import Image from "next/image";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, getCompanyContent } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Struktur Organisasi"),
  description: t("Struktur organisasi Dewan Komisaris dan Direksi PT Victoria Insurance, Tbk."),
  href: aboutLinks.structure.href,
}));

export default async function OrgStructurePage() {
  const { locale, t } = await getI18n();
  const { orgStructure } = getCompanyContent(locale);
  return (
    <AboutPageLayout
      title={t("Struktur Organisasi")}
      description="PT. Victoria Insurance, Tbk"
      activeHref={aboutLinks.structure.href}
    >
      <div className="space-y-8">
        {orgStructure.map(({ title, image }) => (
          <section key={title} aria-label={t("Struktur {nama}", { nama: title })}>
            <h2 className="text-xl font-bold text-ink-900">{title}</h2>
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1600px) 1248px, 100vw"
                className="h-auto w-full"
              />
              <span className="sr-only"> {t("(buka gambar ukuran penuh di tab baru)")}</span>
            </a>
            <p className="mt-2 text-xs text-muted">{t("Klik bagan untuk melihat ukuran penuh.")}</p>
          </section>
        ))}
      </div>
    </AboutPageLayout>
  );
}
