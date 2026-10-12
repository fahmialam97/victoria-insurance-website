"use client";

import { Check, Loader2, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/LocaleProvider";
import type { Locale } from "@/lib/i18n/locale";

type Grecaptcha = {
  render: (
    container: HTMLElement,
    params: { sitekey: string; callback: () => void; "expired-callback": () => void; hl?: string },
  ) => number;
  ready: (cb: () => void) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

/** Diisi saat build bila tersedia (site key reCAPTCHA v2 untuk domain mockup); kosong = simulasi UI. */
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
/** Bahasa widget mengikuti bahasa halaman (pindah bahasa = muat ulang penuh, jadi script cukup dimuat sekali). */
const scriptSrc = (locale: Locale) => `https://www.google.com/recaptcha/api.js?render=explicit&hl=${locale}`;

type CaptchaProps = {
  id: string;
  error?: string;
  onVerifiedChange: (verified: boolean) => void;
};

/** Widget reCAPTCHA v2 asli bila ada site key (tanpa verifikasi server: mockup statis). */
function GoogleRecaptcha({ onVerifiedChange }: Pick<CaptchaProps, "onVerifiedChange">) {
  const { locale } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !SITE_KEY) return;
    const render = () =>
      window.grecaptcha?.ready(() => {
        if (container.childElementCount > 0) return;
        window.grecaptcha?.render(container, {
          sitekey: SITE_KEY,
          callback: () => onVerifiedChange(true),
          "expired-callback": () => onVerifiedChange(false),
        });
      });

    if (window.grecaptcha) return render();
    let script = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc(locale)}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc(locale);
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    return () => script?.removeEventListener("load", render);
  }, [onVerifiedChange, locale]);

  return <div ref={containerRef} />;
}

/** Simulasi "Saya bukan robot" untuk mockup statis tanpa site key. */
function MockCaptcha({ id, error, onVerifiedChange }: CaptchaProps) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "checking" | "verified">("idle");

  function verify() {
    if (status !== "idle") return;
    setStatus("checking");
    window.setTimeout(() => {
      setStatus("verified");
      onVerifiedChange(true);
    }, 700);
  }

  return (
    <div
      className={`flex w-full max-w-xs items-center gap-3 rounded-xl border bg-surface px-4 py-3 ${
        error ? "border-brand-600" : "border-line"
      }`}
    >
      <button
        id={id}
        type="button"
        role="checkbox"
        aria-checked={status === "verified"}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onClick={verify}
        disabled={status === "checking"}
        className={`inline-flex size-7 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
          status === "verified" ? "border-emerald-600 bg-emerald-600 text-white" : "border-ink-800/30 bg-white hover:border-brand-600"
        }`}
      >
        {status === "checking" && <Loader2 aria-hidden="true" className="size-4 animate-spin text-muted" />}
        {status === "verified" && <Check aria-hidden="true" className="size-5" />}
        <span className="sr-only">{t("Saya bukan robot")}</span>
      </button>
      <label htmlFor={id} className="flex-1 cursor-pointer text-sm font-medium text-ink-900">
        {t("Saya bukan robot")}
      </label>
      <ShieldCheck aria-hidden="true" className="size-6 text-muted" />
    </div>
  );
}

/** Verifikasi anti-bot sebelum kirim form: reCAPTCHA v2 asli bila ada site key, selain itu simulasi. */
export function Captcha(props: CaptchaProps) {
  return (
    <div>
      {SITE_KEY ? <GoogleRecaptcha onVerifiedChange={props.onVerifiedChange} /> : <MockCaptcha {...props} />}
      {props.error && (
        <p id={`${props.id}-error`} className="mt-1.5 text-xs font-medium text-brand-700">
          {props.error}
        </p>
      )}
    </div>
  );
}
