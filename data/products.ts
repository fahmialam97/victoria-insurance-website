import { official } from "./site";

export type ProductIcon = "property" | "vehicle" | "accident" | "cargo" | "engineering" | "money";

export type Product = {
  name: string;
  description: string;
  icon: ProductIcon;
  href: string;
  riplayUrl: string;
};

/** Total produk yang tercantum di halaman /produk/ website resmi saat audit. */
export const TOTAL_PRODUCTS = 13;

export const productsHref = official("/produk/");

/** Enam produk homepage resmi (KB 4.5); link ke /produk/ karena belum ada halaman detail. */
export const featuredProducts: Product[] = [
  {
    name: "Asuransi Harta Benda",
    description:
      "Adalah suatu pertanggungan yang memberikan jaminan atau proteksi atas kerugian dan/atau kerusakan pada harta benda",
    icon: "property",
    href: productsHref,
    riplayUrl: "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Harta-Benda.pdf",
  },
  {
    name: "Asuransi Kendaraan Bermotor",
    description:
      "Memberikan jaminan untuk jenis kerusakan ringan, rusak berat hingga kehilangan. Yang diakibatkan oleh tabrakan, benturan, terbalik, tergelincir, pencurian, kebakaran atau sebab lain yang dijamin.",
    icon: "vehicle",
    href: productsHref,
    riplayUrl:
      "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Kendaraan-Bermotor-Umum.pdf",
  },
  {
    name: "Asuransi Kecelakaan Diri",
    description:
      "Asuransi Kecelakaan Diri memberikan jaminan terhadap resiko Kematian, Cacat Tetap, Biaya Perawatan atau Pengobatan yang disebabkan oleh suatu kecalakaan yang diderita.",
    icon: "accident",
    href: productsHref,
    riplayUrl: "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Kecelakaan-Diri.pdf",
  },
  {
    name: "Asuransi Pengangkutan",
    description:
      "Asuransi ini memberikan jaminan ganti rugi atas risiko kerugian yang terjadi selama kegiatan pengangkutan barang dari: tempat asal sampai ke tempat tujuan.",
    icon: "cargo",
    href: productsHref,
    riplayUrl: "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Pengangkutan.pdf",
  },
  {
    name: "Asuransi Rekayasa",
    description:
      "Memberikan perlindungan atas pekerjaan-pekerjaan konstruksi, instalasi mesin maupun instalasi peralatan elektronik dari segala risiko kerugian",
    icon: "engineering",
    href: productsHref,
    riplayUrl: "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Rekayasa.pdf",
  },
  {
    name: "Asuransi Uang",
    description:
      "Produk asuransi ini dikhususkan untuk memberikan perlindungan terhadap uang atau yang dipersamakan dengan uang",
    icon: "money",
    href: productsHref,
    riplayUrl: "https://victoriainsurance.co.id/wp-content/uploads/2026/01/RIPLay-Asuransi-Uang.pdf",
  },
];
