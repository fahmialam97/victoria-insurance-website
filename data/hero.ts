export type HeroImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Titik fokus object-position agar keluarga tetap terlihat saat banner dipotong di layar sempit. */
  focus: string;
};

/** Teks banner sesuai desain dari user. */
export const heroContent = {
  title: "Masa Depan yang Lebih Baik",
};

/** Gambar banner dari folder "Aset Gambar Benner" milik user. */
export const heroImages: HeroImage[] = [
  {
    src: "/images/banner/keluarga-skyline.jpg",
    width: 2161,
    height: 728,
    alt: "Keluarga tersenyum menatap pemandangan kota saat matahari terbit, di samping rumah dan mobil",
    focus: "72% 50%",
  },
  {
    src: "/images/banner/keluarga-rumah-modern.jpg",
    width: 2159,
    height: 728,
    alt: "Ayah mengangkat anaknya dengan gembira bersama ibu di depan rumah modern",
    focus: "78% 50%",
  },
];
