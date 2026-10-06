export type ServiceIcon = "claim" | "workshop" | "complaint" | "office" | "digital" | "literacy";

export type Service = {
  name: string;
  description: string;
  icon: ServiceIcon;
  href: string;
};

/** Submenu "Layanan" website resmi (KB Bagian 6), urutan sesuai menu resmi; tiap layanan punya halaman di /layanan/*. */
export const services: Service[] = [
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
    name: "Literasi & Inklusi",
    description: "Arsip kegiatan literasi dan inklusi keuangan tahun 2023–2026.",
    icon: "literacy",
    href: "/layanan/literasi-inklusi",
  },
  {
    name: "Informasi Transaksi",
    description: "Prosedur pembelian polis dan tahapan pengajuan klaim.",
    icon: "claim",
    href: "/layanan/informasi-transaksi",
  },
];

export const complaintFormLink = { label: "Form Pengaduan", href: "/pengaduan" };

/** Menu Layanan untuk dropdown header dan menu samping; Form Pengaduan menyusul Pengaduan Konsumen. */
export const serviceMenuLinks = services.flatMap((service) => {
  const link = { label: service.name, href: service.href };
  return service.href === "/layanan/pengaduan-konsumen" ? [link, complaintFormLink] : [link];
});
