export type ServiceIcon = "claim" | "workshop" | "complaint" | "office" | "digital" | "literacy";

export type Service = {
  name: string;
  description: string;
  icon: ServiceIcon;
  href: string;
};

/** Submenu "Layanan" website resmi (KB Bagian 6), kini memiliki halaman sendiri di /layanan/*. */
export const services: Service[] = [
  {
    name: "Informasi Transaksi",
    description: "Prosedur pembelian polis dan tahapan pengajuan klaim.",
    icon: "claim",
    href: "/layanan/informasi-transaksi",
  },
  {
    name: "Bengkel Rekanan",
    description: "Daftar bengkel rekanan wilayah Jabodetabek dan Non Jabodetabek (PDF).",
    icon: "workshop",
    href: "/layanan/bengkel-rekanan",
  },
  {
    name: "Pengaduan Konsumen",
    description: "Kirim pengaduan secara online, serta prosedur dan kanal whistleblowing.",
    icon: "complaint",
    href: "/layanan/pengaduan-konsumen",
  },
  {
    name: "Kantor",
    description: "Kantor Pusat Jakarta dan Kantor Pemasaran Surabaya.",
    icon: "office",
    href: "/layanan/kantor",
  },
  {
    name: "Digital Product",
    description: "Informasi mengenai produk asuransi digital.",
    icon: "digital",
    href: "/layanan/digital-product",
  },
  {
    name: "Literasi & Inklusi",
    description: "Arsip kegiatan literasi dan inklusi keuangan tahun 2023–2026.",
    icon: "literacy",
    href: "/layanan/literasi-inklusi",
  },
];
