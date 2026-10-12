/**
 * Arahkan pengguna ke isian bermasalah paling atas (urutan DOM) setelah validasi gagal.
 * Input file disembunyikan (sr-only), jadi yang di-scroll adalah tile/label pembungkusnya.
 */
export function focusFirstError(form: HTMLFormElement | null) {
  const field = form?.querySelector<HTMLElement>('[aria-invalid="true"]');
  if (!field) return;
  const target = field.closest("label") ?? field;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ block: "center", behavior: smooth ? "smooth" : "auto" });
  field.focus({ preventScroll: true });
}
