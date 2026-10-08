"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Fade + slide ringan saat pindah halaman. Di-key dengan pathname agar animasi jalan di setiap
 * perpindahan (termasuk antar-subhalaman, mis. /tentang-kami → /tentang-kami/direksi);
 * header & footer di luar wrapper sehingga tetap diam. Lompat ke anchor (#…) tidak memicu animasi.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
