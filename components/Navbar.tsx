"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { contactAnchor, mainNav, type NavItem } from "@/data/navigation";
import { isExternal } from "@/lib/format";
import { searchEntries, type SearchEntry } from "@/lib/search";
import { SmartLink } from "./ui/SmartLink";

/** Item aktif bila salah satu link internal atau activePaths-nya cocok dengan path saat ini. */
function isItemActive(item: NavItem, pathname: string): boolean {
  const paths = [
    item.href,
    item.viewAll?.href,
    ...(item.activePaths ?? []),
    ...(item.groups?.flatMap((g) => g.links.map((l) => l.href)) ?? []),
  ].filter((h): h is string => !!h && !isExternal(h));
  return paths.some((h) => (h === "/" ? pathname === "/" : pathname.startsWith(h)));
}

/** Cocok bila path sama atau halaman turunannya (mis. /berita/artikel/[slug]). */
function matchesPath(href: string, pathname: string): boolean {
  if (isExternal(href)) return false;
  const path = pathname.replace(/\/$/, "") || "/";
  const target = href.replace(/\/$/, "") || "/";
  return target === "/" ? path === "/" : path === target || path.startsWith(`${target}/`);
}

/** Href link dropdown yang aktif: yang paling spesifik, agar /tentang-kami tidak ikut aktif di /tentang-kami/direksi. */
function activeLinkHref(item: NavItem, pathname: string): string | undefined {
  return item.groups
    ?.flatMap((g) => g.links.map((l) => l.href))
    .filter((href) => matchesPath(href, pathname))
    .sort((a, b) => b.length - a.length)[0];
}

/** Saran pencarian saat kueri masih kosong (dicocokkan dengan judul entri indeks). */
const popularSearches = ["Asuransi Kendaraan Bermotor", "Form Pengaduan", "Informasi Transaksi", "Bengkel Rekanan"];

