import type { Doc } from "./layanan";

const up = (path: string) => `https://victoriainsurance.co.id/wp-content/uploads/${path}`;
const site = (path: string) => `https://victoriainsurance.co.id/${path}`;

export const companyInfoHref = "/informasi-perusahaan";

export const companyInfoLinks = {
  rupslb2026: { label: "RUPSLB 2026", href: "/rupslb/2026", description: "Pengumuman dan dokumen RUPSLB 2026." },
  rupsArchive: {
    label: "Arsip RUPS & Keterbukaan Informasi",
    href: `${companyInfoHref}/arsip-rups`,
    description: "Dokumen RUPST, RUPSLB, dan PMTHMETD tahun 2020–2026.",
  },
  governance: { label: "Pedoman Tata Kelola", href: `${companyInfoHref}/pedoman-tata-kelola` },
  committees: { label: "Komite – komite", href: `${companyInfoHref}/komite` },
  corsec: { label: "Sekretaris Perusahaan", href: `${companyInfoHref}/sekretaris-perusahaan` },
  articles: { label: "Anggaran Dasar (AD/ART)", href: `${companyInfoHref}/anggaran-dasar` },
  monthly: { label: "Laporan Bulanan", href: `${companyInfoHref}/laporan-bulanan` },
  financial: { label: "Laporan Keuangan", href: `${companyInfoHref}/laporan-keuangan` },
  annual: { label: "Laporan Tahunan", href: `${companyInfoHref}/laporan-tahunan` },
  supporting: { label: "Lembaga Penunjang", href: `${companyInfoHref}/lembaga-penunjang` },
};

/** Pengelompokan menu adalah usulan baru dari item KB Bagian 3. */
export const companyInfoGroups: { title: string; links: { label: string; href: string; description?: string }[] }[] = [
  { title: "Pengumuman", links: [companyInfoLinks.rupslb2026, companyInfoLinks.rupsArchive] },
  {
    title: "Tata Kelola Perusahaan",
    links: [companyInfoLinks.governance, companyInfoLinks.committees, companyInfoLinks.corsec, companyInfoLinks.articles],
  },
  {
    title: "Hubungan Investor",
    links: [companyInfoLinks.monthly, companyInfoLinks.financial, companyInfoLinks.annual, companyInfoLinks.supporting],
  },
];

/** Halaman /pedoman-tata-kelola/ resmi. */
export const governance = {
  heading: "Implementasi Tata Kelola Perusahaan yang Baik",
  text: "Kami sangat memahami bahwa kredibilitas, akuntabilitas dan reputasi Perseroan sebagai perusahaan asuransi yang bertanggung jawab tak dapat dipisahkan dari penerapan Tata Kelola perusahaan yang baik (GCG). Atas dasar itulah, Perseroan berkomitmen menerapkan GCG sesuai peraturan pemerintah serta ketentuan Otoritas Jasa Keuangan (OJK) dan pasar modal yang berlaku, seperti peraturan OJK No. 21/POJK.04/2015 tentang Penerapan Pedoman Tata Kelola Perusahaan Terbuka dan peraturan OJK No. 73/POJK.05/2016 tentang Tata Kelola Perusahaan yang Baik bagi Perusahaan Perasuransian. Perseroan juga senantiasa mengevaluasi dan menyempurnakan kebijakan dan prosedur internalnya sesuai dengan perkembangan dan persyaratan GCG terkini.",
  documents: [
    { title: "Pedoman & Kebijakan GCG Victoria Insurance", url: up("2019/11/Pedoman-Kebijakan-GCG-Victoria-Insurance_OK.pdf") },
    { title: "Piagam Audit Internal", url: up("2026/01/Piagam-Audit-Internal-New-011225.pdf") },
  ] satisfies Doc[],
};

/** Halaman /komite-audit/ resmi. */
export const committees = {
  text: "Susunan Komite – komite PT. Victoria Insurance, Tbk",
  documents: [
    { title: "Susunan Komite-Komite 2026 (VINS)", url: up("2026/09/Susunan%20Komite-Komite%20(VINS)_01102026.pdf") },
  ] satisfies Doc[],
};

/** Halaman /sekretaris-perusahaan/ resmi; data kontak dari teks pengumuman pada gambar. */
export const corporateSecretary = {
  name: "Netta Ivana Calista",
  decree: "Surat Keputusan Direksi No. 0025/VINS-IN/DIR/III/2026",
  address: "Graha BIP Lantai 3A, Jl. Jend. Gatot Subroto Kav. 23 Jakarta Selatan 12930",
  phone: { display: "021-30055555", tel: "+622130055555" },
  email: "corsec@victoriainsurance.co.id",
  image: {
    src: "/images/official/informasi-perusahaan/sekretaris-perusahaan-2026.jpg",
    width: 1920,
    height: 1080,
    alt: "Pengumuman perubahan Sekretaris Perusahaan PT Victoria Insurance Tbk dari Herna Anggraeni kepada Netta Ivana Calista berdasarkan Surat Keputusan Direksi No. 0025/VINS-IN/DIR/III/2026",
  },
};

