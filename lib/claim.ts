import type { ClaimDocument } from "@/data/claimDocuments";
import { translator, type Translate } from "./i18n/translate";

const CLAIM_TEXT_FIELDS = [
  "name",
  "email",
  "phone",
  "policyNumber",
  "product",
  "incidentDate",
  "incidentLocation",
  "chronology",
] as const;

export type ClaimTextField = (typeof CLAIM_TEXT_FIELDS)[number];

export type ClaimValues = Record<ClaimTextField, string> & {
  /** File per dokumen, key = id dokumen. */
  documents: Record<string, File | undefined>;
};

export type ClaimState = {
  status: "idle" | "success" | "error";
  message?: string;
  referenceId?: string;
  /** Key = nama isian teks atau `doc-<id dokumen>`. */
  errors?: Record<string, string>;
  /** Nilai teks untuk mengisi ulang form saat validasi gagal (file tetap tersimpan di input-nya). */
  values?: Partial<Record<ClaimTextField, string>>;
};

export const documentFieldName = (doc: ClaimDocument) => `doc-${doc.id}`;

const LIMITS = { name: 100, email: 254, phone: 20, policyNumber: 50, incidentLocation: 200, chronology: 3000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png"];
const DOCUMENT_TYPES = [...IMAGE_TYPES, "application/pdf"];

export function readClaim(formData: FormData, docs: ClaimDocument[]): ClaimValues {
  const documents: ClaimValues["documents"] = {};
  for (const doc of docs) {
    const file = formData.get(documentFieldName(doc));
    // Input file kosong tetap mengirim File berukuran 0
    documents[doc.id] = file instanceof File && file.size > 0 ? file : undefined;
  }
  const text = Object.fromEntries(
    CLAIM_TEXT_FIELDS.map((key) => [key, String(formData.get(key) ?? "").trim()]),
  ) as Record<ClaimTextField, string>;
  return { ...text, documents };
}

/** Hanya nilai teks (untuk mengisi ulang form setelah validasi gagal). */
export const claimTextValues = (values: ClaimValues) =>
  Object.fromEntries(CLAIM_TEXT_FIELDS.map((key) => [key, values[key]])) as Record<ClaimTextField, string>;

/**
 * Semua isian teks wajib (sama seperti form pengaduan); dokumen wajib kecuali yang ditandai opsional.
 * `today` = YYYY-MM-DD (tanggal kejadian tidak boleh di masa depan). Pesan error diterjemahkan lewat `t`.
 */
export function validateClaim(
  values: ClaimValues,
  docs: ClaimDocument[],
  today = new Date().toISOString().slice(0, 10),
  t: Translate = translator("id"),
): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!values.name) errors.name = t("Nama lengkap wajib diisi.");
  if (!values.email) errors.email = t("Email wajib diisi.");
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = t("Format email tidak valid.");
  if (!values.phone) errors.phone = t("Nomor telepon wajib diisi.");
  else if (!/^[0-9+\-\s()]+$/.test(values.phone)) errors.phone = t("Nomor telepon hanya boleh berisi angka.");
  if (!values.policyNumber) errors.policyNumber = t("Nomor polis wajib diisi.");
  if (!values.product) errors.product = t("Pilih jenis asuransi.");
  if (!values.incidentDate) errors.incidentDate = t("Tanggal kejadian wajib diisi.");
  else if (values.incidentDate > today) errors.incidentDate = t("Tanggal kejadian tidak boleh melewati hari ini.");
  if (!values.incidentLocation) errors.incidentLocation = t("Lokasi kejadian wajib diisi.");
  if (!values.chronology) errors.chronology = t("Kronologi kejadian wajib diisi.");
  else if (values.chronology.length < 20) errors.chronology = t("Kronologi kejadian minimal 20 karakter.");
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (!errors[key] && values[key].length > LIMITS[key]) errors[key] = t("Maksimal {n} karakter.", { n: LIMITS[key] });
  }

  for (const doc of docs) {
    const file = values.documents[doc.id];
    const key = documentFieldName(doc);
    if (!file) {
      if (!doc.optional) errors[key] = t("{dokumen} wajib diunggah.", { dokumen: t(doc.label) });
    } else if (!(doc.kind === "photo" ? IMAGE_TYPES : DOCUMENT_TYPES).includes(file.type)) {
      errors[key] = doc.kind === "photo" ? t("Format foto harus JPG atau PNG.") : t("Format file harus JPG, PNG, atau PDF.");
    } else if (file.size > MAX_FILE_BYTES) {
      errors[key] = t("Ukuran file maksimal 10 MB.");
    }
  }
  return errors;
}
