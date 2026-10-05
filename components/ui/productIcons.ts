import {
  Banknote,
  BriefcaseBusiness,
  Car,
  Fingerprint,
  HardHat,
  HeartPulse,
  House,
  Package,
  Plane,
  Scale,
  ServerCog,
  ShieldPlus,
  Ship,
  type LucideIcon,
} from "lucide-react";
import type { ProductIcon } from "@/data/products";

export const productIcons: Record<ProductIcon, LucideIcon> = {
  property: House,
  vehicle: Car,
  accident: ShieldPlus,
  cargo: Ship,
  engineering: HardHat,
  money: Banknote,
  liability: Scale,
  movable: Package,
  travel: Plane,
  dno: BriefcaseBusiness,
  personalCyber: Fingerprint,
  corporateCyber: ServerCog,
  health: HeartPulse,
};
