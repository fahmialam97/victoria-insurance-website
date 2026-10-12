"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { localizeHref } from "@/lib/i18n/locale";

/** next/link yang otomatis menambahkan prefix /en pada halaman versi Inggris. Href ditulis dalam path Indonesia. */
export function Link({ href, ...rest }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  return <NextLink href={typeof href === "string" ? localizeHref(href, locale) : href} {...rest} />;
}

export default Link;
