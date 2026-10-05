import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { site } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: { icon: "/images/official/site-icon-192.png", apple: "/images/official/site-icon-192.png" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [
      {
        url: "/images/official/home-banner-graha-bip.jpg",
        width: 989,
        height: 561,
        alt: "Banner resmi Victoria Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/official/home-banner-graha-bip.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <a
          href="#konten-utama"
          className="sr-only z-[60] rounded-md bg-navy-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="konten-utama" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
