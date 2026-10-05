import { official } from "./site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  groups?: NavGroup[];
};

/** Item dari KB Bagian 3; pengelompokan "Informasi Perusahaan" adalah usulan baru. */
export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: official("/produk/") },
  {
    label: "Layanan",
    groups: [
      {
        links: [
          { label: "Kantor", href: official("/kantor-cabang/") },
          { label: "Digital Product", href: official("/digital-product/") },
          { label: "Bengkel Rekanan", href: official("/bengkel-rekanan/") },
          { label: "Pengaduan Konsumen", href: official("/pengaduan-konsumen/") },
          { label: "Form Pengaduan", href: "/pengaduan" },
          { label: "Literasi & Inklusi", href: official("/lit-ink/") },
          { label: "Informasi Transaksi", href: official("/literasi-inklusi-keuangan/") },
        ],
      },
    ],
  },
  {
    label: "Berita",
    groups: [
      {
        links: [
          { label: "Artikel", href: official("/artikel/") },
          { label: "CSR", href: official("/csr-2/") },
        ],
      },
    ],
  },
  {
    label: "Tentang Kami",
    groups: [
      {
        links: [
          { label: "Tentang Kami", href: official("/tentang-kami/") },
          { label: "Visi dan Misi", href: official("/visi-dan-misi/") },
          { label: "Jaringan Bisnis", href: official("/jaringan-bisnis/") },
          { label: "Penghargaan", href: official("/penghargaan/") },
          { label: "Karir", href: official("/karir/") },
        ],
      },
      {
        title: "Manajemen",
        links: [
          { label: "Struktur Organisasi", href: official("/struktur-organisasi/") },
          { label: "Dewan Komisaris", href: official("/dewan-komisaris/") },
          { label: "Direksi", href: official("/dewan-direksi/") },
        ],
      },
    ],
  },
  {
    label: "Informasi Perusahaan",
    groups: [
      {
        title: "Pengumuman",
        links: [
          { label: "RUPSLB 2026", href: "/rupslb/2026" },
          { label: "Arsip RUPS & Keterbukaan Informasi", href: official("/informasi-perusahaan/") },
        ],
      },
      {
        title: "Tata Kelola Perusahaan",
        links: [
          { label: "Pedoman Tata Kelola", href: official("/pedoman-tata-kelola/") },
          { label: "Komite – komite", href: official("/komite-audit/") },
          { label: "Sekretaris Perusahaan", href: official("/sekretaris-perusahaan/") },
          { label: "Anggaran Dasar (AD/ART)", href: official("/anggaran-dasar-ad-art/") },
        ],
      },
      {
        title: "Hubungan Investor",
        links: [
          { label: "Laporan Bulanan", href: official("/laporan-bulanan/") },
          { label: "Laporan Keuangan", href: official("/laporan-keuangan-2/") },
          { label: "Laporan Tahunan", href: official("/laporan-tahunan-2/") },
          { label: "Lembaga Penunjang", href: official("/lembaga-penunjang-2/") },
        ],
      },
    ],
  },
];

export const contactAnchor = "/#hubungi-kami";

/** Pencarian diteruskan ke fitur search website resmi (GET ?s=). */
export const searchAction = official("/");

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: official("/tentang-kami/") },
      { label: "Visi dan Misi", href: official("/visi-dan-misi/") },
      { label: "Dewan Komisaris", href: official("/dewan-komisaris/") },
      { label: "Direksi", href: official("/dewan-direksi/") },
      { label: "Penghargaan", href: official("/penghargaan/") },
      { label: "Karir", href: official("/karir/") },
    ],
  },
  {
    title: "Layanan",
    links: [
      { label: "Produk", href: official("/produk/") },
      { label: "Kantor", href: official("/kantor-cabang/") },
      { label: "Bengkel Rekanan", href: official("/bengkel-rekanan/") },
      { label: "Form Pengaduan", href: "/pengaduan" },
      { label: "Informasi Transaksi", href: official("/literasi-inklusi-keuangan/") },
    ],
  },
  {
    title: "Informasi Perusahaan",
    links: [
      { label: "RUPSLB 2026", href: "/rupslb/2026" },
      { label: "Arsip RUPS", href: official("/informasi-perusahaan/") },
      { label: "Tata Kelola", href: official("/pedoman-tata-kelola/") },
      { label: "Laporan Keuangan", href: official("/laporan-keuangan-2/") },
      { label: "Laporan Tahunan", href: official("/laporan-tahunan-2/") },
    ],
  },
];
