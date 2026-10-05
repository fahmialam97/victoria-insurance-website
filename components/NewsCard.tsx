import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { NewsItem } from "@/data/news";
import { formatDate } from "@/lib/format";
import { SmartLink } from "./ui/SmartLink";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      {item.image && (
        <div className="relative aspect-[3/2] overflow-hidden bg-surface">
          <Image
            src={item.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-muted">
          <p className="flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="size-4" />
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          {item.category && (
            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 font-semibold text-brand-700">{item.category}</span>
          )}
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-navy-900">
          <SmartLink href={item.href} className="after:absolute after:inset-0 group-hover:text-brand-600">
            {item.title}
          </SmartLink>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{item.summary}</p>
        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600"
        >
          Baca Selengkapnya
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
