"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/LocaleProvider";

/** Salin teks; fallback execCommand untuk browser/konteks tanpa Clipboard API (mis. http non-localhost). */
async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.className = "fixed -left-[9999px]";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  }
}

/** Nomor referensi hasil kirim form beserta tombol salin. */
export function ReferenceId({ value }: { value: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    if (await copyText(value)) setCopied(true);
  }

  return (
    <div className="mt-4 inline-flex items-center gap-1 rounded-lg bg-white py-1 pl-4 pr-1">
      <span className="font-mono text-base font-semibold text-ink-900">{value}</span>
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
          copied ? "text-emerald-700" : "text-muted hover:bg-surface hover:text-brand-600"
        }`}
      >
        {copied ? <Check aria-hidden="true" className="size-4" /> : <Copy aria-hidden="true" className="size-4" />}
        {copied ? t("Tersalin") : t("Salin")}
        <span className="sr-only"> {t("nomor referensi")}</span>
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? t("Nomor referensi tersalin") : ""}
      </span>
    </div>
  );
}
