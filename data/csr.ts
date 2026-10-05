export type CsrImage = { src: string; width: number; height: number; alt: string };

export type CsrAgenda = { year: number; title: string; date: string; images: CsrImage[] };

export const csrHref = "/berita/csr";

const img = (file: string, width: number, height: number, alt: string): CsrImage => ({
  src: `/images/official/csr/${file}`,
  width,
  height,
  alt,
});

/** Konten halaman /csr-2/ website resmi (KB 7.4); judul & tanggal agenda dari teks pada gambar resmi. */
export const csr = {
  banner: img("csr-banner.png", 1942, 512, "Ilustrasi Corporate Social Responsibility Victoria Insurance"),
  agendas: [
    {
      year: 2025,
      title: "Kegiatan CSR Victoria Insurance – Santunan Yayasan Amal Sholeh Sejahtera",
      date: "2025-03-14",
      images: [
        img(
          "agenda-csr-2025.png",
          1919,
          1079,
          "Victoria Insurance menyerahkan santunan kepada pengurus Yayasan Amal Sholeh Sejahtera, 14 Maret 2025",
        ),
      ],
    },
    {
      year: 2023,
      title: "CSR Victoria Kesehatan Serahkan Bantuan Vitamin, Alat Tulis dan AC",
      date: "2023-11-16",
      images: [
        img(
          "agenda-csr-2023-1.jpg",
          960,
          720,
          "Kolase penyerahan bantuan #VictoriaKesehatan di SD Laksa Bhakti",
        ),
        img(
          "agenda-csr-2023-2.jpg",
          960,
          720,
          "CSR Victoria Kesehatan: bantuan vitamin, alat tulis dan AC untuk Sekolah Dasar Jakarta Barat & Jakarta Utara, 16 November 2023",
        ),
      ],
    },
    {
      year: 2021,
      title: "CSR Victoria Peduli Serahkan Bantuan Alat Kesehatan Penanganan Covid-19",
      date: "2021-10-29",
      images: [
        img(
          "agenda-csr-2021.png",
          720,
          570,
          "CSR Victoria Peduli menyerahkan bantuan alat kesehatan penanganan Covid-19 kepada siswa sekolah dasar, 29 Oktober 2021",
        ),
      ],
    },
  ] satisfies CsrAgenda[],
  peduli: {
    title: "Kegiatan CSR Victoria Peduli",
    paragraphs: [
      "PT Victoria Insurance, Tbk menunjukkan langkah serius guna membantu percepatan penanganan penyebaran virus Corona atau Covid-19 di lingkungan Pendidikan. Bentuk kepedulian tersebut diwujudkan dengan menyerahkan bantuan berupa alat kesehatan di wilayah Sekolah Dasar Jakarta Barat & Jakarta Utara.",
      "Bantuan alat kesehatan yang diserahkan berupa hand sanitizier, alat cuci tangan portable. Bantuan ini langsung diserahkan oleh PT Bank Victoria Internasional, Tbk – Ibu Syahda Candra selaku HCM & GA Division Head yang mewakili Management Victoria Group (29/10)",
      "Pemberian bantuan ini sejalan dengan program “Victoria Peduli” Penanganan Covid-19 “Semoga bantuan ini dapat membantu dan dapat digunakan untuk percepatan penanganan wabah Covid-19. Diperlukan kerjasama dan perhatian segenap pihak dalam mengatasi penyebaran wabah ini salah satunya dengan mengikuti protokol kesehatan dengan baik. Kita berharap semoga wabah ini segera tertangani dan cepat berlalu.”",
    ],
    place: "Jakarta, 29 Oktober 2021",
    image: img(
      "victoria-peduli-2021.png",
      619,
      476,
      "Tim Victoria Group bersama siswa sekolah dasar dalam kegiatan Victoria Peduli Sinergi Cegah COVID-19",
    ),
    gallery: [
      img("victoria-peduli-galeri-1.png", 1250, 767, "Galeri foto penyerahan hand sanitizer di sekolah dasar #VictoriaPeduli"),
      img("victoria-peduli-galeri-2.png", 1359, 767, "Galeri foto kunjungan tim Victoria ke ruang kelas dan alat cuci tangan portable"),
      img("victoria-peduli-galeri-3.png", 1359, 767, "Galeri foto tim Victoria bersama pihak sekolah #VictoriaPeduli"),
    ],
  },
  about:
    "Perseroan berkomitmen untuk melaksanakan tanggung jawab sosial (corporate social renponsibility/ CSR). Hal ini dilakukan dengan kesadaran bahwa keberadaan Perseroan tidak hanya bertujuan untuk menciptakan profit, namun harus mampu memberikan kontribusi dalam pembangunan berkelanjutan kepada masyarakat (people) dan lingkungan (planet). Terkait hal tersebut, Perseroan melaksanakan CSR di bidang lingkungan hidup, ketenagakerjaan, sosial dan masyarakat, serta nasabah. Kegiatan CSR yang dilakukan Perseroan diharapkan dapat menciptakan interaksi harmonis antara Perseroan dengan masyarakat serta pemangku kepentingan dalam rangka meningkatkan kualitas kehidupan masyarakat.",
  pillars: [
    {
      icon: "environment",
      title: "CSR Terkait Lingkungan Hidup",
      paragraphs: [
        "Perseroan mendukung program pemerintah terkait lingkungan hidup dengan terus berupaya mengurangi dampak lingkungan dari kegiatan operasional perusahaan. Pelaksanaan program tanggung jawab Perseroan terhadap lingkungan diantaranya melalui:",
      ],
      points: [
        "Penghematan energi, air, dan listrik di lingkungan kantor;",
        "Pelaksanaan program paperless melalui penggunaan kembali kertas layak pakai untuk fotokopi dan pemanfaatan teknologi, seperti pemindaian (scanning) dan email dalam kegiatan surat menyurat;",
        "Mengupayakan penggunaan material yang ramah lingkungan.",
      ],
    },
    {
      icon: "safety",
      title: "CSR Terkait K3",
      paragraphs: [
        "Perseroan menyadari bahwa sumber daya manusia merupakan salah satu aset penting dalam mendukung kelangsungan produktivitas dan pertumbuhan perusahaan. Untuk mendukung hal tersebut, dibutuhkan karyawan yang handal, berintegritas tinggi dan profesional dibidangnya. Dalam mengupayakannya, Perseroan merencanakan dan melaksanakan proses rekrutmen dengan memberikan kesempatan yang sama bagi setiap individu, tanpa membedakan aspek suku bangsa, usia, latar belakang etnis, agama, jenis kelamin, atau karakteristik pribadi lainnya. Perseroan juga melaksanakan pengembangan kompetensi dan pengembangan karir karyawan berdasarkan prinsip keadilan dan kesetaraan, melakukan pemberian remunerasi dan kesejahteraan yang sesuai dengan peraturan terkait ketenagakerjaan, serta menyediakan fasilitas kesehatan dan keselamatan kerja (K3). Perseroan juga menyelenggarakan beberapa acara kebersamaan untuk mempererat hubungan antara pimpinan Perseroan dengan seluruh karyawan.",
      ],
    },
    {
      icon: "community",
      title: "CSR Terkait Pengembangan Sosial dan Kemasyarakatan",
      paragraphs: [
        "Perseroan senantiasa berupaya memberikan dampak yang positif terhadap masyarakat sekitar. Terkait hal tersebut, Perseroan melaksanakan kegiatan-kegiatan yang terkait dengan sosial kemasyarakatan, seperti bantuan perbaikan sarana ibadah, pemberian sumbangan untuk sekolah, perayaan hari besar keagamaan, menjadi sponsor untuk sejumlah acara yang diselenggarakan masyarakat, bantuan pengadaan alat-alat kebersihan, serta kegiatan penghijauan di lingkungan sekitar.",
      ],
    },
    {
      icon: "customer",
      title: "CSR Terkait Nasabah",
      paragraphs: [
        "Perseroan berkomitmen untuk memelihara hubungan baik dengan pelanggan dalam jangka panjang dengan memperhatikan hak dan kewajiban pelanggan, serta mengungkapkan informasi penting bagi nasabah. Dalam hal ini, Perseroan mengkomunikasikan produk layanan yang diberikan serta mengutamakan pelayanan prima kepada nasabah. Perseroan menindaklanjuti klaim secara tepat dan cepat, sesuai perjanjian yang disepakati oleh Perseroan dan nasabah. Perseroan juga menerima dan menindaklanjuti setiap keluhan nasabah, baik melalui email, telpon, maupun surat, serta melalui Sekretaris Perusahaan.",
      ],
    },
  ] as { icon: "environment" | "safety" | "community" | "customer"; title: string; paragraphs: string[]; points?: string[] }[],
};
