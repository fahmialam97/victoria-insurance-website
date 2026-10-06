"use server";

import { headers } from "next/headers";
import { MailerNotConfiguredError, sendComplaintEmail } from "@/lib/mailer";

export type ComplaintField = "name" | "email" | "phone" | "policyNumber" | "message";

export type ComplaintState = {
  status: "idle" | "success" | "error";
  message?: string;
  referenceId?: string;
  errors?: Partial<Record<ComplaintField, string>>;
  values?: Partial<Record<ComplaintField, string>>;
};

const LIMITS: Record<ComplaintField, number> = { name: 100, email: 254, phone: 20, policyNumber: 50, message: 3000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Batas sederhana per IP (in-memory, per instance server)
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;
  submissions.set(ip, [...recent, now]);
  return false;
}

const field = (formData: FormData, key: ComplaintField) => String(formData.get(key) ?? "").trim();

export async function submitComplaint(_prev: ComplaintState, formData: FormData): Promise<ComplaintState> {
  // Honeypot: diisi berarti bot, pura-pura sukses
  if (String(formData.get("website") ?? "") !== "") return { status: "success", referenceId: "-" };

  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    phone: field(formData, "phone"),
    policyNumber: field(formData, "policyNumber"),
    message: field(formData, "message"),
  };

  const errors: ComplaintState["errors"] = {};
  if (!values.email) errors.email = "Email wajib diisi.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Format email tidak valid.";
  if (!values.name) errors.name = "Nama lengkap wajib diisi.";
  if (!values.phone) errors.phone = "Nomor telepon wajib diisi.";
  else if (!/^[0-9+\-\s()]+$/.test(values.phone)) errors.phone = "Nomor telepon hanya boleh berisi angka.";
  if (!values.policyNumber) errors.policyNumber = "Nomor polis wajib diisi.";
  if (!values.message) errors.message = "Isi pengaduan wajib diisi.";
  else if (values.message.length < 10) errors.message = "Isi pengaduan minimal 10 karakter.";
  for (const key of Object.keys(LIMITS) as ComplaintField[]) {
    if (!errors[key] && values[key].length > LIMITS[key]) errors[key] = `Maksimal ${LIMITS[key]} karakter.`;
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Periksa kembali data yang Anda isi.", errors, values };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0].trim() || headerList.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Terlalu banyak pengaduan dalam waktu singkat. Coba lagi beberapa menit lagi.", values };
  }

  const submittedAt = new Date();
  const referenceId = `ADU-${submittedAt.toISOString().slice(0, 10).replaceAll("-", "")}-${crypto
    .randomUUID()
    .slice(0, 6)
    .toUpperCase()}`;

  try {
    await sendComplaintEmail({ ...values, referenceId, submittedAt });
  } catch (error) {
    console.error("[pengaduan] gagal mengirim email", error);
    const message =
      error instanceof MailerNotConfiguredError
        ? "Layanan pengiriman pengaduan belum dikonfigurasi. Silakan hubungi kami melalui email atau hotline."
        : "Pengaduan gagal terkirim. Silakan coba lagi beberapa saat lagi.";
    return { status: "error", message, values };
  }

  return { status: "success", referenceId };
}
