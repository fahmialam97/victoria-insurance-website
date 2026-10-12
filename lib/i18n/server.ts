import { lang } from "next/root-params";
import type { Locale } from "./locale";
import { translator } from "./translate";

/**
 * Bahasa halaman yang sedang dirender (Server Component saja). Halaman Inggris berada di bawah root layout
 * `app/[lang]` (lang = "en"); halaman Indonesia di `app/(id)` tanpa parameter sehingga nilainya undefined.
 */
export async function getLocale(): Promise<Locale> {
  return (await lang()) === "en" ? "en" : "id";
}

/** Bahasa + penerjemah untuk Server Component: `const { locale, t } = await getI18n()`. */
export async function getI18n() {
  const locale = await getLocale();
  return { locale, t: translator(locale) };
}
