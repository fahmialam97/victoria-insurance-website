import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isExternal, isPdf } from "@/lib/format";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  children: ReactNode;
};

/** Internal pakai next/link; PDF dibuka di tab baru dengan label pembaca layar. */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
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
        <span className="sr-only"> (PDF, terbuka di tab baru)</span>
      </a>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
