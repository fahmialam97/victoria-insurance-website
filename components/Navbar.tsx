"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { contactAnchor, mainNav, searchAction, type NavItem } from "@/data/navigation";
import { isExternal } from "@/lib/format";
import { SmartLink } from "./ui/SmartLink";

/** Item aktif bila link internalnya cocok dengan path saat ini. */
function isItemActive(item: NavItem, pathname: string): boolean {
  const hrefs = [item.href, ...(item.groups?.flatMap((g) => g.links.map((l) => l.href)) ?? [])].filter(
    (h): h is string => !!h && !isExternal(h),
  );
  return hrefs.some((h) => (h === "/" ? pathname === "/" : pathname.startsWith(h)));
}

export function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div ref={navRef} className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Victoria Insurance — Beranda" onClick={closeAll}>
          <Image
            src="/images/official/logo-dark.png"
            alt="Victoria Insurance"
            width={418}
            height={46}
            preload
            className="h-auto w-48 sm:w-56 xl:w-60"
          />
        </Link>

        {/* Navigasi desktop */}
        <nav aria-label="Navigasi utama" className="ml-auto hidden xl:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item, index) => {
              const active = isItemActive(item, pathname);
              // Dropdown di ujung kanan diratakan kanan agar tidak keluar viewport.
              const alignRight = index >= mainNav.length - 2;
              const panelId = `${baseId}-${item.label}`;
              const linkClass = `relative inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors ${
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
                      className={`flex gap-6 rounded-xl border border-line bg-white p-4 shadow-card-hover ${
                        item.groups.length > 1 ? "w-max" : "w-60"
                      }`}
                    >
                      {item.groups.map((group, gi) => (
                        <div key={group.title ?? gi} className="min-w-48">
                          {group.title && (
                            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                              {group.title}
                            </p>
                          )}
                          <ul>
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <SmartLink
                                  href={link.href}
                                  onClick={closeAll}
                                  className="block rounded-md px-3 py-2 text-sm text-navy-800 hover:bg-surface hover:text-brand-600"
                                >
                                  {link.label}
                                </SmartLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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

      {/* Pencarian: diteruskan ke fitur search website resmi */}
      <div id={`${baseId}-search`} hidden={!searchOpen} className="border-t border-line bg-white">
        <form action={searchAction} method="get" role="search" className="mx-auto flex max-w-3xl gap-2 px-4 py-4 sm:px-6">
          <label htmlFor={`${baseId}-q`} className="sr-only">
            Cari di website Victoria Insurance
          </label>
          <input
            ref={searchInputRef}
            id={`${baseId}-q`}
            name="s"
            type="search"
            required
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
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <SmartLink
                                  href={link.href}
                                  onClick={closeAll}
                                  className="block py-2 text-sm text-navy-800 hover:text-brand-600"
                                >
                                  {link.label}
                                </SmartLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
