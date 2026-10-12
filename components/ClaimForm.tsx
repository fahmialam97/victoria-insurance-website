"use client";

import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useI18n } from "@/components/LocaleProvider";
import { UploadTile } from "@/components/UploadTile";
import { Captcha } from "@/components/ui/Captcha";
import { ReferenceId } from "@/components/ui/ReferenceId";
import { FormField, type FieldControlProps } from "@/components/ui/FormField";
import type { ClaimDocument } from "@/data/claimDocuments";
import {
  claimTextValues,
  documentFieldName,
  readClaim,
  validateClaim,
  type ClaimState,
  type ClaimTextField,
} from "@/lib/claim";
import { createReferenceId } from "@/lib/complaint";
import { focusFirstError } from "@/lib/focusFirstError";

export type ClaimProductOption = { name: string; documents: ClaimDocument[] };

const initialState: ClaimState = { status: "idle" };

// Mockup statis: pengiriman & unggah file hanya disimulasikan, tidak ada data yang dikirim ke server
const SIMULATED_DELAY_MS = 800;

type FieldProps = {
  name: ClaimTextField;
  label: string;
  hint?: string;
  state: ClaimState;
  children: (props: FieldControlProps) => ReactNode;
};

/** Semua isian klaim wajib diisi. Label & hint ditulis dalam Bahasa Indonesia lalu diterjemahkan. */
function Field({ name, state, label, hint, ...rest }: FieldProps) {
  const { t } = useI18n();
  return (
    <FormField
      id={`klaim-${name}`}
      name={name}
      required
      error={state.errors?.[name]}
      defaultValue={state.values?.[name]}
      label={t(label)}
      hint={hint && t(hint)}
      {...rest}
    />
  );
}

function SectionTitle({ children }: { children: string }) {
  const { t } = useI18n();
  return <h2 className="text-xs font-bold uppercase tracking-wider text-muted sm:col-span-2">{t(children)}</h2>;
}

