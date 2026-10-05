import type { ReactNode } from "react";
import { aboutMenu } from "@/data/company";
import { SidebarPageLayout } from "./SidebarPageLayout";

type AboutPageLayoutProps = {
  title: string;
  description?: ReactNode;
  activeHref: string;
  children: ReactNode;
};

/** Kerangka halaman Tentang Kami dengan menu perusahaan & manajemen di samping. */
export function AboutPageLayout({ title, description, activeHref, children }: AboutPageLayoutProps) {
  return (
    <SidebarPageLayout
      title={title}
      description={description}
      trail={["Tentang Kami"]}
      menuLabel="Tentang Kami"
      menu={aboutMenu}
      activeHref={activeHref}
    >
      {children}
    </SidebarPageLayout>
  );
}
