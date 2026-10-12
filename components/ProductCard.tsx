import Link from "@/components/ui/Link";
import { ArrowUpRight, FileText } from "lucide-react";
import { productHref, type Product } from "@/data/products";
import { productIcons } from "./ui/productIcons";
import { SmartLink } from "./ui/SmartLink";

export function ProductCard({ product }: { product: Product & { summary: string } }) {
  const Icon = productIcons[product.icon];
  const riplay = product.documents[0];
  const clickable = !!product.detail;

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card ${
        clickable
          ? "group transition duration-200 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-card-hover"
          : ""
      }`}
    >
      {clickable && (
        <span
          aria-hidden="true"
          className="absolute right-5 top-5 inline-flex size-9 items-center justify-center rounded-full bg-brand-600 text-white opacity-0 transition duration-200 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-5" />
        </span>
      )}
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">
        {clickable ? (
          // Stretched link: seluruh kartu bisa diklik, link RIPLAY tetap di atasnya
          <Link href={productHref(product)} className="after:absolute after:top-0 after:left-0 after:size-full group-hover:text-brand-600">
            {product.name}
          </Link>
        ) : (
          product.name
        )}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{product.summary}</p>

      {riplay && (
        <div className="mt-auto pt-6">
          <SmartLink
            href={riplay.url}
            className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-800 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <FileText aria-hidden="true" className="size-4" />
            RIPLAY<span className="sr-only"> {product.name}</span>
          </SmartLink>
        </div>
      )}
    </article>
  );
}