function ClaimFormInner({ products, onReset }: { products: ClaimProductOption[]; onReset: () => void }) {
  const { t } = useI18n();
  const [state, setState] = useState<ClaimState>(initialState);
  const [pending, setPending] = useState(false);
  const [product, setProduct] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null);
  // Validasi gagal: arahkan ke isian bermasalah paling atas, bukan tetap di dekat tombol kirim
  useEffect(() => {
    if (state.status === "error") focusFirstError(formRef.current);
  }, [state]);
  const handleCaptchaChange = useCallback((verified: boolean) => {
    setCaptchaVerified(verified);
    if (verified) setCaptchaError(undefined);
  }, []);
  // Dokumen pendukung menyesuaikan jenis asuransi yang dipilih
  const documents = products.find((p) => p.name === product)?.documents ?? [];
  const photos = documents.filter((doc) => doc.kind === "photo");
  const files = documents.filter((doc) => doc.kind === "document");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Honeypot: diisi berarti bot, pura-pura sukses
    if (String(formData.get("website") ?? "") !== "") return setState({ status: "success", referenceId: "-" });

    const values = readClaim(formData, documents);
    const errors = validateClaim(values, documents, undefined, t);
    setCaptchaError(captchaVerified ? undefined : t("Centang verifikasi \"Saya bukan robot\" terlebih dahulu."));
    if (Object.keys(errors).length > 0 || !captchaVerified) {
      // File tidak bisa diisi ulang ke input, jadi hanya nilai teks yang disimpan
      return setState({
        status: "error",
        message: t("Periksa kembali data yang Anda isi."),
        errors,
        values: claimTextValues(values),
      });
    }

    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    setPending(false);
    setState({ status: "success", referenceId: createReferenceId("KLM") });
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <CheckCircle2 aria-hidden="true" className="size-10 text-emerald-600" />
        <h2 className="mt-4 text-xl font-bold text-ink-900">{t("Laporan klaim Anda telah terkirim")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {t("Terima kasih. Simpan nomor referensi berikut untuk memantau proses klaim Anda.")}
        </p>
        <ReferenceId value={state.referenceId ?? "-"} />
        <div>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-600"
          >
            {t("Ajukan klaim lain")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-8">
      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-700"
        >
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}

      {/* Honeypot anti-spam: disembunyikan dari pengguna dan pembaca layar */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="klaim-website">Website</label>
        <input id="klaim-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SectionTitle>Data Pelapor</SectionTitle>
        <Field name="name" label="Nama Lengkap" hint="Sesuai nama pemilik polis / tertanggung." state={state}>
          {(props) => <input {...props} type="text" autoComplete="name" maxLength={100} />}
        </Field>
        <Field name="email" label="Email" hint="Informasi proses klaim dikirim ke email ini." state={state}>
          {(props) => <input {...props} type="email" autoComplete="email" maxLength={254} placeholder={t("nama@email.com")} />}
        </Field>
        <Field name="phone" label="Nomor Telepon" state={state}>
          {(props) => <input {...props} type="tel" autoComplete="tel" inputMode="tel" maxLength={20} />}
        </Field>
        <Field name="policyNumber" label="Nomor Polis" state={state}>
          {(props) => <input {...props} type="text" maxLength={50} />}
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SectionTitle>Data Kejadian</SectionTitle>
        {/* Select dikontrol (menentukan daftar dokumen), jadi tidak memakai defaultValue dari state */}
        <FormField id="klaim-product" name="product" label={t("Jenis Asuransi")} required error={state.errors?.product}>
          {(props) => (
            <select {...props} value={product} onChange={(e) => setProduct(e.target.value)}>
              <option value="" disabled>
                {t("Pilih jenis asuransi")}
              </option>
              {products.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          )}
        </FormField>
        <Field name="incidentDate" label="Tanggal Kejadian" state={state}>
          {(props) => <input {...props} type="date" />}
        </Field>
        <div className="sm:col-span-2">
          <Field name="incidentLocation" label="Lokasi Kejadian" state={state}>
            {(props) => <input {...props} type="text" maxLength={200} placeholder={t("Alamat / tempat kejadian")} />}
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            name="chronology"
            label="Kronologi Kejadian"
            hint="Ceritakan urutan kejadian, termasuk keterlibatan pihak ketiga bila ada. Maksimal 3.000 karakter."
            state={state}
          >
            {(props) => <textarea {...props} rows={6} maxLength={3000} className={`${props.className} resize-y`} />}
          </Field>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted">{t("Dokumen Pendukung")}</h2>
          <p className="mt-1 text-xs text-muted">{t("Foto: JPG atau PNG. Dokumen: JPG, PNG, atau PDF. Maksimal 10 MB per file.")}</p>
        </div>
        {documents.length === 0 ? (
          <p className="rounded-xl border-2 border-dashed border-line bg-surface px-4 py-6 text-center text-sm text-muted">
            {t("Pilih jenis asuransi terlebih dahulu untuk melihat dokumen yang diperlukan.")}
          </p>
        ) : (
          // key = produk: ganti produk mengosongkan pilihan file sebelumnya
          <div key={product} className="space-y-4">
            {photos.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {photos.map((doc) => (
                  <UploadTile
                    key={doc.id}
                    doc={doc}
                    id={`klaim-${documentFieldName(doc)}`}
                    name={documentFieldName(doc)}
                    error={state.errors?.[documentFieldName(doc)]}
                  />
                ))}
              </div>
            )}
            {files.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {files.map((doc) => (
                  <UploadTile
                    key={doc.id}
                    doc={doc}
                    id={`klaim-${documentFieldName(doc)}`}
                    name={documentFieldName(doc)}
                    error={state.errors?.[documentFieldName(doc)]}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <Captcha id="klaim-captcha" error={captchaError} onVerifiedChange={handleCaptchaChange} />

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {pending ? (
            <>
              <Loader2 aria-hidden="true" className="size-5 animate-spin" />
              {t("Mengirim…")}
            </>
          ) : (
            <>
              <Send aria-hidden="true" className="size-5" />
              {t("Ajukan Klaim")}
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-muted">
          <span className="text-brand-600">*</span> {t("wajib diisi")}
        </p>
      </div>
    </form>
  );
}

/** Reset form dengan mengganti key agar state kembali awal. */
export function ClaimForm({ products }: { products: ClaimProductOption[] }) {
  const [formKey, setFormKey] = useState(0);
  return <ClaimFormInner key={formKey} products={products} onReset={() => setFormKey((k) => k + 1)} />;
}
