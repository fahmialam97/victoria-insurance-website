import { featuredProducts, productsHref, TOTAL_PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export function ProductSection() {
  return (
    <section aria-labelledby="produk-heading" className="py-16 sm:py-20">
      <Container>
        <SectionHeader
          id="produk-heading"
          title="Produk Asuransi"
          description={`${featuredProducts.length} dari ${TOTAL_PRODUCTS} produk asuransi Victoria Insurance. Setiap produk dilengkapi dokumen RIPLAY (Ringkasan Informasi Produk dan Layanan).`}
          action={{ label: "Lihat Semua Produk", href: productsHref }}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <li key={product.name}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
