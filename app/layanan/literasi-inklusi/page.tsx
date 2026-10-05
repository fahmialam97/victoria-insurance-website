import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { literacy } from "@/data/layanan";

export const metadata: Metadata = {
  title: "Literasi & Inklusi",
  description: "Arsip kegiatan literasi dan inklusi keuangan PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/layanan/literasi-inklusi" },
};

export default function LiteracyPage() {
  const { image } = literacy;

  return (
    <ServicePageLayout
      title="Literasi & Inklusi"
      description="Arsip kegiatan literasi dan inklusi keuangan tahun 2023–2026."
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
      <nav aria-label="Pilih tahun" className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {literacy.years.map(({ year }) => (
            <li key={year}>
              <a
                href={`#tahun-${year}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-800 hover:border-brand-600 hover:text-brand-600"
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
            <h2 id={`tahun-${year}-heading`} className="text-xl font-bold text-navy-900">
              Literasi &amp; Inklusi Keuangan Tahun {year}
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {sessions.map((session) => (
                <div key={session.title}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-700">{session.title}</h3>
                  <DocumentList documents={session.documents} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </ServicePageLayout>
  );
}
