import { ArrowRight } from "lucide-react";
import { heroContent, heroImages } from "@/data/hero";
import { productsHref } from "@/data/products";
import { getI18n } from "@/lib/i18n/server";
import { HeroCarousel, HeroTitle } from "./HeroCarousel";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

/** Banner selebar layar dengan judul dan tombol produk. */
export async function Hero() {
  const { t } = await getI18n();
  const images = heroImages.map((image) => ({ ...image, alt: t(image.alt) }));
  return (
    <section aria-labelledby="hero-heading">
      <HeroCarousel images={images}>
        <Container className="flex h-full flex-col justify-center sm:pb-12">
          <HeroTitle
            id="hero-heading"
            titles={heroImages.map((image) => t(image.title ?? heroContent.title))}
            // 14ch agar judul panjang tidak menimpa objek foto (mis. petugas di slide kapal ±44% lebar gambar)
            className="max-w-[14ch] text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          />
          <SmartLink
            href={productsHref}
            className="group mt-8 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-brand-700"
          >
            {t("Lihat Produk")}
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
          </SmartLink>
        </Container>
      </HeroCarousel>
    </section>
  );
}
