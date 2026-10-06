# Victoria Insurance — Homepage Redesign

Rebuild homepage website PT Victoria Insurance, Tbk dengan Next.js (App Router), TypeScript, Tailwind CSS v4, dan Lucide React.

Sumber konten tunggal: [`../VICTORIA_INSURANCE_KNOWLEDGE.md`](../VICTORIA_INSURANCE_KNOWLEDGE.md) (audit website resmi, 1 Oktober 2026).

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build      # static export ke folder out/
```

## Deploy (static mockup, cPanel)

`next.config.ts` memakai `output: "export"`, `trailingSlash: true`, dan `images.unoptimized`, jadi build menghasilkan folder `out/` berisi HTML/CSS/JS statis tanpa server Node.js. `npm start` tidak dipakai.

```bash
npm run build:mockup   # build dengan NEXT_PUBLIC_SITE_URL=https://mockup.victoriainsurance.co.id
```

Upload **isi** folder `out/` (termasuk `_next/`) ke document root `mockup.victoriainsurance.co.id` lewat FTP. `npm run build` biasa tetap memakai URL default (`https://victoriainsurance.co.id`).

## Form Pengaduan (`/pengaduan`)

Mockup UI saja: validasi berjalan di browser (semua field wajib diisi: email, nama, telepon, nomor polis, isi pengaduan), lalu pengiriman **disimulasikan** dan menampilkan nomor referensi. Tidak ada data yang dikirim ke server atau email.

Variabel opsional: `NEXT_PUBLIC_SITE_URL` (default `https://victoriainsurance.co.id`) — dipakai untuk `metadataBase`, canonical, Open Graph, dan sitemap.

## Struktur

```
app/
  layout.tsx            Root layout, font, metadata SEO, Navbar + Footer, skip link
  page.tsx              Homepage + JSON-LD Organization
  rupslb/[year]/page.tsx  Detail pengumuman RUPSLB (SSG dari data/rupslb.ts)
  berita/                Hub Berita, Artikel (+ detail SSG per slug), CSR
  tentang-kami/          Profil, Visi Misi, Jaringan Bisnis, Penghargaan, Karir, Struktur, Komisaris, Direksi
  informasi-perusahaan/  Hub + Arsip RUPS, Tata Kelola (4 halaman), Hubungan Investor (4 halaman)
  sitemap.ts, not-found.tsx, globals.css (design tokens)
components/
  Navbar, Hero, ProductSection, ProductCard, ServiceSection, ServiceCard,
  NewsSection, NewsCard, RupslbAnnouncement, AboutSection, ContactSection, Footer
  ui/ Container, SectionHeader, SmartLink, InstagramIcon
data/
  site.ts        Identitas perusahaan, kontak, grup usaha, sosial media
  navigation.ts  Menu utama & footer
  products.ts    6 produk homepage + RIPLAY
  services.ts    6 layanan (submenu Layanan)
  articles.ts    10 artikel resmi (HTML dibersihkan dari WP REST API)
  csr.ts         Konten halaman CSR
  company.ts     Konten halaman Tentang Kami & Manajemen
  companyInfo.ts Menu & konten Informasi Perusahaan; companyReports.ts arsip RUPS & laporan (hasil scrape resmi)
  news.ts        3 artikel terbaru untuk homepage
  rupslb.ts      Event & dokumen RUPSLB (tambah entri baru di awal array)
  about.ts       Ringkasan Tentang Kami + visi
lib/format.ts    Format tanggal id-ID, helper link
lib/complaint.ts Validasi & nomor referensi form pengaduan (client-side)
```

## Aturan konten

- Semua teks, URL, dan dokumen berasal dari knowledge base; tidak ada konten karangan.
- Semua halaman menu sudah dibangun ulang; dokumen PDF tetap di-host di website resmi `victoriainsurance.co.id`.
- Info yang tidak tersedia di website resmi (jam operasional, privacy policy, terms, WhatsApp) **tidak ditampilkan**.

## Aset resmi (`public/images/official/`)

Disalin dari website resmi; tidak ada stock image. Gambar banner homepage ada di `public/images/banner/` (lihat di bawah).

