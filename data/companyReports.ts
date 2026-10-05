import type { Doc } from "./layanan";

const up = (path: string) => `https://victoriainsurance.co.id/wp-content/uploads/${path}`;

export type RupsGroup = { title: string; sections: { title: string; documents: Doc[] }[] };
export type YearDocs = { year: number; documents: Doc[] };

/** Halaman /informasi-perusahaan/ resmi (dicek ulang 5 Okt 2026); urutan & judul sesuai website. */
export const rupsArchive: RupsGroup[] = [
  {
    title: "RUPST 2026",
    sections: [
      { title: "RINGKASAN RISALAH RUPST 2026", documents: [{ title: "RINGKASAN RISALAH RUPST 2026", url: up("2026/04/PENGUMUMAN%20RINGKASAN%20RISALAH%202026.pdf") }] },
      { title: "Tata Tertib RUPST 2026", documents: [{ title: "Tata Tertib RUPST 2026", url: up("2026/04/Tata%20Tertib%20RUPST%202026.pdf") }] },
      { title: "PENGGILAN RUPST 2026", documents: [{ title: "PANGGILAN RUPST 2026", url: up("2026/04/Panggilan%20RUPST%202026%20PT%20%20VICTORIA%20INSURANCE%20Tbk.pdf") }] },
      { title: "PENGUMUMAN RUPST 2026", documents: [{ title: "Iklan Pemberitahuan RUPST 2026", url: up("2026/03/Iklan-Pemberitahuan-RUPST-2026.pdf") }] },
    ],
  },
  {
    title: "PMTHMETD 2025",
    sections: [
      { title: "Pengumuman Hasil Pelaksanaan Penambahan Modal Tanpa Hak Memesan Efek Terlebih Dahulu (PMTHMETD) Tahun 2025", documents: [{ title: "Pengumuman Hasil PMTHMETD VINS", url: up("2025/12/Pengumuman-Hasil-PMTHMETD-VINS_IND_ENG.pdf") }] },
      { title: "Pengumuman Pelaksanaan Penambahan Modal Tanpa Hak Memesan Efek Terlebih Dahulu (PMTHMETD) Tahun 2025", documents: [{ title: "Pengumuman Pelaksanaan PMTHMETD VINS Tahun 2025", url: up("2025/12/Pengumuman-Pelaksanaan-PMTHMETD-VINS-Tahun-2025.pdf") }] },
    ],
  },
  {
    title: "RUPSLB 2025",
    sections: [
      { title: "RINGKASAN RISALAH RUPSLB 2025", documents: [{ title: "RINGKASAN RISALAH RUPSLB VINS", url: up("2025/10/RINGKASAN-RISALAH-RUPSLB-VINS.pdf") }] },
      { title: "PERUBAHAN DAN/ATAU TAMBAHAN INFORMASI ATAS KETERBUKAAN INFORMASI KEPADA PEMEGANG SAHAM PT VICTORIA INSURANCE TBK (PERSEROAN) SEHUBUNGAN DENGAN PENAMBAHAN MODAL TANPA HAK MEMESAN EFEK TERLEBIH DAHULU (PMTHMETD)", documents: [{ title: "Perubahan Tambahan Informasi KI PMTHMETD VINS 2025", url: up("2025/10/Perubahan_Tambahan-Informasi_KI_PMTHMETD_VINS_2025.pdf") }] },
      { title: "PEMANGGILAN RUPSLB 2025", documents: [{ title: "PEMANGGILAN RUPSLB 2025", url: up("2025/09/2025-09-26_PEMANGGILAN-BILINGUAL-VINS-1.pdf") }] },
      { title: "PENGUMUMAN RUPSLB 2025", documents: [{ title: "Keterbukaan Informasi PMTHMETD 2025", url: up("2025/09/Keterbukaan-Informasi-PMTHMETD-VINS-Th-2025.pdf") }, { title: "Pengumuman RUPSLB 2025", url: up("2025/09/Pengumuman-RUPSLB-VINS-2025.pdf_H2.pdf") }] },
    ],
  },
  {
    title: "RUPST 2025",
    sections: [
      { title: "PENGUMUMAN RUPST 2025", documents: [{ title: "Pengumuman RUPST 2025", url: up("2025/03/Pengumuman-RUPST-2025.pdf") }, { title: "Panggilan RUPST 2025", url: up("2025/03/Panggilan-RUPST-2025-PT-VICTORIA-INSURANCE-Tbk.pdf") }, { title: "Tata Tertib RUPST 2025", url: up("2025/04/Tata-Tertib-RUPST-2025.pdf") }, { title: "PENGUMUMAN RINGKASAN RISALAH RUPST 2025", url: up("2025/04/PENGUMUMAN-RINGKASAN-RISALAH.pdf") }] },
    ],
  },
  {
    title: "RUPSLB 2024",
    sections: [
      { title: "PENGUMUMAN RUPSLB 2024", documents: [{ title: "Pengumuman Ringkasan Risalah RUPSLB 2024", url: up("2024/12/PENGUMUMAN-RINGKASAN-RISALAH-RUPSLB-VINS-2024.pdf") }, { title: "Tata Tertib RUPSLB", url: up("2024/12/Tata-Tertib-RUPSLB.pdf") }, { title: "Panggilan RUPSLB 2024", url: up("2024/11/Panggilan-RUPSLB-2024-PT-VICTORIA-INSURANCE-Tbk-.pdf") }, { title: "Pengumuman RUPSLB 2024", url: up("2024/11/Pengumuman_RUPSLB_2024.pdf") }] },
    ],
  },
  {
    title: "RUPST 2024",
    sections: [
      { title: "PENGUMUMAN RUPST 2024", documents: [{ title: "PANGGILAN RUPST Periode 2024", url: up("2024/04/PANGGILAN-RUPST-2024-FINAL.pdf") }, { title: "Pengumuman RUPST Periode 2024", url: up("2024/03/Pengumuman-RUPST-Period-2023.pdf") }, { title: "Pengumuman Ringkasan Risalah 2024", url: up("2024/04/PENGUMUMAN-RINGKASAN-RISALAH.pdf") }] },
    ],
  },
  {
    title: "RUPST 2023",
    sections: [
      { title: "PENGUMUMAN RUPST 2023", documents: [{ title: "Pengumuman RUPST 2023", url: up("2023/04/Final-Iklan-Pengumuman-RUPST-Period-2022.pdf") }, { title: "Panggilan RUPST 2023", url: up("2023/04/Panggilan-RUPST-2023-PT-VICTORIA-INSURANCE-Tbk-FINAL.pdf") }, { title: "Pengumuman Ringkasan Risalah 2023", url: up("2023/05/PENGUMUMAN-RINGKASAN-RISALAH_2023.pdf") }] },
    ],
  },
  {
    title: "RUPSLB 2022",
    sections: [
      { title: "PENGUMUMAN RUPSLB 2022", documents: [{ title: "Pengumuman RUPSLB 2022", url: up("2022/11/Pengumuman-RUPSLB-2022.pdf") }, { title: "Pemanggilan RUPSLB 2022", url: up("2022/11/Pemanggilan-RUPSLB-VINS-2022.pdf") }, { title: "Pengumuman Ringkasan Risalah RUPSLB 2022", url: up("2022/12/PENGUMUMAN-RINGKASAN-RISALAH.pdf") }] },
    ],
  },
  {
    title: "RUPST 2022",
    sections: [
      { title: "PENGUMUMAN RUPST 2022", documents: [{ title: "Pengumuman RUPST 2022", url: up("2022/04/Iklan-Pengumuman-RUPST-2022.pdf") }, { title: "Panggilan RUPST 2022", url: up("2022/05/Panggilan-RUPST-2022-PT-VICTORIA-INSURANCE-Tbk.pdf") }, { title: "Surat Kuasa RUPST", url: up("2022/05/SURAT-KUASA-RUPST.docx") }, { title: "Risalah RUPST 2022", url: up("2022/06/PENGUMUMAN-RINGKASAN-RISALAH_FINAL.pdf") }, { title: "Koran Neraca Ekonomi_Ringkasan Risalah RUPST VINS", url: up("2022/06/Koran-Neraca-Ekonomi_Ringkasan-Risalah-RUPST-VINS.pdf") }] },
    ],
  },
  {
    title: "RUPST 2021",
    sections: [
      { title: "PENGUMUMAN RUPST 2021", documents: [{ title: "Pengumuman RUPST 2021", url: up("2021/05/Iklan-Pengumuman-RUPST-2021.pdf") }, { title: "Panggilan RUPST 2021", url: up("2021/05/Panggilan-RUPST-FINAL-2021.pdf") }, { title: "Risalah RUPST 2020 Pembagian Dividen 2021", url: up("2021/06/Risalah-RUPS-2020-Pembagian-Dividen-2021_pdf.pdf") }] },
    ],
  },
  {
    title: "RUPST 2020",
    sections: [
      { title: "Pemberitahuan Libur Akhir Tahun 2020 dan Tahun Baru 2021", documents: [{ title: "Surat Pemberitahuan Libur tahun Baru 2021", url: up("2020/12/Surat-Pemberitahuan-Libur-tahun-Baru-2021-untuk-Relasi-PT-Victoria-InsuranceTbk.pdf") }] },
      { title: "RISALAH RUPSLB 2020", documents: [{ title: "Risalah RUPSLB 2020", url: up("2020/12/Risalah-RUPSLB-2020-.pdf") }] },
      { title: "PANGGILAN RUPSLB 2020", documents: [{ title: "Panggilan RUPSLB 2020", url: up("2020/11/Panggilan-RUPSLB-2020.pdf") }] },
      { title: "PENGUMUMAN RUPSLB 2020", documents: [{ title: "Pengumuman RUPSLB 2020", url: up("2020/11/Pengumuman-RUPSLB-2020.pdf") }] },
      { title: "PEMBERITAHUAN RUPST 2020", documents: [{ title: "Pemberitahuan RUPST 2020 PT. Victoria Insurance, Tbk", url: up("2020/06/Pemberitahuan_Gabung_pdf.pdf") }] },
      { title: "PANGGILAN RUPST 2020", documents: [{ title: "Panggilan RUPST 2020 PT. Victoria Insurance, Tbk", url: up("2020/06/pdf_Ok_Panggilan-RUPST-2020-PT-VICTORIA-INSURANCE-Tbk-FIXFIX.pdf") }, { title: "Panggilan RUPST 2020 PT. Victoria Insurance, Tbk [in english]", url: up("2020/06/pdf_OK_english-2020-05-29_SUMMON-AGMS-2020-fix.pdf") }] },
      { title: "RISALAH RUPST 2020", documents: [{ title: "Risalah RUPST – Juli 2020 PT. Victoria Insurance, Tbk", url: up("2020/07/Victoria-Insurance-Ringkasan-Risalah-Juli20.pdf") }] },
    ],
  },
];

