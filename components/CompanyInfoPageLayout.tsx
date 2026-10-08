import type { ReactNode } from "react";
import { companyInfoGroups } from "@/data/companyInfo";
import { SidebarPageLayout } from "./SidebarPageLayout";

type CompanyInfoPageLayoutProps = {
  title: string;
  description?: ReactNode;
  activeHref: string;
  children: ReactNode;
};

/** Kerangka halaman Informasi Perusahaan dengan menu arsip RUPS, tata kelola, dan investor. */
export function CompanyInfoPageLayout({ title, description, activeHref, children }: CompanyInfoPageLayoutProps) {
  return (
    <SidebarPageLayout
      title={title}
      description={description}
      trail={["Informasi Perusahaan"]}
      menuLabel="Informasi Perusahaan"
      menu={companyInfoGroups}
      untitledAsStandalone
      activeHref={activeHref}
    >
      {children}
    </SidebarPageLayout>
  );
}
