export type HeroImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

/** Semua foto dari slider homepage resmi (KB Bagian 4.2), banner Graha BIP sebagai slide pertama. */
export const heroImages: HeroImage[] = [
  {
    src: "/images/official/home-banner-graha-bip.jpg",
    width: 989,
    height: 561,
    alt: "Banner resmi Victoria Insurance: Hotline Victoria Call +62 21 1500 977 dengan latar Gedung Graha BIP",
  },
  {
    src: "/images/official/ilustrasi-klaim-kendaraan.jpg",
    width: 980,
    height: 296,
    alt: "Ilustrasi kendaraan mogok ditarik beramai-ramai",
  },
  {
    src: "/images/official/banner-csr-victoria-peduli.png",
    width: 1280,
    height: 570,
    alt: "Banner CSR #VictoriaPeduli: penyerahan bantuan alat kesehatan penanganan Covid-19",
  },
  {
    src: "/images/official/survey-penutupan-mobil-1.jpg",
    width: 859,
    height: 598,
    alt: "Petugas Victoria Insurance mendampingi nasabah saat survey kendaraan",
    caption: "Ilustrasi Survey Penutupan Asuransi Mobil",
  },
  {
    src: "/images/official/survey-penutupan-mobil-2.jpg",
    width: 1059,
    height: 661,
    alt: "Petugas Victoria Insurance memeriksa kondisi mobil bersama nasabah",
    caption: "Ilustrasi Survey Penutupan Asuransi Mobil",
  },
  {
    src: "/images/official/survey-penutupan-mobil-3.jpg",
    width: 920,
    height: 592,
    alt: "Petugas Victoria Insurance mencatat hasil survey kendaraan",
    caption: "Ilustrasi Survey Penutupan Asuransi Mobil",
  },
];
