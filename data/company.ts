import type { NavGroup } from "./navigation";

export type CompanyImage = { src: string; width: number; height: number; alt: string };

export type Person = {
  slug: string;
  name: string;
  position: string;
  photo: CompanyImage;
  bio: { heading?: string; paragraphs: string[] }[];
};

const img = (file: string, width: number, height: number, alt: string): CompanyImage => ({
  src: `/images/official/tentang-kami/${file}`,
  width,
  height,
  alt,
});

export const aboutHref = "/tentang-kami";

export const aboutLinks = {
  profile: { label: "Profil Perusahaan", href: aboutHref },
  vision: { label: "Visi dan Misi", href: `${aboutHref}/visi-dan-misi` },
  network: { label: "Jaringan Bisnis", href: `${aboutHref}/jaringan-bisnis` },
  awards: { label: "Penghargaan", href: `${aboutHref}/penghargaan` },
  career: { label: "Karir", href: `${aboutHref}/karir` },
  structure: { label: "Struktur Organisasi", href: `${aboutHref}/struktur-organisasi` },
  commissioners: { label: "Dewan Komisaris", href: `${aboutHref}/dewan-komisaris` },
  directors: { label: "Direksi", href: `${aboutHref}/direksi` },
};

/** Menu Tentang Kami, dipakai di dropdown header dan menu samping halaman. */
export const aboutMenu: { title?: string; links: NavGroup["links"] }[] = [
  {
    links: [aboutLinks.profile, aboutLinks.vision, aboutLinks.network, aboutLinks.awards, aboutLinks.career],
  },
  {
    title: "Manajemen",
    links: [aboutLinks.structure, aboutLinks.commissioners, aboutLinks.directors],
  },
];

/** Halaman /tentang-kami/ website resmi (KB 8.1). */
export const profile = {
  paragraphs: [
    "Perusahaan ini telah berdiri sejak tahun 1978 dengan nama PT Asuransi Agung Asia, Pada Nopember 1989 berganti nama menjadi PT Asuransi SUMMA dan berganti kembali pada Juli 1993 dengan nama PT Asuransi Umum Centris. Bulan Agustus 2010, seluruh saham dan manajemen perusahaan diambil alih oleh group perusahaan besar di bawah bendera VICTORIA – dan nama perusahaan dirubah menjadi PT Victoria Insurance. Group Victoria adalah sebuah induk perusahaan investasi nasional dengan portolio bisnis termasuk jasa keuangan, perbankan,pertanian, perkebunan dll. Pada tahun 2013 Kantor Pusat Perseroan menempati gedung baru yaitu The Victoria Building. Bulan Juli 2013 terdapat peningkatan modal disetor hingga mencapai Rp 100 miliar. Pada tahun 2015 terjadi perubahan status Perseroan menjadi Perusahaan Terbuka, dan perseroan merencanakan Penawaran Umum Perdana Saham (IPO).",
    "Perusahaan menyediakan jasa asuransi umum, baik program standard maupun khusus, termasuk asuransi: kebakaran, kendaraan bermotor, angkutan laut, engineering, surety bond, kepada pelanggan antara lain: multi-finance, perbankan, pemerintah daerah, badan usaha milik negara, swasta dan individu.",
  ],
  timeline: [
    {
      year: "1978",
      label: "Start",
      text: "PT Victoria Insurance Tbk didirikan dengan nama PT Asuransi Agung Asia pada tanggal 11 Mei 1978, sebagai perusahaan asuransi umum yang menawarkan berbagai produk dan jasa perlindungan kepada pelanggan dari berbagai segmen. Pendirian Perseroan telah dicatat dalam Akta No. 58 tanggal 11 Mei 1978 oleh Notaris Haji Bebasa Daeng Lalo, SH. Akta tersebut telah disetujui oleh Kementerian Hukum dan Hak Asasi Manusia berdasarkan Surat Keputusan No. Y.A.5/272/20 tanggal 14 Agustus 1978.",
    },
    {
      year: "1989",
      label: "November",
      text: "Dalam perjalanannya, Perseroan mengganti nama menjadi PT Asuransi SUMMA pada tahun 1989 berdasarkan Akta No. 79 tanggal 30 November 1989 oleh Notaris Ny. Rukmasanti Hardjasatya SH di Jakarta.",
    },
    {
      year: "1993",
      label: "Juli",
      text: "Perseroan kemudian berubah nama kembali menjadi PT Asuransi umum Centris pada tahun 1993 berdasarkan Akta No. 78 tanggal 29 April 1993 oleh Notaris Ny. Rukmasanti Hardjasatya SH di Jakarta.",
    },
    {
      year: "2010",
      label: "Agustus",
      text: "Pada tahun 2010, Perseroan diakuisisi oleh PT Victoria Sekuritas dan resmi menjadi bagian dari grup Victoria Investama dengan ditandai pergantian nama menjadi PT Victoria Insurance berdasarkan Akta No. 93 tanggal 19 Agustus 2010 oleh Notaris Suwarni Sukiman, SH. Akta tersebut telah disetujui oleh Kementerian Hukum dan Hak Asasi Manusia berdasarkan Surat Keputusan No. AHU-43243.AH.01.02. tanggal tanggal 2 September 2010.",
    },
    {
      year: "2015",
      label: "September",
      text: "Dalam mencapai Visi Perseroan untuk menjadi perusahaan asuransi umum nasional terbaik di kelasnya dalam memberikan nilai-nilai kepada tertanggung, mitra usaha, pegawai, Pemegang Saham, dan masyarakat, maka pada tangal 28 September 2015, Perseroaan melaksanakan penawaran umum perdana di Bursa Efek Indonesia. Pelaksanaan penawaran umum tersebut telah meningkatkan permodalan yang diperlukan Perseroan dalam pengembangan usahanya.",
    },
  ],
  corporateStructure: img(
    "corporate-capital.jpg",
    2560,
    1440,
    "Corporate Structure: PT Victoria Investama Tbk membawahi PT Victoria Insurance Tbk, PT Victoria Sekuritas Indonesia, PT Bank Victoria International Tbk, PT Victoria Manajemen Investasi, dan PT Victoria Alife Indonesia. Share Capital: PT Victoria Investama Tbk 84,93%, Aldo Jusuf Tjahaja 0,69%, Masyarakat 14,38%.",
  ),
};

