import { ClipboardCheck, FileSearch } from "lucide-react";
import { AboutPageLayout } from "@/components/AboutPageLayout";
import { getLayananContent, type Step } from "@/data/layanan";
import { localizedMetadata } from "@/lib/i18n/metadata";
import { getI18n } from "@/lib/i18n/server";

export const generateMetadata = localizedMetadata((t) => ({
  title: t("Informasi Transaksi"),
  description: t("Prosedur pembelian polis dan pengajuan klaim PT Victoria Insurance, Tbk."),
  href: "/layanan/informasi-transaksi",
}));

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-6 space-y-5">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default async function TransactionPage() {
  const { locale, t } = await getI18n();
  const { transaction } = getLayananContent(locale);
  const sections = [
    { id: "pembelian-polis", icon: ClipboardCheck, ...transaction.purchase },
    { id: "pengajuan-klaim", icon: FileSearch, ...transaction.claim },
  ];

  return (
    <AboutPageLayout
      title={t("Informasi Transaksi")}
      description={t("Prosedur & Cara Bertransaksi")}
      activeHref="/layanan/informasi-transaksi"
    >
      <div className="space-y-6">
        <div className="space-y-3 rounded-2xl bg-surface p-6 text-base leading-relaxed text-ink-800 sm:p-8">
          {transaction.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {sections.map(({ id, icon: Icon, title, lead, steps }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="scroll-mt-4 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <h2 id={`${id}-heading`} className="text-xl font-bold text-ink-900">
                {title}
              </h2>
            </div>
            <p className="mt-4 text-sm text-muted">{lead}</p>
            <StepList steps={steps} />
          </section>
        ))}
      </div>
    </AboutPageLayout>
  );
}
