import type { Metadata } from "next";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { CompanyInfoPageLayout } from "@/components/CompanyInfoPageLayout";
import { companyInfoLinks, supportingInstitutions } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Lembaga Penunjang",
  description: "Notaris, akuntan publik, dan biro administrasi efek PT Victoria Insurance, Tbk.",
  alternates: { canonical: companyInfoLinks.supporting.href },
};

export default function SupportingInstitutionsPage() {
  return (
    <CompanyInfoPageLayout title="Lembaga Penunjang" activeHref={companyInfoLinks.supporting.href}>
      <ul className="grid gap-5">
        {supportingInstitutions.map((item) => (
          <li key={item.role} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{item.role}</p>
            <h2 className="mt-2 text-xl font-bold text-navy-900">{item.name}</h2>
            <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div className="flex gap-3 sm:col-span-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-[14px] text-muted">Alamat</dt>
                  <dd className="text-navy-900">{item.address}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-[14px] text-muted">Telepon</dt>
                  {item.phones.map((phone) => (
                    <dd key={phone} className="font-medium text-navy-900">
                      {phone}
                    </dd>
                  ))}
                </div>
              </div>
              {item.fax && (
                <div className="flex gap-3">
                  <Printer aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <dt className="text-[14px] text-muted">Fax</dt>
                    <dd className="font-medium text-navy-900">{item.fax}</dd>
                  </div>
                </div>
              )}
              {item.email && (
                <div className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                  <div>
                    <dt className="text-[14px] text-muted">Email</dt>
                    <dd>
                      <a href={`mailto:${item.email}`} className="font-medium text-navy-900 hover:text-brand-600">
                        {item.email}
                      </a>
                    </dd>
                  </div>
                </div>
              )}
            </dl>
          </li>
        ))}
      </ul>
    </CompanyInfoPageLayout>
  );
}