| File lokal | Sumber |
|---|---|
| `logo-dark.png` | https://victoriainsurance.co.id/wp-content/uploads/2018/09/Logo.png |
| `logo-light.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/logo-victoria-insurance_2-1.png |
| `site-icon-192.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/cropped-logo-victoria-insurance_2-192x192.png |
| `home-banner-graha-bip.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2022/12/Home_web00.jpg (slide hero #4) |
| `ilustrasi-klaim-kendaraan.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/Wallpaper_klaim1.jpg (slide hero #1) |
| `banner-csr-victoria-peduli.png` | https://victoriainsurance.co.id/wp-content/uploads/2021/11/CSR_webBanner01.png (slide hero #2) |
| `survey-penutupan-mobil-1.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/IMG-20181003-WA0021.jpg (slide hero #3) |
| `survey-penutupan-mobil-2.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/IMG-20181003-WA0013.jpg (slide hero #3) |
| `survey-penutupan-mobil-3.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/IMG-20181003-WA0022.jpg (slide hero #3) |
| `pattern-product-icons.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/Wall1-8.png (latar slide hero #3) |
| `gedung-graha-bip.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/08/gd_bip.jpg (tidak dipakai lagi; diganti `public/images/gedung-bip.jpg`) |
| `digital-product.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2024/12/4-3.jpg (halaman Digital Product) |
| `tim-klaim-kendaraan.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-23-at-4.17.11-PM.jpeg (halaman Bengkel Rekanan) |
| `literasi-inklusi-2026.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/07/Untitled-design.png (halaman Literasi & Inklusi) |
| `artikel/apa-itu-act-of-god-dalam-asuransi-ini.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Apa-Itu-Act-of-God-dalam-Asuransi-Ini-Penjelasan-dan-Manfaatnya.png (artikel "Apa Itu Act of God dalam Asuransi? Ini Penjelasan dan Manfaatnya") |
| `artikel/apa-yang-terjadi-jika-kita-telat-bayar-premi.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Apa-yang-Terjadi-Jika-kita-Telat-Bayar-Premi-Asuransi.png (artikel "Apa yang Terjadi Jika kita Telat Bayar Premi Asuransi?") |
| `artikel/langkah-cerdas-miliki-asuransi-sebelum-investasi.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Langkah-Cerdas-Miliki-Asuransi-Sebelum-Investasi.png (artikel "Langkah Cerdas: Miliki Asuransi Sebelum Investasi") |
| `artikel/6-prinsip-dasar-asuransi-yang-wajib-diketahui.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/6-Prinsip-Dasar-Asuransi-yang-Wajib-Diketahui-Sebelum-Membeli-Polis.png (artikel "6 Prinsip Dasar Asuransi yang Wajib Diketahui Sebelum Membeli Polis") |
| `artikel/apa-itu-polis-asuransi-pahami-bersama-vins.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Apa-Itu-Polis-Asuransi-Pahami-bersama-VIns.png (artikel "Apa Itu Polis Asuransi? Pahami bersama #VIns") |
| `artikel/7-kesalahan-umum-yang-bikin-klaim-asuransi.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/7-Kesalahan-Umum-yang-Bikin-Klaim-Asuransi-Mobil-kamu-Ditolak.png (artikel "7 Kesalahan Umum yang Bikin Klaim Asuransi Mobil kamu Ditolak") |
| `artikel/asuransi-properti-all-risk-perlindungan.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Asuransi-Properti-All-Risk-Perlindungan-Menyeluruh-untuk-Aset-Usaha-dan-Rumah-Anda-1.png (artikel "Asuransi Properti All Risk: Perlindungan Menyeluruh untuk Aset, Usaha, dan Rumah Anda") |
| `artikel/bagaimana-cara-klaim-asuransi-mobil-setelah.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Bagaimana-Cara-Klaim-Asuransi-Mobil-Setelah-Kecelakaan-Intip-Caranya-bersama-VIns.png (artikel "Bagaimana Cara Klaim Asuransi Mobil Setelah Kecelakaan? Intip Caranya bersama #VIns") |
| `artikel/tips-memilih-asuransi-kendaraan-bermotor-secara.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/02/Tips-Memilih-Asuransi-Kendaraan-Bermotor-secara-Tepat.png (artikel "Tips Memilih Asuransi Kendaraan Bermotor secara Tepat bersama #VIns") |
| `artikel/klaim-sebesar-rp173-miliar-untuk-rafenso.jpeg` | https://victoriainsurance.co.id/wp-content/uploads/2025/06/PEGANG-PLAKAT-BER-5.jpeg (artikel "Klaim sebesar Rp1,73 Miliar untuk Rafenso Printing: Victoria Insurance Tunjukkan Proteksi yang Nyata") |
| `csr/csr-banner.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/CSR_jadi1.png (halaman CSR) |
| `csr/agenda-csr-2021.png` | https://victoriainsurance.co.id/wp-content/uploads/2021/11/CSR_web01.png |
| `csr/agenda-csr-2023-1.jpg`, `csr/agenda-csr-2023-2.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2024/01/Slide1.jpg, Slide2.jpg |
| `csr/agenda-csr-2025.png` | https://victoriainsurance.co.id/wp-content/uploads/2025/06/CSR-ANAK-YATIM-MAR-2025.png |
| `csr/victoria-peduli-2021.png` | https://victoriainsurance.co.id/wp-content/uploads/2021/11/CSR_web02.png |
| `csr/victoria-peduli-galeri-1..3.png` | https://victoriainsurance.co.id/wp-content/uploads/2021/11/CSR04.png, CSR05.png, CSR06.png |
| `tentang-kami/corporate-capital.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2026/03/Corporate-Capital_Edit.jpg (Profil Perusahaan) |
| `tentang-kami/sulistijowati.jpg`, `tomi-parisianto-wibowo.jpg`, `suwandi-suharto.jpg`, `rosalina-gunawan.jpg`, `fatchurhuda.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2025/03/Bu-Sulis.jpg, Pak-Tomi.jpg, Pak-Suwandi.jpg, Bu-Rosa.jpg, Pak-Huda.jpg (diperkecil ke 600×600) |
| `tentang-kami/jimmy-paulus-watulingas.png` | https://victoriainsurance.co.id/wp-content/uploads/2026/01/JW-update-Website2026_warna3.png |
| `tentang-kami/struktur-dewan-komisaris.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2026/07/BOC-WEBSITE_page-0001.jpg |
| `tentang-kami/struktur-direksi.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2026/10/BOD_WEBSITE_01102026.jpg (bagan terbaru, menggantikan versi 2026/07 di KB) |
| `tentang-kami/penghargaan-*.{jpg,png}` | https://victoriainsurance.co.id/wp-content/uploads/2023/12/2018.jpg, 2021.jpg; 2025/06/PENGHARGAAN-2020.png, PENGHARGAAN-2022.png, PENGHARGAAN-2023-2024.png, PENGHARGAAN-2024-1.png |
| `informasi-perusahaan/sekretaris-perusahaan-2026.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2026/03/CORSEC-2026.jpg |

### Banner homepage (`public/images/banner/`)

Dari folder `Aset Gambar Benner` milik user, dikonversi ke JPG (kualitas 88).

| File lokal | Sumber |
|---|---|
| `keluarga-skyline.jpg` | `Aset Gambar Benner/Hopeful Family by the Skyline.png` |
| `keluarga-rumah-modern.jpg` | `Aset Gambar Benner/Joyful Family Moment by a Modern Home.png` |

Foto Gedung BIP (section Tentang Kami homepage & halaman Kantor): `public/images/gedung-bip.jpg` dari `Aset Gambar/Gedung BIP/Modern Office Tower Beneath a Blue Sky.png` (JPG kualitas 88).

### Aset yang masih dibutuhkan

- Logo vektor (SVG) — logo saat ini PNG 418×46.
- Foto produk resmi (kartu produk sementara memakai ikon).
- Foto/visual untuk section Hubungi Kami (sementara memakai pola ikon resmi).
