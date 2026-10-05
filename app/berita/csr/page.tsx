import type { Metadata } from "next";
import Image from "next/image";
import { CalendarDays, HardHat, Leaf, Users, UserRoundCheck, type LucideIcon } from "lucide-react";
import { NewsTabs } from "@/components/NewsTabs";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { csr, csrHref } from "@/data/csr";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "CSR",
  description: "Agenda dan komitmen Corporate Social Responsibility (CSR) PT Victoria Insurance, Tbk.",
  alternates: { canonical: csrHref },
};

const pillarIcons: Record<(typeof csr.pillars)[number]["icon"], LucideIcon> = {
  environment: Leaf,
  safety: HardHat,
  community: Users,
  customer: UserRoundCheck,
};

export default function CsrPage() {
  const { banner, agendas, peduli, pillars } = csr;

  return (
    <>
      <PageHeader title="CSR" description="Corporate Social Responsibility Victoria Insurance." trail={["Berita"]}>
        <NewsTabs active={csrHref} />
      </PageHeader>

      <section className="py-12 sm:py-16">
        <Container className="space-y-14">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              className="h-auto w-full"
            />
          </div>

          {/* Tentang CSR */}
          <section aria-labelledby="tentang-csr">
            <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-brand-600" />
            <h2 id="tentang-csr" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Tentang CSR
            </h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-navy-800">{csr.about}</p>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.icon];
                return (
                  <li key={pillar.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-navy-900">{pillar.title}</h3>
                    {pillar.paragraphs.map((text) => (
                      <p key={text} className="mt-2 text-sm leading-relaxed text-muted">
                        {text}
                      </p>
                    ))}
                    {pillar.points && (
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-brand-600">
                        {pillar.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Agenda CSR per tahun */}
          <section aria-labelledby="agenda-csr">
            <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-brand-600" />
            <h2 id="agenda-csr" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Agenda CSR
            </h2>
            <nav aria-label="Pilih tahun agenda" className="mt-5">
              <ul className="flex flex-wrap gap-2">
                {agendas.map(({ year }) => (
                  <li key={year}>
                    <a
                      href={`#agenda-${year}`}
                      className="inline-flex rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy-800 hover:border-brand-600 hover:text-brand-600"
                    >
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 space-y-6">
              {agendas.map((agenda) => (
                <article
                  key={agenda.year}
                  id={`agenda-${agenda.year}`}
                  aria-labelledby={`agenda-${agenda.year}-title`}
                  className="scroll-mt-4 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                    Agenda CSR – {agenda.year}
                  </p>
                  <h3 id={`agenda-${agenda.year}-title`} className="mt-2 text-xl font-bold text-navy-900">
                    {agenda.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                    <CalendarDays aria-hidden="true" className="size-4" />
                    <time dateTime={agenda.date}>{formatDate(agenda.date)}</time>
                  </p>
                  <div className={`mt-5 grid gap-4 ${agenda.images.length > 1 ? "md:grid-cols-2" : ""}`}>
                    {agenda.images.map((image) => (
                      <Image
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes={agenda.images.length > 1 ? "(min-width: 768px) 560px, 100vw" : "(min-width: 1280px) 1150px, 100vw"}
                        className={`h-auto w-full rounded-xl border border-line ${
                          agenda.images.length === 1 && image.width < 1000 ? "mx-auto max-w-2xl" : ""
                        }`}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Kegiatan CSR Victoria Peduli */}
          <section aria-labelledby="victoria-peduli">
            <span aria-hidden="true" className="mb-3 block h-1 w-10 rounded-full bg-brand-600" />
            <h2 id="victoria-peduli" className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              {peduli.title}
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div className="space-y-4 leading-relaxed text-navy-800">
                {peduli.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
                <p className="font-medium text-muted">{peduli.place}</p>
              </div>
              <Image
                src={peduli.image.src}
                alt={peduli.image.alt}
                width={peduli.image.width}
                height={peduli.image.height}
                sizes="(min-width: 1024px) 500px, 100vw"
                className="h-auto w-full rounded-2xl border border-line"
              />
            </div>

            <h3 className="mt-10 text-lg font-semibold text-navy-900">
              Galeri Foto Kegiatan <span className="text-brand-600">#VictoriaPeduli</span>
            </h3>
            <ul className="mt-4 grid gap-6">
              {peduli.gallery.map((image) => (
                <li key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1280px) 1216px, 100vw"
                    className="h-auto w-full rounded-xl border border-line"
                  />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>
    </>
  );
}
