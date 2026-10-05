export type Doc = { title: string; url: string };

/** Teks dari halaman Layanan website resmi (KB Bagian 6); spasi dirapikan tanpa mengubah isi. */

export const digitalProduct = {
  title: "Digital Product Development",
  subtitle: "Produk Asuransi Digital",
  paragraphs: [
    "Di era Digital yang terus berkembang pesat, dimana perlindungan menjadi lebih mudah dan terjangkau. Sektor Asuransi tidak ketinggalan dalam memanfaatkan perkembangan teknologi untuk memberikan kemudahan dan efisiensi bagi para nasabah. Produk Asuransi Digital menjadi salah satu inovasi yang menjawab kebutuhan masyarakat akan asuransi yang lebih cepat, transparan, dan mudah diakses.",
    "Asuransi Digital adalah produk asuransi yang dijalankan dan dioperasikan melalui Platform Digital, seperti aplikasi seluler, situs web, atau media digital lainnya. Dengan menggunakan teknologi, proses pembelian, klaim, hingga manajemen polis asuransi dapat dilakukan secara online tanpa harus bertemu langsung dengan agen atau perwakilan Perusahaan Asuransi. Tujuan utama dari Asuransi Digital adalah untuk memberikan pengalaman yang lebih praktis, cepat, dan transparan bagi penggunanya.",
  ],
  image: { src: "/images/official/digital-product.jpg", width: 1920, height: 1440, alt: "Banner Berasuransi Cerdas Bersama Victoria Insurance" },
  // Tombol "BELI ASURANSI" di website resmi tidak memiliki tujuan (href kosong), jadi tidak ditampilkan.
};

export const workshop = {
  heading: "Update Bengkel Rekanan",
  documents: [
    {
      title: "Bengkel Rekanan Wilayah Jabodetabek (112025)",
      url: "https://victoriainsurance.co.id/wp-content/uploads/2025/11/Daftar_Bengkel_Rekanan_PT_Victoria_Insurance_Tbk_Wilayah_Jabodetabek_Update_November_2025-1.pdf",
    },
    {
      title: "Bengkel Rekanan (Non Jabodetabek)",
      url: "https://victoriainsurance.co.id/wp-content/uploads/2021/04/BENGKEL-REKANAN_NON_JABODETABEK_5-april-2021.pdf",
    },
  ] as Doc[],
  contact: { label: "Bagian Klaim PT. Victoria Insurance, Tbk", name: "Bapak Arifin", phone: "087777795006", tel: "+6287777795006" },
  image: { src: "/images/official/tim-klaim-kendaraan.jpg", alt: "Tim Klaim Kendaraan Bermotor Victoria Insurance" },
};

export const complaint = {
  intro: "Pengaduan Konsumen dapat disampaikan melalui website resmi Perusahaan.",
  documents: [
    {
      title: "Prosedur Layanan Pengaduan Konsumen",
      url: "https://victoriainsurance.co.id/wp-content/uploads/2023/10/Prosedur-Layanan-Pengaduan-Konsumen.pdf",
    },
  ] as Doc[],
  reports: [
    {
      title: "Laporan Pengaduan Konsumen 2024",
      url: "https://victoriainsurance.co.id/wp-content/uploads/2025/07/Laporan-Pengaduan-Konsumen-2024.pdf",
    },
  ] as Doc[],
  whistleblowingIntro: "Pengaduan Konsumen yang sifatnya rahasia (whistleblowing) dapat disampaikan melalui website resmi Perusahaan.",
};

export type Step = { title: string; text: string };

