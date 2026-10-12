import Image from "next/image";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { getLayananContent } from "@/data/layanan";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Literasi & Inklusi"),
  description: t("Arsip kegiatan literasi dan inklusi keuangan PT Victoria Insurance, Tbk."),
  href: "/layanan/literasi-inklusi",
}));

export default async function LiteracyPage() {
  const { locale, t } = await getI18n();
  const { literacy } = getLayananContent(locale);
  const { image } = literacy;

  return (
    <AboutPageLayout
      title={t("Literasi & Inklusi")}
      description={t("Arsip kegiatan literasi dan inklusi keuangan tahun 2023–2026.")}
      activeHref="/layanan/literasi-inklusi"
    >
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full"
        />
      </div>

      {/* Navigasi cepat per tahun */}
      <nav aria-label={t("Pilih tahun")} className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {literacy.years.map(({ year }) => (
            <li key={year}>
              <a
                href={`#tahun-${year}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-600"
              >
                {year}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 space-y-6">
        {literacy.years.map(({ year, sessions }) => (
          <section
            key={year}
            id={`tahun-${year}`}
            aria-labelledby={`tahun-${year}-heading`}
            className="scroll-mt-4 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
          >
            <h2 id={`tahun-${year}-heading`} className="text-xl font-bold text-ink-900">
              {t("Literasi & Inklusi Keuangan Tahun {tahun}", { tahun: year })}
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {sessions.map((session) => (
                <div key={session.title}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink-700">{t(session.title)}</h3>
                  <DocumentList documents={session.documents} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AboutPageLayout>
  );
}
