import { official } from "./site";

export type NewsItem = {
  title: string;
  /** Tanggal publikasi (ISO) dari WordPress REST API website resmi. */
  date: string;
  summary: string;
  href: string;
};

export const newsIndexHref = official("/artikel/");

/** Tiga post terbaru saat audit (KB 7.3); ringkasan = kalimat pembuka di /artikel/. */
export const latestNews: NewsItem[] = [
  {
    title: "Apa Itu Act of God dalam Asuransi? Ini Penjelasan dan Manfaatnya",
    date: "2025-07-07",
    summary:
      "Perluasan jaminan Act of God (AOG) adalah istilah dalam dunia asuransi yang merujuk pada perlindungan tambahan terhadap kejadian luar biasa yang terjadi di luar kendali manusia.",
    href: official("/apa-itu-act-of-god-dalam-asuransi-ini-penjelasan-dan-manfaatnya/"),
  },
  {
    title: "Apa yang Terjadi Jika kita Telat Bayar Premi Asuransi?",
    date: "2025-07-04",
    summary:
      "Artikel ini akan membahas secara lengkap dampak keterlambatan bayar premi dan apa yang bisa dilakukan untuk mengatasinya.",
    href: official("/apa-yang-terjadi-jika-kita-telat-bayar-premi-asuransi/"),
  },
  {
    title: "Langkah Cerdas: Miliki Asuransi Sebelum Investasi",
    date: "2025-07-04",
    summary: "Mengapa perlindungan harus lebih dulu daripada pertumbuhan?",
    href: official("/langkah-cerdas-miliki-asuransi-sebelum-investasi/"),
  },
];
