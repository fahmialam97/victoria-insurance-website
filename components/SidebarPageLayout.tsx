import type { ReactNode } from "react";
import { Container } from "./ui/Container";
import { PageHeader } from "./ui/PageHeader";
import { SmartLink } from "./ui/SmartLink";

export type SidebarMenuGroup = { title?: string; links: { label: string; href: string }[] };

type SidebarPageLayoutProps = {
  title: string;
  description?: ReactNode;
  trail: string[];
  menuLabel: string;
  menu: SidebarMenuGroup[];
  /** Href halaman aktif untuk menandai menu samping. */
  activeHref: string;
  children: ReactNode;
};

/** Kerangka halaman bagian: header, menu samping, dan konten. */
export function SidebarPageLayout({ title, description, trail, menuLabel, menu, activeHref, children }: SidebarPageLayoutProps) {
  return (
    <>
      <PageHeader title={title} description={description} trail={trail} />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
          <aside className="order-last lg:order-first">
            <nav aria-label={`Menu ${menuLabel}`} className="rounded-2xl border border-line bg-surface p-3 lg:sticky lg:top-24">
              {menu.map((group, i) => (
                <div key={group.title ?? i} className={i > 0 ? "mt-3 border-t border-line pt-3" : undefined}>
                  <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                    {group.title ?? menuLabel}
                  </p>
                  <ul>
                    {group.links.map((link) => {
                      const active = link.href === activeHref;
                      return (
                        <li key={link.href}>
                          <SmartLink
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                              active ? "bg-white text-brand-600 shadow-card" : "text-navy-800 hover:bg-white hover:text-brand-600"
                            }`}
                          >
                            {link.label}
                          </SmartLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
          <div className="min-w-0">{children}</div>
        </Container>
      </section>
    </>
  );
}
