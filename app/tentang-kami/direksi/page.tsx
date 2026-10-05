import type { Metadata } from "next";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { PersonProfile } from "@/components/PersonProfile";
import { aboutLinks, directors } from "@/data/company";

export const metadata: Metadata = {
  title: "Direksi",
  description: "Profil Direksi PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.directors.href },
};

export default function DirectorsPage() {
  return (
    <AboutPageLayout title="Direksi" activeHref={aboutLinks.directors.href}>
      <div className="space-y-6">
        {directors.map((person) => (
          <PersonProfile key={person.slug} person={person} />
        ))}
      </div>
    </AboutPageLayout>
  );
}
