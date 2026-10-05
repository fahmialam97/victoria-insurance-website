import { official } from "./site";

export type ServiceIcon = "claim" | "workshop" | "complaint" | "office" | "digital" | "literacy";

export type Service = {
  name: string;
  description: string;
  icon: ServiceIcon;
  href: string;
};

/** Submenu "Layanan" website resmi (KB Bagian 6), deskripsi tanpa klaim baru. */
export const services: Service[] = [
  {
    name: "Informasi Transaksi",
    description: "Prosedur pembelian polis dan tahapan pengajuan klaim.",
    icon: "claim",
    href: official("/literasi-inklusi-keuangan/"),
  },
  {
    name: "Bengkel Rekanan",
    description: "Daftar bengkel rekanan wilayah Jabodetabek dan Non Jabodetabek (PDF).",
    icon: "workshop",
    href: official("/bengkel-rekanan/"),
  },
  {
    name: "Pengaduan Konsumen",
    description: "Kirim pengaduan secara online, serta prosedur dan kanal whistleblowing.",
    icon: "complaint",
    href: "/pengaduan",
  },
  {
    name: "Kantor",
    description: "Kantor Pusat Jakarta dan Kantor Pemasaran Surabaya.",
    icon: "office",
    href: official("/kantor-cabang/"),
  },
  {
    name: "Digital Product",
    description: "Informasi mengenai produk asuransi digital.",
    icon: "digital",
    href: official("/digital-product/"),
  },
  {
    name: "Literasi & Inklusi",
    description: "Arsip kegiatan literasi dan inklusi keuangan tahun 2023–2026.",
    icon: "literacy",
    href: official("/lit-ink/"),
  },
];
