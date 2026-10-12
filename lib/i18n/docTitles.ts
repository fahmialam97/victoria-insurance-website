import { en } from "./dictionary.en";
import type { Locale } from "./locale";

/**
 * Judul dokumen resmi (laporan, RUPS, dsb.) jumlahnya banyak dan berpola, jadi versi Inggrisnya dibentuk dari
 * aturan frasa berurutan, bukan satu per satu di kamus. Isi PDF-nya sendiri tetap berbahasa Indonesia.
 * Huruf kapital dipertahankan bila frasa aslinya ditulis kapital semua (mis. "PENGUMUMAN RUPST 2026").
 */
const rules: [RegExp, string][] = [
  [/Penambahan Modal Tanpa Hak Memesan Efek Terlebih Dahulu/gi, "Capital Increase Without Pre-emptive Rights"],
  [/Perubahan dan\/atau Tambahan Informasi atas Keterbukaan Informasi kepada Pemegang Saham/gi, "Amendments and/or Additional Information to the Disclosure of Information to the Shareholders of"],
  [/\(Perseroan\) sehubungan dengan/gi, "(the Company) in connection with"],
  [/Perubahan Tambahan Informasi/gi, "Amended Additional Information"],
  [/Laporan keuangan bulanan/gi, "Monthly Financial Report"],
  [/Laporan Keu?a?ngan/gi, "Financial Statements"],
  [/Laporan Penerapan Keuangan Berkelanjutan/gi, "Sustainable Finance Implementation Report"],
  [/Dokumen Annual Report/gi, "Annual Report"],
  [/Dokumen Prospektus/gi, "Prospectus"],
  [/Pengumuman Ringkasan Risalah/gi, "Announcement of the Summary of Minutes of"],
  [/Ringkasan Risalah/gi, "Summary of Minutes of"],
  [/Risalah/gi, "Minutes of"],
  [/Tata Tertib/gi, "Rules of Conduct of"],
  [/Pemanggilan|Panggilan|Penggilan/gi, "Invitation to"],
  [/Iklan Pemberitahuan|Iklan Pengumuman/gi, "Notice of"],
  [/Surat Pemberitahuan Libur tahun Baru/gi, "New Year Holiday Notice Letter"],
  [/Pemberitahuan Libur Akhir Tahun (\d{4}) dan Tahun Baru (\d{4})/gi, "Year-End $1 and New Year $2 Holiday Notice"],
  [/Pemberitahuan/gi, "Notice of"],
  [/Pengumuman Hasil Pelaksanaan/gi, "Announcement of the Results of the"],
  [/Pengumuman Hasil/gi, "Announcement of the Results of"],
  [/Pengumuman Pelaksanaan/gi, "Announcement of the Implementation of"],
  [/Pengumuman/gi, "Announcement of"],
  [/Keterbukaan Informasi/gi, "Disclosure of Information on"],
  [/Pembagian Dividen/gi, "Dividend Distribution"],
  [/Surat Kuasa/gi, "Power of Attorney for"],
  [/Koran Neraca Ekonomi_/gi, "Neraca Ekonomi Newspaper – "],
  [/\bPeriode\b/gi, "Period"],
  [/\bTahun\b/gi, ""],
  [/\bRUPSLB\b/g, "EGMS"],
  [/\bRUPST\b/g, "AGMS"],
  [/\bRUPS\b/g, "GMS"],
  [/\bJanuari\b/gi, "January"],
  [/\bFebruari\b/gi, "February"],
  [/\bMaret\b/gi, "March"],
  [/\bMei\b/gi, "May"],
  [/\bJuni\b/gi, "June"],
  [/\bJuli\b/gi, "July"],
  [/\bAgustus\b/gi, "August"],
  [/\bOktober\b/gi, "October"],
  [/\bDesember\b/gi, "December"],
];

const isUpper = (text: string) => /[A-Z]/.test(text) && text === text.toUpperCase();

function applyRules(title: string): string {
  let out = title;
  for (const [pattern, replacement] of rules) {
    out = out.replace(pattern, (match, ...groups) => {
      // Ganti $1, $2 dengan grup tangkapan (bila ada)
      const value = replacement.replace(/\$(\d)/g, (_, n) => String(groups[Number(n) - 1] ?? ""));
      return isUpper(match) ? value.toUpperCase() : value;
    });
  }
  // "of" di ujung judul (mis. "Notice of" tanpa objek) dan spasi ganda dirapikan
  return out.replace(/\s+(of|to|on|for)\s*$/i, "").replace(/\s{2,}/g, " ").trim();
}

/** Judul dokumen sesuai bahasa: kamus lebih dulu, lalu aturan frasa. */
export function docTitle(locale: Locale, title: string): string {
  if (locale === "id") return title;
  return en[title] ?? applyRules(title);
}
