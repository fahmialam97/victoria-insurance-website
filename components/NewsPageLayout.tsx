import type { ReactNode } from "react";
import { newsMenuLinks } from "@/data/navigation";
import { SidebarPageLayout } from "./SidebarPageLayout";

type NewsPageLayoutProps = {
  title: string;
  description?: ReactNode;
  activeHref: string;
  children: ReactNode;
};

const newsMenu = [{ links: newsMenuLinks }];

/** Kerangka halaman Berita dengan menu Artikel & CSR di samping. */
export function NewsPageLayout({ title, description, activeHref, children }: NewsPageLayoutProps) {
  return (
    <SidebarPageLayout
      title={title}
      description={description}
      trail={["Berita"]}
      menuLabel="Berita"
      menu={newsMenu}
      activeHref={activeHref}
    >
      {children}
    </SidebarPageLayout>
  );
}
