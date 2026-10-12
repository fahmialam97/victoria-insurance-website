import type { Locale } from "./i18n/locale";

const dateFormatters: Record<Locale, Intl.DateTimeFormat> = {
  id: new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" }),
  en: new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" }),
};

/** Format tanggal ISO (YYYY-MM-DD) menjadi "7 Juli 2025" / "7 July 2025". */
export function formatDate(iso: string, locale: Locale = "id"): string {
  return dateFormatters[locale].format(new Date(`${iso}T00:00:00+07:00`));
}

export function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export function isPdf(href: string): boolean {
  return /\.pdf($|\?)/i.test(href);
}
