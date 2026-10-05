# Victoria Insurance — Homepage Redesign

Rebuild homepage website PT Victoria Insurance, Tbk dengan Next.js (App Router), TypeScript, Tailwind CSS v4, dan Lucide React.

Sumber konten tunggal: [`../VICTORIA_INSURANCE_KNOWLEDGE.md`](../VICTORIA_INSURANCE_KNOWLEDGE.md) (audit website resmi, 1 Oktober 2026).

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Form Pengaduan (`/pengaduan`)

Pengaduan dikirim lewat email (Nodemailer + SMTP) ke `COMPLAINT_TO_EMAIL`. Sementara: `alamfahmi76@gmail.com`, ganti ke email resmi Victoria saat tersedia.

1. Salin `.env.example` menjadi `.env.local`.
2. Isi `SMTP_USER` dan `SMTP_PASS`. Untuk Gmail, `SMTP_PASS` adalah **App Password** (Google Account → Security → 2-Step Verification → App passwords), bukan password login.
3. Restart `npm run dev`. Saat deploy, set variabel yang sama di environment hosting.

Tanpa konfigurasi SMTP, form tetap tampil tetapi menolak kiriman dengan pesan bahwa layanan belum dikonfigurasi. Field wajib: email & isi pengaduan; email pengadu dipasang sebagai `Reply-To`.

Variabel opsional: `NEXT_PUBLIC_SITE_URL` (default `https://victoriainsurance.co.id`) — dipakai untuk `metadataBase`, canonical, Open Graph, dan sitemap.

## Struktur

```
app/
  layout.tsx            Root layout, font, metadata SEO, Navbar + Footer, skip link
  page.tsx              Homepage + JSON-LD Organization
  rupslb/[year]/page.tsx  Detail pengumuman RUPSLB (SSG dari data/rupslb.ts)
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
  news.ts        3 artikel terbaru
  rupslb.ts      Event & dokumen RUPSLB (tambah entri baru di awal array)
  about.ts       Ringkasan Tentang Kami + visi
lib/format.ts    Format tanggal id-ID, helper link
```

## Aturan konten

- Semua teks, URL, dan dokumen berasal dari knowledge base; tidak ada konten karangan.
- Halaman detail (produk, layanan, tentang kami, dsb.) belum dibangun ulang, jadi link mengarah ke website resmi `victoriainsurance.co.id`.
- Info yang tidak tersedia di website resmi (jam operasional, privacy policy, terms, WhatsApp) **tidak ditampilkan**.

## Aset resmi (`public/images/official/`)

Disalin dari website resmi; tidak ada stock image.

| File lokal | Sumber |
|---|---|
| `logo-dark.png` | https://victoriainsurance.co.id/wp-content/uploads/2018/09/Logo.png |
| `logo-light.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/logo-victoria-insurance_2-1.png |
| `site-icon-192.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/cropped-logo-victoria-insurance_2-192x192.png |
| `home-banner-graha-bip.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2022/12/Home_web00.jpg (slide hero #4) |
| `pattern-product-icons.png` | https://victoriainsurance.co.id/wp-content/uploads/2019/04/Wall1-8.png (latar slide hero #3) |
| `gedung-graha-bip.jpg` | https://victoriainsurance.co.id/wp-content/uploads/2019/08/gd_bip.jpg (halaman Kantor) |

### Aset yang masih dibutuhkan

- Foto hero resolusi tinggi (banner resmi saat ini 989×561 dan memuat teks bawaan).
- Logo vektor (SVG) — logo saat ini PNG 418×46.
- Foto produk resmi (kartu produk sementara memakai ikon).
- Foto/visual untuk section Hubungi Kami (sementara memakai pola ikon resmi).
