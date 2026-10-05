import type { Metadata } from "next";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { PersonProfile } from "@/components/PersonProfile";
import { aboutLinks, commissioners } from "@/data/company";

export const metadata: Metadata = {
  title: "Dewan Komisaris",
  description: "Profil Dewan Komisaris PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.commissioners.href },
};

export default function CommissionersPage() {
  return (
    <AboutPageLayout title="Dewan Komisaris" activeHref={aboutLinks.commissioners.href}>
      <div className="space-y-6">
        {commissioners.map((person) => (
          <PersonProfile key={person.slug} person={person} />
        ))}
      </div>
    </AboutPageLayout>
  );
}
