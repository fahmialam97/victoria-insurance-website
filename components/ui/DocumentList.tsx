import { FileText } from "lucide-react";
import type { Doc } from "@/data/layanan";

/** Daftar dokumen unduhan (PDF/gambar) dengan gaya seragam. */
export function DocumentList({ documents }: { documents: Doc[] }) {
  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-white">
      {documents.map((doc) => {
        const ext = doc.url.split(".").pop()?.toUpperCase().slice(0, 4) ?? "";
        return (
          <li key={doc.url}>
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 text-sm text-navy-800 hover:text-brand-600"
            >
              <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
              <span className="flex-1">{doc.title}</span>
              <span className="text-xs font-semibold text-brand-600">{ext === "JPEG" ? "JPG" : ext}</span>
              <span className="sr-only"> (terbuka di tab baru)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
