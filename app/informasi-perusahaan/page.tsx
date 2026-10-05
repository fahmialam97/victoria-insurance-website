import type { Metadata } from "next";
import { ChevronRight, FileText, Landmark, Megaphone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SmartLink } from "@/components/ui/SmartLink";
import { companyInfoGroups } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Informasi Perusahaan",
  description: "Pengumuman, tata kelola perusahaan, dan hubungan investor PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/informasi-perusahaan" },
};

const groupIcons: Record<string, LucideIcon> = {
  Pengumuman: Megaphone,
  "Tata Kelola Perusahaan": Landmark,
  "Hubungan Investor": FileText,
};

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function CompanyInfoPage() {
  return (
    <>
      <PageHeader
        title="Informasi Perusahaan"
        description="Pengumuman, tata kelola perusahaan, dan informasi bagi investor PT Victoria Insurance, Tbk."
      />
      <section aria-label="Kategori informasi perusahaan" className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          {companyInfoGroups.map((group) => {
            const Icon = groupIcons[group.title] ?? FileText;
            return (
              <section
                key={group.title}
                aria-labelledby={`grup-${slug(group.title)}`}
                className="rounded-2xl border border-line bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h2 id={`grup-${slug(group.title)}`} className="text-lg font-bold text-navy-900">
                    {group.title}
                  </h2>
                </div>
                <ul className="mt-4 divide-y divide-line">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink
                        href={link.href}
                        className="group flex items-start gap-3 py-3 text-navy-800 hover:text-brand-600"
                      >
                        <span className="flex-1">
                          <span className="block text-sm font-medium">{link.label}</span>
                          {link.description && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted">{link.description}</span>
                          )}
                        </span>
                        <ChevronRight
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600"
                        />
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </Container>
      </section>
    </>
  );
}
