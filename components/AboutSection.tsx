import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/data/about";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

export function AboutSection() {
  return (
    <section aria-labelledby="tentang-heading" className="pb-16 sm:pb-20">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-surface lg:grid-cols-2 lg:gap-0">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <div className="relative isolate px-6 pb-10 sm:px-10 lg:py-14">
            {/* Ornamen logo Victoria sebagai watermark */}
            <Image
              src="/images/official/site-icon-192.png"
              alt=""
              width={192}
              height={192}
              className="pointer-events-none absolute -bottom-16 right-4 -z-10 size-48 opacity-[0.07] select-none"
            />
            <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-brand-600" />
            <h2 id="tentang-heading" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Tentang Victoria Insurance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{about.summary}</p>
            <figure className="mt-6 border-l-2 border-brand-600 pl-4">
              <figcaption className="text-xs font-semibold uppercase tracking-wider text-brand-600">Visi</figcaption>
              <blockquote className="mt-1 text-base font-medium text-navy-900">{about.vision}</blockquote>
            </figure>
            <SmartLink
              href={about.href}
              aria-label="Selengkapnya tentang Victoria Insurance"
              className="group mt-8 inline-flex items-center whitespace-nowrap gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Selengkapnya
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </SmartLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
