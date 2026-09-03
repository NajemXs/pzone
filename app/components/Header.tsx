"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropKey = "pages" | "blog" | null;
type Lang = "ar" | "en";

// تم وضع رقم الجوال الصحيح
const phone = "0555833295";

const ChevronDown = ({ open }: { open: boolean }) => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="rgba(226,232,240,0.9)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default function Header() {
  const [lang, setLang] = useState<Lang>("ar");
  const [open, setOpen] = useState<DropKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState<DropKey>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  // دالة تغيير اللغة وإرسال إشعار للصفحة الرئيسية لتتغير معها
  const onToggleLang = () => {
    setLang((prev) => {
      const newLang = prev === "ar" ? "en" : "ar";
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("langChange", { detail: newLang }));
      }
      return newLang;
    });
  };

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closeAll = () => {
    clearCloseTimer();
    setOpen(null);
    setMobileOpen(false);
    setMobileDrop(null);
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(null);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileDrop(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isArabic = lang === "ar";

  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link
      href={href}
      className={`px-4 py-2 text-[15px] font-bold text-slate-200 hover:text-purple-300 transition-colors ${className}`}
      onClick={() => closeAll()}
    >
      {children}
    </Link>
  );

  return (
    <div ref={wrapRef} dir={isArabic ? "rtl" : "ltr"} className="sticky top-0 z-50">
      <div className="border-b border-purple-900/30 bg-[#0f172a]/85 backdrop-blur-xl shadow-lg shadow-purple-900/10">
        <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[85px] flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 select-none group transform transition hover:scale-105 duration-300">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center bg-white overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] transition-shadow">
                <Image
                  src="/logo.jpg"
                  alt="PZONE Logo"
                  width={72}
                  height={72}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-[22px] sm:text-[24px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  PZONE
                </div>
                <div className="mt-0.5 text-[11px] font-semibold text-purple-300 tracking-wider">
                  Petrol Zone Fuel
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavLink href="/">{isArabic ? "الرئيسية" : "Home"}</NavLink>
              <NavLink href="#about">{isArabic ? "من نحن" : "About"}</NavLink>
              <NavLink href="#services">{isArabic ? "الخدمات" : "Services"}</NavLink>
              <NavLink href="#products">{isArabic ? "المنتجات" : "Products"}</NavLink>
              <NavLink href="#contact">{isArabic ? "تواصل معنا" : "Contact"}</NavLink>
            </nav>

            {/* CTA + Mobile Toggle + Lang */}
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleLang}
                className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-[13px] font-bold text-white hover:bg-purple-500/20 transition backdrop-blur-md"
              >
                {isArabic ? "EN" : "AR"}
              </button>

              <a
                href={`tel:${phone}`}
                className="hidden lg:inline-flex items-center justify-center h-11 px-7 rounded-full font-extrabold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 shadow-[0_5px_20px_rgba(139,92,246,0.3)] hover:-translate-y-1"
              >
                {isArabic ? "اتصل بنا" : "Call us"}
              </a>

              <button
                className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 transition backdrop-blur-md"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  if (mobileOpen) setMobileDrop(null);
                }}
              >
                <span className="text-white text-xl">
                  {mobileOpen ? "✕" : "☰"}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-purple-900/50 bg-[#0f172a]/95 backdrop-blur-2xl"
            >
              <div className="mx-auto px-6 py-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <button
                    onClick={onToggleLang}
                    className="h-12 w-full flex items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-900/20 hover:bg-purple-900/40 text-[14px] font-bold text-white transition"
                  >
                    {isArabic ? "Switch to English" : "التبديل للعربية"}
                  </button>

                  <Link href="/" onClick={() => closeAll()} className="h-12 w-full flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition text-[16px] font-extrabold text-white">
                    {isArabic ? "الرئيسية" : "Home"}
                  </Link>
                  <Link href="#about" onClick={() => closeAll()} className="h-12 w-full flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition text-[16px] font-extrabold text-white">
                    {isArabic ? "من نحن" : "About"}
                  </Link>
                  <Link href="#services" onClick={() => closeAll()} className="h-12 w-full flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition text-[16px] font-extrabold text-white">
                    {isArabic ? "الخدمات" : "Services"}
                  </Link>
                  <Link href="#products" onClick={() => closeAll()} className="h-12 w-full flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition text-[16px] font-extrabold text-white">
                    {isArabic ? "المنتجات" : "Products"}
                  </Link>
                  <Link href="#contact" onClick={() => closeAll()} className="h-12 w-full flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 transition text-[16px] font-extrabold text-white">
                    {isArabic ? "تواصل معنا" : "Contact"}
                  </Link>

                  <a
                    href={`tel:${phone}`}
                    onClick={() => closeAll()}
                    className="mt-2 w-full inline-flex items-center justify-center h-14 rounded-2xl font-extrabold text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_10px_20px_rgba(139,92,246,0.3)]"
                  >
                    {isArabic ? "اتصل بنا الآن" : "Call us now"}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
