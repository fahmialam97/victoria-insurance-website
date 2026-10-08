import { ArrowUpRight } from "lucide-react";
import { groupCompanies } from "@/data/site";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

/** "www.victoriabank.co.id/" → "victoriabank.co.id" untuk tampilan. */
const displayDomain = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Grup Finansial Victoria; kartu teks + monogram inisial karena logo tiap perusahaan belum tersedia. */
export function GroupSection() {
  return (
    <section aria-labelledby="grup-heading" className="pb-16 sm:pb-20">
      <Container>
        <SectionHeader id="grup-heading" eyebrow="Victoria Group" title="Grup Finansial Victoria" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {groupCompanies.map((company) => (
            <li key={company.href}>
              <a
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-card-hover"
              >
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-4 top-4 size-5 text-muted transition-colors group-hover:text-brand-600"
                />
                <span
                  aria-hidden="true"
                  className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold tracking-tight text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
                >
                  {company.monogram}
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {company.field}
                </span>
                <span className="mt-1 pb-4 text-base font-semibold leading-snug text-ink-900 group-hover:text-brand-600">
                  {company.label}
                </span>
                <span className="mt-auto border-t border-line pt-3 text-sm text-muted">
                  {displayDomain(company.href)}
                </span>
                <span className="sr-only"> (terbuka di tab baru)</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
