"use client";

import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useId, useRef, useState, type ComponentType, type SVGProps } from "react";
import { FlagIndonesia, FlagUnitedKingdom } from "./ui/Flags";

type Language = {
  code: string;
  label: string;
  Flag: ComponentType<SVGProps<SVGSVGElement>>;
  /** Versi bahasa belum siap: tampil di menu tapi tidak bisa dipilih. */
  comingSoon?: boolean;
};

const languages: Language[] = [
  { code: "ID", label: "Bahasa Indonesia", Flag: FlagIndonesia },
  { code: "EN", label: "English", Flag: FlagUnitedKingdom, comingSoon: true },
];

const flagClass = "h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-ink-800/10";

/** Daftar pilihan bahasa; bahasa Inggris belum tersedia sehingga website tetap Bahasa Indonesia. */
function LanguageOptions({ onPick }: { onPick: () => void }) {
  return (
    <ul className="space-y-0.5">
      {languages.map(({ code, label, Flag, comingSoon }) => {
        const current = code === "ID";
        return (
          <li key={code}>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={current}
              aria-disabled={comingSoon || undefined}
              onClick={onPick}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                current ? "font-semibold text-ink-900" : "text-ink-800"
              } ${comingSoon ? "cursor-not-allowed" : "hover:bg-surface"}`}
            >
              <Flag className={`${flagClass} ${comingSoon ? "opacity-60" : ""}`} />
              <span className={`flex-1 ${comingSoon ? "text-muted" : ""}`}>{label}</span>
              {comingSoon ? (
                <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-semibold text-muted">Segera hadir</span>
              ) : (
                current && <Check aria-hidden="true" className="size-4 text-brand-600" />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

/** Pemilih bahasa di header (≥ md); di bawahnya tampil di menu mobile. */
export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

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
        aria-label="Pilih bahasa (saat ini Bahasa Indonesia)"
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-white px-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-600/40 hover:text-brand-600"
      >
        <Globe aria-hidden="true" className="size-[18px]" />
        ID
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
  return (
    <div className="border-t border-line pt-4">
      <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
        <Globe aria-hidden="true" className="size-4" />
        Bahasa
      </p>
      <LanguageOptions onPick={() => {}} />
    </div>
  );
}
