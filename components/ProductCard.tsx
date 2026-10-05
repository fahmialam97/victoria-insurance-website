import { FileText } from "lucide-react";
import type { Product } from "@/data/products";
import { productIcons } from "./ui/productIcons";
import { SmartLink } from "./ui/SmartLink";

export function ProductCard({ product }: { product: Product & { summary: string } }) {
  const Icon = productIcons[product.icon];
  const riplay = product.documents[0];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">{product.name}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{product.summary}</p>

      {riplay && (
        <div className="mt-auto pt-6">
          <SmartLink
            href={riplay.url}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs font-semibold text-navy-800 transition-colors hover:border-brand-600 hover:bg-brand-600 hover:text-white"
          >
            <FileText aria-hidden="true" className="size-4" />
            RIPLAY<span className="sr-only"> {product.name}</span>
          </SmartLink>
        </div>
      )}
    </article>
  );
}
