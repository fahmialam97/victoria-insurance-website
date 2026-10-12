export type HeroImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Titik fokus object-position agar keluarga tetap terlihat saat banner dipotong di layar sempit. */
  focus: string;
  /** Judul khusus slide ini; tanpa ini memakai tagline utama. */
  title?: string;
};

/** Teks banner sesuai arahan user: tagline utama dipakai semua slide kecuali yang punya `title` sendiri. */
export const heroContent = {
  title: "Ketenangan Hidup Bersama Kami",
};

/** Gambar banner dari folder "Aset Gambar Benner" milik user; slide pertama = main banner (dimuat paling awal). */
export const heroImages: HeroImage[] = [
  {
    src: "/images/banner/keluarga-rumah-modern.jpg",
    width: 2159,
    height: 728,
    alt: "Ayah mengangkat anaknya dengan gembira bersama ibu di depan rumah modern",
    focus: "78% 50%",
  },
  {
    src: "/images/banner/harbor-inspection.png",
    width: 2172,
    height: 724,
    alt: "Petugas berhelm proyek mengamati kapal kontainer di pelabuhan saat matahari terbenam",
    // Fokus di antara petugas dan kapal agar keduanya tetap terlihat saat banner dipotong
    focus: "62% 50%",
    title: "Kerja Sama dengan Masa Depan yang Lebih Baik",
  },
  {
    src: "/images/banner/keluarga-suv.png",
    width: 2172,
    height: 724,
    alt: "Keluarga tersenyum di samping mobil SUV dengan latar kota saat matahari terbenam",
    // Fokus di keluarga & mobil (sisi kanan)
    focus: "68% 50%",
  },
];
