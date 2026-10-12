import { services } from "@/data/services";
import { getI18n } from "@/lib/i18n/server";
import { ServiceCard } from "./ServiceCard";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";

export async function ServiceSection() {
  const { t } = await getI18n();
  return (
    <section aria-labelledby="layanan-heading" className="pb-16 sm:pb-20">
      <Container>
        <div className="rounded-3xl bg-surface px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
          <SectionHeader
            id="layanan-heading"
            title={t("Layanan & Informasi Nasabah")}
            description={t("Akses cepat ke layanan dan informasi nasabah yang tersedia.")}
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.name}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
