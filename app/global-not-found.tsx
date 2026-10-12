import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";
import { buildSearchIndex } from "@/lib/searchIndex";
import NotFound from "./(id)/not-found";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Sama dengan 404 sebelum ada versi Inggris (judul & deskripsi default website)
  title: site.meta.id.title,
  description: site.meta.id.description,
};

/**
 * 404 untuk URL yang tidak cocok dengan route mana pun (out/404.html). Dibutuhkan karena versi Indonesia & Inggris
 * memakai root layout terpisah; tampilannya sama dengan 404 lama (Bahasa Indonesia, lengkap dengan header & footer).
 */
export default function GlobalNotFound() {
  return (
    <html lang="id" className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <LocaleProvider locale="id">
          <a
            href="#konten-utama"
            className="sr-only z-[60] rounded-md bg-ink-800 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Lewati ke konten utama
          </a>
          <Navbar searchIndex={buildSearchIndex("id")} />
          <main id="konten-utama" className="flex-1">
            <NotFound />
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