/** Halaman /visi-dan-misi/ website resmi (KB 8.2). */
export const visionMission = {
  vision: "Menjadi perusahaan asuransi umum nasional yang sehat, kuat, efisien dan terpercaya",
  missions: [
    "Menjaga dan memelihara kepentingan nasabah dengan memberikan pelayanan yang cepat dan akurat",
    "Menyediakan produk-produk asuransi yang inovatif, kompetitif dan bermutu.",
  ],
};

/** Halaman /jaringan-bisnis/ website resmi (KB 8.6). */
export const businessNetwork = {
  strategy: [
    "Perseroan secara konsisten terus menyempurnakan business Process.",
    "Perseroan terus memperkuat sinergi dan kerjasama baik di dalam maupun luar Group Victoria. Tak hanya itu, Perseroan terus memperluas jaringan distribusi pemasaran dengan menambah rekanan baru baik bank, multifinance dan broker untuk terus mengembangkan usaha perseroan.",
    "Pendekatan teknologi dalam sistem pemasaran termasuk ikut serta dalam Program Pemerintah terkait industri 4.0 (Transformasi Digital).",
    "Mengoptimalkan struktur dan fungsi-fungsi organisasi yang ada.",
    "Meningkatan pendidikan dan pelatihan SDM.",
  ],
  prospects:
    "Kondisi perekonomian nasional diharapkan akan terus bertumbuh. Oleh karena itulah, Perseroan menetapkan target pertumbuhan yang cukup tinggi yang akan masih di dominasi oleh lini usaha harta benda, kendaraan bermotor, cargo dan kecelakaan diri. Untuk mendukung pencapaian target tersebut, Perseroan akan berinovasi dengan mengembangkan sistem pemasaran digital sesuai perkembangan teknologi saat ini. Perseroan juga akan melakukan restrukturisasi portofolio usaha serta lebih selektif dalam pemilihan risiko dan sumber bisnis yang baik. Terkait kegiatan operasionalnya, Perseroan secara berkala melakukan evaluasi serta terus memperbaiki Standard kerja disetiap divisi.",
  partners: [
    {
      title: "Jaringan Reasuransi",
      names: [
        "PT Reasuransi Nusantara Makmur (Nusantara Re)",
        "PT Indoperkasa Suksesjaya Reasuransi (Ina Re)",
        "PT Tugu Reasuransi Indonesia (Tugu Re)",
        "PT Reasuransi Indonesia Utama (Indo Re)",
        "General Insurance Corporation of India (GIC)",
        "R + V Versicherung AG",
      ],
    },
    {
      title: "Broker Reasuransi",
      names: [
        "PT AON Benfield Indonesia",
        "PT Asia Reinsurance Brokers",
        "PT Chartered Reinsurance Brokers",
        "PT Cipta Colemon Asia Reinsurance Broker (CC Asia)",
        "PT Energi Mandiri Internasional",
        "PT Igna Asia",
        "PT Mega Jasa Reinsurance Brokers",
        "PT Simas Reinsurance Brokers",
        "PT Smartindo Pialang Reasuransi",
        "PT TrinityRE Reinsurance Brokers",
      ],
    },
    { title: "Rekanan Multifinance", names: ["PT Emperor Finance Indonesia"] },
    {
      title: "Rekanan Bank",
      names: ["PT Bank Victoria International, Tbk", "PT Bank Capital Indonesia, Tbk", "PT Bank Central Asia, Tbk"],
    },
    {
      title: "Direct Broker",
      names: [
        "PT AON Indonesia",
        "Bang Jamin",
        "PT Dritama Brokerindo",
        "PT Fresnel Perdana Mandiri",
        "PT Insurance Broking Service (IBS)",
        "PT Kalibesar Raya Utama Insurance Brokers (KBRU)",
        "PT Manggala Artha Sejahtera",
        "PT Mitra Jasa Pratama (Qoala)",
        "PT Mitra Iswara & Rorimpandey",
        "PT Mitra Harmoni Insurance Broker",
        "PT National Insurance Brokers",
        "PT Partnerindo Inti Cipta",
        "PT Pasarpolis Indonesia",
        "PT Proteksi Digital Pialang Asuransi (Prodigi)",
        "PT Solusi Utama Tekno Broker Asuransi (Igloo)",
        "PT Vertika Technologies Nusantara (REY)",
        "PT Willis Towers Watson Insurance Broker Indonesia",
      ],
    },
  ],
  agents: [
    { registration: "20220914.A01-000000035", name: "Irwan Sugiharto", city: "Surabaya" },
    { registration: "20221111.A01-000000026", name: "Rudy Tamsir", city: "Jakarta" },
    { registration: "20221111.A01-000000037", name: "Lim Gito", city: "Jakarta" },
    { registration: "20231123.A01-000000034", name: "Ferdyan Tamsir", city: "Jakarta" },
    { registration: "20250603.A02-000000018", name: "Juniar Eka Putri", city: "Jakarta" },
    { registration: "20250611.A02-000000017", name: "Hartatik", city: "Jakarta" },
    { registration: "20250702.A01-000000017", name: "Kevin Jeremy Piring", city: "Jakarta" },
    { registration: "20250702.A02-000000019", name: "Cheryl Callista Lim", city: "Jakarta" },
    { registration: "20250806.A02-000000033", name: "Nur Kholifah", city: "Jakarta" },
    { registration: "20250811.A02-000000030", name: "Fanidia Larasati Santoso", city: "Jakarta" },
    { registration: "20250811.A02-000000037", name: "Endang Sasmiati", city: "Jakarta" },
  ],
};

