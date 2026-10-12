/** Bentuk "sebagian" dari data: teks boleh diganti, struktur & nilai lain (URL, ukuran gambar) tetap dari data asli. */
export type Overlay<T> = T extends string
  ? string
  : T extends number | boolean | null | undefined
    ? T
    : T extends readonly (infer U)[]
      ? readonly (Overlay<U> | undefined)[]
      : { [K in keyof T]?: Overlay<T[K]> };

/**
 * Menimpa teks data Indonesia dengan terjemahan: objek digabung per kunci, array per indeks
 * (elemen `undefined` = pakai aslinya). Dipakai untuk konten panjang versi Inggris (data/en/*).
 */
export function overlay<T>(base: T, patch: Overlay<NoInfer<T>> | undefined): T {
  if (patch === undefined) return base;
  if (Array.isArray(base)) {
    const items = patch as readonly unknown[];
    return base.map((item, i) => overlay(item, items[i] as never)) as T;
  }
  if (base !== null && typeof base === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [key, value] of Object.entries(patch as Record<string, unknown>)) {
      out[key] = overlay((base as Record<string, unknown>)[key], value as never);
    }
    return out as T;
  }
  return patch as T;
}
