import type { ReactNode } from "react";
import { Eye, Goal, type LucideIcon } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, getCompanyContent } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Visi dan Misi"),
  description: t("Visi dan misi PT Victoria Insurance, Tbk."),
  href: aboutLinks.vision.href,
}));

function StatementCard({ id, label, icon: Icon, children }: { id: string; label: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-center gap-4">
        <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Icon aria-hidden="true" className="size-8" />
        </span>
        <span aria-hidden="true" className="h-px w-12 bg-brand-600" />
        <h2 id={id} className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          {label}
        </h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default async function VisionMissionPage() {
  const { locale, t } = await getI18n();
  const { visionMission } = getCompanyContent(locale);

  return (
    <AboutPageLayout title={t("Visi dan Misi")} activeHref={aboutLinks.vision.href}>
      <div className="grid gap-6 md:grid-cols-2">
        <StatementCard id="visi" label={t("Visi")} icon={Eye}>
          <p className="text-xl font-medium leading-relaxed text-ink-900">{visionMission.vision}</p>
        </StatementCard>

        <StatementCard id="misi" label={t("Misi")} icon={Goal}>
          <ul className="space-y-4">
            {visionMission.missions.map((mission) => (
              <li key={mission} className="flex gap-3 text-base leading-relaxed text-ink-800">
                <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-brand-600" />
                {mission}
              </li>
            ))}
          </ul>
        </StatementCard>
      </div>
    </AboutPageLayout>
  );
}
