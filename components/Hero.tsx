import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import { contact, site } from "@/data/site";
import { heroImages } from "@/data/hero";
import { productsHref } from "@/data/products";
import { HeroCarousel } from "./HeroCarousel";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

/** Headline dari teks slide hero website resmi. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-surface">
      {/* Pola ikon produk dari aset resmi (Wall1-8.png), dibuat sangat samar */}
      <Image
        src="/images/official/pattern-product-icons.png"
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className="-z-10 object-cover opacity-60"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/40" />

      <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 sm:text-sm">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-600" />
            {site.tagline}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15] xl:text-5xl"
          >
            Berikan Perlindungan Terbaik Untuk Diri &amp; Harta Benda Anda{" "}
            <span className="text-brand-600">Bersama Victoria Insurance</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{site.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <SmartLink
              href={productsHref}
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Lihat Produk
              <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5" />
            </SmartLink>
            <a
              href={`tel:${contact.hotline.tel}`}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-navy-800 hover:text-brand-600"
            >
              <PhoneCall aria-hidden="true" className="size-4 text-brand-600" />
              {contact.hotline.label}: {contact.hotline.display}
            </a>
          </div>
        </div>

        <HeroCarousel images={heroImages} />
      </Container>
    </section>
  );
}
