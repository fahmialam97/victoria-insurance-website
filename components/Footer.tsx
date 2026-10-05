import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { contact, groupCompanies, site, socialLinks } from "@/data/site";
import { Container } from "./ui/Container";
import { InstagramIcon } from "./ui/InstagramIcon";
import { SmartLink } from "./ui/SmartLink";

/** Privacy policy, terms, dan sitemap tidak ada di website resmi, jadi tidak ditampilkan. */
export function Footer() {
  const { headOffice, hotline, email, marketingOffice } = contact;

  return (
    <footer className="bg-navy-950 text-white/75">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label="Victoria Insurance — Beranda" className="inline-block">
              <Image
                src="/images/official/logo-light.png"
                alt="Victoria Insurance"
                width={450}
                height={81}
                className="h-auto w-48"
              />
            </Link>
            <p className="mt-4 text-sm font-semibold text-white">{site.legalName}</p>
            <p className="text-sm">{site.regulatoryNote}</p>

            <div className="mt-6 space-y-1 text-sm">
              <p className="font-semibold text-white">
                {headOffice.label} — {headOffice.city}
              </p>
              <address className="not-italic">
                {headOffice.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p>
                Telepon:{" "}
                <a href={`tel:${headOffice.phone.tel}`} className="hover:text-white">
                  {headOffice.phone.display}
                </a>
              </p>
              <p>
                {hotline.label}:{" "}
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
                {marketingOffice.label} — {marketingOffice.city}
              </p>
              <address className="not-italic">
                {marketingOffice.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p>Telepon: {marketingOffice.phones.join(" / ")}</p>
              <p>Facsimile: {marketingOffice.fax}</p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {footerNav.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="text-sm font-semibold text-white">{column.title}</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink href={link.href} className="hover:text-white">
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Group Finansial Victoria">
              <h2 className="text-sm font-semibold text-white">Group Finansial Victoria</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {groupCompanies.map((company) => (
                  <li key={company.href}>
                    <a href={company.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      {company.label}
                      <span className="sr-only"> (terbuka di tab baru)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} ${social.handle} (terbuka di tab baru)`}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-white hover:bg-white/10"
                >
                  <InstagramIcon aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
