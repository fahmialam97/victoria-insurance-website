"use client";

import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { FormField, type FieldControlProps } from "@/components/ui/FormField";
import {
  createReferenceId,
  readComplaint,
  validateComplaint,
  type ComplaintField,
  type ComplaintState,
} from "@/lib/complaint";

const initialState: ComplaintState = { status: "idle" };

// Mockup statis: pengiriman hanya disimulasikan, tidak ada data yang dikirim ke server
const SIMULATED_DELAY_MS = 800;

type FieldProps = {
  name: ComplaintField;
  label: string;
  required?: boolean;
  hint?: string;
  state: ComplaintState;
  children: (props: FieldControlProps) => ReactNode;
};

function Field({ name, state, ...rest }: FieldProps) {
  return (
    <FormField
      id={`pengaduan-${name}`}
      name={name}
      error={state.errors?.[name]}
      defaultValue={state.values?.[name]}
      {...rest}
    />
  );
}

function ComplaintFormInner({ onReset }: { onReset: () => void }) {
  const [state, setState] = useState<ComplaintState>(initialState);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Honeypot: diisi berarti bot, pura-pura sukses
    if (String(formData.get("website") ?? "") !== "") return setState({ status: "success", referenceId: "-" });

    const values = readComplaint(formData);
    const errors = validateComplaint(values);
    if (errors && Object.keys(errors).length > 0) {
      return setState({ status: "error", message: "Periksa kembali data yang Anda isi.", errors, values });
    }

    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
    setPending(false);
    setState({ status: "success", referenceId: createReferenceId() });
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <CheckCircle2 aria-hidden="true" className="size-10 text-emerald-600" />
        <h2 className="mt-4 text-xl font-bold text-ink-900">Pengaduan Anda telah terkirim</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Terima kasih. Simpan nomor referensi berikut untuk keperluan tindak lanjut.
        </p>
        <p className="mt-4 inline-block rounded-lg bg-white px-4 py-2 font-mono text-base font-semibold text-ink-900">
          {state.referenceId}
        </p>
        <div>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 hover:border-brand-600 hover:text-brand-600"
          >
            Kirim pengaduan lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
        <label htmlFor="pengaduan-website">Website</label>
        <input id="pengaduan-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="email" label="Email" required hint="Tanggapan akan dikirim ke email ini." state={state}>
          {(props) => <input {...props} type="email" autoComplete="email" maxLength={254} placeholder="nama@email.com" />}
        </Field>
        <Field name="name" label="Nama Lengkap" required state={state}>
          {(props) => <input {...props} type="text" autoComplete="name" maxLength={100} />}
        </Field>
        <Field name="phone" label="Nomor Telepon" required state={state}>
          {(props) => <input {...props} type="tel" autoComplete="tel" inputMode="tel" maxLength={20} />}
        </Field>
        <Field name="policyNumber" label="Nomor Polis" required state={state}>
          {(props) => <input {...props} type="text" maxLength={50} />}
        </Field>
      </div>

      <Field name="message" label="Isi Pengaduan" required hint="Maksimal 3.000 karakter." state={state}>
        {(props) => <textarea {...props} rows={6} maxLength={3000} className={`${props.className} resize-y`} />}
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 aria-hidden="true" className="size-5 animate-spin" />
            Mengirim…
          </>
        ) : (
          <>
            <Send aria-hidden="true" className="size-5" />
            Kirim Pengaduan
          </>
        )}
      </button>
      <p className="text-xs text-muted">
        <span className="text-brand-600">*</span> wajib diisi
      </p>
    </form>
  );
}

/** Reset form dengan mengganti key agar state action kembali awal. */
export function ComplaintForm() {
  const [formKey, setFormKey] = useState(0);
  return <ComplaintFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}
