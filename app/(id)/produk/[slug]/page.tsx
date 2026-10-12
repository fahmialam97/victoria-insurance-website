import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, CircleX, Download, FileText, Headset, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HeaderDecor } from "@/components/ui/HeaderDecor";
import { productIcons } from "@/components/ui/productIcons";
import { SmartLink } from "@/components/ui/SmartLink";
import { contactAnchor } from "@/data/navigation";
import { getProduct, getProducts, productHref, products, productsHref } from "@/data/products";
import { contact } from "@/data/site";
import { pageAlternates } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.filter((product) => product.detail).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(props: PageProps<"/produk/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const { locale } = await getI18n();
  const product = getProduct(slug, locale);
  if (!product) return {};

  const description = product.summary ?? product.description[0];
  return {
    title: product.name,
    description,
    alternates: pageAlternates(productHref(product), locale),
    openGraph: { title: product.name, description, url: productHref(product) },
  };
}

export default async function ProductDetailPage(props: PageProps<"/produk/[slug]">) {
  const { slug } = await props.params;
  const { locale, t } = await getI18n();
  const product = getProduct(slug, locale);
  if (!product?.detail) notFound();

  const { detail } = product;
  const Icon = productIcons[product.icon];
  const riplay = product.documents[0];
  const others = getProducts(locale).filter((p) => p.slug !== product.slug).slice(0, 3);

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
              <li>
                <Link href={productsHref} className="hover:text-brand-600">
                  {t("Produk")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-ink-900">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="mt-4 flex items-start gap-4">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <h1 className="pt-1 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{product.name}</h1>
          </div>
          <div className="mt-5 max-w-3xl space-y-3 text-base leading-relaxed text-muted">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {riplay && (
              <SmartLink
                href={riplay.url}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <Download aria-hidden="true" className="size-4" />
                {t("Unduh RIPLAY")}
              </SmartLink>
            )}
            <Link
              href={contactAnchor}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-600"
            >
              <Headset aria-hidden="true" className="size-4" />
              {t("Hubungi Kami")}
            </Link>
          </div>
        </Container>
      </section>

      <section aria-labelledby="manfaat-heading" className="py-12 sm:py-16">
        <Container>
          <h2 id="manfaat-heading" className="text-2xl font-bold tracking-tight text-ink-900">
            {t("Yang Dijamin")}
          </h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {detail.coverages.map((coverage) => (
              <li key={coverage.title}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
                  <h3 className="text-lg font-bold text-ink-900">{coverage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{coverage.description}</p>
                  <ul className="mt-5 space-y-3">
                    {coverage.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-800">
                        <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="pengecualian-heading" className="border-y border-line bg-surface py-12 sm:py-16">
        <Container>
          <h2 id="pengecualian-heading" className="text-2xl font-bold tracking-tight text-ink-900">
            {t("Yang Tidak Dijamin")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {t("Contoh keadaan yang menyebabkan manfaat tidak dibayarkan. Daftar lengkap tercantum dalam polis.")}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {detail.exclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm leading-relaxed text-ink-800"
              >
                <CircleX aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="klaim-heading" className="py-12 sm:py-16">
        <Container>
          <h2 id="klaim-heading" className="text-2xl font-bold tracking-tight text-ink-900">
            {t("Cara Mengajukan Klaim")}
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.claimSteps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-line bg-surface p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-700">{t("Data yang perlu disiapkan")}</h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {detail.claimDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-2 text-sm text-ink-800">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-ink-800 p-6 text-white">
              <p className="text-sm text-white/75">{t("Laporkan klaim ke")}</p>
              <a
                href={`tel:${contact.headOffice.phone.tel}`}
                className="mt-1 inline-flex items-center gap-2 text-xl font-bold hover:text-brand-100"
              >
                <Phone aria-hidden="true" className="size-5" />
                {contact.headOffice.phone.display}
              </a>
              <a href={`mailto:${contact.email}`} className="mt-1 text-sm text-white/75 hover:text-white">
                {contact.email}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="dokumen-heading" className="border-t border-line bg-surface py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 id="dokumen-heading" className="text-2xl font-bold tracking-tight text-ink-900">
              {t("Dokumen Produk")}
            </h2>
            <ul className="mt-6 divide-y divide-line rounded-xl border border-line bg-white">
              {product.documents.map((doc) => (
                <li key={doc.url}>
                  <SmartLink
                    href={doc.url}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-ink-800 hover:text-brand-600"
                  >
                    <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
                    <span className="flex-1">{doc.title}</span>
                    <span className="text-xs font-semibold text-brand-600">PDF</span>
                  </SmartLink>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {t(
                "Informasi di halaman ini merupakan ringkasan dari RIPLAY dan bukan bagian dari polis. Syarat dan ketentuan lengkap mengacu pada polis yang diterbitkan.",
              )}
            </p>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">{t("Produk Lainnya")}</h2>
              <Link
                href={productsHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                {t("Semua Produk")}
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((other) => {
                const OtherIcon = productIcons[other.icon];
                return (
                  <li key={other.slug}>
                    <Link
                      href={productHref(other)}
                      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <OtherIcon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="mt-4 text-sm font-semibold text-ink-900 group-hover:text-brand-600">
                        {other.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
