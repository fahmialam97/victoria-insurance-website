import { ArrowRight } from "lucide-react";
import { SmartLink } from "./SmartLink";

type SectionHeaderProps = {
  id: string;
  title: string;
  /** Label kecil merah di atas judul; menggantikan garis aksen untuk section yang perlu lebih menonjol. */
  eyebrow?: string;
  description?: string;
  action?: { label: string; href: string; ariaLabel?: string };
};

export function SectionHeader({ id, title, eyebrow, description, action }: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-2 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
            <span aria-hidden="true" className="h-1 w-8 rounded-full bg-brand-600" />
            {eyebrow}
          </p>
        ) : (
          <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-brand-600" />
        )}
        <h2 id={id} className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-2 text-base leading-relaxed text-muted">{description}</p>}
      </div>
      {action && (
        <SmartLink
          href={action.href}
          aria-label={action.ariaLabel}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          {action.label}
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </SmartLink>
      )}
    </div>
  );
}
