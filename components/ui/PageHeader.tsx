import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./Container";

type PageHeaderProps = {
  title: string;
  description?: ReactNode;
  /** Item breadcrumb di antara "Beranda" dan judul halaman. */
  trail?: string[];
  children?: ReactNode;
};

export function PageHeader({ title, description, trail = [], children }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-12 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-600">
                Beranda
              </Link>
            </li>
            {[...trail, title].map((item, i, all) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span
                  aria-current={i === all.length - 1 ? "page" : undefined}
                  className={i === all.length - 1 ? "font-medium text-navy-900" : undefined}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{description}</p>}
        {children}
      </Container>
    </section>
  );
}
