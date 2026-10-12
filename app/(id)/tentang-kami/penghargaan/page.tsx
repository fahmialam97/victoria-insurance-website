import Image from "next/image";
import { Award } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, getCompanyContent } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Penghargaan"),
  description: t("Penghargaan yang diterima PT Victoria Insurance, Tbk."),
  href: aboutLinks.awards.href,
}));

export default async function AwardsPage() {
  const { locale, t } = await getI18n();
  const { awards } = getCompanyContent(locale);
  return (
    <AboutPageLayout
      title={t("Penghargaan")}
      description={t("Penghargaan yang diterima Victoria Insurance.")}
      activeHref={aboutLinks.awards.href}
    >
      <section aria-labelledby="galeri-penghargaan">
        <h2 id="galeri-penghargaan" className="sr-only">
          {t("Galeri penghargaan")}
        </h2>
        <ul className="space-y-6">
          {awards.gallery.map(({ year, image }) => (
            <li key={image.src}>
              <figure className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1600px) 1248px, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-line px-5 py-3 text-sm font-semibold text-ink-800">
                  {t("Penghargaan {tahun}", { tahun: year })}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="penghargaan-2015-2018" className="mt-10">
        <h2 id="penghargaan-2015-2018" className="text-xl font-bold text-ink-900">
          {t("Penghargaan {tahun}", { tahun: "2015–2018" })}
        </h2>
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {awards.highlights.map((award) => (
            <li key={award.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Award aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold text-ink-900">{award.title}</h3>
              {award.items.length === 1 ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.items[0]}</p>
              ) : (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted marker:text-brand-600">
                  {award.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </AboutPageLayout>
  );
}
