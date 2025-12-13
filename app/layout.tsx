// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Cairo } from "next/font/google";
import HeaderShell from "./header-shell";
import { LangProvider } from "./lang-provider";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة منطقة النفط للوقود | PZONE",
  description: "منصة تعريفية رسمية لشركة منطقة النفط للوقود PZONE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body className="min-h-screen bg-[#0b0920] text-white antialiased">
        {/* خلفية */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(184,49,175,0.16),rgba(11,9,32,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(25,167,224,0.08),rgba(11,9,32,0.0),rgba(0,0,0,0.40))]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
        </div>

        <LangProvider>
          {/* Header (Client) */}
          <HeaderShell />

          <main className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-8 lg:px-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 bg-black/25">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-5 text-[11px] text-slate-300 sm:flex-row sm:justify-between sm:gap-3 sm:px-8 sm:text-xs">
              <p className="text-center sm:text-right">
                © {new Date().getFullYear()} شركة منطقة النفط للوقود - PZONE. جميع
                الحقوق محفوظة.
              </p>
              <p className="text-center text-slate-400 sm:text-right">
                www.pzone.com.sa
              </p>
            </div>
          </footer>
        </LangProvider>
      </body>
    </html>
  );
}
