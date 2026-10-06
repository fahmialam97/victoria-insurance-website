export type ComplaintField = "name" | "email" | "phone" | "policyNumber" | "message";

export type ComplaintValues = Record<ComplaintField, string>;

export type ComplaintState = {
  status: "idle" | "success" | "error";
  message?: string;
  referenceId?: string;
  errors?: Partial<Record<ComplaintField, string>>;
  values?: Partial<ComplaintValues>;
};

const LIMITS: Record<ComplaintField, number> = { name: 100, email: 254, phone: 20, policyNumber: 50, message: 3000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readComplaint(formData: FormData): ComplaintValues {
  const field = (key: ComplaintField) => String(formData.get(key) ?? "").trim();
  return {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    policyNumber: field("policyNumber"),
    message: field("message"),
  };
}

export function validateComplaint(values: ComplaintValues): ComplaintState["errors"] {
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
  return errors;
}

/** Nomor referensi format ADU-YYYYMMDD-XXXXXX. */
export function createReferenceId(date = new Date()) {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase().padEnd(6, "0");
  return `ADU-${date.toISOString().slice(0, 10).replaceAll("-", "")}-${random}`;
}
