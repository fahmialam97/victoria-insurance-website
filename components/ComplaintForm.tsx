"use client";

import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { useActionState, useState } from "react";
import { submitComplaint, type ComplaintField, type ComplaintState } from "@/app/pengaduan/actions";

const initialState: ComplaintState = { status: "idle" };

type FieldProps = {
  name: ComplaintField;
  label: string;
  required?: boolean;
  hint?: string;
  state: ComplaintState;
  children: (props: {
    id: string;
    name: string;
    defaultValue?: string;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
    required?: boolean;
    className: string;
  }) => React.ReactNode;
};

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-muted/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15 aria-invalid:border-brand-600";

function Field({ name, label, required, hint, state, children }: FieldProps) {
  const id = `pengaduan-${name}`;
  const error = state.errors?.[name];
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}{" "}
        {required ? (
          <span className="text-brand-600" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="font-normal text-muted">(opsional)</span>
        )}
      </label>
      {children({
        id,
        name,
        defaultValue: state.values?.[name],
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        required,
        className: inputClass,
      })}
      {hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-brand-700">
          {error}
        </p>
      )}
    </div>
  );
}

function ComplaintFormInner({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(submitComplaint, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <CheckCircle2 aria-hidden="true" className="size-10 text-emerald-600" />
        <h2 className="mt-4 text-xl font-bold text-navy-900">Pengaduan Anda telah terkirim</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Terima kasih. Simpan nomor referensi berikut untuk keperluan tindak lanjut.
        </p>
        <p className="mt-4 inline-block rounded-lg bg-white px-4 py-2 font-mono text-base font-semibold text-navy-900">
          {state.referenceId}
        </p>
        <div>
          <button
            type="button"
            onClick={onReset}
            className="mt-6 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy-800 hover:border-brand-600 hover:text-brand-600"
          >
            Kirim pengaduan lain
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
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
        <Field name="name" label="Nama Lengkap" state={state}>
          {(props) => <input {...props} type="text" autoComplete="name" maxLength={100} />}
        </Field>
        <Field name="phone" label="Nomor Telepon" state={state}>
          {(props) => <input {...props} type="tel" autoComplete="tel" inputMode="tel" maxLength={20} />}
        </Field>
        <Field name="policyNumber" label="Nomor Polis" state={state}>
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