export const transaction = {
  intro: [
    "Prosedur dan cara bertransaksi PT. Victoria Insurance, Tbk terdapat dua tahap utama: Pembelian Polis dan Pengajuan Klaim.",
    "PT. Victoria Insurance, Tbk memberikan perlindungan terhadap kerugian finansial yang berkaitan dengan aset atau tanggung jawab hukum, seperti kendaraan, properti, cargo, dll",
  ],
  purchase: {
    title: "Prosedur Pembelian Polis",
    lead: "Proses mendapatkan perlindungan asuransi dari PT. Victoria Insurance, Tbk meliputi langkah-langkah berikut:",
    steps: [
      {
        title: "Kenali Kebutuhan dan Produk",
        text: "Pahami risiko apa yang ingin Anda lindungi (misalnya, kebakaran rumah, kecelakaan mobil) dan pilih produk asuransi umum yang sesuai.",
      },
      {
        title: "Lengkapi Dokumen",
        text: "Anda perlu mengisi formulir aplikasi dan melampirkan dokumen pendukung, seperti kartu identitas, detail objek yang diasuransikan (misalnya, STNK untuk asuransi kendaraan)",
      },
      {
        title: "Pahami Polis",
        text: "Baca dengan teliti syarat dan ketentuan dalam polis, termasuk cakupan perlindungan, pengecualian, batas pertanggungan, dan jumlah deductible (biaya yang harus Anda bayar sendiri saat klaim).",
      },
      {
        title: "Bayar Premi",
        text: "Setelah aplikasi disetujui, Anda wajib membayar premi, yaitu biaya perlindungan asuransi, kepada PT. Victoria Insurance, Tbk Polis Anda akan aktif setelah pembayaran diterima.",
      },
    ] as Step[],
  },
  claim: {
    title: "Prosedur Pengajuan Klaim",
    lead: "Jika terjadi kerugian atau kerusakan yang dijamin dalam polis, Anda dapat mengajukan klaim dengan langkah-langkah berikut:",
    steps: [
      {
        title: "Menilai dan Dokumentasikan Kerusakan",
        text: "Segera setelah insiden terjadi, dokumentasikan kerusakan secara menyeluruh dengan mengambil foto atau video terperinci sebagai bukti.",
      },
      {
        title: "Hubungi PT. Victoria Insurance, Tbk",
        text: "Laporkan kejadian tersebut secepatnya kepada PT. Victoria Insurance, Tbk atau agen Anda. Kami akan memberikan informasi mengenai prosedur spesifik dan formulir klaim yang diperlukan.",
      },
      {
        title: "Isi Formulir Klaim dan Kumpulkan Dokumen",
        text: "Lengkapi formulir klaim yang disediakan dan kumpulkan semua dokumen pendukung, seperti laporan polisi (jika diperlukan), kuitansi perbaikan, atau bukti kerugian lainnya.",
      },
      {
        title: "Kirim Formulir Klaim",
        text: "Kirimkan formulir dan dokumen pendukung ke PT. Victoria Insurance, Tbk sesuai instruksi yang diberikan.",
      },
      {
        title: "Tunggu Proses Verifikasi dan Analisa",
        text: "Pihak PT. Victoria Insurance, Tbk akan memproses klaim Anda, melakukan verifikasi, dan meninjau apakah klaim tersebut memenuhi syarat berdasarkan polis Anda.",
      },
      {
        title: "Terima Pembayaran atau Notifikasi Hasil Klaim",
        text: "Jika klaim disetujui, perusahaan akan membayar kompensasi atau menanggung biaya perbaikan sesuai dengan ketentuan polis. Jika ditolak, Anda akan menerima pemberitahuan tertulis beserta alasannya.",
      },
    ] as Step[],
  },
};

export type LiteracyYear = { year: number; sessions: { title: string; documents: Doc[] }[] };

const up = (path: string) => `https://victoriainsurance.co.id/wp-content/uploads/${path}`;

