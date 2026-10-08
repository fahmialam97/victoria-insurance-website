import type { ReactNode } from "react";
import { claimMenuLinks } from "@/data/services";
import { SidebarPageLayout } from "./SidebarPageLayout";

type ClaimPageLayoutProps = {
  title: string;
  description?: ReactNode;
  /** Href halaman aktif untuk menandai menu samping. */
  activeHref: string;
  children: ReactNode;
};

const claimMenu = [{ links: claimMenuLinks }];

/** Kerangka halaman menu Klaim (Pengaduan Konsumen, Bengkel Rekanan, Klaim Asuransi) dengan menu samping. */
export function ClaimPageLayout({ title, description, activeHref, children }: ClaimPageLayoutProps) {
  return (
    <SidebarPageLayout
      title={title}
      description={description}
      trail={["Klaim"]}
      menuLabel="Klaim"
      menu={claimMenu}
      activeHref={activeHref}
    >
      {children}
    </SidebarPageLayout>
  );
}
