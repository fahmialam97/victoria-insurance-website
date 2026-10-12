import Link from "@/components/ui/Link";
import { ArrowRight, ArrowUpRight, FileText, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeaderDecor } from "@/components/ui/HeaderDecor";
import { productIcons } from "@/components/ui/productIcons";
import { SmartLink } from "@/components/ui/SmartLink";
import { contactAnchor } from "@/data/navigation";
import { getProducts, productHref, productsHref, TOTAL_PRODUCTS } from "@/data/products";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Produk Asuransi"),
  description: t("{n} produk asuransi umum PT Victoria Insurance, Tbk beserta dokumen RIPLAY masing-masing.", { n: TOTAL_PRODUCTS }),
  href: productsHref,
}));

/** Nama singkat untuk tombol navigasi cepat: "Asuransi Harta Benda" → "Harta Benda", "Property Insurance" → "Property". */
const shortName = (name: string) => name.replace(/^Asuransi /, "").replace(/ Insurance$/, "");

export default async function ProductsPage() {
  const { locale, t } = await getI18n();
  const products = getProducts(locale);
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line bg-surface">
        <HeaderDecor pattern="product" />
        <Container className="py-10">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  {t("Beranda")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink-900">
                {t("Produk")}
              </li>
            </ol>
          </nav>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{t("Produk Asuransi")}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {t(
              "{n} produk asuransi Victoria Insurance. Setiap produk dilengkapi dokumen RIPLAY (Ringkasan Informasi Produk dan Layanan) yang dapat diunduh.",
              { n: TOTAL_PRODUCTS },
            )}
          </p>

          {/* Navigasi cepat ke setiap produk */}
          <nav aria-label={t("Daftar produk")} className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {products.map((product) => {
                const Icon = productIcons[product.icon];
                return (
                  <li key={product.slug}>
                    <a
                      href={`#${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-brand-600 hover:text-brand-600"
                    >
                      <Icon aria-hidden="true" className="size-4 text-brand-600" />
                      {shortName(product.name)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </section>

      <section aria-label={t("Detail produk")} className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-6 lg:grid-cols-2">
            {products.map((product) => {
              const Icon = productIcons[product.icon];
              return (
                <li key={product.slug} id={product.slug} className="scroll-mt-4">
                  <article
                    className={`relative flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8 ${
                      product.detail
                        ? "group/card transition duration-200 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-card-hover"
                        : ""
                    }`}
                  >
                    {product.detail && (
                      <span
                        aria-hidden="true"
                        className="absolute right-6 top-6 inline-flex size-9 items-center justify-center rounded-full bg-brand-600 text-white opacity-0 transition duration-200 group-hover/card:opacity-100 sm:right-8 sm:top-8"
                      >
                        <ArrowUpRight className="size-5" />
                      </span>
                    )}
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon aria-hidden="true" className="size-6" />
                      </span>
                      <h2 className={`pt-2.5 text-xl font-bold tracking-tight text-ink-900 ${product.detail ? "pr-10" : ""}`}>
                        {product.detail ? (
                          // Stretched link: seluruh kartu bisa diklik, link dokumen tetap di atasnya
                          <Link
                            href={productHref(product)}
                            className="after:absolute after:top-0 after:left-0 after:size-full group-hover/card:text-brand-600"
                          >
                            {product.name}
                          </Link>
                        ) : (
                          product.name
                        )}
                      </h2>
                    </div>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                      {product.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="relative z-10 mt-auto pt-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-700">{t("Dokumen Produk")}</h3>
                      <ul className="mt-2 divide-y divide-line rounded-xl border border-line">
                        {product.documents.map((doc) => (
                          <li key={doc.url}>
                            <SmartLink
                              href={doc.url}
                              className="group flex items-center gap-3 px-4 py-3 text-sm text-ink-800 hover:text-brand-600"
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

          <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl bg-ink-800 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex items-center gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Headset aria-hidden="true" className="size-6" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">{t("Butuh informasi produk lebih lanjut?")}</h2>
                <p className="text-sm text-white/75">{t("Hubungi Victoria Insurance melalui saluran resmi kami.")}</p>
              </div>
            </div>
            <Link
              href={contactAnchor}
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-brand-50"
            >
              {t("Hubungi Kami")}
              <ArrowRight aria-hidden="true" className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
