"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "ar" | "en";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  isArabic: boolean;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  const isArabic = lang === "ar";

  useEffect(() => {
    const dir = isArabic ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [isArabic, lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((v) => (v === "ar" ? "en" : "ar")),
      isArabic,
    }),
    [lang, isArabic]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
