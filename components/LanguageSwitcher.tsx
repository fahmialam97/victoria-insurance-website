"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useId, useRef, useState, type ComponentType, type SVGProps } from "react";
import { localizeHref, type Locale } from "@/lib/i18n/locale";
import { useI18n, usePagePath } from "./LocaleProvider";
import { FlagIndonesia, FlagUnitedKingdom } from "./ui/Flags";

type Language = {
  code: Locale;
  label: string;
  Flag: ComponentType<SVGProps<SVGSVGElement>>;
};

const languages: Language[] = [
  { code: "id", label: "Bahasa Indonesia", Flag: FlagIndonesia },
  { code: "en", label: "English", Flag: FlagUnitedKingdom },
];

const flagClass = "h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-ink-800/10";

/**
 * Daftar pilihan bahasa: tiap pilihan menuju halaman yang sama dalam bahasa tersebut (/produk/ ↔ /en/produk/).
 * Memakai <a> biasa karena versi Indonesia & Inggris memakai root layout berbeda (pindah = muat ulang penuh).
 */
function LanguageOptions({ onPick }: { onPick: () => void }) {
  const { locale } = useI18n();
  const path = usePagePath();
  return (
    <ul className="space-y-0.5">
      {languages.map(({ code, label, Flag }) => {
        const current = code === locale;
        return (
          <li key={code}>
            <a
              href={localizeHref(path, code)}
              hrefLang={code}
              lang={code}
              role="menuitemradio"
              aria-checked={current}
              onClick={(e) => {
                if (current) e.preventDefault();
                onPick();
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface ${
                current ? "font-semibold text-ink-900" : "text-ink-800"
              }`}
            >
              <Flag className={flagClass} />
              <span className="flex-1">{label}</span>
              {current && <Check aria-hidden="true" className="size-4 text-brand-600" />}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/** Pemilih bahasa di header (≥ md); di bawahnya tampil di menu mobile. */
export function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const currentLabel = languages.find((l) => l.code === locale)!.label;

  // Tutup saat klik di luar atau tekan Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        aria-label={t("Pilih bahasa (saat ini {bahasa})", { bahasa: currentLabel })}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:text-brand-600"
      >
        <Globe aria-hidden="true" className="size-[18px]" />
        {locale.toUpperCase()}
        <ChevronDown
          aria-hidden="true"
          className={`size-4 transition-transform duration-200 ease-nav ${open ? "rotate-180" : ""}`}
        />
      </button>
      {/* Fade + translateY ringan, sama dengan dropdown menu */}
      <div
        id={menuId}
        role="menu"
        inert={!open}
        className={`absolute right-0 top-full z-10 mt-2 w-64 rounded-xl border border-line bg-white p-2 shadow-card-hover transition duration-[180ms] ease-nav motion-reduce:transition-none ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <LanguageOptions onPick={() => setOpen(false)} />
      </div>
    </div>
  );
}

/** Versi menu mobile: pilihan bahasa langsung tampil di bagian bawah menu. */
export function MobileLanguageOptions() {
  const { t } = useI18n();
  return (
    <div className="border-t border-line pt-4">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
        <Globe aria-hidden="true" className="size-4" />
        {t("Bahasa")}
      </p>
      <LanguageOptions onPick={() => {}} />
    </div>
  );
}