export const literacy = {
  image: {
    src: "/images/official/literasi-inklusi-2026.png",
    width: 1672,
    height: 941,
    alt: "Kegiatan Literasi dan Inklusi Keuangan Victoria Insurance tahun 2026",
  },
  years: [
    {
      year: 2026,
      sessions: [
        {
          title: "Semester 1 – Inklusi",
          documents: [
            { title: "Daftar Hadir", url: up("2026/06/Inklusi-Semester1-Tahun-2026-Daftar-Hadir.pdf") },
            { title: "Flyer Inklusi", url: up("2026/06/Flyer%20Inklusi%202026.jpeg") },
            { title: "Foto Dokumentasi", url: up("2026/06/FOTO%20DOKUMENTASI%20INKLUSI_27062026.pdf") },
            { title: "Poster", url: up("2026/06/Banner%20Inklusi%202026.pdf") },
          ],
        },
        {
          title: "Semester 1 – Literasi",
          documents: [
            { title: "Daftar Hadir", url: up("2026/06/Literasi-Semester1-Tahun-2026-Daftar-Hadir.pdf") },
            { title: "Materi Digitalisasi data", url: up("2026/06/Materi%20Literasi%202026.pdf") },
            { title: "Foto Dokumentasi", url: up("2026/06/FOTO%20DOKUMENTASI%20LITERASI_29062026.pdf") },
            { title: "Poster", url: up("2026/06/FLYER%20LITERASI%202026.png") },
          ],
        },
      ],
    },
    {
      year: 2025,
      sessions: [
        {
          title: "Semester 1",
          documents: [
            { title: "Daftar Hadir", url: up("2025/07/Literasi-Semester1-Tahun-2025-Daftar-Hadir.pdf") },
            { title: "Materi Digitalisasi data", url: up("2025/07/Literasi-Semester1-Tahun-2025-Materi-Digitalisasi-data.pdf") },
            { title: "Foto Dokumentasi", url: up("2025/07/Literasi-Semester1-Tahun-2025-Foto-Dokumentasi.pdf") },
            { title: "Poster", url: up("2025/07/Literasi-Semester1-Tahun-2025-Poster.pdf") },
          ],
        },
        {
          title: "Semester 2",
          documents: [
            { title: "Daftar Hadir", url: up("2026/02/1.-Literasi_Semester2_Tahun2025_Daftar-Hadir.pdf") },
            { title: "Materi Literasi", url: up("2026/02/2.-Literasi_Semester2_Tahun2025_Materi-Literasi.pdf") },
            { title: "Dokumentasi Foto", url: up("2026/02/3.-Literasi_Semester2_Tahun2025_Dokumentasi-Foto.pdf") },
            { title: "Poster", url: up("2026/02/4.-Literasi_Semester2_Tahun2025_Poster.pdf") },
          ],
        },
      ],
    },
    {
      year: 2024,
      sessions: [
        {
          title: "Semester 1",
          documents: [
            { title: "Daftar Hadir", url: up("2025/07/Literasi-Semester1-Tahun2024-Daftar-Hadir.pdf") },
            { title: "Materi Asuransi Fire", url: up("2025/07/Literasi-Semester1-Tahun2024-Materi-Asuransi-Fire.pdf") },
            { title: "Foto Dokumentasi", url: up("2025/07/Literasi-Semester1-Tahun2024-Foto-Dokumentasi.pdf") },
            { title: "Poster", url: up("2025/07/Literasi-Semester1-Tahun-2024-Poster.pdf") },
          ],
        },
        {
          title: "Semester 2",
          documents: [
            { title: "Daftar Hadir", url: up("2025/07/Literasi-Semester2-Tahun2024-Daftar-Hadir.pdf") },
            {
              title: "Materi Digitalisasi Data",
              url: up("2025/07/Literasi-Semester2-Tahun-2024-Materi-Digitalisasi-Data-dalam-Upaya-Efisiensi-dan-Efektivitas-Proses-Kerja.pdf"),
            },
            { title: "Foto Dokumentasi", url: up("2025/07/Literasi-Semester2-Tahun-2024-Foto-Dokumentasi.pdf") },
            { title: "Poster", url: up("2025/07/Literasi-Semester2-Tahun-2024-Poster.pdf") },
          ],
        },
      ],
    },
    {
      year: 2023,
      sessions: [
        {
          title: "Semester 1",
          documents: [
            { title: "Daftar Hadir", url: up("2025/07/1.-Literasi_Semester1_Daftar-Hadir.pdf") },
            {
              title: "Materi Deskripsi Asuransi Kerugian (General Insurance)",
              url: up("2025/07/2a.-Literasi_Semester1_Materi_Deskripsi-Asuransi-Kerugian-General-Insurance.pdf"),
            },
            {
              title: "Materi Asuransi Harta Benda (Fire Insurance)",
              url: up("2025/07/2b.-Literasi_Semester1_Materi_Asuransi-Harta-Benda-Fire-Insurance.pdf"),
            },
            { title: "Poster Literasi Inklusi", url: up("2025/07/3.-Poster-Literasi-Inklusi-Vins-Tgl.-21-Juni-2023.pdf") },
          ],
        },
        {
          title: "Semester 2",
          documents: [
            { title: "Daftar Hadir", url: up("2025/07/Literasi-Semester2-Tahun-2023-Daftar-Hadir.pdf") },
            { title: "Materi Asuransi Kendaraan Bermotor", url: up("2025/07/Literasi-Semester-2-Materi-Asuransi-Kendaraan-Bermotor.pdf") },
            { title: "Foto Dokumentasi", url: up("2025/07/Literasi-Semester2-Tahun-2023-Foto-1.pdf") },
            { title: "Poster", url: up("2025/07/Literasi-Semester2-Tahun-2023-Poster-1.pdf") },
          ],
        },
      ],
    },
  ] as LiteracyYear[],
};
