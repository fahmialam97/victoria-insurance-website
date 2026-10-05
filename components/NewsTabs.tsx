import Link from "next/link";
import { articlesHref } from "@/data/articles";
import { csrHref } from "@/data/csr";

const tabs = [
  { label: "Artikel", href: articlesHref },
  { label: "CSR", href: csrHref },
];

/** Tab navigasi antar-halaman Berita, dipasang di PageHeader. */
export function NewsTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Menu berita" className="mt-6">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const current = tab.href === active;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  current
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-line bg-white text-navy-800 hover:border-brand-600 hover:text-brand-600"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
