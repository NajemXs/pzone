// app/header-shell.tsx
"use client";

import Image from "next/image";
import { useLang } from "./lang-provider";

export default function HeaderShell() {
  const { isArabic, toggleLang } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070515]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl border border-white/20 bg-white/5">
            <Image
              src="/logo.png"
              alt="PZONE logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">PZONE</p>
            <p className="text-[12px] text-slate-300">
              {isArabic ? "شركة منطقة النفط للوقود" : "Petrol Zone Fuel Company"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* زر اللغة */}
          <button
            type="button"
            onClick={toggleLang}
            className="rounded-full border border-white/25 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:bg-white/10"
          >
            {isArabic ? "EN" : "عربي"}
          </button>

          {/* تواصل معنا يفتح الاتصال */}
          <a
            href="tel:0500000000" // غيّر الرقم لرقمك
            className="inline-flex items-center justify-center rounded-full border border-[#b831af]/70 bg-[#b831af]/10 px-4 py-2 text-xs font-semibold text-[#f6dcff] hover:bg-[#b831af]/18"
          >
            {isArabic ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </div>
    </header>
  );
}
