import {
  BookOpen,
  Building2,
  ChevronRight,
  ClipboardList,
  FileCheck2,
  MessageSquareWarning,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";
import { getI18n } from "@/lib/i18n/server";
import { SmartLink } from "./ui/SmartLink";

const icons: Record<ServiceIcon, LucideIcon> = {
  claim: FileCheck2,
  workshop: Wrench,
  complaint: MessageSquareWarning,
  office: Building2,
  transaction: ClipboardList,
  literacy: BookOpen,
};

type ServiceCardItem = Omit<Service, "icon"> & { icon: ServiceIcon | LucideIcon };

/**
 * Nama & deskripsi diterjemahkan lewat kamus (kunci = teks Indonesia di data);
 * `translated` untuk teks yang sudah diterjemahkan pemanggil (mis. berisi angka dinamis).
 */
export async function ServiceCard({ service, translated }: { service: ServiceCardItem; translated?: boolean }) {
  const { t: translate } = await getI18n();
  const t = translated ? (text: string) => text : translate;
  const Icon = typeof service.icon === "string" ? icons[service.icon] : service.icon;

  return (
    <SmartLink
      href={service.href}
      className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-card-hover sm:p-6"
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900/5 text-ink-800 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-ink-900">{t(service.name)}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">{t(service.description)}</span>
      </span>
      <ChevronRight
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
      />
    </SmartLink>
  );
}
