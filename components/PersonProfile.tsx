import Image from "next/image";
import type { Person } from "@/data/company";

export function PersonProfile({ person }: { person: Person }) {
  return (
    <article
      id={person.slug}
      aria-labelledby={`${person.slug}-name`}
      className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <Image
          src={person.photo.src}
          alt={person.photo.alt}
          width={person.photo.width}
          height={person.photo.height}
          sizes="160px"
          className="size-36 shrink-0 rounded-full border border-line bg-surface object-cover sm:size-40"
        />
        <div className="min-w-0">
          <h2 id={`${person.slug}-name`} className="text-2xl font-bold text-navy-900">
            {person.name}
          </h2>
          <p className="mt-1 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {person.position}
          </p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-navy-800">
            {person.bio.map((section, i) => (
              <div key={section.heading ?? i}>
                {section.heading && <h3 className="mb-1 font-semibold text-navy-900">{section.heading}</h3>}
                <div className="space-y-3">
                  {section.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
