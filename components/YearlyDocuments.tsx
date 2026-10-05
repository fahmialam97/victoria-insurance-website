import type { YearDocs } from "@/data/companyReports";
import { DocumentList } from "./ui/DocumentList";

/** Dokumen dikelompokkan per tahun, dengan tombol lompat ke tahun. */
export function YearlyDocuments({ groups, idPrefix }: { groups: YearDocs[]; idPrefix: string }) {
  return (
    <>
      <nav aria-label="Pilih tahun">
        <ul className="flex flex-wrap gap-2">
          {groups.map(({ year }) => (
            <li key={year}>
              <a
                href={`#${idPrefix}-${year}`}
                className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-800 hover:border-brand-600 hover:text-brand-600"
              >
                {year}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 space-y-6">
        {groups.map(({ year, documents }) => (
          <section
            key={year}
            id={`${idPrefix}-${year}`}
            aria-labelledby={`${idPrefix}-${year}-heading`}
            className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-card"
          >
            <h2 id={`${idPrefix}-${year}-heading`} className="flex items-center justify-between gap-3 text-xl font-bold text-navy-900">
              {year}
              <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted">
                {documents.length} dokumen
              </span>
            </h2>
            <div className="mt-4">
              <DocumentList documents={documents} />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