/** Halaman /penghargaan/ website resmi (KB 8.7); teks asli berbahasa Inggris. */
export const awards = {
  highlights: [
    {
      title: "Warta Ekonomi Magazine – 19th Edition, 2015",
      items: [
        "Company was awarded as top three best financial performance in 2015 for category “General Insurance Company with Asset Less than Rp. 250 billion.",
      ],
    },
    {
      title: "Media Asuransi Magazine – June 2016",
      items: [
        "Company was awarded as top second best financial performance in 2016 for category “General Insurance Company with Equity of up to Rp. 250 billion.",
      ],
    },
    {
      title: "Infobank Magazine – June 2016",
      items: [
        "Best Insurance for category Public Company Insurance",
        "Top three for category Gross Premium Income up to 250 billion",
        "Number four for category Indonesian Private Owned Company",
        "Number five for category Assets under Rp. 1 trillion",
        "Number six for category Paid up capital above Rp. 100 billion",
      ],
    },
    { title: "Media Asuransi Magazine – Juli 2018", items: ["Best General Insurance 2018"] },
  ],
  // Detail penghargaan 2018–2024 hanya tersedia dalam gambar resmi; alt = teks pada gambar
  gallery: [
    {
      year: "2024",
      image: img(
        "penghargaan-2024.png",
        879,
        464,
        "Bisnis Indonesia Financial Awards, September 2024: The Most Efficient Insurance Asuransi Umum Aset < Rp 1 Triliun",
      ),
    },
    {
      year: "2023–2024",
      image: img(
        "penghargaan-2023-2024.png",
        1068,
        512,
        "Media Asuransi September 2023: Best General Insurance 2023 kelompok Ekuitas Rp100–200 miliar; Media Asuransi Oktober 2024: Best General Insurance 2024 kelompok Ekuitas Rp150–250 miliar",
      ),
    },
    {
      year: "2021–2022",
      image: img(
        "penghargaan-2022.png",
        956,
        512,
        "Majalah Investor 2022: Emiten Terbaik 2022 Sektor Asuransi; Majalah Infobank: Financial Performance Full-Year 2021 predikat Excellent",
      ),
    },
    {
      year: "2021",
      image: img(
        "penghargaan-2021.jpg",
        963,
        542,
        "Penghargaan Kementerian PPN/Bappenas 24 November 2021 atas sumbangsih program TPB/SDGs; Sertifikat Keanggotaan Konsorsium Asuransi Risiko Khusus (KARK) 2022–2023",
      ),
    },
    {
      year: "2020",
      image: img(
        "penghargaan-2020.png",
        1148,
        528,
        "Investor Magazine Juli 2020: Best Listed Companies 2020; Infobank Agustus 2020: peringkat 1 asuransi umum premi bruto di bawah Rp100 miliar; Media Asuransi Oktober 2020: Best General Insurance 2020",
      ),
    },
    {
      year: "2018",
      image: img(
        "penghargaan-2018.jpg",
        961,
        376,
        "Sertifikat Best General Insurance 2018 Media Asuransi dan sertifikat Warta Ekonomi Indonesia Insurance Awards 2018",
      ),
    },
  ],
};

