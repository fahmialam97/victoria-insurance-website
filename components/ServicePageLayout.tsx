import type { ReactNode } from "react";
import { services } from "@/data/services";
import { Container } from "./ui/Container";
import { PageHeader } from "./ui/PageHeader";
import { SmartLink } from "./ui/SmartLink";

type ServicePageLayoutProps = {
  title: string;
  description?: ReactNode;
  /** Href layanan aktif untuk menandai menu samping. */
  activeHref: string;
  children: ReactNode;
};

/** Kerangka halaman layanan: header, menu layanan di samping, dan konten. */
export function ServicePageLayout({ title, description, activeHref, children }: ServicePageLayoutProps) {
  return (
    <>
      <PageHeader title={title} description={description} trail={["Layanan"]} />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="order-last lg:order-first">
            <nav aria-label="Menu layanan" className="rounded-2xl border border-line bg-surface p-3 lg:sticky lg:top-24">
              <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-muted">Layanan</p>
              <ul>
                {services.map((service) => {
                  const active = service.href === activeHref;
                  return (
                    <li key={service.href}>
                      <SmartLink
                        href={service.href}
                        aria-current={active ? "page" : undefined}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                          active ? "bg-white text-brand-600 shadow-card" : "text-navy-800 hover:bg-white hover:text-brand-600"
                        }`}
                      >
                        {service.name}
                      </SmartLink>
                    </li>
                  );
                })}
                <li>
                  <SmartLink
                    href="/pengaduan"
                    aria-current={activeHref === "/pengaduan" ? "page" : undefined}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-navy-800 transition-colors hover:bg-white hover:text-brand-600"
                  >
                    Form Pengaduan
                  </SmartLink>
                </li>
              </ul>
            </nav>
          </aside>
          <div className="min-w-0">{children}</div>
        </Container>
      </section>
    </>
  );
}
