import { ServiceCard } from "@/components/ServiceCard";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { services } from "@/data/services";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Layanan & Informasi Nasabah"),
  description: t("Layanan dan informasi nasabah PT Victoria Insurance, Tbk."),
  href: "/layanan",
}));

export default async function ServicesPage() {
  const { t } = await getI18n();
  return (
    <>
      <PageHeader
        title={t("Layanan & Informasi Nasabah")}
        description={t("Akses layanan dan informasi nasabah yang tersedia di Victoria Insurance.")}
      />
      <section aria-label={t("Daftar layanan")} className="py-12 sm:py-16">
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
