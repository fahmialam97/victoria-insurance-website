export type ServiceIcon = "claim" | "workshop" | "complaint" | "office" | "transaction" | "literacy";

export type Service = {
  name: string;
  description: string;
  icon: ServiceIcon;
  href: string;
};

/**
 * Layanan dari submenu "Layanan" website resmi (KB Bagian 6); halaman tetap di /layanan/* agar link lama tidak rusak.
 * Di navigasi mockup, layanan dibagi ke menu Tentang Kami (grup "Layanan") dan menu Klaim. Digital Product dihapus;
 * Klaim Asuransi (form baru di /klaim) ditambahkan.
 */
export const services: Service[] = [
  {
    name: "Kantor",
    description: "Kantor Pusat Jakarta dan Kantor Pemasaran Surabaya.",
    icon: "office",
    href: "/layanan/kantor",
  },
  {
    name: "Klaim Asuransi",
    description: "Laporkan klaim secara online beserta dokumen pendukungnya.",
    icon: "claim",
    href: "/klaim",
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
    icon: "transaction",
    href: "/layanan/informasi-transaksi",
  },
];

export const complaintFormLink = { label: "Form Pengaduan", href: "/pengaduan" };

const serviceLink = (href: string) => {
  const service = services.find((s) => s.href === href)!;
  return { label: service.name, href: service.href };
};

/** Grup "Layanan" di dalam menu Tentang Kami. */
export const aboutServiceLinks = [
  serviceLink("/layanan/kantor"),
  serviceLink("/layanan/literasi-inklusi"),
  serviceLink("/layanan/informasi-transaksi"),
];

/** Halaman Klaim Asuransi: form laporan klaim online (simulasi UI, seperti form pengaduan). */
export const claimHref = "/klaim";

/** Menu Klaim untuk dropdown header dan menu samping. */
export const claimMenuLinks = [
  serviceLink("/layanan/pengaduan-konsumen"),
  serviceLink("/layanan/bengkel-rekanan"),
  { label: "Klaim Asuransi", href: claimHref },
];
