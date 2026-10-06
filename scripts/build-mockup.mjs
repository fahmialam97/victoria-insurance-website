// Static export untuk mockup.victoriainsurance.co.id; URL hanya berlaku untuk build ini, bukan konfigurasi permanen.
import { spawnSync } from "node:child_process";

const result = spawnSync("next build", {
  stdio: "inherit",
  shell: true,
  env: { ...process.env, NEXT_PUBLIC_SITE_URL: "https://mockup.victoriainsurance.co.id" },
});

process.exit(result.status ?? 1);