/** Halaman /anggaran-dasar-ad-art/ resmi. */
export const articlesOfAssociation = {
  text: "Ketentuan Anggaran Dasar Perseroan dibawah ini adalah Anggaran Dasar Perseroan yang saat ini berlaku berdasarkan perubahan Anggaran Dasar terakhir No. 41 tanggal 11 Juni 2015 yang dibuat dihadapan Notaris Fathiah Helmi, SH, akta mana telah diberitahukan dan telah memperoleh surat Persetujuan Perubahan Anggaran Dasar dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia No. AHU-0937704.AH.01.02.Tahun 2015 tanggal 19 juni 2015 dan didaftarkan dalam Daftar Perseroan No. AHU-3522349.AH.01.11.Tahun 2015 tanggal 19 Juni 2015.",
  documents: [{ title: "Anggaran Dasar", url: up("2019/04/Anggaran-Dasar.pdf") }] satisfies Doc[],
};

/** Halaman /laporan-tahunan-2/ resmi; link pendek resmi (/AR2015 dst.) diarahkan langsung ke PDF-nya. */
export const annualReports = {
  annual: [
    { title: "Dokumen Annual Report 2025", url: up("2026/04/AR%20VINS%202025_%2822%20APRIL%202026%29.pdf") },
    { title: "Dokumen Annual Report 2024", url: up("2025/04/AR-VINS-2024-16042025_compressed.pdf") },
    { title: "Dokumen Annual Report 2023", url: up("2024/03/AR-VINS-2023-28032024-R3.pdf") },
    { title: "Dokumen Annual Report 2022", url: site("AR2022/2022.pdf") },
    { title: "Dokumen Annual Report 2021", url: site("AR2021/2021.pdf") },
    { title: "Dokumen Annual Report 2020", url: site("AR2020/2020.pdf") },
    { title: "Dokumen Annual Report 2019", url: site("AR2019/2019.pdf") },
    { title: "Dokumen Annual Report 2018", url: site("AR2018/2018.pdf") },
    { title: "Dokumen Annual Report 2017", url: site("AR2017/2017.pdf") },
    { title: "Dokumen Annual Report 2016", url: site("AR2016/2016.pdf") },
    { title: "Dokumen Annual Report 2015", url: site("AR2015/2015.pdf") },
  ] satisfies Doc[],
  sustainability: [
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2025", url: up("2026/04/Laporan%20Penerapan%20Keuangan%20Berkelanjutan.pdf") },
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2024", url: up("2025/03/Laporan-SR-Tahun-2024.pdf") },
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2023", url: up("2024/03/Laporan-Penerpan-Keuangan-Berkelanjutan-Tahun-2023.pdf") },
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2022", url: site("gabung2/Gabung2.pdf") },
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2021", url: site("gabung1/Gabung1.pdf") },
    { title: "Laporan Penerapan Keuangan Berkelanjutan Tahun 2020", url: site("gabung/Gabung.pdf") },
  ] satisfies Doc[],
  // "Laporan RAKB Tahun 2020" tidak dicantumkan: link resmi mengembalikan 404
  prospectus: [{ title: "Dokumen Prospektus", url: up("2020/12/Prospektus_2015.pdf") }] satisfies Doc[],
};

/** Halaman /lembaga-penunjang-2/ resmi. */
export const supportingInstitutions = [
  {
    role: "Notaris",
    name: "JIMMY TANAL, S.H., M.Kn",
    address: "Gedung The H Tower Lantai 20 A&G JL. HR Rasuna Said Kav C-20 Kuningan, Jakarta Selatan 12940.",
    phones: ["(021) 29533377", "(021) 29516950"],
  },
  {
    role: "Akuntan Publik",
    name: "Heliantono dan Rekan (Parker Russell)",
    address: "Menara Palma Building 10th Floor Unit 02 Jl. HR Rasuna Said Blok X2 Kav.6, Jakarta Selatan 12950",
    phones: ["(021) 5795 7555"],
  },
  {
    role: "Biro Administrasi Efek",
    name: "PT Adimitra Jasa Korpora",
    address: "Kirana Boutiqe Office Jl. Kirana Avenue III, Blok F3No. 5 Kelapa Gading-Jakarta Utara, 14250",
    phones: ["021-29745222 (Hunting)"],
    fax: "021-292829961",
    email: "opr@adimitra-jk.co.id",
  },
];
