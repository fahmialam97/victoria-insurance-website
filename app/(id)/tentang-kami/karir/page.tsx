import { BriefcaseBusiness } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Karir"),
  description: t("Informasi karir di PT Victoria Insurance, Tbk."),
  href: aboutLinks.career.href,
}));

// Halaman /karir/ resmi saat ini tidak memuat lowongan; tampilkan placeholder
export default async function CareerPage() {
  const { t } = await getI18n();
  return (
    <AboutPageLayout title={t("Karir")} activeHref={aboutLinks.career.href}>
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card">
          <BriefcaseBusiness aria-hidden="true" className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-ink-900">{t("Belum ada lowongan saat ini")}</h2>
      </div>
    </AboutPageLayout>
  );
}
