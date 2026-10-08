import type { ReactNode } from "react";

export const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-muted/70 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/15 aria-invalid:border-brand-600";

export type FieldControlProps = {
  id: string;
  name: string;
  defaultValue?: string;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
  required?: boolean;
  className: string;
};

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  defaultValue?: string;
  /** Render input/select/textarea dengan atribut aksesibilitas & kelas yang sudah disiapkan. */
  children: (props: FieldControlProps) => ReactNode;
};

/** Label + kontrol + hint + pesan error; dipakai bersama form pengaduan dan form klaim. */
export function FormField({ id, name, label, required, hint, error, defaultValue, children }: FormFieldProps) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-900">
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
        defaultValue,
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
