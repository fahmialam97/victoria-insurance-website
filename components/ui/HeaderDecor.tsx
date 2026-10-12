import Image from "next/image";
import { BrandFlower } from "./BrandFlower";

/**
 * Identitas Victoria di header halaman: pattern emblem bunga Victoria versi subtle (abu-abu terang) yang memudar ke kiri,
 * plus ornamen bunga merah samar di kanan. Induknya wajib `relative isolate overflow-hidden`.
 */
export function HeaderDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          maskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
        }}
      >
        {/* Salinan ter-crop tanpa bingkai; opacity rendah agar "terasa ada", bukan dominan */}
        <Image
          src="/images/official/pattern-victoria-emblem-subtle.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 mix-blend-multiply"
        />
      </div>
      <BrandFlower className="right-[6%] top-1/2 hidden size-36 -translate-y-1/2 text-brand-600 opacity-[0.06] sm:block lg:size-40" />
    </div>
  );
}
