import type { Metadata } from "next";
import Image from "next/image";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, profile } from "@/data/company";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description: "Sejarah dan peristiwa penting PT Victoria Insurance, Tbk sejak 1978.",
  alternates: { canonical: aboutLinks.profile.href },
};

export default function ProfilePage() {
  const { corporateStructure } = profile;

  return (
    <AboutPageLayout
      title="Profil Perusahaan"
      description="Perjalanan PT Victoria Insurance, Tbk sejak 1978."
      activeHref={aboutLinks.profile.href}
    >
      <section aria-labelledby="peristiwa-penting" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <h2 id="peristiwa-penting" className="text-xl font-bold text-navy-900">
          Peristiwa Penting
        </h2>
        <div className="mt-4 space-y-4 leading-relaxed text-navy-800">
          {profile.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      <section aria-labelledby="perjalanan" className="mt-10">
        <h2 id="perjalanan" className="text-xl font-bold text-navy-900">
          Perjalanan Perusahaan
        </h2>
        <ol className="relative mt-6 space-y-6 border-l-2 border-brand-200 pl-6 sm:pl-8">
          {profile.timeline.map((item) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[33px] top-1 size-4 rounded-full border-4 border-white bg-brand-600 ring-2 ring-brand-100 sm:-left-[41px]"
              />
              <p className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-brand-600">{item.year}</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted">{item.label}</span>
              </p>
              <p className="mt-2 rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-navy-800 shadow-card">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="struktur-korporasi" className="mt-10">
        <h2 id="struktur-korporasi" className="text-xl font-bold text-navy-900">
          Struktur Korporasi
        </h2>
        <div className="mt-4 border-2 border-navy-700 bg-white shadow-card">
          <Image
            src={corporateStructure.src}
            alt={corporateStructure.alt}
            width={corporateStructure.width}
            height={corporateStructure.height}
            sizes="(min-width: 1280px) 900px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </section>
    </AboutPageLayout>
  );
}
