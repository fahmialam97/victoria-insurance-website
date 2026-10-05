import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { digitalProduct } from "@/data/layanan";

export const metadata: Metadata = {
  title: "Digital Product",
  description: "Informasi produk asuransi digital PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/layanan/digital-product" },
};

export default function DigitalProductPage() {
  const { image } = digitalProduct;

  return (
    <ServicePageLayout title={digitalProduct.title} description={digitalProduct.subtitle} activeHref="/layanan/digital-product">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full"
        />
        <div className="space-y-4 p-6 text-base leading-relaxed text-muted sm:p-8">
          <h2 className="text-xl font-bold text-navy-900">{digitalProduct.subtitle}</h2>
          {digitalProduct.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </ServicePageLayout>
  );
}
