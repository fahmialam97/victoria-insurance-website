import { ArrowRight, FileText } from "lucide-react";
import { productHref, type Product } from "@/data/products";
import { productIcons } from "./ui/productIcons";
import { SmartLink } from "./ui/SmartLink";

export function ProductCard({ product }: { product: Product & { summary: string } }) {
  const Icon = productIcons[product.icon];
  const riplay = product.documents[0];

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">
        {/* Link membentang ke seluruh kartu */}
        <SmartLink href={productHref(product)} className="after:absolute after:inset-0 after:rounded-2xl">
          {product.name}
        </SmartLink>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{product.summary}</p>

      <div className="mt-auto flex items-center justify-between pt-6">
        {riplay && (
          <SmartLink
            href={riplay.url}
            className="relative z-10 inline-flex items-center gap-1.5 rounded-md text-xs font-medium text-navy-700 hover:text-brand-600"
          >
            <FileText aria-hidden="true" className="size-4" />
            RIPLAY<span className="sr-only"> {product.name}</span>
          </SmartLink>
        )}
        <span
          aria-hidden="true"
          className="ml-auto inline-flex size-9 items-center justify-center rounded-full bg-surface text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowRight className="size-4" />
        </span>
      </div>
    </article>
  );
}
