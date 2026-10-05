import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { productIcons } from "@/components/ui/productIcons";
import { SmartLink } from "@/components/ui/SmartLink";
import { contactAnchor } from "@/data/navigation";
import { products, TOTAL_PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Produk Asuransi",
  description: `${TOTAL_PRODUCTS} produk asuransi umum PT Victoria Insurance, Tbk beserta dokumen RIPLAY masing-masing.`,
  alternates: { canonical: "/produk" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-12 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-navy-900">
                Produk
              </li>
            </ol>
          </nav>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">Produk Asuransi</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {TOTAL_PRODUCTS} produk asuransi Victoria Insurance. Setiap produk dilengkapi dokumen RIPLAY (Ringkasan
            Informasi Produk dan Layanan) yang dapat diunduh.
          </p>

          {/* Navigasi cepat ke setiap produk */}
          <nav aria-label="Daftar produk" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {products.map((product) => {
                const Icon = productIcons[product.icon];
                return (
                  <li key={product.slug}>
                    <a
                      href={`#${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-brand-600 hover:text-brand-600"
                    >
                      <Icon aria-hidden="true" className="size-4 text-brand-600" />
                      {product.name.replace(/^Asuransi /, "")}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      <section aria-label="Detail produk" className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => {
              const Icon = productIcons[product.icon];
              return (
                <li key={product.slug} id={product.slug} className="scroll-mt-4">
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon aria-hidden="true" className="size-6" />
                      </span>
                      <h2 className="pt-2.5 text-xl font-bold tracking-tight text-navy-900">{product.name}</h2>
                    </div>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                      {product.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-700">Dokumen Produk</h3>
                      <ul className="mt-2 divide-y divide-line rounded-xl border border-line">
                        {product.documents.map((doc) => (
                          <li key={doc.url}>
                            <SmartLink
                              href={doc.url}
                              className="group flex items-center gap-3 px-4 py-3 text-sm text-navy-800 hover:text-brand-600"
                            >
                              <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
                              <span className="flex-1">{doc.title}</span>
                              <span className="text-xs font-semibold text-brand-600">PDF</span>
                            </SmartLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-navy-900 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex items-center gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Headset aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">Butuh informasi produk lebih lanjut?</h2>
                <p className="text-sm text-white/75">Hubungi Victoria Insurance melalui saluran resmi kami.</p>
              </div>
            </div>
            <Link
              href={contactAnchor}
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-brand-50"
            >
              Hubungi Kami
              <ArrowRight aria-hidden="true" className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
