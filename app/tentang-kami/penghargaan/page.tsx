import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, awards } from "@/data/company";

export const metadata: Metadata = {
  title: "Penghargaan",
  description: "Penghargaan yang diterima PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.awards.href },
};

export default function AwardsPage() {
  return (
    <AboutPageLayout
      title="Penghargaan"
      description="Penghargaan yang diterima Victoria Insurance."
      activeHref={aboutLinks.awards.href}
    >
      <section aria-labelledby="galeri-penghargaan">
        <h2 id="galeri-penghargaan" className="sr-only">
          Galeri penghargaan
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
                  sizes="(min-width: 1280px) 900px, 100vw"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-line px-5 py-3 text-sm font-semibold text-navy-800">
                  Penghargaan {year}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="penghargaan-2015-2018" className="mt-10">
        <h2 id="penghargaan-2015-2018" className="text-xl font-bold text-navy-900">
          Penghargaan 2015–2018
        </h2>
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {awards.highlights.map((award) => (
            <li key={award.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Award aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy-900">{award.title}</h3>
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