export function Navbar({ searchIndex }: { searchIndex: SearchEntry[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeResult, setActiveResult] = useState(0);
  const results = useMemo(() => searchEntries(searchIndex, query), [searchIndex, query]);
  const suggestions = useMemo(
    () => popularSearches.map((title) => searchIndex.find((e) => e.title === title)).filter((e) => e !== undefined),
    [searchIndex],
  );
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const baseId = useId();

  // Tutup dropdown saat klik di luar atau tekan Escape.
  useEffect(() => {
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setSearchOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Kunci scroll body saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
    setActiveResult(0);
  };

  const openResult = (entry: SearchEntry) => {
    closeSearch();
    router.push(entry.href);
  };

  const onSearchKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveResult((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveResult((i) => (i - 1 + results.length) % results.length);
    }
  };

  const resultListId = `${baseId}-results`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div ref={navRef} className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Victoria Insurance — Beranda" onClick={closeAll}>
          <Image
            src="/images/official/logo-dark.png"
            alt="Victoria Insurance"
            width={418}
            height={46}
            preload
            className="h-auto w-56 sm:w-64 xl:w-64 2xl:w-80"
          />
        </Link>

        {/* Navigasi desktop */}
        <nav aria-label="Navigasi utama" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item, index) => {
              const active = isItemActive(item, pathname);
              // Dropdown di ujung kanan diratakan kanan agar tidak keluar viewport.
              const alignRight = index >= mainNav.length - 2;
              const panelId = `${baseId}-${index}`;
              const linkClass = `relative inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-[16px] font-medium transition-colors ${
                active ? "text-brand-600" : "text-navy-800 hover:text-brand-600"
              }`;
              const indicator = active && (
                <span aria-hidden="true" className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-brand-600" />
              );

              if (!item.groups) {
                return (
                  <li key={item.label}>
                    <SmartLink href={item.href!} className={linkClass} aria-current={active ? "page" : undefined}>
                      {item.label}
                      {indicator}
                    </SmartLink>
                  </li>
                );
              }

              const isOpen = openMenu === item.label;
              const currentHref = activeLinkHref(item, pathname);
              const multiColumn = item.groups.length > 1;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={linkClass}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                    {indicator}
                  </button>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className={`absolute top-full pt-3 ${alignRight ? "right-0" : "left-1/2 -translate-x-1/2"}`}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                    }}
                  >
                    <div
                      className={`rounded-xl border border-line bg-white shadow-card-hover ${
                        multiColumn ? "w-max p-6" : "w-64 p-4"
                      }`}
                    >
                      <div className="flex divide-x divide-line">
                        {item.groups.map((group, gi) => (
                          <div
                            key={group.title ?? gi}
                            className={`min-w-48 px-6 py-1 first:pl-0 last:pr-0 ${!group.title && multiColumn ? "max-w-60" : ""}`}
                          >
                            {group.title && (
                              <p className="relative mb-1 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-brand-600">
                                {group.title}
                              </p>
                            )}
                            <ul>
                              {group.links.map((link) => {
                                const linkActive = link.href === currentHref;
                                return (
                                  <li key={link.href}>
                                    <SmartLink
                                      href={link.href}
                                      onClick={closeAll}
                                      aria-current={linkActive ? "page" : undefined}
                                      className={`block rounded-md px-3 py-2 text-sm ${
                                        linkActive
                                          ? "bg-brand-50 font-semibold text-brand-600"
                                          : "text-navy-800 hover:bg-surface hover:text-brand-600"
                                      }`}
                                    >
                                      {link.label}
                                    </SmartLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {item.viewAll && (
                        <SmartLink
                          href={item.viewAll.href}
                          onClick={closeAll}
                          className="mt-3 flex items-center justify-between gap-2 border-t border-line px-3 pt-3 text-sm font-semibold text-brand-600 hover:text-brand-700"
                        >
                          {item.viewAll.label}
                          <ArrowRight aria-hidden="true" className="size-4" />
                        </SmartLink>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-expanded={searchOpen}
            aria-controls={`${baseId}-search`}
            aria-label={searchOpen ? "Tutup pencarian" : "Buka pencarian"}
            className="inline-flex size-10 items-center justify-center rounded-full text-navy-800 hover:bg-surface hover:text-brand-600"
          >
            {searchOpen ? <X aria-hidden="true" className="size-5" /> : <Search aria-hidden="true" className="size-5" />}
          </button>
          <Link
            href={contactAnchor}
            className="hidden whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            Hubungi Kami
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls={`${baseId}-mobile`}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex size-10 items-center justify-center rounded-full text-navy-800 hover:bg-surface xl:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </div>

      {/* Pencarian lokal (mockup statis): hasil langsung dari indeks halaman yang disusun saat build */}
      <div id={`${baseId}-search`} hidden={!searchOpen} className="border-t border-line bg-white">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <form
            role="search"
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const target = results[activeResult] ?? results[0];
              if (target) openResult(target);
            }}
          >
            <label htmlFor={`${baseId}-q`} className="sr-only">
              Cari di website Victoria Insurance
            </label>
            <input
              ref={searchInputRef}
              id={`${baseId}-q`}
              type="search"
              role="combobox"
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={results.length > 0}
              aria-controls={resultListId}
              aria-activedescendant={results.length ? `${resultListId}-${activeResult}` : undefined}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveResult(0);
              }}
              onKeyDown={onSearchKeyDown}
              placeholder="Cari produk, layanan, atau informasi…"
              className="min-w-0 flex-1 rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-navy-900 placeholder:text-muted focus:border-brand-600 focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              Cari
            </button>
          </form>

          {query.trim() ? (
            results.length ? (
              <ul
                id={resultListId}
                role="listbox"
                aria-label="Hasil pencarian"
                className="mt-3 max-h-[60vh] divide-y divide-line overflow-y-auto rounded-xl border border-line"
              >
                {results.map((entry, i) => (
                  <li key={entry.href} id={`${resultListId}-${i}`} role="option" aria-selected={i === activeResult}>
                    <Link
                      href={entry.href}
                      onClick={closeSearch}
                      onMouseEnter={() => setActiveResult(i)}
                      className={`flex items-start gap-3 px-4 py-3 ${i === activeResult ? "bg-surface" : ""}`}
                    >
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-semibold ${i === activeResult ? "text-brand-600" : "text-navy-900"}`}
                        >
                          {entry.title}
                        </span>
                        {entry.description && (
                          <span className="mt-0.5 block truncate text-xs text-muted">{entry.description}</span>
                        )}
                      </span>
                      <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        {entry.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 px-1 text-sm text-muted">
                Tidak ada hasil untuk &ldquo;{query.trim()}&rdquo;. Coba kata kunci lain, misalnya &ldquo;kendaraan&rdquo;
                atau &ldquo;klaim&rdquo;.
              </p>
            )
          ) : (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Populer</span>
              {suggestions.map((entry) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={closeSearch}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-navy-800 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id={`${baseId}-mobile`}
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-white xl:hidden"
      >
        <nav aria-label="Navigasi utama (seluler)" className="px-4 py-4 sm:px-6">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const active = isItemActive(item, pathname);
              if (!item.groups) {
                return (
                  <li key={item.label}>
                    <SmartLink
                      href={item.href!}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3 text-base font-medium ${active ? "text-brand-600" : "text-navy-900"}`}
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                );
              }
              const currentHref = activeLinkHref(item, pathname);
              return (
                <li key={item.label}>
                  <details className="group">
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between py-3 text-base font-medium [&::-webkit-details-marker]:hidden ${
                        active ? "text-brand-600" : "text-navy-900"
                      }`}
                    >
                      {item.label}
                      <ChevronDown aria-hidden="true" className="size-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="space-y-3 pb-4 pl-3">
                      {item.groups.map((group, gi) => (
                        <div key={group.title ?? gi}>
                          {group.title && (
                            <p className="pb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                              {group.title}
                            </p>
                          )}
                          <ul>
                            {group.links.map((link) => {
                              const linkActive = link.href === currentHref;
                              return (
                                <li key={link.href}>
                                  <SmartLink
                                    href={link.href}
                                    onClick={closeAll}
                                    aria-current={linkActive ? "page" : undefined}
                                    className={`block py-2 text-sm ${
                                      linkActive ? "font-semibold text-brand-600" : "text-navy-800 hover:text-brand-600"
                                    }`}
                                  >
                                    {link.label}
                                  </SmartLink>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                      {item.viewAll && (
                        <SmartLink
                          href={item.viewAll.href}
                          onClick={closeAll}
                          className="flex items-center gap-2 py-2 text-sm font-semibold text-brand-600"
                        >
                          {item.viewAll.label}
                          <ArrowRight aria-hidden="true" className="size-4" />
                        </SmartLink>
                      )}
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
          <Link
            href={contactAnchor}
            onClick={closeAll}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-base font-semibold text-white hover:bg-brand-700"
          >
            Hubungi Kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