/** Halaman /laporan-bulanan/ resmi, terbaru di atas. */
export const monthlyReports: YearDocs[] = [
  { year: 2026, documents: [
    { title: "Laporan keuangan bulanan 31 Agustus 2026 PT Victoria Insurance Tbk", url: up("2026/09/Laporan-keuangan-bulanan-31-Agustus-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Juli 2026 PT Victoria Insurance Tbk", url: up("2026/08/Laporan-keuangan-bulanan-31-Juli-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 Juni 2026 PT Victoria Insurance Tbk", url: up("2026/06/Laporan-keuangan-bulanan-30-Juni-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Mei 2026 PT Victoria Insurance Tbk", url: up("2026/05/Laporan-keuangan-bulanan-31-Mei-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 April 2026 PT Victoria Insurance Tbk", url: up("2026/05/Laporan-keuangan-bulanan-30-April-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Maret 2026 PT Victoria Insurance Tbk", url: up("2026/04/Laporan-keuangan-bulanan-31-Maret-2026-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 28 Februari 2026 PT Victoria Insurance Tbk", url: up("2026/03/Laporan-keuangan-bulanan-28-Februari-2026-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Januari 2026 PT Victoria Insurance Tbk", url: up("2026/02/Laporan-keuangan-bulanan-31-Januari-2026-PT-Victoria-Insurance-Tbk.pdf") },
  ] },
  { year: 2025, documents: [
    { title: "Laporan keuangan bulanan 31 Desember 2025 PT Victoria Insurance Tbk", url: up("2026/01/Laporan-keuangan-bulanan-31-Desember-2025-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 November 2025 PT Victoria Insurance Tbk", url: up("2025/12/Laporan-keuangan-bulanan-30-November-2025-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Oktober 2025 PT Victoria Insurance Tbk", url: up("2025/11/Laporan-keuangan-bulanan-31-Oktober-2025-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 September 2025 PT Victoria Insurance Tbk", url: up("2025/10/Laporan-keuangan-bulanan-30-September-2025-PT-Victoria-Insurance-Tbk-1.pdf") },
    { title: "Laporan keuangan bulanan 31 Agustus 2025 PT Victoria Insurance Tbk", url: up("2025/09/Laporan-keuangan-bulanan-31-Agustus-2025-PT-Victoria-Insurance-Tbk-1.pdf") },
    { title: "Laporan keuangan bulanan 31 Juli 2025 PT Victoria Insurance Tbk", url: up("2025/08/Laporan-keuangan-bulanan-31-Juli-2025-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 Juni 2025 PT Victoria Insurance Tbk", url: up("2025/07/Laporan-keuangan-bulanan-30-Juni-2025-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Mei 2025 PT Victoria Insurance Tbk", url: up("2025/06/Laporan-keuangan-bulanan-31-Mei-2025-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 April 2025 PT Victoria Insurance Tbk", url: up("2025/05/Laporan-keuangan-bulanan-30-April-2025-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Maret 2025 PT Victoria Insurance Tbk", url: up("2025/04/Laporan-keuangan-bulanan-31-Maret-2025-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 28 Februari 2025 PT Victoria Insurance Tbk", url: up("2025/03/Laporan-keuangan-bulanan-28-Februari-2025-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Januari 2025 PT Victoria Insurance Tbk (rev)", url: up("2025/03/Laporan-keuangan-bulanan-31-Januari-2025-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Januari 2025 PT Victoria Insurance Tbk", url: up("2025/02/Laporan-keuangan-bulanan-31-Januari-2025-PT-Victoria-insurance-Tbk.pdf") },
  ] },
  { year: 2024, documents: [
    { title: "Laporan Keuangan bulanan 31 Desember 2024 Audited PT Victoria Insurance Tbk", url: up("2025/03/Laporan-Keuangan-Bulanan-31-Desember-2024-Audited-PT-Victoria-Insurance-Tbk-revisi.pdf") },
    { title: "Laporan keuangan bulanan 31 Desember 2024 PT Victoria Insurance Tbk", url: up("2025/01/Laporan-keuangan-bulanan-31-Desember-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 November 2024 PT Victoria Insurance Tbk", url: up("2024/12/Laporan-keuangan-bulanan-30-November-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Oktober 2024 PT Victoria Insurance Tbk", url: up("2024/11/Laporan_keuangan_bulanan_31_Oktober_2024_PT_Victoria_insurance_Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 September 2024 PT Victoria Insurance Tbk", url: up("2024/10/Laporan-keuangan-bulanan-30-September-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Agustus 2024 PT Victoria Insurance Tbk", url: up("2024/09/Laporan-keuangan-bulanan-31-Agustus-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Juli 2024 PT Victoria Insurance Tbk", url: up("2024/08/Laporan-keuangan-bulanan-31-Juli-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 Juni 2024 PT Victoria Insurance Tbk", url: up("2024/07/Laporan-keuangan-bulanan-30-Juni-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Mei 2024 PT Victoria Insurance Tbk", url: up("2024/06/Laporan-keuangan-bulanan-31-Mei-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 April 2024 PT Victoria Insurance Tbk", url: up("2024/05/Laporan-keuangan-bulanan-30-April-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Maret 2024 PT Victoria Insurance Tbk", url: up("2024/04/Laporan-keuangan-bulanan-31-Maret-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 29 Februari 2024 PT Victoria Insurance Tbk", url: up("2024/03/Laporan-keuangan-bulanan-29-Februari-2024-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Januari 2024 PT Victoria Insurance Tbk", url: up("2024/02/Laporan-keuangan-bulanan-31-Januari-2024-PT-Victoria-insurance-Tbk.pdf") },
  ] },
  { year: 2023, documents: [
    { title: "Laporan keuangan bulanan 31 Desember 2023 [Audited] PT Victoria Insurance Tbk", url: up("2024/04/Laporan-keuangan-bulanan-31-Desember-2023-Audited-PT-Victoria-insurance-Tbk-2.pdf") },
    { title: "Laporan keuangan bulanan 31 Desember 2023 PT Victoria Insurance Tbk", url: up("2024/04/Laporan-keuangan-bulanan-31-Desember-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 November 2023 PT Victoria Insurance Tbk", url: up("2023/12/Laporan-keuangan-bulanan-30-November-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Oktober 2023 PT Victoria Insurance Tbk", url: up("2023/11/Laporan-keuangan-bulanan-31-Oktober-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 September 2023 PT Victoria Insurance Tbk", url: up("2023/10/Laporan-keuangan-bulanan-30-September-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Agustus 2023 PT Victoria Insurance Tbk", url: up("2023/09/Laporan-keuangan-bulanan-31-Agustus-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Juli 2023 PT Victoria Insurance Tbk", url: up("2023/08/Laporan-keuangan-bulanan-31-Juli-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 Juni 2023 PT Victoria Insurance Tbk", url: up("2023/07/Laporan-keuangan-bulanan-30-Juni-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 31 Mei 2023 PT Victoria Insurance Tbk", url: up("2023/10/Laporan-keuangan-bulanan-31-Mei-2023-PT-Victoria-insurance-Tbk.pdf") },
    { title: "Laporan keuangan bulanan 30 April 2023 PT Victoria Insurance Tbk", url: up("2023/10/Laporan-keuangan-bulanan-30-April-2023-PT-Victoria-insurance-Tbk.pdf") },
  ] },
];

/** Halaman /laporan-keuangan-2/ resmi, dibalik agar terbaru di atas. */
export const financialReports: YearDocs[] = [
  { year: 2026, documents: [
    { title: "Laporan Keuangan 30 Juni 2026", url: up("2026/07/Laporan-Keuangan-30-Juni-2026.pdf") },
    { title: "Laporan Keuangan 31 Maret 2026", url: up("2026/04/Laporan-Keuangan-31-Maret-2026.pdf") },
  ] },
  { year: 2025, documents: [
    { title: "Laporan Keuangan 31 Desember 2025", url: up("2026/03/Laporan-Keuangan-31-Desember-2025.pdf") },
    { title: "Laporan Keuangan 30 September 2025", url: up("2025/10/Laporan-Keuangan-30-September-2025.pdf") },
    { title: "Laporan Keuangan 30 Juni 2025", url: up("2025/08/Laporan-Keuangan-30-Juni-2025.pdf") },
    { title: "Laporan Keuangan 31 Maret 2025", url: up("2025/04/Laporan-Keuangan-31-Maret-2025.pdf") },
  ] },
  { year: 2024, documents: [
    { title: "Laporan Keuangan 31 Desember 2024", url: up("2025/03/Laporan-Keuangan-31-Desember-2024.pdf") },
    { title: "Laporan Keuangan 30 September 2024", url: up("2024/10/Laporan-Keuangan-30-September-2024.pdf") },
    { title: "Laporan Keuangan 30 Juni 2024", url: up("2024/07/Laporan-Keuangan-30-Juni-2024.pdf") },
    { title: "Laporan Keuangan 31 Maret 2024", url: up("2024/05/Laporan-Keuangan-31-Maret-2024_upload02052024.pdf") },
  ] },
  { year: 2023, documents: [
    { title: "Laporan Keuangan 31 Desember 2023", url: up("2024/03/Laporan-Keuangan-31-Desember-2023.pdf") },
    { title: "Laporan Keuangan 30 September 2023", url: up("2023/10/Laporan-Keuangan-30-September-2023.pdf") },
    { title: "Laporan Keuangan 30 Juni 2023", url: up("2023/07/Report-PT-Victoria-Insurance-Tbk-30-Jun-2023.pdf") },
    { title: "Laporan Keuangan 31 Maret 2023", url: up("2023/05/Final-Report-PT-Victoria-Insurance-Tbk-31-Mar-23.pdf") },
  ] },
  { year: 2022, documents: [
    { title: "Laporan Keuangan 31 Desember 2022", url: up("2023/03/Final-Report-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 September 2022", url: up("2022/11/09.-Report-PT-Victoria-Insurance-Tbk-Sep-2022_Lapkeu-Q3_2022.pdf") },
    { title: "Laporan Keuangan 30 Juni 2022", url: up("2022/09/06.-Lap-Keu-PT-Victoria-Insurance-Tbk-Juni-2022_@DM.pdf") },
    { title: "Laporan Keuangan 31 Maret 2022", url: up("2022/05/Lap-Keu-PT-VINS-Tbk-Maret-2022.pdf") },
  ] },
  { year: 2021, documents: [
    { title: "Laporan Keuangan 31 Desember 2021", url: up("2022/04/2021.-Lap-Audit-VINS-1221-FINAL.pdf") },
    { title: "Laporan Keuangan 30 September 2021", url: up("2021/12/Laporan-Keuangan-30-September-2021-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 Juni 2021", url: up("2021/12/Laporan-Keuangan-30-Juni-2021-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 31 Maret 2021", url: up("2021/12/Report-PT-Victoria-Insurance-Tbk-Mar21.pdf") },
  ] },
  { year: 2020, documents: [
    { title: "Laporan Keuangan 31 Desember 2020", url: up("2021/12/2020.-Laporan-Keuangan-dan-LAI-PT-Victoria-Insurance-Tbk-31-Desember-2020.pdf") },
    { title: "Laporan Keuangan 30 September 2020", url: up("2020/11/Laporan-Keuangan-30-Sep-2020-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 Juni 2020", url: up("2020/07/2020Laporan-Keuangan-30-Juni-2020-PT-Victoria-Insurance-Tbk.pdf.pdf") },
    { title: "Laporan Keuangan 31 Maret 2020", url: up("2020/05/Laporan-Keuangan-31-Maret-2020-PT-Victoria-Insurance-Tbk.pdf") },
  ] },
  { year: 2019, documents: [
    { title: "Laporan Keuangan 31 Desember 2019", url: up("2020/04/Laporan-Keuangan-31-Desember-2019.pdf") },
    { title: "Laporan Keuangan 30 September 2019.", url: up("2019/11/Laporan-Keuangan-30-Sep-2019-PT-Victoria-Insurance-Tbk_123.pdf") },
    { title: "Laporan Keuangan 30 Juni 2019", url: up("2019/10/Laporan-Keuangan-30-Juni-2019-PT-Victoria-Insurance-Tbk_corsec.pdf") },
    { title: "Laporan Keungan 31 Maret 2019", url: up("2019/05/Lap.-Keu-31-Maret-2019.pdf") },
  ] },
  { year: 2018, documents: [
    { title: "Laporan Keuangan 31 Desember 2018", url: up("2019/06/2018.-Full-Report-PT-Victoria-Insurance-Tbk-31-Des-2018.pdf") },
    { title: "Laporan Keuangan 30 September 2018", url: up("2019/06/Laporan-Keuangan-30-September-2018-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 Juni 2018", url: up("2019/04/quarter-2-2018.pdf") },
    { title: "Laporan Keuangan 31 Maret 2018", url: up("2019/04/Laporan-Keuangan-31-Maret-2018-PT-Victoria-Insurance-Tbk.pdf") },
  ] },
  { year: 2017, documents: [
    { title: "Laporan Keuangan 31 Desember 2017", url: up("2020/07/1_Report-Audited-PT-Victoria-Insurance-2017.pdf") },
    { title: "Laporan Keuangan 30 September 2017", url: up("2019/04/Laporan-Keuangan-30-Sept-2017-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 Juni 2017", url: up("2019/04/Laporan-Keuangan-Triwulan-II-2017-.pdf") },
    { title: "Laporan Keuangan 31 Maret 2017", url: up("2019/04/Laporan-Keuangan-Triwulan-I-2017.pdf") },
  ] },
  { year: 2016, documents: [
    { title: "Laporan Keuangan 31 Desember 2016", url: up("2020/07/2016.-Full-Report-PT-VINS-31-Dec-2016.pdf") },
    { title: "Laporan Keuangan 30 September 2016", url: up("2020/07/Laporan-Keuangan-30-Sept-2016-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 30 Juni 2016", url: up("2020/07/Laporan-Keuangan-30-Juni-2016-PT-Victoria-Insurance-Tbk.pdf") },
    { title: "Laporan Keuangan 31 Maret 2016", url: up("2020/07/Laporan-Keuangan-31-Maret-2016-PT-Victoria-Insurance-Tbk.pdf") },
  ] },
];
