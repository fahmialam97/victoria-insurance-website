import type { Metadata } from "next";
import { BriefcaseBusiness } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks } from "@/data/company";

export const metadata: Metadata = {
  title: "Karir",
  description: "Informasi karir di PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.career.href },
};

// Halaman /karir/ resmi saat ini tidak memuat lowongan; tampilkan placeholder
export default function CareerPage() {
  return (
    <AboutPageLayout title="Karir" activeHref={aboutLinks.career.href}>
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card">
          <BriefcaseBusiness aria-hidden="true" className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-navy-900">Belum ada informasi lowongan</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Informasi lowongan kerja akan ditampilkan di halaman ini saat tersedia.
        </p>
      </div>
    </AboutPageLayout>
  );
}
