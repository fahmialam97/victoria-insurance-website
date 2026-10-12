"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, type ReactNode } from "react";
import { splitLocale, type Locale } from "@/lib/i18n/locale";
import { translator } from "@/lib/i18n/translate";

const LocaleContext = createContext<Locale>("id");

/** Menyediakan bahasa halaman untuk Client Component (Server Component memakai getI18n()). */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

/** Bahasa + penerjemah untuk Client Component: `const { locale, t } = useI18n()`. */
export function useI18n() {
  const locale = useLocale();
  const t = useMemo(() => translator(locale), [locale]);
  return { locale, t };
}

/** Pathname tanpa prefix /en, agar pencocokan menu aktif cukup memakai path versi Indonesia. */
export function usePagePath() {
  return splitLocale(usePathname()).path;
}
