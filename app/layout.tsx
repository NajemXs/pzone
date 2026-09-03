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
      {/* أضفنا selection لتجميل لون التحديد ليناسب هوية PZONE */}
      <body className={`${cairo.className} bg-[#f5f7fb] text-slate-900 selection:bg-purple-600 selection:text-white`}>
        <div className="min-h-screen flex flex-col">
          {/* شريط التنقل الخاص بك */}
          <Header />
          
          {/* المحتوى الرئيسي */}
          <main className="flex-1 flex flex-col">{children}</main>
          
          {/* الفوتر الخاص بك مع تحسينات بصرية بسيطة */}
          <footer className="mt-auto border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[13px] font-medium text-slate-500 md:flex-row text-center md:text-right">
              <p>© {new Date().getFullYear()} شركة منطقة النفط للوقود – PZONE.</p>
              <p>مستقبل صناعة الوقود والطاقة في المملكة.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
