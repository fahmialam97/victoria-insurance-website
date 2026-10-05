import {
  BookOpen,
  Building2,
  ChevronRight,
  ClipboardList,
  MessageSquareWarning,
  MonitorSmartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";
import { SmartLink } from "./ui/SmartLink";

const icons: Record<ServiceIcon, LucideIcon> = {
  claim: ClipboardList,
  workshop: Wrench,
  complaint: MessageSquareWarning,
  office: Building2,
  digital: MonitorSmartphone,
  literacy: BookOpen,
};

type ServiceCardItem = Omit<Service, "icon"> & { icon: ServiceIcon | LucideIcon };

export function ServiceCard({ service }: { service: ServiceCardItem }) {
  const Icon = typeof service.icon === "string" ? icons[service.icon] : service.icon;

  return (
    <SmartLink
      href={service.href}
      className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-card-hover sm:p-6"
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
        <Icon aria-hidden="true" className="size-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-navy-900">{service.name}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">{service.description}</span>
      </span>
      <ChevronRight
        aria-hidden="true"
        className="mt-0.5 size-5 shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
      />
    </SmartLink>
  );
}
