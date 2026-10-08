/** Ornamen bunga dari logo Victoria sebagai mask CSS; warna dari `color`/text-*, ukuran & posisi dari className. */
export function BrandFlower({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block bg-current ${className}`}
      style={{
        maskImage: "url(/images/official/site-icon-192.png)",
        WebkitMaskImage: "url(/images/official/site-icon-192.png)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
}
