// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Header from "./components/Header";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PZONE | شركة منطقة النفط للوقود",
  description:
    "شركة منطقة النفط للوقود PZONE – محطات وقود حديثة، شحن كهربائي، وحلول طاقة مستدامة في المملكة.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-[#f5f7fb] text-slate-900`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="mt-10 border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 md:flex-row">
              <p>© {new Date().getFullYear()} شركة منطقة النفط للوقود – PZONE.</p>
              <p>مستقبل صناعة الوقود والطاقة في المملكة.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