/** Halaman /struktur-organisasi/ website resmi (KB 8.3), bagan terbaru Oktober 2026. */
export const orgStructure = [
  {
    title: "Dewan Komisaris",
    image: img(
      "struktur-dewan-komisaris.jpg",
      3300,
      2550,
      "Bagan Dewan Komisaris: Sulistijowati (Komisaris Utama) dengan Nomination & Remuneration Committee, Tomi Parisianto Wibowo (Komisaris Independen) dengan Audit Committee, Jimmy P. Watulingas (Komisaris Independen) dengan Risk Monitoring Committee",
    ),
  },
  {
    title: "Direksi",
    image: img(
      "struktur-direksi.jpg",
      2200,
      1700,
      "Bagan organisasi Direksi PT Victoria Insurance, Tbk yang dipimpin Suwandi Suharto (President Director), dengan Rosalina Gunawan (Compliance & HR Director) dan Fatchurhuda (Technical Director)",
    ),
  },
];

const photo = (file: string, name: string, size = 600) => img(file, size, size, `Foto ${name}`);

/** Halaman /dewan-komisaris/ website resmi (KB 8.3). */
export const commissioners: Person[] = [
  {
    slug: "sulistijowati",
    name: "Sulistijowati",
    position: "Komisaris Utama",
    photo: photo("sulistijowati.jpg", "Sulistijowati"),
    bio: [
      {
        paragraphs: [
          "Warga Negara Indonesia, berdomisili di Jakarta. Memperoleh gelar S1 Ekonomi dari Universitas Indonesia, Depok, Indonesia pada tahun 1982. Menjabat sebagai Komisaris Utama Perseroan sejak tahun 2012 berdasarkan Keputusan Ketua Badan Pengawasan Pasar Modal dan Lembaga Keuangan No. KEP-596/BL/2012 tanggal 31 Oktober 2012. Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris lainnya, anggota Direksi, serta Pemegang Saham Utama dan Pengendali.",
          "Beliau memiliki pengalaman sebagai Komisaris Utama di PT Bank Victoria International Tbk (2002-2012), Komisaris di PT Bank Victoria International Tbk (2000-2002), Asisten Direktur Pelaksana di Pegasus (1998-2000), Direktur Utama di PT Duta Kirana Finance (1996-1998), Vice President Project Finance di Chase Manhattan Bank, NA (1993-1996), dan Vice President – Team Leader of Corporate Finance di Citibank, NA (1984-1992).",
        ],
      },
    ],
  },
  {
    slug: "tomi-parisianto-wibowo",
    name: "Tomi Parisianto Wibowo",
    position: "Komisaris Independen",
    photo: photo("tomi-parisianto-wibowo.jpg", "Tomi Parisianto Wibowo"),
    bio: [
      {
        paragraphs: [
          "Warga negara Indonesia, berdomisili di Jakarta. Memperoleh gelar S1 Akuntansi dari Universitas Indonesia, Depok, Indonesia, pada tahun 1997.",
          "Menjabat sebagai Komisaris Independen Perseroan sejak tahun 2024 berdasarkan Keputusan Anggota Dewan Komisioner Otoritas Jasa Keuangan Nomor KEP-598/PD.02/2024 tanggal 22 Oktober 2024. Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris lainnya, anggota Direksi, serta Pemegang Saham Utama dan Pengendali.",
          "Saat ini, beliau juga menjabat sebagai Anggota komite audit di PT Perusahaan Listrik Negara (Persero) (sejak 2021), dan Associate partner di KAP Heliantono & Rekan (Parker Russell Indonesia) (sejak 2021).",
          "Beliau memiliki pengalaman sebagai SEVP Finance, Accounting, & Strategic Performance di PT Bank Victoria International, Tbk (2018 – 2021), Head of Finance & Accounting di PT Bank QNB Indonesia Tbk (2013 – 2018), Group Head of Financial Control and Corporate Planning di PT Bank ICB Indonesia Tbk (2011 – 2013), Senior Manager Financial Assurance di KAP Tanudiredja, Wibisana & Rekan (PricewaterhouseCoopers) (2006 – 2011), dan Associate Manager Assurance and Advisory Services di KAP Prasetio, Sarwoko & Sandjaja (Ernst & Young) (1997-2006).",
        ],
      },
    ],
  },
  {
    slug: "jimmy-paulus-watulingas",
    name: "Jimmy Paulus Watulingas",
    position: "Komisaris Independen",
    photo: img("jimmy-paulus-watulingas.png", 155, 158, "Foto Jimmy Paulus Watulingas"),
    bio: [
      {
        paragraphs: [
          "Warga Negara Indonesia, berdomisili di Jakarta. Memperoleh gelar Sarjana Informatika Komputer dari Universitas Pembangunan Nasional “Veteran”, Jakarta, Indonesia pada tahun 1988. Menjabat sebagai Komisaris Independen Perseroan sejak tahun 2015 berdasarkan Keputusan Dewan Komisioner Otoritas Jasa Keuangan No. KEP-560/NB.11/2015 tanggal 10 September 2015. Beliau tidak memiliki hubungan afiliasi dengan anggota Dewan Komisaris lainnya, anggota Direksi, serta Pemegang Saham Utama dan Pengendali.",
          "Beliau memiliki pengalaman sebagai Direktur di PT KENT Mandiri Indonesia (2015), Kepala Divisi Bisnis dan teknologi di PT Asuransi Jiwa Adisarana Wanaartha (2009-2014), Pengembangan Bisnis, Manajer Proyek Jamsostek dan Kepala Operasi Outsourcing di PT Astra Graphia Information Technology (2007-2009), Kepala Divisi Teknologi Informasi di PT Asuransi Umum Bintang Tbk (2006-2007), Asisten Wakil Presiden, Manajer Teknologi Informasi di Sekolah Internasional Mountain View (2002-2005), Kepala Divisi Teknologi Informasi dan Proyek Khusus di PT Asuransi Jiwa Prudential (1999-2001), Manajer Pusat Pengolahan Data di PT Bank Bumiputera (1990- 1996), Assistant Manager di Citibank (1989-1990), dan Penyelia Pengolahan Data Elektronik di PT Rajawali Citra Televisi Indonesia (1988-1989).",
        ],
      },
    ],
  },
];

