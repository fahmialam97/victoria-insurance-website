import Image from "next/image";
import { ArrowRight, Headset, Mail, MapPin, Phone, PhoneCall, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { contact } from "@/data/site";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

function ContactItem({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium uppercase tracking-wider text-white/60">{label}</dt>
        <dd className="mt-0.5 text-sm font-medium text-white">{children}</dd>
      </div>
    </div>
  );
}

/** Jam operasional tidak ditampilkan karena tidak ditemukan pada website resmi saat audit. */
export function ContactSection() {
  const { headOffice, hotline, email } = contact;

  return (
    <section id="hubungi-kami" aria-labelledby="kontak-heading" className="pb-16 sm:pb-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <Image
            src="/images/official/pattern-product-icons.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-[0.06] invert"
          />
          <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-brand-600/20 blur-3xl" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <Headset aria-hidden="true" className="size-6" />
              </span>
              <h2 id="kontak-heading" className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Hubungi Kami
              </h2>
              <p className="mt-2 text-base leading-relaxed text-white/75">
                Kantor Pusat {headOffice.addressLines[0]}, {headOffice.city}.
              </p>
              <SmartLink
                href={contact.fullContactUrl}
                className="group mt-6 inline-flex items-center whitespace-nowrap gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-brand-50"
              >
                Lihat Kontak Lengkap
                <ArrowRight aria-hidden="true" className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5" />
              </SmartLink>
            </div>

            <dl className="grid flex-1 gap-6 sm:grid-cols-2 lg:max-w-2xl">
              <ContactItem icon={Phone} label="Telepon">
                <a href={`tel:${headOffice.phone.tel}`} className="hover:underline">
                  {headOffice.phone.display}
                </a>
              </ContactItem>
              <ContactItem icon={PhoneCall} label={hotline.label}>
                <a href={`tel:${hotline.tel}`} className="hover:underline">
                  {hotline.display}
                </a>
              </ContactItem>
              <ContactItem icon={Mail} label="Email">
                <a href={`mailto:${email}`} className="break-all hover:underline">
                  {email}
                </a>
              </ContactItem>
              <ContactItem icon={MapPin} label={headOffice.label}>
                <address className="not-italic">
                  {headOffice.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactItem>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
