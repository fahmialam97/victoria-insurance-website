import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Download, FileText, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SmartLink } from "@/components/ui/SmartLink";
import { rupsArchiveHref, rupslbEvents, rupslbHref } from "@/data/rupslb";
import { formatDate } from "@/lib/format";

export const dynamicParams = false;

export function generateStaticParams() {
  return rupslbEvents.map((event) => ({ year: String(event.year) }));
}

const findEvent = (year: string) => rupslbEvents.find((event) => String(event.year) === year);

export async function generateMetadata(props: PageProps<"/rupslb/[year]">): Promise<Metadata> {
  const { year } = await props.params;
  const event = findEvent(year);
  if (!event) return {};

  const description = `Pengumuman dan dokumen ${event.title} PT Victoria Insurance Tbk.`;
  return {
    title: event.title,
    description,
    alternates: { canonical: rupslbHref(event) },
    openGraph: { title: event.title, description, url: rupslbHref(event) },
  };
}

export default async function RupslbPage(props: PageProps<"/rupslb/[year]">) {
  const { year } = await props.params;
  const event = findEvent(year);
  if (!event) notFound();

  const details = [
    { icon: CalendarDays, label: "Tanggal", value: formatDate(event.meetingDate) },
    { icon: Clock, label: "Waktu", value: event.meetingTime },
    { icon: MapPin, label: "Tempat", value: event.venue },
  ];

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-600">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>Informasi Perusahaan</li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-navy-900">
                {event.title}
              </li>
            </ol>
          </nav>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">Pengumuman Penting</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Rapat Umum Pemegang Saham Luar Biasa (RUPSLB) {event.year}
          </h1>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4">
                <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-navy-900">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted">Waktu pelaksanaan sesuai Pengumuman Ringkasan Risalah RUPSLB.</p>
        </Container>
      </section>

      <section aria-labelledby="dokumen-heading" className="py-12 sm:py-16">
        <Container>
          <h2 id="dokumen-heading" className="text-2xl font-bold tracking-tight text-navy-900">
            Dokumen {event.title}
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {event.documents.map((doc) => (
              <li key={doc.url}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <FileText aria-hidden="true" className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy-900">{doc.title}</h3>
                      <p className="mt-0.5 text-xs text-muted">{doc.dateLabel}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{doc.summary}</p>
                  <SmartLink
                    href={doc.url}
                    className="mt-auto inline-flex items-center gap-2 self-start pt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    Unduh PDF<span className="sr-only"> {doc.title}</span>
                  </SmartLink>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-brand-600"
            >
              <ArrowLeft aria-hidden="true" className="size-4" />
              Kembali ke Beranda
            </Link>
            <SmartLink
              href={rupsArchiveHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Arsip RUPS &amp; Keterbukaan Informasi
            </SmartLink>
          </div>
        </Container>
      </section>
    </>
  );
}
