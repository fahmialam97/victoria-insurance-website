import { productsHref } from "./products";
import { official } from "./site";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export const servicesHref = "/layanan";
export const companyInfoHref = "/informasi-perusahaan";

export type NavItem = {
  label: string;
  /** Link langsung (item tanpa dropdown). */
  href?: string;
  /** Isi dropdown. */
  groups?: { title?: string; links: NavLink[] }[];
  /** Link "lihat semua" di bagian bawah dropdown. */
  viewAll?: NavLink;
  /** Path internal lain yang membuat menu ini tampil aktif. */
  activePaths?: string[];
};

/** Isi halaman /informasi-perusahaan dan dropdown-nya; pengelompokan adalah usulan baru dari item KB Bagian 3. */
export const companyInfoGroups: NavGroup[] = [
  {
    title: "Pengumuman",
    links: [
      { label: "RUPSLB 2026", href: "/rupslb/2026", description: "Pengumuman dan dokumen RUPSLB 2026." },
      {
        label: "Arsip RUPS & Keterbukaan Informasi",
        href: official("/informasi-perusahaan/"),
        description: "Dokumen RUPST, RUPSLB, dan PMTHMETD tahun 2020–2026.",
      },
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
];

/** Produk tanpa dropdown; menu lain memakai dropdown seperti struktur website resmi (KB Bagian 3). */
export const mainNav: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: productsHref },
  {
    label: "Layanan",
    groups: [
      {
        links: [
          { label: "Kantor", href: "/layanan/kantor" },
          { label: "Digital Product", href: "/layanan/digital-product" },
          { label: "Bengkel Rekanan", href: "/layanan/bengkel-rekanan" },
          { label: "Pengaduan Konsumen", href: "/layanan/pengaduan-konsumen" },
          { label: "Form Pengaduan", href: "/pengaduan" },
          { label: "Literasi & Inklusi", href: "/layanan/literasi-inklusi" },
          { label: "Informasi Transaksi", href: "/layanan/informasi-transaksi" },
        ],
      },
    ],
    viewAll: { label: "Lihat Semua Layanan", href: servicesHref },
    activePaths: [servicesHref, "/pengaduan"],
  },
  {
    label: "Berita",
    groups: [
      {
        links: [
          { label: "Artikel", href: "/berita/artikel" },
          { label: "CSR", href: "/berita/csr" },
        ],
      },
    ],
    viewAll: { label: "Lihat Semua Berita", href: "/berita" },
    activePaths: ["/berita"],
  },
  {
    label: "Tentang Kami",
    groups: [
      {
        links: [
          { label: "Profil Perusahaan", href: official("/tentang-kami/") },
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
    groups: companyInfoGroups,
    viewAll: { label: "Lihat Semua Informasi Perusahaan", href: companyInfoHref },
    activePaths: [companyInfoHref, "/rupslb"],
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
      { label: "Produk", href: productsHref },
      { label: "Semua Layanan", href: servicesHref },
      { label: "Bengkel Rekanan", href: "/layanan/bengkel-rekanan" },
      { label: "Form Pengaduan", href: "/pengaduan" },
      { label: "Informasi Transaksi", href: "/layanan/informasi-transaksi" },
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
