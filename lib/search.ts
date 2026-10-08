/** Entri indeks pencarian; disusun di server (lib/searchIndex.ts) lalu dikirim ke navbar sebagai prop. */
export type SearchEntry = {
  title: string;
  href: string;
  category: string;
  description?: string;
};

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

/** Semua kata kueri harus ada; judul yang cocok diurutkan lebih dulu. */
export function searchEntries(entries: SearchEntry[], query: string, limit = 8): SearchEntry[] {
  const q = normalize(query.trim());
  if (!q) return [];
  const words = q.split(/\s+/);

  return entries
    .map((entry, index) => {
      const title = normalize(entry.title);
      const haystack = `${title} ${normalize(entry.category)} ${normalize(entry.description ?? "")}`;
      if (!words.every((w) => haystack.includes(w))) return null;
      const score = title.startsWith(q) ? 3 : words.every((w) => title.includes(w)) ? 2 : 1;
      return { entry, score, index };
    })
    .filter((r) => r !== null)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((r) => r.entry);
}
