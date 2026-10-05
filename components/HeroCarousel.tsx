"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { HeroImage } from "@/data/hero";

const INTERVAL_MS = 5000;

export function HeroCarousel({ images }: { images: HeroImage[] }) {
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
    <section
      aria-roledescription="carousel"
      aria-label="Galeri foto Victoria Insurance"
      className="relative"
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
      <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-card-hover">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <div
              key={image.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} dari ${count}`}
              aria-hidden={i !== index}
              inert={i !== index}
              className="relative aspect-[16/10] w-full shrink-0 bg-white"
            >
              {/* object-contain agar seluruh foto terlihat tanpa terpotong */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload={i === 0}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-contain p-2"
              />
              {image.caption && (
                <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/70 to-transparent px-5 pb-3 pt-8 text-sm font-medium text-white">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Foto sebelumnya"
              className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-card hover:bg-white hover:text-brand-600"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Foto berikutnya"
              className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-card hover:bg-white hover:text-brand-600"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? "Putar slide otomatis" : "Jeda slide otomatis"}
            className="inline-flex size-7 items-center justify-center rounded-full text-navy-700 hover:text-brand-600"
          >
            {userPaused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          </button>
          <div className="flex items-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Tampilkan foto ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-7 bg-brand-600" : "w-2 bg-navy-900/20 hover:bg-navy-900/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
      <p className="sr-only" aria-live="polite">
        Foto {index + 1} dari {count}
      </p>
    </section>
  );
}
