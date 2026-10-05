import { ArrowRight, ChevronRight, FileText, Megaphone } from "lucide-react";
import Link from "next/link";
import { currentRupslb, rupslbHref } from "@/data/rupslb";
import { formatDate } from "@/lib/format";
import { Container } from "./ui/Container";
import { SmartLink } from "./ui/SmartLink";

/** "Keep the announcement, simplify the presentation." — detail lengkap ada di /rupslb/[year]. */
export function RupslbAnnouncement() {
  const event = currentRupslb;
  if (!event) return null;

  const meetingDate = formatDate(event.meetingDate);
  const description =
    event.status === "completed"
      ? `RUPSLB PT Victoria Insurance Tbk telah diselenggarakan pada ${meetingDate} di Graha BIP, Jakarta Selatan.`
      : `RUPSLB PT Victoria Insurance Tbk akan diselenggarakan pada ${meetingDate} di Graha BIP, Jakarta Selatan.`;

  return (
    <section aria-labelledby="rupslb-heading" className="pb-16 sm:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50/70 via-white to-white">
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-brand-600" />
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <Megaphone aria-hidden="true" className="size-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">Pengumuman Penting</p>
                <h2 id="rupslb-heading" className="mt-1 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  {event.title}
                </h2>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{description}</p>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                  <span className="font-semibold text-navy-800">Mata acara:</span> {event.agenda}
                </p>
                <Link
                  href={rupslbHref(event)}
                  className="group mt-6 inline-flex items-center whitespace-nowrap gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Lihat Pengumuman
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-navy-900">Dokumen Terkait</h3>
              <ul className="mt-3 divide-y divide-line">
                {event.documents.map((doc) => (
                  <li key={doc.url}>
                    <SmartLink
                      href={doc.url}
                      className="group flex items-center gap-3 py-3 text-sm text-navy-800 hover:text-brand-600"
                    >
                      <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
                      <span className="flex-1">{doc.title}</span>
                      <ChevronRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600"
                      />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
