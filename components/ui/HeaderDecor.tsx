import Image from "next/image";
import { BrandFlower } from "./BrandFlower";

/** Salinan ter-crop tanpa bingkai; opacity rendah agar "terasa ada", bukan dominan. */
const patterns = {
  // Emblem bunga Victoria versi subtle (abu-abu terang): default semua header
  emblem: { src: "/images/official/pattern-victoria-emblem-subtle.png", className: "opacity-30" },
  // Ikon asuransi sepia (mobil, rumah, kontainer, payung): header halaman produk
  product: { src: "/images/official/pattern-insurance-sepia.png", className: "opacity-20" },
} as const;

/**
 * Identitas Victoria di header halaman: pattern yang memudar ke kiri, plus ornamen bunga merah samar di kanan.
 * Induknya wajib `relative isolate overflow-hidden`.
 */
export function HeaderDecor({ pattern = "emblem" }: { pattern?: keyof typeof patterns }) {
  const { src, className } = patterns[pattern];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
        }}
      >
        <Image src={src} alt="" fill sizes="100vw" className={`object-cover mix-blend-multiply ${className}`} />
      </div>
      <BrandFlower className="right-[6%] top-1/2 hidden size-36 -translate-y-1/2 text-brand-600 opacity-[0.06] sm:block lg:size-40" />
    </div>
  );
}
