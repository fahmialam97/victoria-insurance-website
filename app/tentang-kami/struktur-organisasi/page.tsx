import type { Metadata } from "next";
import Image from "next/image";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, orgStructure } from "@/data/company";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
  description: "Struktur organisasi Dewan Komisaris dan Direksi PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.structure.href },
};

export default function OrgStructurePage() {
  return (
    <AboutPageLayout
      title="Struktur Organisasi"
      description="PT. Victoria Insurance, Tbk"
      activeHref={aboutLinks.structure.href}
    >
      <div className="space-y-8">
        {orgStructure.map(({ title, image }) => (
          <section key={title} aria-label={`Struktur ${title}`}>
            <h2 className="text-xl font-bold text-navy-900">{title}</h2>
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
                sizes="(min-width: 1280px) 900px, 100vw"
                className="h-auto w-full"
              />
              <span className="sr-only"> (buka gambar ukuran penuh di tab baru)</span>
            </a>
            <p className="mt-2 text-xs text-muted">Klik bagan untuk melihat ukuran penuh.</p>
          </section>
        ))}
      </div>
    </AboutPageLayout>
  );
}
