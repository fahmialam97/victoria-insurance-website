import { AboutPageLayout } from "@/components/AboutPageLayout";
import { PersonProfile } from "@/components/PersonProfile";
import { aboutLinks, getCompanyContent } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Direksi"),
  description: t("Profil Direksi PT Victoria Insurance, Tbk."),
  href: aboutLinks.directors.href,
}));

export default async function DirectorsPage() {
  const { locale, t } = await getI18n();
  const { directors } = getCompanyContent(locale);
  return (
    <AboutPageLayout title={t("Direksi")} activeHref={aboutLinks.directors.href}>
      <div className="space-y-6">
        {directors.map((person) => (
          <PersonProfile key={person.slug} person={person} />
        ))}
      </div>
    </AboutPageLayout>
  );
}
