// app/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DropKey = "pages" | "blog" | null;

const accent = "#d6a35a";
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

export default function Header({
  lang,
  onToggleLang,
}: {
  lang: "ar" | "en";
  onToggleLang: () => void;
}) {
  const [open, setOpen] = useState<DropKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState<DropKey>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

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

  const NavLink = ({
    href,
    children,
    className = "",
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <Link
      href={href}
      className={
        "px-3 py-2 text-[15px] font-semibold text-slate-100/90 hover:text-[#f3d7ab] transition-colors " +
        className
      }
      onClick={() => closeAll()}
    >
      {children}
    </Link>
  );

  const DesktopDropdown = ({
    id,
    label,
    items,
  }: {
    id: Exclude<DropKey, null>;
    label: string;
    items: { t: string; href: string }[];
  }) => (
    <div
      className="relative"
      onMouseEnter={() => {
        clearCloseTimer();
        setOpen(id);
      }}
      onMouseLeave={() => {
        clearCloseTimer();
        closeTimer.current = window.setTimeout(() => setOpen(null), 120);
      }}
    >
      <button
        className="px-3 py-2 text-[15px] font-semibold text-slate-100/90 hover:text-[#f3d7ab] transition-colors flex items-center gap-2"
        onClick={() => setOpen(open === id ? null : id)}
        aria-haspopup="menu"
        aria-expanded={open === id}
      >
        {label}
        <span
          className="inline-block w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px]"
          style={{ borderTopColor: "rgba(226,232,240,0.75)" }}
        />
      </button>

      <AnimatePresence>
        {open === id && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute right-0 top-[48px] w-[240px] rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.30)] ring-1 ring-black/5"
          >
            <div className="py-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(null)}
                  className="block px-5 py-3 text-[15px] font-semibold text-slate-800 hover:bg-amber-50 transition-colors"
                >
                  {it.t}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MobileAccordion = ({
    id,
    label,
    items,
  }: {
    id: Exclude<DropKey, null>;
    label: string;
    items: { t: string; href: string }[];
  }) => {
    const isOpen = mobileDrop === id;

    return (
      <div className="w-full">
        <button
          className="relative w-full h-12 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition backdrop-blur-md"
          onClick={() => setMobileDrop(isOpen ? null : id)}
          aria-expanded={isOpen}
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2">
            <ChevronDown open={isOpen} />
          </span>
          <span className="block text-center text-[16px] font-extrabold text-slate-100/90">
            {label}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => closeAll()}
                    className="h-11 w-full flex items-center justify-center rounded-xl text-[15px] font-bold text-slate-100/85 hover:text-[#f3d7ab] hover:bg-white/[0.06] transition"
                  >
                    {it.t}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div ref={wrapRef} dir="rtl" className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-[#05041a]/80 backdrop-blur-xl">
        <header className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
          <div className="h-[80px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 select-none">
  {/* خلفية بيضاء كاملة + لوجو أكبر */}
  <div className="h-16 w-16 sm:h-18 sm:w-18 rounded-2xl flex items-center justify-center bg-white overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
    <Image
      src="/logo.jpg"
      alt="شعار PZONE"
      width={72}
      height={72}
      className="h-full w-full object-contain"
      priority
    />
  </div>

  <div className="leading-none">
    <div className="text-[19px] sm:text-[20px] font-black tracking-wide text-white">
      PZONE
    </div>
    <div className="mt-1 text-[11px] text-slate-200">
      Petrol Zone Fuel Company
    </div>
  </div>
</Link>


            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink href="/">{isArabic ? "الرئيسية" : "Home"}</NavLink>
              <NavLink href="#about">{isArabic ? "من نحن" : "About"}</NavLink>
              <NavLink href="#services">
                {isArabic ? "الخدمات" : "Services"}
              </NavLink>

              {/* <DesktopDropdown
                id="pages"
                label={isArabic ? "صفحات" : "Pages"}
                items={[
                  { t: isArabic ? "فريقنا" : "Our Team", href: "/team" },
                  { t: isArabic ? "الأسعار" : "Pricing", href: "/pricing" },
                  { t: isArabic ? "الأسئلة الشائعة" : "FAQ", href: "/faq" },
                  { t: "404", href: "/404" },
                ]}
              />

              <DesktopDropdown
                id="blog"
                label={isArabic ? "المدونة" : "Blog"}
                items={[
                  { t: isArabic ? "المدونة" : "Blog", href: "/blog" },
                  {
                    t: isArabic ? "تفاصيل مقالة" : "Post Details",
                    href: "/blog/details",
                  },
                ]}
              /> */}

              <NavLink href="#contact">
                {isArabic ? "تواصل" : "Contact"}
              </NavLink>
            </nav>

            {/* CTA + Mobile + Lang */}
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleLang}
                className="hidden sm:inline-flex items-center justify-center h-9 px-3 rounded-full border border-white/20 bg-white/[0.06] text-[11px] font-semibold text-slate-100 hover:bg-white/[0.16] transition backdrop-blur-md"
              >
                {isArabic ? "EN" : "AR"}
              </button>

              <a
                href={`tel:${phone}`}
                className="hidden lg:inline-flex items-center justify-center h-11 px-6 rounded-xl font-extrabold text-[#0b0920] transition hover:-translate-y-0.5"
                style={{
                  background: accent,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
                }}
              >
                {isArabic ? "اتصل بنا" : "Call us"}
              </a>

              <button
                className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-white/10 bg-white/[0.08] hover:bg-white/[0.16] transition backdrop-blur-md"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  if (mobileOpen) setMobileDrop(null);
                }}
                aria-label="فتح القائمة"
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="lg:hidden overflow-hidden border-t border-white/10 bg-[#05041a]/95 backdrop-blur-xl"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12 py-5">
                <div className="flex flex-col items-center text-center gap-3">
                  <button
                    onClick={onToggleLang}
                    className="h-10 w-full flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] text-[13px] font-semibold text-slate-100/90"
                  >
                    {isArabic ? "ENGLISH" : "العربية"}
                  </button>

                  <Link
                    href="/"
                    onClick={() => closeAll()}
                    className="h-12 w-full flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] transition text-[16px] font-extrabold text-slate-100/90"
                  >
                    {isArabic ? "الرئيسية" : "Home"}
                  </Link>

                  <Link
                    href="#about"
                    onClick={() => closeAll()}
                    className="h-12 w-full flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] transition text-[16px] font-extrabold text-slate-100/90"
                  >
                    {isArabic ? "من نحن" : "About"}
                  </Link>

                  <Link
                    href="#services"
                    onClick={() => closeAll()}
                    className="h-12 w-full flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] transition text-[16px] font-extrabold text-slate-100/90"
                  >
                    {isArabic ? "الخدمات" : "Services"}
                  </Link>

                  {/* <MobileAccordion
                    id="pages"
                    label={isArabic ? "صفحات" : "Pages"}
                    items={[
                      { t: isArabic ? "فريقنا" : "Our Team", href: "/team" },
                      { t: isArabic ? "الأسعار" : "Pricing", href: "/pricing" },
                      { t: isArabic ? "الأسئلة الشائعة" : "FAQ", href: "/faq" },
                      { t: "404", href: "/404" },
                    ]}
                  />

                  <MobileAccordion
                    id="blog"
                    label={isArabic ? "المدونة" : "Blog"}
                    items={[
                      { t: isArabic ? "المدونة" : "Blog", href: "/blog" },
                      {
                        t: isArabic ? "تفاصيل مقالة" : "Post Details",
                        href: "/blog/details",
                      },
                    ]}
                  /> */}

                  <Link
                    href="#contact"
                    onClick={() => closeAll()}
                    className="h-12 w-full flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.10] transition text-[16px] font-extrabold text-slate-100/90"
                  >
                    {isArabic ? "تواصل" : "Contact"}
                  </Link>

                  <a
                    href={`tel:${phone}`}
                    onClick={() => closeAll()}
                    className="mt-1 w-full inline-flex items-center justify-center h-12 rounded-2xl font-extrabold text-[#0b0920]"
                    style={{ background: accent }}
                  >
                    {isArabic ? "اتصل بنا" : "Call us"}
                  </a>

                  <div className="text-[12px] text-slate-300">
                    {isArabic
                      ? "خدمة العملاء عبر الاتصال المباشر"
                      : "Customer service via direct call"}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
