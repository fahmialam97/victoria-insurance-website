import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { site } from "@/data/site";
import { getLocale } from "@/lib/i18n/server";
import { buildSearchIndex } from "@/lib/searchIndex";
import "../globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

/** Root layout bersama: dipakai versi Indonesia (app/(id)) dan diekspor ulang versi Inggris (app/[lang]). */
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { title, description } = site.meta[locale];
  const home = locale === "en" ? "/en/" : "/";
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    applicationName: site.name,
    alternates: { canonical: home, languages: { id: "/", en: "/en/" } },
    icons: { icon: "/images/official/site-icon-192.png", apple: "/images/official/site-icon-192.png" },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "id_ID",
      siteName: site.name,
      title,
      description,
      url: home,
      images: [
        {
          url: "/images/official/home-banner-graha-bip.jpg",
          width: 989,
          height: 561,
          alt: locale === "en" ? "Official Victoria Insurance banner" : "Banner resmi Victoria Insurance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/official/home-banner-graha-bip.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <LocaleProvider locale={locale}>
          <a
            href="#konten-utama"
            className="sr-only z-[60] rounded-md bg-ink-800 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            {locale === "en" ? "Skip to main content" : "Lewati ke konten utama"}
          </a>
          <Navbar searchIndex={buildSearchIndex(locale)} />
          <main id="konten-utama" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
