import { ArrowRight, Banknote, Car, FileText, HardHat, House, ShieldPlus, Ship, type LucideIcon } from "lucide-react";
import type { Product, ProductIcon } from "@/data/products";
import { SmartLink } from "./ui/SmartLink";

const icons: Record<ProductIcon, LucideIcon> = {
  property: House,
  vehicle: Car,
  accident: ShieldPlus,
  cargo: Ship,
  engineering: HardHat,
  money: Banknote,
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = icons[product.icon];

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-navy-900">
        {/* Link membentang ke seluruh kartu */}
        <SmartLink href={product.href} className="after:absolute after:inset-0 after:rounded-2xl">
          {product.name}
        </SmartLink>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{product.description}</p>

      <div className="mt-auto flex items-center justify-between pt-6">
        <SmartLink
          href={product.riplayUrl}
          className="relative z-10 inline-flex items-center gap-1.5 rounded-md text-xs font-medium text-navy-700 hover:text-brand-600"
        >
          <FileText aria-hidden="true" className="size-4" />
          RIPLAY<span className="sr-only"> {product.name}</span>
        </SmartLink>
        <span
          aria-hidden="true"
          className="inline-flex size-9 items-center justify-center rounded-full bg-surface text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white"
        >
          <ArrowRight className="size-4" />
        </span>
      </div>
    </article>
  );
}
