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
  regulatoryNote: "Berizin dan diawasi oleh Otoritas Jasa Keuangan",
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
    addressLines: ["Gedung Bank Victoria Lt. 5", "Jl. Raya Darmo No. 173 Surabaya"],
    phones: ["031-567 8023", "031-567 8040"],
    fax: "031-567 8156",
  },
  complaintEmail: "cs.digital@victoriainsurance.co.id",
  whistleblowingEmail: "vinswbs@victoriainsurance.co.id",
  // Jam operasional: tidak ditemukan pada website saat audit.
  operationalHours: null,
  fullContactUrl: official("/kantor-cabang/"),
} as const;

/** Hanya akun yang mengarah ke profil Victoria Insurance (link Facebook & LinkedIn di website resmi bersifat generik). */
export const socialLinks = [
  { label: "Instagram", handle: "@victoria.insurance", href: "https://www.instagram.com/victoria.insurance/" },
] as const;

export const groupCompanies = [
  { label: "Victoria Investama, Tbk", href: "http://www.victoriainvestama.co.id/" },
  { label: "Bank Victoria, Tbk", href: "http://www.victoriabank.co.id/" },
  { label: "Victoria Manajemen Investasi", href: "http://vmi.co.id/" },
  { label: "Victoria Sekuritas Indonesia", href: "http://victoria-sekuritas.co.id/" },
  { label: "Victoria Life", href: "http://victorialife.co.id/" },
] as const;