/** Halaman /dewan-direksi/ website resmi (KB 8.3). */
export const directors: Person[] = [
  {
    slug: "suwandi-suharto",
    name: "Suwandi Suharto",
    position: "Direktur Utama",
    photo: photo("suwandi-suharto.jpg", "Suwandi Suharto"),
    bio: [
      {
        paragraphs: [
          "Suwandi, telah pengalaman lebih dari 30 (tiga puluh) tahun pada industri asuransi di Indonesia. Pengalaman tersebut diperoleh selama bekerja pada asuransi patungan, broker asuransi dan perusahaan asuransi lokal.",
          "Beragam posisi telah dipegangnya, terutama untuk posisi teknis, pemasaran dan kepemimpinan antara lain menjadi Direktur Teknik PT Asuransi Mitra Maparya, Direktur Teknik PT. Malacca Trust Wuwungan Insurance, Direktur Pemasaran PT. Asuransi Indrapura, Direktur Utama dari PT Asuransi Eka Lloyd Jaya, Direktur Utama PT Jamindo General Insurance dan Direktur Utama PT KSK Insurance Indonesia.",
          "Lulusan dari Australian and New Zealand Institute and Finance, Australia, Suwandi saat ini telah bergabung dengan PT Victoria Insurance Tbk sebagai Direktur Utama.",
        ],
      },
    ],
  },
  {
    slug: "rosalina-gunawan",
    name: "Rosalina Gunawan",
    position: "Direktur Kepatuhan",
    photo: photo("rosalina-gunawan.jpg", "Rosalina Gunawan"),
    bio: [
      {
        paragraphs: [
          "Pertama kali ditunjuk sebagai Direktur Kepatuhan Perusahaan sejak tahun 2020 berdasarkan Akta Pernyataan Keputusan Rapat Umum Pemegang Saham Luar Biasa Perusahaan No. 10 pada tanggal 28 Desember 2020 dan efektif menjabat Direktur Kepatuhan berdasarkan Keputusan Dewan Komisioner Otoritas Jasa Keuangan No. KEP-426/NB.11/2020 tanggal 08 Desember 2020.",
        ],
      },
      { heading: "Pendidikan", paragraphs: ["Sarjana Akuntansi 1999 di STIE YAI"] },
      {
        heading: "Pengalaman Kerja",
        paragraphs: [
          "Beliau menduduki jabatan diantaranya Kepala Seksi Akuntansi di PT Bank Kharisma pada tahun 1993-1999, menduduki jabatan sebagai assistant manager accounting pada tahun 1999-2009 dan manager finance pada tahun 2009-2012 di PT Asuransi Rama Satria Wibawa, meduduki sebagai assistant GM finance dan accounting di PT Asuransi Himalaya Pelindung pada tahun 2012-2016, beliau menduduki jabatan sebagai finance dan accounting GM di PT Victoria Insurance Tbk pada tahun 2016-2020.",
        ],
      },
    ],
  },
  {
    slug: "fatchurhuda",
    name: "Drs. Fatchurhuda",
    position: "Direktur Teknik",
    photo: photo("fatchurhuda.jpg", "Drs. Fatchurhuda"),
    bio: [
      {
        paragraphs: [
          "Huda, dengan pengalaman lebih dari 2(dua) dasawarsa pada bidang Asuransi umum, menunjukkan bahwa Beliau telah menyumbangkan kemampuannya di bidang asuransi dan pengembangan bisnis pada beberapa perusahaan terkemuka.",
          "Memulai karirnya sebagai praktisi asuransi di PT Asuransi Bina Dharma Artha. Dengan semangat positif, Huda diangkat sebagai IT Manajer di PT Tata Internasional General Insurance selanjutnya sebagai Manajer Marketing Analyst di PT MAA General Insurance. Setelah mendapatkan sertifikat Ahli Asuransi Indonesia sektor Kerugian (AAIK) dari AAMAI (Asosiasi Manajemen Asuransi Indonesia), serta pengalaman yang luas telah membawanya menjadi Kepala Divisi Teknik di beberapa perusahaan dan saat ini ia bergabung dengan PT Victoria Insurance sebagai Direktur Teknik.",
          "Huda merupakan seorang pemimpin dalam pembuatan strategi dan penerapan manajemen risiko disamping sebagai pengelola operasional melalui inisiatif berkelanjutan untuk memaksimalkan penjualan, meningkatkan produktivitas, mengurangi biaya, meningkatkan kinerja, membangun profitabilitas, dan mengambil nilai maksimum dari investasi operasional.",
        ],
      },
    ],
  },
];
