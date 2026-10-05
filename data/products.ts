export type ProductIcon =
  | "property"
  | "vehicle"
  | "accident"
  | "cargo"
  | "engineering"
  | "money"
  | "liability"
  | "movable"
  | "travel"
  | "dno"
  | "personalCyber"
  | "corporateCyber"
  | "health";

export type ProductDocument = { title: string; url: string };

export type Product = {
  slug: string;
  name: string;
  icon: ProductIcon;
  /** Paragraf deskripsi dari halaman /produk/ resmi. */
  description: string[];
  /** Deskripsi singkat homepage resmi; ada berarti produk tampil di homepage. */
  summary?: string;
  documents: ProductDocument[];
};

export const productsHref = "/produk";

export const productHref = (product: Product) => `${productsHref}#${product.slug}`;

const riplay = (file: string) => `https://victoriainsurance.co.id/wp-content/uploads/2026/01/${file}`;

/** Ke-13 produk di halaman /produk/ resmi (KB Bagian 5), urutan sesuai website resmi. */
export const products: Product[] = [
  {
    slug: "harta-benda",
    name: "Asuransi Harta Benda",
    icon: "property",
    description: [
      "Sebaik apapun Anda menjaga harta benda Anda, masih ada kemungkinan terjadi peristiwa yang mengakibatkan kerusakan atas Harta Benda Anda. Produk asuransi ini akan memastikan penggantian atas kerusakan atau kerugian pada harta benda akibat kebakaran, bencana alam, kerusuhan, atau kerusakan lainnya yang timbul dari suatu kejadian yang tiba-tiba.",
    ],
    summary:
      "Adalah suatu pertanggungan yang memberikan jaminan atau proteksi atas kerugian dan/atau kerusakan pada harta benda",
    documents: [{ title: "RIPLAY Asuransi Harta Benda", url: riplay("RIPLay-Asuransi-Harta-Benda.pdf") }],
  },
  {
    slug: "kendaraan-bermotor",
    name: "Asuransi Kendaraan Bermotor",
    icon: "vehicle",
    description: [
      "Sebaik apapun Anda berkendara, masih ada kemungkinan terjadi kecelakaan dalam lalu lintas kendaraan bermotor. Produk ini memberikan kepastian ganti rugi atas kerusakan sebagian dan kerusakan keseluruhan atas Kendaraan Bermotor atau kehilangan Kendaraan Bermotor.",
      "Proteksi tambahan dapat dinikmati dengan jaminan atas Tanggung Jawab Hukum pada Pihak Ketiga (Korban kecelakaan), Kecelakaan Diri Pengemudi dan Penumpang yang mengakibatkan Kematian, Cacat Tetap dan pengeluaran biaya pengobatan.",
    ],
    summary:
      "Memberikan jaminan untuk jenis kerusakan ringan, rusak berat hingga kehilangan. Yang diakibatkan oleh tabrakan, benturan, terbalik, tergelincir, pencurian, kebakaran atau sebab lain yang dijamin.",
    documents: [
      { title: "RIPLAY Asuransi Kendaraan Bermotor", url: riplay("RIPLay-Asuransi-Kendaraan-Bermotor-Umum.pdf") },
    ],
  },
  {
    slug: "kecelakaan-diri",
    name: "Asuransi Kecelakaan Diri",
    icon: "accident",
    description: [
      "Hati-hati melangkah, kecelakaan dapat terjadi kapan dan dimana saja. Produk ini akan memberikan ganti rugi atas kecelakaan yang menimpa diri akibat peristiwa yang tiba-tiba dan mengakibatkan Kematian, Cacat Tetap dan pengeluaran biaya pengobatan. Perlindungan dapat dinikmati 24/7 dalam periode pertanggungan tertentu, misalnya selama satu tahun atau selama satu perjalanan.",
    ],
    summary:
      "Asuransi Kecelakaan Diri memberikan jaminan terhadap resiko Kematian, Cacat Tetap, Biaya Perawatan atau Pengobatan yang disebabkan oleh suatu kecalakaan yang diderita.",
    documents: [{ title: "RIPLAY Asuransi Kecelakaan Diri", url: riplay("RIPLay-Asuransi-Kecelakaan-Diri.pdf") }],
  },
  {
    slug: "pengangkutan",
    name: "Asuransi Pengangkutan",
    icon: "cargo",
    description: [
      "Pemindahan barang senantiasa menghadapi berbagai risiko yang dapat mengakibatkan kerusakan atas barang. Produk ini akan memastikan kerugian finansial akibat kerusakan barang tersebut mendapatkan ganti rugi dan bisnis Anda berjalan lancar. Produk ini dapat digunakan untuk perjalanan Laut, Darat dan Udara.",
    ],
    summary:
      "Asuransi ini memberikan jaminan ganti rugi atas risiko kerugian yang terjadi selama kegiatan pengangkutan barang dari: tempat asal sampai ke tempat tujuan.",
    documents: [{ title: "RIPLAY Asuransi Pengangkutan", url: riplay("RIPLay-Asuransi-Pengangkutan.pdf") }],
  },
  {
    slug: "rekayasa",
    name: "Asuransi Rekayasa",
    icon: "engineering",
    description: [
      "Pekerjaan Konstruksi sering menghadirkan mesin dan struktur raksasa yang selama proses konstruksi maupun instalasi dapat mengalami kerusakan akibat kecelakaan yang datangnya secara tiba-tiba yang tidak dapat diperkirakan sebelumnya. Produk ini memastikan konstruksi maupun instalasi dapat diselesaikan pada waktunya dengan memberikan ganti rugi atas kerusakan yang terjadi.",
    ],
    summary:
      "Memberikan perlindungan atas pekerjaan-pekerjaan konstruksi, instalasi mesin maupun instalasi peralatan elektronik dari segala risiko kerugian",
    documents: [{ title: "RIPLAY Asuransi Rekayasa", url: riplay("RIPLay-Asuransi-Rekayasa.pdf") }],
  },
  {
    slug: "uang",
    name: "Asuransi Uang",
    icon: "money",
    description: [
      "Uang merupakan magnet atas tindakan kejahatan, baik pencurian maupun perampokan. Bernilai tinggi dalam ukuran kecil, seringkali menjadi sasaran pencurian pada tempat penyimpanan dan menjadi sasaran kejahatan pada saat pengiriman dari satu tempat ke tempat lain. Produk ini memberikan penggantian atas kerugian akibat hilangnya uang dari tindak kejahatan tersebut. Produk ini juga dapat digunakan untuk melindungi benda-benda lain yang setara uang.",
    ],
    summary:
      "Produk asuransi ini dikhususkan untuk memberikan perlindungan terhadap uang atau yang dipersamakan dengan uang",
    documents: [{ title: "RIPLAY Asuransi Uang", url: riplay("RIPLay-Asuransi-Uang.pdf") }],
  },
  {
    slug: "tanggung-gugat",
    name: "Asuransi Tanggung Gugat",
    icon: "liability",
    description: [
      "Jenis asuransi ini akan memberikan perlindungan terhadap risiko kerugian akibat adanya tuntutan/gugatan hukum dari pihak ketiga, baik yang berupa pembayaran ganti rugi maupun biaya selama proses hukum berjalan.",
    ],
    documents: [{ title: "RIPLAY Asuransi Tanggung Gugat", url: riplay("RIPLay-Asuransi-Tanggung-Gugat-Umum.pdf") }],
  },
  {
    slug: "barang-bergerak",
    name: "Asuransi Barang Bergerak",
    icon: "movable",
    description: [
      "Asuransi Barang Bergerak (atau sering disebut Moveable All Risk Insurance) adalah produk asuransi yang dirancang khusus untuk melindungi aset atau peralatan yang sifatnya portabel (mudah dibawa) dan sering berpindah tempat dari risiko kerusakan atau kehilangan.",
    ],
    documents: [{ title: "RIPLAY Asuransi Barang Bergerak", url: riplay("RIPLay-Asuransi-Barang-Bergerak.pdf") }],
  },
  {
    slug: "perjalanan",
    name: "Asuransi Perjalanan",
    icon: "travel",
    description: [
      "Asuransi Perjalanan (atau Travel Insurance) adalah jenis asuransi yang memberikan perlindungan finansial terhadap risiko-risiko tidak terduga yang terjadi selama seseorang melakukan perjalanan, baik di dalam negeri (domestik) maupun luar negeri (internasional).",
    ],
    documents: [{ title: "RIPLAY Victoria Travel Insurance", url: riplay("RIPLay-Victoria-Travel-Insurance.pdf") }],
  },
  {
    slug: "directors-and-officers-liability",
    name: "Asuransi Directors and Officers Liability",
    icon: "dno",
    description: [
      "Asuransi Direksi dan Pejabat (atau Directors and Officers Liability Insurance – D&O) adalah jenis asuransi tanggung gugat yang dirancang untuk melindungi aset pribadi para pemimpin perusahaan (direktur, komisaris, dan pejabat eksekutif) dari tuntutan hukum yang timbul akibat keputusan atau tindakan mereka dalam mengelola perusahaan.",
    ],
    documents: [{ title: "RIPLAY Directors and Officers Liability Insurance", url: riplay("RIPLAY-UMUM-DO.pdf") }],
  },
  {
    slug: "personal-cyber",
    name: "Asuransi Victoria Personal Cyber",
    icon: "personalCyber",
    description: [
      "Asuransi Victoria Personal Cyber adalah produk proteksi yang dirancang untuk melindungi individu dan keluarga dari kerugian finansial serta dampak buruk akibat kejahatan dunia maya (cyber crime).",
    ],
    documents: [
      { title: "RIPLAY Victoria Personal Cyber Insurance", url: riplay("RIPLay-Victoria-Personal-Cyber-Insurance.pdf") },
    ],
  },
  {
    slug: "corporate-cyber",
    name: "Asuransi Victoria Corporate Cyber",
    icon: "corporateCyber",
    description: [
      "Victoria Corporate Cyber Insurance adalah produk perlindungan strategis yang dirancang untuk melindungi bisnis dari dampak finansial dan operasional yang merusak akibat serangan siber, pelanggaran data, atau kegagalan sistem TI.",
    ],
    documents: [{ title: "RIPLAY Victoria Corporate Cyber Insurance", url: riplay("RIPLAY-UMUM-CYBER-CORPORATE.pdf") }],
  },
  {
    slug: "kesehatan",
    name: "Asuransi Kesehatan",
    icon: "health",
    description: [
      "Asuransi kesehatan, jenis produk asuransi yang secara khusus menjamin biaya kesehatan atau perawatan para anggota asuransi tersebut jika mereka jatuh sakit atau mengalami kecelakaan.",
    ],
    documents: [
      { title: "RIPLAY Asuransi Rey Complete Care", url: riplay("RIPLay-Asuransi-Rey-Complete-Care.pdf") },
      { title: "RIPLAY Asuransi Rey Critical Care", url: riplay("RIPLay-Asuransi-Rey-Critical-Care.pdf") },
      { title: "RIPLAY Asuransi Rey Outpatient Care", url: riplay("RIPLay-Asuransi-Rey-Outpatient-Care.pdf") },
      {
        title: "RIPLAY Asuransi Rey Accident & Infection Care",
        url: riplay("RIPLay-Asuransi-Rey-Accident-Infection-Care.pdf"),
      },
      { title: "RIPLAY Asuransi REY Inpatient Allowance", url: riplay("RIPLay-REY-Inpatient-Allowance.pdf") },
    ],
  },
];

export const TOTAL_PRODUCTS = products.length;

/** Produk yang tampil di homepage resmi, dengan deskripsi singkat homepage. */
export const featuredProducts = products.filter((p): p is Product & { summary: string } => !!p.summary);
