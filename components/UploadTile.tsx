"use client";

import { Camera, FileText } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import type { ClaimDocument } from "@/data/claimDocuments";

type UploadTileProps = {
  doc: ClaimDocument;
  id: string;
  name: string;
  error?: string;
};

/** Kotak unggah satu dokumen klaim: foto dengan pratinjau, dokumen dengan nama file. File tetap di input (tidak dikirim). */
export function UploadTile({ doc, id, name, error }: UploadTileProps) {
  const [fileName, setFileName] = useState<string>();
  const [preview, setPreview] = useState<string>();
  const isPhoto = doc.kind === "photo";
  const describedBy = [doc.hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

  // Lepas URL pratinjau lama agar tidak bocor memori
  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview);
  }, [preview]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setFileName(file?.name);
    setPreview(file && isPhoto && file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined);
  }

  const requiredMark = doc.optional ? (
    <span className="font-normal text-muted"> (opsional)</span>
  ) : (
    <span className="text-brand-600" aria-hidden="true">
      {" "}*
    </span>
  );

  const input = (
    <input
      id={id}
      name={name}
      type="file"
      accept={isPhoto ? ".jpg,.jpeg,.png" : ".jpg,.jpeg,.png,.pdf"}
      required={!doc.optional}
      aria-invalid={error ? true : undefined}
      aria-describedby={describedBy}
      onChange={handleChange}
      className="sr-only"
    />
  );

  const borderClass = error ? "border-brand-600" : "border-line";

  return (
    <div>
      {isPhoto ? (
        <label
          htmlFor={id}
          className={`group relative flex aspect-[4/3] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed ${borderClass} bg-surface px-2 text-center transition-colors hover:border-brand-500/60 hover:bg-brand-50/40 focus-within:ring-2 focus-within:ring-brand-600/30`}
        >
          {preview ? (
            <>
              {/* Pratinjau blob lokal; next/image tidak mendukung URL blob */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt={`Pratinjau ${doc.label}`} className="absolute left-0 top-0 size-full object-cover" />
              <span className="absolute bottom-0 left-0 w-full bg-ink-900/75 px-2 py-1.5 text-xs font-medium text-white">
                {doc.label} · Ganti
              </span>
            </>
          ) : (
            <>
              <Camera aria-hidden="true" className="size-6 text-muted transition-colors group-hover:text-brand-600" />
              <span className="mt-2 text-sm font-medium leading-snug text-ink-900">
                {doc.label}
                {requiredMark}
              </span>
              <span className="mt-0.5 text-xs text-muted">Pilih foto</span>
            </>
          )}
          {input}
        </label>
      ) : (
        <label
          htmlFor={id}
          className={`group flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed ${borderClass} bg-surface px-4 py-3 transition-colors hover:border-brand-500/60 hover:bg-brand-50/40 focus-within:ring-2 focus-within:ring-brand-600/30`}
        >
          <FileText aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-ink-900">
              {doc.label}
              {requiredMark}
            </span>
            <span className="block truncate text-xs text-muted">{fileName ?? "JPG, PNG, atau PDF"}</span>
          </span>
          <span className="shrink-0 text-xs font-semibold text-brand-600">{fileName ? "Ganti" : "Pilih file"}</span>
          {input}
        </label>
      )}
      {doc.hint && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">
          {doc.hint}
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
