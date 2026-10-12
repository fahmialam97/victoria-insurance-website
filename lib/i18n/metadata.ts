import type { Metadata } from "next";
import { localizeHref, type Locale } from "./locale";
import { getI18n } from "./server";
import type { Translate } from "./translate";

/** Canonical sesuai bahasa + tautan hreflang ke pasangan halaman Indonesia/Inggris. */
export function pageAlternates(href: string, locale: Locale): Metadata["alternates"] {
  return {
    canonical: localizeHref(href, locale),
    languages: { id: href, en: localizeHref(href, "en") },
  };
}

/**
 * Pembuat generateMetadata untuk halaman statis: judul & deskripsi ditulis dalam Bahasa Indonesia
 * (diterjemahkan lewat kamus), canonical mengikuti bahasa halaman.
 */
export function localizedMetadata(build: (t: Translate) => { title: string; description?: string; href: string }) {
  return async function generateMetadata(): Promise<Metadata> {
    const { locale, t } = await getI18n();
    const { title, description, href } = build(t);
    return { title, description, alternates: pageAlternates(href, locale) };
  };
}
