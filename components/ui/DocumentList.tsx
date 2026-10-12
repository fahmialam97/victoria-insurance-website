import { FileText } from "lucide-react";
import type { Doc } from "@/data/layanan";
import { docTitle } from "@/lib/i18n/docTitles";
import { getI18n } from "@/lib/i18n/server";

/** Daftar dokumen unduhan (PDF/gambar) dengan gaya seragam. Judul diterjemahkan lewat kamus; isi dokumen tetap aslinya. */
export async function DocumentList({ documents }: { documents: Doc[] }) {
  const { locale, t } = await getI18n();
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
              className="group flex items-center gap-3 px-4 py-3 text-sm text-ink-800 hover:text-brand-600"
            >
              <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
              <span className="flex-1">{docTitle(locale, doc.title)}</span>
              <span className="text-xs font-semibold text-brand-600">{ext === "JPEG" ? "JPG" : ext}</span>
              <span className="sr-only"> {t("(terbuka di tab baru)")}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
