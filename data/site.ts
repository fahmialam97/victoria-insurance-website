/** Konten global dari KB; halaman detail belum dibangun ulang, link ke website resmi. */

export const OFFICIAL_URL = "https://victoriainsurance.co.id";

/** Membentuk URL absolut ke website resmi dari path relatif. */
export const official = (path: string) => `${OFFICIAL_URL}${path}`;

export const site = {
  name: "Victoria Insurance",
  legalName: "PT Victoria Insurance, Tbk",
  // <title> website resmi
  title: "Victoria Insurance - Berasuransi Cerdas Bersama Kami",
  // Tagline schema WebSite website resmi
  tagline: "Berasuransi Cerdas Bersama Victoria Insurance",
  // Meta description website resmi
  description:
    "Victoria Insurance memberikan solusi bagi Anda dan keluarga Anda perlindungan dari produk asuransi kecelakaan diri, uang, rekayasa, dll.",
  /** Pernyataan regulasi di bilah bawah footer. Keanggotaan LAPS SJK perlu dikonfirmasi tim legal/kepatuhan. */
  regulatoryStatements: [
    "PT Victoria Insurance, Tbk berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK).",
    "PT Victoria Insurance, Tbk merupakan anggota dari Lembaga Penyelesaian Sengketa Sektor Jasa Keuangan (LAPS SJK).",
  ],
  /** URL kanonik produksi; dapat di-override lewat NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? OFFICIAL_URL,
} as const;

export const contact = {
  headOffice: {
    label: "Kantor Pusat",
    city: "Jakarta",
    addressLines: [
      "Graha BIP Lantai 3A",
      "Jl. Jend. Gatot Subroto Kav. 22-23",
      "Jakarta Selatan 12930, Indonesia",
    ],
    phone: { display: "021-300-55555", tel: "+622130055555" },
  },
  hotline: { label: "Hotline Victoria Call", display: "+62 21 1500 977", tel: "+62211500977" },
  email: "info@victoriainsurance.co.id",
  marketingOffice: {
    label: "Kantor Pemasaran",
    city: "Surabaya",
    head: "Danny Linggadibya P",
    addressLines: ["Gedung Bank Victoria Lt. 5", "Jl. Raya Darmo No. 173 Surabaya"],
    phones: ["031-567 8023", "031-567 8040"],
    fax: "031-567 8156",
  },
  complaintEmail: "cs.digital@victoriainsurance.co.id",
  whistleblowingEmail: "vinswbs@victoriainsurance.co.id",
  // Jam operasional: tidak ditemukan pada website saat audit.
  operationalHours: null,
  fullContactUrl: "/layanan/kantor",
} as const;

/** Hanya akun yang mengarah ke profil Victoria Insurance (link Facebook & LinkedIn di website resmi bersifat generik). */
/** Hanya akun resmi; ikon Facebook & LinkedIn di website resmi hanya mengarah ke beranda facebook.com/linkedin.com. */
export const socialLinks = [
  { label: "Instagram", handle: "@victoria.insurance", href: "https://www.instagram.com/victoria.insurance/" },
] as const;

const groupLogo = (file: string, width: number, height: number) => ({ src: `/images/group/${file}`, width, height });

/**
 * Grup Finansial Victoria (footer & section homepage), urutan sesuai arahan user. `field` = bidang usaha.
 * Logo Bank Victoria, Investama, Sekuritas dari user (versi berwarna resmi, dipotong pas ke batas logo);
 * VMI dari websitenya (versi putih, diwarnai ulang charcoal); Victoria Life versi berwarna dari websitenya.
 */
export const groupCompanies = [
  {
    label: "Bank Victoria, Tbk",
    field: "Perbankan",
    href: "https://www.victoriabank.co.id/",
    logo: groupLogo("bank-victoria.png", 356, 56),
  },
  {
    label: "Victoria Life",
    field: "Asuransi Jiwa",
    href: "https://www.victorialife.co.id/",
    logo: groupLogo("victoria-life.png", 1725, 286),
  },
  {
    label: "Victoria Investama, Tbk",
    field: "Investasi",
    href: "https://victoriainvestama.co.id/",
    logo: groupLogo("victoria-investama.png", 718, 69),
  },
  {
    label: "Victoria Sekuritas Indonesia",
    field: "Sekuritas",
    href: "https://victoria-sekuritas.co.id/",
    logo: groupLogo("victoria-sekuritas.png", 2985, 424),
  },
  {
    label: "Victoria Manajemen Investasi",
    field: "Manajemen Investasi",
    href: "https://vmi.co.id/",
    logo: groupLogo("victoria-manajemen-investasi.png", 338, 48),
  },
] as const;
