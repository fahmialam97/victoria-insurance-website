"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { HeroImage } from "@/data/hero";
import { useI18n } from "./LocaleProvider";

const INTERVAL_MS = 6000;

/** Indeks slide aktif, dibaca HeroTitle agar judul ikut berganti bersama gambar. */
const ActiveSlideContext = createContext(0);

/**
 * Judul banner per slide. Semua judul ditumpuk di sel grid yang sama, jadi tinggi area = judul terpanjang
 * dan tombol di bawahnya tidak melompat saat judul berganti; judul nonaktif disembunyikan dari pembaca layar.
 */
export function HeroTitle({ id, titles, className }: { id: string; titles: string[]; className: string }) {
  const index = useContext(ActiveSlideContext);
  return (
    // items-end: judul yang lebih pendek menempel ke bawah (dekat tombol), bukan menyisakan baris kosong di atas tombol
    <h1 id={id} className={`grid items-end ${className}`}>
      {titles.map((title, i) => (
        <span
          key={i}
          aria-hidden={i !== index}
          className={`[grid-area:1/1] transition-opacity duration-700 ease-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {title}
        </span>
      ))}
    </h1>
  );
}

/** Slider banner selebar layar; `children` adalah konten tetap di atas gambar. */
export function HeroCarousel({ images, children }: { images: HeroImage[]; children: ReactNode }) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = images.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const playing = !userPaused && !hovered && !reducedMotion && count > 1;

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [playing, count]);

  return (
    <div
      aria-roledescription="carousel"
      aria-label={t("Banner Victoria Insurance")}
      className="relative flex flex-col overflow-hidden bg-surface sm:block sm:h-[480px] lg:h-auto lg:aspect-[2160/728] lg:max-h-[640px] lg:min-h-[460px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHovered(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      {/* Mobile: foto di bawah teks; sm ke atas: foto memenuhi banner di belakang teks */}
      <div className="relative aspect-[4/3] sm:absolute sm:inset-0 sm:aspect-auto">
      {images.map((image, i) => (
        <div
          key={image.src}
          role="group"
          aria-roledescription="slide"
          aria-label={t("{n} dari {total}", { n: i + 1, total: count })}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            preload={i === 0}
            // Slide berikutnya dimuat lebih awal agar tidak kosong saat fade
            loading={i === 0 ? undefined : "eager"}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: image.focus }}
          />
        </div>
      ))}

      {/* Gradasi tipis di kiri agar teks tetap terbaca di atas langit */}
      <div aria-hidden="true" className="absolute inset-0 hidden bg-gradient-to-r from-white/50 via-white/10 to-transparent sm:block" />

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-3 sm:bottom-5">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? t("Putar banner otomatis") : t("Jeda banner otomatis")}
            className="inline-flex size-7 items-center justify-center rounded-full bg-white/80 text-ink-800 shadow-card hover:text-brand-600"
          >
            {userPaused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
          </button>
          <div className="flex items-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => go(i)}
                aria-label={t("Tampilkan banner {n}", { n: i + 1 })}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand-600" : "w-5 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      )}
      </div>

      <div className="relative order-first py-10 sm:order-none sm:h-full sm:py-0">
        <ActiveSlideContext.Provider value={index}>{children}</ActiveSlideContext.Provider>
      </div>
      <p className="sr-only" aria-live="polite">
        {t("Banner {n} dari {total}", { n: index + 1, total: count })}
      </p>
    </div>
  );
}
