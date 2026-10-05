import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Mail, MapPin, Phone, PhoneCall, Printer, UserRound } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Kantor",
  description: "Alamat dan kontak Kantor Pusat dan Kantor Pemasaran PT Victoria Insurance, Tbk.",
  alternates: { canonical: "/layanan/kantor" },
};

export default function OfficePage() {
  const { headOffice, marketingOffice, hotline, email } = contact;

  return (
    <ServicePageLayout
      title="Kantor"
      description="Kantor Pusat Jakarta dan Kantor Pemasaran Surabaya."
      activeHref="/layanan/kantor"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface md:aspect-auto">
          <Image
            src="/images/official/gedung-graha-bip.jpg"
            alt="Gedung Graha BIP, lokasi Kantor Pusat PT Victoria Insurance, Tbk"
            fill
            sizes="(min-width: 768px) 360px, 100vw"
            className="scale-[1.15] object-cover"
          />
        </div>

        <article className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <Building2 aria-hidden="true" className="size-4" />
            {headOffice.label}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-navy-900">{headOffice.city}</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <div>
                <dt className="sr-only">Alamat</dt>
                <dd>
                  <address className="not-italic text-navy-800">
                    {headOffice.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <div>
                <dt className="text-muted">Telepon</dt>
                <dd>
                  <a href={`tel:${headOffice.phone.tel}`} className="font-medium text-navy-900 hover:text-brand-600">
                    {headOffice.phone.display}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <PhoneCall aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <div>
                <dt className="text-muted">{hotline.label}</dt>
                <dd>
                  <a href={`tel:${hotline.tel}`} className="font-medium text-navy-900 hover:text-brand-600">
                    {hotline.display}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
              <div>
                <dt className="text-muted">Email</dt>
                <dd>
                  <a href={`mailto:${email}`} className="break-all font-medium text-navy-900 hover:text-brand-600">
                    {email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </article>
      </div>

      <article className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-navy-900/5 px-3 py-1 text-xs font-semibold text-navy-800">
          <Building2 aria-hidden="true" className="size-4" />
          {marketingOffice.label}
        </span>
        <h2 className="mt-4 text-2xl font-bold text-navy-900">{marketingOffice.city}</h2>
        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div className="flex gap-3">
            <UserRound aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-muted">Kepala Kantor Pemasaran</dt>
              <dd className="font-medium text-navy-900">{marketingOffice.head}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-muted">Alamat</dt>
              <dd>
                <address className="not-italic text-navy-800">
                  {marketingOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-muted">Telepon</dt>
              <dd className="font-medium text-navy-900">{marketingOffice.phones.join(" / ")}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Printer aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-muted">Facsimile</dt>
              <dd className="font-medium text-navy-900">{marketingOffice.fax}</dd>
            </div>
          </div>
        </dl>
      </article>
    </ServicePageLayout>
  );
}
