import type { Metadata } from "next";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { aboutLinks, businessNetwork } from "@/data/company";

export const metadata: Metadata = {
  title: "Jaringan Bisnis",
  description: "Strategi, prospek usaha, dan jaringan mitra bisnis PT Victoria Insurance, Tbk.",
  alternates: { canonical: aboutLinks.network.href },
};

const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function BusinessNetworkPage() {
  const { strategy, prospects, partners, agents } = businessNetwork;

  return (
    <AboutPageLayout
      title="Jaringan Bisnis"
      description="Strategi, prospek usaha, dan mitra bisnis Victoria Insurance."
      activeHref={aboutLinks.network.href}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <section aria-labelledby="strategi" className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
          <h2 id="strategi" className="text-xl font-bold text-navy-900">
            Strategi
          </h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-navy-800">
            {strategy.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>
        <section aria-labelledby="prospek" className="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
          <h2 id="prospek" className="text-xl font-bold">
            Prospek Usaha
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{prospects}</p>
        </section>
      </div>

      <section aria-labelledby="mitra" className="mt-10">
        <h2 id="mitra" className="text-xl font-bold text-navy-900">
          Mitra Bisnis
        </h2>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {partners.map((group) => (
            <section
              key={group.title}
              aria-labelledby={slug(group.title)}
              className="rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <h3 id={slug(group.title)} className="flex items-center justify-between gap-3 font-semibold text-navy-900">
                {group.title}
                <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-semibold text-muted">{group.names.length}</span>
              </h3>
              <ul className="mt-3 divide-y divide-line text-sm text-navy-800">
                {group.names.map((name) => (
                  <li key={name} className="py-2">
                    {name}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section aria-labelledby="rekanan-agen" className="mt-10">
        <h2 id="rekanan-agen" className="text-xl font-bold text-navy-900">
          Rekanan Agen
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-muted">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Nomor Registrasi Keagenan
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Nama Agen
                </th>
                <th scope="col" className="px-5 py-3 font-semibold">
                  Kota
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-navy-800">
              {agents.map((agent) => (
                <tr key={agent.registration}>
                  <td className="px-5 py-3 font-mono text-xs">{agent.registration}</td>
                  <td className="px-5 py-3 font-medium text-navy-900">{agent.name}</td>
                  <td className="px-5 py-3">{agent.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AboutPageLayout>
  );
}
