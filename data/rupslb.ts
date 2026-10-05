import { official } from "./site";

export type RupslbDocument = {
  title: string;
  shortTitle: string;
  /** Keterangan tanggal sesuai isi dokumen. */
  dateLabel: string;
  summary: string;
  url: string;
};

export type RupslbEvent = {
  year: number;
  title: string;
  /** Tanggal pelaksanaan rapat (ISO). */
  meetingDate: string;
  meetingTime: string;
  venue: string;
  agenda: string;
  status: "upcoming" | "completed";
  documents: RupslbDocument[];
};

export const rupsArchiveHref = official("/informasi-perusahaan/");

/** Sumber KB Bagian 9.1; RUPSLB baru ditambahkan di awal array. */
export const rupslbEvents: RupslbEvent[] = [
  {
    year: 2026,
    title: "RUPSLB 2026",
    meetingDate: "2026-08-18",
    meetingTime: "14.19 – 14.32 WIB",
    venue: "Gedung Graha BIP Lantai 3A, Jalan Jenderal Gatot Subroto Kaveling 23, Jakarta Selatan 12930",
    agenda:
      "Persetujuan Penyesuaian Pasal 3 Anggaran Dasar Perseroan sehubungan dengan Peraturan Badan Pusat Statistik Nomor 7 Tahun 2025 tentang Klasifikasi Baku Lapangan Usaha Indonesia (KBLI 2025).",
    status: "completed",
    documents: [
      {
        title: "Iklan Pengumuman RUPSLB 2026",
        shortTitle: "Iklan Pengumuman",
        dateLabel: "Jakarta, 10 Juli 2026",
        summary:
          "Pemberitahuan kepada pemegang saham mengenai rencana RUPSLB pada Selasa, 18 Agustus 2026, jadwal panggilan, dan tanggal pencatatan pemegang saham.",
        url: "https://victoriainsurance.co.id/informasi-perusahaan/Iklan%20Pengumuman%20RUPSLB%202026.pdf",
      },
      {
        title: "Pemanggilan RUPSLB 2026 PT VICTORIA INSURANCE TBK",
        shortTitle: "Pemanggilan",
        dateLabel: "Jakarta, 27 Juli 2026",
        summary:
          "Panggilan rapat beserta waktu, tempat, mata acara, serta tata cara pemberian kuasa melalui e-Proxy KSEI.",
        url: "https://victoriainsurance.co.id/wp-content/uploads/2026/07/Pemanggilan-RUPSLB-2026-PT-VICTORIA-INSURANCE-TBK.pdf",
      },
      {
        title: "Tata Tertib RUPSLB 2026",
        shortTitle: "Tata Tertib",
        dateLabel: "Untuk rapat Selasa, 18 Agustus 2026",
        summary: "Tata tertib pelaksanaan rapat, kuorum, tata cara bertanya, hak suara, dan mekanisme keputusan.",
        url: "https://victoriainsurance.co.id/wp-content/uploads/2026/08/Tata-Tertib-RUPSLB-2026.pdf",
      },
      {
        title: "Pengumuman Ringkasan Risalah RUPSLB 2026",
        shortTitle: "Ringkasan Risalah",
        dateLabel: "Jakarta, 20 Agustus 2026",
        summary:
          "Ringkasan pelaksanaan rapat, kehadiran pemegang saham, hasil pemungutan suara, dan keputusan RUPSLB.",
        url: "https://victoriainsurance.co.id/wp-content/uploads/2026/08/PENGUMUMAN-RINGKASAN-RISALAH-RUPSLB-2026.pdf",
      },
    ],
  },
];

/** Pengumuman RUPSLB yang ditampilkan di homepage (entri terbaru). */
export const currentRupslb = rupslbEvents[0];

export const rupslbHref = (event: RupslbEvent) => `/rupslb/${event.year}`;
