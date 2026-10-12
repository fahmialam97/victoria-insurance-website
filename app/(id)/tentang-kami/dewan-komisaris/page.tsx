import { AboutPageLayout } from "@/components/AboutPageLayout";
import { PersonProfile } from "@/components/PersonProfile";
import { aboutLinks, getCompanyContent } from "@/data/company";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Dewan Komisaris"),
  description: t("Profil Dewan Komisaris PT Victoria Insurance, Tbk."),
  href: aboutLinks.commissioners.href,
}));

export default async function CommissionersPage() {
  const { locale, t } = await getI18n();
  const { commissioners } = getCompanyContent(locale);
  return (
    <AboutPageLayout title={t("Dewan Komisaris")} activeHref={aboutLinks.commissioners.href}>
      <div className="space-y-6">
        {commissioners.map((person) => (
          <PersonProfile key={person.slug} person={person} />
        ))}
      </div>
    </AboutPageLayout>
  );
}
