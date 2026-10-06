"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { HeroImage } from "@/data/hero";

const INTERVAL_MS = 6000;

/** Slider banner selebar layar; `children` adalah konten tetap di atas gambar. */
export function HeroCarousel({ images, children }: { images: HeroImage[]; children: ReactNode }) {
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
      aria-label="Banner Victoria Insurance"
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
          aria-label={`${i + 1} dari ${count}`}
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
            aria-label={userPaused ? "Putar banner otomatis" : "Jeda banner otomatis"}
            className="inline-flex size-7 items-center justify-center rounded-full bg-white/80 text-navy-800 shadow-card hover:text-brand-600"
          >
            {userPaused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
          </button>
          <div className="flex items-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Tampilkan banner ${i + 1}`}
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

      <div className="relative order-first py-10 sm:order-none sm:h-full sm:py-0">{children}</div>
      <p className="sr-only" aria-live="polite">
        Banner {index + 1} dari {count}
      </p>
    </div>
  );
}
