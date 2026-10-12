/** Bahasa website: Indonesia di alamat utama, Inggris di bawah /en/. Aman dipakai di server & client. */
export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const EN_PREFIX = "/en";

/** Path halaman internal (bukan file statis seperti gambar/PDF, bukan anchor/eksternal). */
const isPagePath = (href: string) =>
  href.startsWith("/") && !href.startsWith("//") && !/^\/(images|_next)\//.test(href) && !/\.[a-z0-9]+(?:[?#].*)?$/i.test(href);

/** "/produk/" → "/en/produk/" untuk bahasa Inggris; selain halaman internal dibiarkan apa adanya. */
export function localizeHref(href: string, locale: Locale): string {
  if (locale === "id" || !isPagePath(href) || href === EN_PREFIX || href.startsWith(`${EN_PREFIX}/`)) return href;
  return href === "/" ? `${EN_PREFIX}/` : `${EN_PREFIX}${href}`;
}

/** "/en/produk/" → { locale: "en", path: "/produk/" }; path selalu versi Indonesia (tanpa prefix). */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)) {
    return { locale: "en", path: pathname.slice(EN_PREFIX.length) || "/" };
  }
  return { locale: "id", path: pathname };
}

/** Pilih nilai sesuai bahasa. */
export const pick = <T,>(locale: Locale, values: { id: T; en: T }): T => values[locale];
