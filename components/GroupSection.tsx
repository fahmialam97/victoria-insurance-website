import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { groupCompanies } from "@/data/site";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

/** "www.victoriabank.co.id/" → "victoriabank.co.id" untuk tampilan. */
const displayDomain = (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Grup Finansial Victoria: logo → bidang usaha → nama → domain. */
export function GroupSection() {
  return (
    <section aria-labelledby="grup-heading" className="pb-16 sm:pb-20">
      <Container>
        <SectionHeader id="grup-heading" title="Grup Finansial Victoria" />
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
                {/* Area logo setinggi tetap; logo dipaskan (contain) rata kiri karena rasio tiap logo berbeda */}
                <span className="relative block h-9 w-full pr-7">
                  <Image
                    src={company.logo.src}
                    alt=""
                    width={company.logo.width}
                    height={company.logo.height}
                    className="h-full w-auto max-w-full object-contain object-left"
                  />
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
