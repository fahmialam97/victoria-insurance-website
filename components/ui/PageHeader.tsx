import Link from "@/components/ui/Link";
import type { ReactNode } from "react";
import { getI18n } from "@/lib/i18n/server";
import { Container } from "./Container";
import { HeaderDecor } from "./HeaderDecor";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
  /** Item breadcrumb di antara "Beranda" dan judul halaman (teks Indonesia, diterjemahkan di sini). */
  trail?: string[];
  children?: ReactNode;
};

/** 	itle & description dikirim halaman dalam bahasa yang sudah sesuai. */
export async function PageHeader({ title, description, trail = [], children }: PageHeaderProps) {
  const { t } = await getI18n();
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-surface">
      <HeaderDecor />
      <Container className="py-10">
        <nav aria-label="Breadcrumb" className="text-[14px] text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-600">
                {t("Beranda")}
              </Link>
            </li>
            {[...trail.map((item) => t(item)), title].map((item, i, all) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span
                  aria-current={i === all.length - 1 ? "page" : undefined}
                  className={i === all.length - 1 ? "font-medium text-ink-900" : undefined}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{description}</p>}
        {children}
      </Container>
    </section>
  );
}
