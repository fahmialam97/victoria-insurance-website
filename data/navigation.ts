import { aboutHref, aboutLinks, aboutMenu } from "./company";
import { companyInfoGroups, companyInfoHref, companyInfoLinks } from "./companyInfo";
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

export { companyInfoGroups, companyInfoHref };

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
    activePaths: ["/berita"],
  },
  {
    label: "Tentang Kami",
    groups: aboutMenu,
    activePaths: [aboutHref],
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
      { label: "Profil Perusahaan", href: aboutLinks.profile.href },
      { label: "Visi dan Misi", href: aboutLinks.vision.href },
      { label: "Dewan Komisaris", href: aboutLinks.commissioners.href },
      { label: "Direksi", href: aboutLinks.directors.href },
      { label: "Penghargaan", href: aboutLinks.awards.href },
      { label: "Karir", href: aboutLinks.career.href },
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
      { label: "RUPSLB 2026", href: companyInfoLinks.rupslb2026.href },
      { label: "Arsip RUPS", href: companyInfoLinks.rupsArchive.href },
      { label: "Tata Kelola", href: companyInfoLinks.governance.href },
      { label: "Laporan Keuangan", href: companyInfoLinks.financial.href },
      { label: "Laporan Tahunan", href: companyInfoLinks.annual.href },
    ],
  },
];
