"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { useDictionary } from "./DictionaryProvider";
import { ChevronDown } from "lucide-react";

function FlagES() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
      <rect width="20" height="15" fill="#c60b1e" />
      <rect y="3.75" width="20" height="7.5" fill="#ffc400" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="20" height="15" viewBox="0 0 60 30" className="rounded-sm">
      <clipPath id="t"><rect width="60" height="30" /></clipPath>
      <g clipPath="url(#t)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagFR() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
      <rect width="6.67" height="15" fill="#002395" />
      <rect x="6.67" width="6.67" height="15" fill="#fff" />
      <rect x="13.33" width="6.67" height="15" fill="#ED2939" />
    </svg>
  );
}

function FlagNL() {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15" className="rounded-sm">
      <rect width="20" height="5" fill="#AE1C28" />
      <rect y="5" width="20" height="5" fill="#fff" />
      <rect y="10" width="20" height="5" fill="#21468B" />
    </svg>
  );
}

const flags: Record<Locale, () => React.ReactElement> = {
  es: FlagES,
  en: FlagEN,
  fr: FlagFR,
  nl: FlagNL,
};

export default function LanguageSwitcher() {
  const { locale } = useDictionary();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Replace current locale in pathname
  function getLocalePath(targetLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;
    return segments.join("/");
  }

  const CurrentFlag = flags[locale];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-black/5 transition-colors"
        aria-label="Change language"
      >
        <CurrentFlag />
        <span className="text-sm font-medium uppercase">{locale}</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1 min-w-[160px] z-50">
          {locales.map((loc) => {
            const Flag = flags[loc];
            return (
              <Link
                key={loc}
                href={getLocalePath(loc)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-primary-50 transition-colors ${
                  loc === locale
                    ? "bg-primary-50 text-primary-600 font-medium"
                    : "text-gray-700"
                }`}
              >
                <Flag />
                {localeNames[loc]}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
