import { ArrowRight } from "lucide-react";
import { heroContent, heroImages } from "@/data/hero";
import { productsHref } from "@/data/products";
import { HeroCarousel } from "./HeroCarousel";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

/** Banner selebar layar dengan judul dan tombol produk. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      <HeroCarousel images={heroImages}>
        <Container className="flex h-full flex-col justify-center sm:pb-12">
          <h1
            id="hero-heading"
            className="max-w-[12ch] text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-6xl"
          >
            {heroContent.title}
          </h1>
          <SmartLink
            href={productsHref}
            className="group mt-8 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-brand-700"
          >
            Lihat Produk
            <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
          </SmartLink>
        </Container>
      </HeroCarousel>
    </section>
  );
}
