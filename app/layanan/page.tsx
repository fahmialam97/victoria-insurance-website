import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Layanan & Informasi Nasabah",
  description: "Layanan dan informasi nasabah PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/layanan" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Layanan & Informasi Nasabah"
        description="Akses layanan dan informasi nasabah yang tersedia di Victoria Insurance."
      />
      <section aria-label="Daftar layanan" className="py-12 sm:py-16">
        <Container>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.name}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
