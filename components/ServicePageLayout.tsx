import type { ReactNode } from "react";
import { services } from "@/data/services";
import { SidebarPageLayout } from "./SidebarPageLayout";

type ServicePageLayoutProps = {
  title: string;
  description?: ReactNode;
  /** Href layanan aktif untuk menandai menu samping. */
  activeHref: string;
  children: ReactNode;
};

const serviceMenu = [
  {
    links: [
      ...services.map((service) => ({ label: service.name, href: service.href })),
      { label: "Form Pengaduan", href: "/pengaduan" },
    ],
  },
];

/** Kerangka halaman layanan dengan menu layanan di samping. */
export function ServicePageLayout({ title, description, activeHref, children }: ServicePageLayoutProps) {
  return (
    <SidebarPageLayout
      title={title}
      description={description}
      trail={["Layanan"]}
      menuLabel="Layanan"
      menu={serviceMenu}
      activeHref={activeHref}
    >
      {children}
    </SidebarPageLayout>
  );
}
