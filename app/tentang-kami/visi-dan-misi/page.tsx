import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Eye, Goal, type LucideIcon } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, visionMission } from "@/data/company";

export const metadata: Metadata = {
  title: "Visi dan Misi",
  description: "Visi dan misi PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.vision.href },
};

function StatementCard({ id, label, icon: Icon, children }: { id: string; label: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <section
      aria-labelledby={id}
      className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      {/* Ornamen logo Victoria sebagai watermark */}
      <Image
        src="/images/official/site-icon-192.png"
        alt=""
        width={192}
        height={192}
        className="pointer-events-none absolute -bottom-10 -right-10 size-48 opacity-[0.1] select-none"
      />
      <div className="relative flex items-center gap-4">
        <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Icon aria-hidden="true" className="size-8" />
        </span>
        <span aria-hidden="true" className="h-px w-12 bg-brand-600" />
        <h2 id={id} className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          {label}
        </h2>
      </div>
      <div className="relative mt-6">{children}</div>
    </section>
  );
}

export default function VisionMissionPage() {
  return (
    <AboutPageLayout title="Visi dan Misi" activeHref={aboutLinks.vision.href}>
      <div className="grid gap-6 md:grid-cols-2">
        <StatementCard id="visi" label="Visi" icon={Eye}>
          <p className="text-xl font-medium leading-relaxed text-navy-900">{visionMission.vision}</p>
        </StatementCard>

        <StatementCard id="misi" label="Misi" icon={Goal}>
          <ul className="space-y-4">
            {visionMission.missions.map((mission) => (
              <li key={mission} className="flex gap-3 text-base leading-relaxed text-navy-800">
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
