/**
 * Dokumen pendukung form klaim per jenis asuransi.
 * Kendaraan Bermotor mengikuti RIPLAY (SIM, STNK, laporan kepolisian bila diperlukan) + foto 4 sisi kendaraan.
 * Kelompok lain adalah USULAN MOCKUP dari praktik umum klaim — perlu dikonfirmasi tim klaim Victoria Insurance.
 */

export type ClaimDocument = {
  id: string;
  label: string;
  /** photo = JPG/PNG dengan pratinjau; document = JPG/PNG/PDF. */
  kind: "photo" | "document";
  optional?: boolean;
  hint?: string;
};

const ktp: ClaimDocument = { id: "ktp", label: "KTP Tertanggung", kind: "document" };
const policeReportOptional: ClaimDocument = {
  id: "laporan-polisi",
  label: "Laporan Kepolisian",
  kind: "document",
  optional: true,
  hint: "Bila diperlukan",
};

const documentSets = {
  vehicle: [
    { id: "tampak-depan", label: "Tampak Depan", kind: "photo" },
    { id: "tampak-belakang", label: "Tampak Belakang", kind: "photo" },
    { id: "samping-kiri", label: "Samping Kiri", kind: "photo" },
    { id: "samping-kanan", label: "Samping Kanan", kind: "photo" },
    { id: "detail-kerusakan", label: "Detail Kerusakan", kind: "photo", hint: "Foto jarak dekat bagian yang rusak" },
    { id: "sim", label: "SIM Pengemudi", kind: "document" },
    { id: "stnk", label: "STNK", kind: "document" },
    { ...policeReportOptional, hint: "Bila kehilangan atau melibatkan pihak ketiga" },
  ],
  property: [
    { id: "foto-objek", label: "Foto Objek Rusak", kind: "photo" },
    { id: "foto-lokasi", label: "Foto Lokasi Kejadian", kind: "photo" },
    ktp,
    { id: "daftar-kerugian", label: "Daftar Kerugian", kind: "document", hint: "Rincian barang & estimasi nilai kerugian" },
    { id: "laporan-instansi", label: "Laporan Instansi Terkait", kind: "document", optional: true, hint: "Mis. kepolisian atau pemadam kebakaran" },
  ],
  money: [
    { id: "foto-lokasi", label: "Foto Lokasi Kejadian", kind: "photo" },
    ktp,
    { id: "laporan-polisi", label: "Laporan Kepolisian", kind: "document" },
    { id: "bukti-jumlah", label: "Bukti Jumlah Uang", kind: "document", hint: "Mis. catatan kas atau bukti penarikan" },
  ],
  personal: [
    ktp,
    { id: "resume-medis", label: "Resume Medis / Surat Dokter", kind: "document" },
    { id: "kuitansi", label: "Kuitansi Biaya Pengobatan", kind: "document" },
    policeReportOptional,
  ],
  cargo: [
    { id: "foto-barang", label: "Foto Barang Rusak", kind: "photo" },
    { id: "foto-kemasan", label: "Foto Kemasan / Kontainer", kind: "photo" },
    { id: "dokumen-pengiriman", label: "Dokumen Pengiriman", kind: "document", hint: "B/L, AWB, atau surat jalan" },
    { id: "invoice", label: "Invoice & Packing List", kind: "document" },
    { id: "berita-acara", label: "Berita Acara Kerusakan", kind: "document" },
  ],
  liability: [
    ktp,
    { id: "surat-tuntutan", label: "Surat Tuntutan Pihak Ketiga", kind: "document" },
    { id: "bukti-pendukung", label: "Bukti Pendukung", kind: "document", hint: "Dokumen terkait kejadian" },
  ],
  cyber: [
    { id: "tangkapan-layar", label: "Tangkapan Layar Kejadian", kind: "photo" },
    ktp,
    { id: "bukti-transaksi", label: "Bukti Transaksi / Mutasi Rekening", kind: "document" },
    policeReportOptional,
  ],
} satisfies Record<string, ClaimDocument[]>;

/** Slug produk (data/products.ts) → kelompok dokumen. */
const setBySlug: Record<string, keyof typeof documentSets> = {
  "kendaraan-bermotor": "vehicle",
  "harta-benda": "property",
  rekayasa: "property",
  "barang-bergerak": "property",
  uang: "money",
  "kecelakaan-diri": "personal",
  kesehatan: "personal",
  perjalanan: "personal",
  pengangkutan: "cargo",
  "tanggung-gugat": "liability",
  "directors-and-officers-liability": "liability",
  "personal-cyber": "cyber",
  "corporate-cyber": "cyber",
};

export const claimDocumentsFor = (productSlug: string): ClaimDocument[] =>
  documentSets[setBySlug[productSlug] ?? "liability"];
