import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, UserRound } from "lucide-react";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { companyInfoLinks, corporateSecretary } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Sekretaris Perusahaan",
  description: "Informasi Sekretaris Perusahaan (Corporate Secretary) PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.corsec.href },
};

export default function CorporateSecretaryPage() {
  const { name, decree, address, phone, email, image } = corporateSecretary;

  return (
    <CompanyInfoPageLayout title="Sekretaris Perusahaan" activeHref={companyInfoLinks.corsec.href}>
      <article className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Corporate Secretary</p>
        <h2 className="mt-2 text-2xl font-bold text-navy-900">{name}</h2>
        <p className="mt-1 text-sm text-muted">Berdasarkan {decree}</p>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div className="flex gap-3 sm:col-span-2">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-[14px] text-muted">Alamat</dt>
              <dd className="text-navy-900">{address}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-[14px] text-muted">Telepon</dt>
              <dd>
                <a href={`tel:${phone.tel}`} className="font-medium text-navy-900 hover:text-brand-600">
                  {phone.display}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
            <div>
              <dt className="text-[14px] text-muted">Email</dt>
              <dd>
                <a href={`mailto:${email}`} className="break-all font-medium text-navy-900 hover:text-brand-600">
                  {email}
                </a>
              </dd>
            </div>
          </div>
        </dl>
      </article>

      <section aria-labelledby="pengumuman-corsec" className="mt-8">
        <h2 id="pengumuman-corsec" className="mb-3 flex items-center gap-2 text-lg font-bold text-navy-900">
          <UserRound aria-hidden="true" className="size-5 text-brand-600" />
          Pengumuman Perubahan Sekretaris Perusahaan
        </h2>
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 900px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </section>
    </CompanyInfoPageLayout>
  );
}
