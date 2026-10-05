import { official } from "./site";

/** Ringkasan "Tentang Kami" dari homepage website resmi (KB Bagian 4.6), tanpa tambahan klaim. */
export const about = {
  summary:
    "Perusahaan ini telah berdiri sejak tahun 1978 dengan nama PT Asuransi Agung Asia, Pada Nopember 1989 berganti nama menjadi PT Asuransi SUMMA dan berganti kembali pada Juli 1993 dengan nama PT Asuransi Umum Centris. Pada tahun 2010, perseroan diakuisisi oleh PT Victoria Sekuritas dan resmi menjadi bagian dari Group Victoria Investama dengan ditandai pergantian nama menjadi PT Victoria Insurance.",
  // Visi dari halaman /visi-dan-misi/
  vision: "Menjadi perusahaan asuransi umum nasional yang sehat, kuat, efisien dan terpercaya",
  href: official("/tentang-kami/"),
  image: {
    src: "/images/official/gedung-graha-bip.jpg",
    alt: "Gedung Graha BIP, lokasi Kantor Pusat PT Victoria Insurance, Tbk di Jakarta Selatan",
  },
} as const;
