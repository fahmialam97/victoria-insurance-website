import Image from "next/image";
import Link from "@/components/ui/Link";
import { footerNav } from "@/data/navigation";
import { contact, groupCompanies, site, socialLinks } from "@/data/site";
import { getI18n } from "@/lib/i18n/server";
import { Container } from "./ui/Container";
import { InstagramIcon } from "./ui/InstagramIcon";
import { SmartLink } from "./ui/SmartLink";

/** Privacy policy, terms, dan sitemap tidak ada di website resmi, jadi tidak ditampilkan. */
export async function Footer() {
  const { t } = await getI18n();
  const { headOffice, hotline, email, marketingOffice } = contact;

  // Warna mengikuti footer website resmi: abu-abu arang + bilah bawah hitam
  return (
    <footer className="bg-ink-800 text-white/75">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label={`Victoria Insurance — ${t("Beranda")}`} className="inline-block">
              <Image
                src="/images/official/logo-light.png"
                alt="Victoria Insurance"
                width={450}
                height={81}
                className="h-auto w-48"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold text-white">{site.legalName}</p>

            <div className="mt-6 space-y-1 text-sm">
              <p className="font-semibold text-white">
                {t(headOffice.label)} — {headOffice.city}
              </p>
              <address className="not-italic">
                {headOffice.addressLines.map((line) => (
                  <span key={line} className="block">
                    {t(line)}
                  </span>
                ))}
              </address>
              <p>
                {t("Telepon")}:{" "}
                <a href={`tel:${headOffice.phone.tel}`} className="hover:text-white">
                  {headOffice.phone.display}
                </a>
              </p>
              <p>
                {t(hotline.label)}:{" "}
                <a href={`tel:${hotline.tel}`} className="hover:text-white">
                  {hotline.display}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${email}`} className="hover:text-white">
                  {email}
                </a>
              </p>
            </div>

            <div className="mt-5 space-y-1 text-sm">
              <p className="font-semibold text-white">
                {t(marketingOffice.label)} — {marketingOffice.city}
              </p>
              <address className="not-italic">
                {marketingOffice.addressLines.map((line) => (
                  <span key={line} className="block">
                    {t(line)}
                  </span>
                ))}
              </address>
              <p>{t("Telepon")}: {marketingOffice.phones.join(" / ")}</p>
              <p>{t("Facsimile")}: {marketingOffice.fax}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {footerNav.map((column) => (
              <nav key={column.title} aria-label={t(column.title)}>
                <h2 className="text-sm font-semibold text-white">{t(column.title)}</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink href={link.href} className="hover:text-white">
                        {t(link.label)}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label={t("Group Finansial Victoria")}>
              <h2 className="text-sm font-semibold text-white">{t("Group Finansial Victoria")}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {groupCompanies.map((company) => (
                  <li key={company.href}>
                    <a href={company.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {company.label}
                      <span className="sr-only"> {t("(terbuka di tab baru)")}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      {/* Bilah bawah: pernyataan regulasi di kiri, media sosial di kanan */}
      <div className="bg-black">
        <Container className="flex flex-col gap-5 py-6 text-[11px] leading-relaxed sm:text-[12px] lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="space-y-1.5">
            {site.regulatoryStatements.map((statement) => (
              <p key={statement}>{t(statement)}</p>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="text-white/60">{t("Ikuti kami")}</span>
            <ul className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} ${social.handle} ${t("(terbuka di tab baru)")}`}
                    title={`${social.label} ${social.handle}`}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-600 hover:bg-brand-600"
                  >
                    <InstagramIcon aria-hidden="true" className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
