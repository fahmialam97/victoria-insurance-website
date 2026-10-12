"use client";

import type { ComponentProps, ReactNode } from "react";
import { useI18n } from "@/components/LocaleProvider";
import { isExternal, isPdf } from "@/lib/format";
import Link from "./Link";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  children: ReactNode;
};

/** Internal pakai next/link (otomatis /en di versi Inggris); PDF dibuka di tab baru dengan label pembaca layar. */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const { t } = useI18n();

  if (!isExternal(href)) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (isPdf(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> {t("(PDF, terbuka di tab baru)")}</span>
      </a>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
