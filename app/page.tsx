import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { NewsSection } from "@/components/NewsSection";
import { ProductSection } from "@/components/ProductSection";
import { RupslbAnnouncement } from "@/components/RupslbAnnouncement";
import { ServiceSection } from "@/components/ServiceSection";
import { contact, site, socialLinks } from "@/data/site";

/** Data terstruktur Organization (schema.org) dari informasi resmi di knowledge base. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  logo: new URL("/images/official/logo-dark.png", site.url).toString(),
  email: contact.email,
  telephone: contact.headOffice.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Graha BIP Lantai 3A, Jl. Jend. Gatot Subroto Kav. 22-23",
    addressLocality: "Jakarta Selatan",
    postalCode: "12930",
    addressCountry: "ID",
  },
  sameAs: socialLinks.map((s) => s.href),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <ProductSection />
      <ServiceSection />
      <NewsSection />
      <RupslbAnnouncement />
      <AboutSection />
      <ContactSection />
    </>
  );
}
