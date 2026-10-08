import Image from "next/image";
import { BrandFlower } from "./BrandFlower";

/**
 * Identitas Victoria di header halaman: pattern ikon produk resmi yang sangat tipis (memudar ke kiri)
 * dan ornamen bunga samar di kanan. Induknya wajib `relative isolate overflow-hidden`.
 */
export function HeaderDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Diperbesar 8px ke tiap sisi agar bingkai abu-abu bawaan gambar terpotong */}
      <div
        className="absolute -top-2 -bottom-2 -left-2 -right-2"
        style={{
          maskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, #000 5%, transparent 60%)",
        }}
      >
        {/* Ornamen harus "terasa ada", bukan dominan */}
        <Image
          src="/images/official/pattern-product-icons.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-multiply"
        />
      </div>
      <BrandFlower className="right-[6%] top-1/2 hidden size-36 -translate-y-1/2 text-brand-600 opacity-[0.06] sm:block lg:size-40" />
    </div>
  );
}
