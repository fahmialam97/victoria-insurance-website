import { getFeaturedProducts, productsHref } from "@/data/products";
import { getI18n } from "@/lib/i18n/server";
import { ProductCard } from "./ProductCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export async function ProductSection() {
  const { locale, t } = await getI18n();
  return (
    <section aria-labelledby="produk-heading" className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          id="produk-heading"
          title={t("Produk Asuransi")}
          description={t("Solusi Perlindungan untuk Setiap Kebutuhan")}
          action={{ label: t("Lihat Semua Produk"), href: productsHref }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {getFeaturedProducts(locale).map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
