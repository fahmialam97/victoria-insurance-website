import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { DocumentList } from "@/components/ui/DocumentList";
import { workshop } from "@/data/layanan";

export const metadata: Metadata = {
  title: "Bengkel Rekanan",
  description: "Daftar bengkel rekanan PT Victoria Insurance, Tbk wilayah Jabodetabek dan Non Jabodetabek.",
  alternates: { canonical: "/layanan/bengkel-rekanan" },
};

export default function WorkshopPage() {
  const { image, contact } = workshop;

  return (
    <ServicePageLayout
      title="Bengkel Rekanan"
      description="Daftar bengkel rekanan wilayah Jabodetabek dan Non Jabodetabek."
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
            <h2 id="daftar-bengkel" className="text-xl font-bold text-navy-900">
              {workshop.heading}
            </h2>
            <div className="mt-4">
              <DocumentList documents={workshop.documents} />
            </div>
          </section>

          <section aria-labelledby="info-klaim" className="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
            <h2 id="info-klaim" className="text-lg font-bold">
              Informasi
            </h2>
            <p className="mt-1 text-sm text-white/75">Untuk informasi, hubungi {contact.label}</p>
            <a
              href={`tel:${contact.tel}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-brand-50"
            >
              <Phone aria-hidden="true" className="size-4 text-brand-600" />
              {contact.name} ({contact.phone})
            </a>
          </section>
        </div>
      </div>
    </ServicePageLayout>
  );
}
