// Membuat/menyegarkan route versi Inggris (app/[lang]/...) sebagai re-export tipis dari halaman Indonesia (app/(id)/...).
// Jalankan setelah menambah/menghapus halaman: `node scripts/sync-en-routes.mjs`.
import { mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const idDir = join(root, "app", "(id)");
const enDir = join(root, "app", "[lang]");

const NAMES = ["generateMetadata", "metadata", "generateStaticParams"];
// Konfigurasi segmen tidak boleh di-re-export (harus literal), jadi barisnya disalin apa adanya
const CONFIG = /^export const (dynamicParams|dynamic|revalidate) = .+;$/gm;

function pages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return pages(path);
    return name === "page.tsx" ? [path] : [];
  });
}

// Bersihkan route lama (kecuali layout.tsx milik [lang]) agar halaman yang dihapus ikut hilang
for (const name of readdirSync(enDir)) {
  if (name !== "layout.tsx") rmSync(join(enDir, name), { recursive: true, force: true });
}

for (const source of pages(idDir)) {
  const rel = relative(idDir, source);
  const code = readFileSync(source, "utf8");
  const named = NAMES.filter((n) => new RegExp(`export (async )?(function|const) ${n}\\b`).test(code));
  const from = `@/app/(id)/${rel.split(sep).join("/").replace(/\.tsx$/, "")}`;
  const target = join(enDir, rel);
  mkdirSync(dirname(target), { recursive: true });
  const config = code.match(CONFIG) ?? [];
  writeFileSync(
    target,
    [
      "// Dibuat otomatis oleh scripts/sync-en-routes.mjs: versi Inggris memakai halaman yang sama.",
      `export { ${["default", ...named].join(", ")} } from "${from}";`,
      ...config,
      "",
    ].join("\n"),
  );
}
console.log(`Route Inggris disegarkan dari ${pages(idDir).length} halaman.`);
