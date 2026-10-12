import { en } from "./dictionary.en";
import type { Locale } from "./locale";

export type Vars = Record<string, string | number>;
export type Translate = (text: string, vars?: Vars) => string;

const warned = new Set<string>();

/**
 * Penerjemah teks pendek (label, judul, tombol). Kunci = teks Indonesia apa adanya, sehingga kode tetap terbaca
 * dalam Bahasa Indonesia; versi Inggris diambil dari kamus. Placeholder `{nama}` diisi dari `vars`.
 * Kunci yang belum ada di kamus tetap tampil dalam Bahasa Indonesia (dan diperingatkan saat development).
 */
export function translator(locale: Locale): Translate {
  return (text, vars) => {
    let out = text;
    if (locale === "en") {
      const hit = en[text];
      if (hit !== undefined) out = hit;
      else if (process.env.NODE_ENV === "development" && !warned.has(text)) {
        warned.add(text);
        console.warn(`[i18n] Belum ada terjemahan: ${JSON.stringify(text)}`);
      }
    }
    if (vars) for (const [key, value] of Object.entries(vars)) out = out.replaceAll(`{${key}}`, String(value));
    return out;
  };
}
