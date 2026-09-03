"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    }, 1500);
  };

  const phone = "0555833295";
  const email = "info@pzone.com.sa";

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#0f172a] text-white overflow-hidden selection:bg-purple-600 selection:text-white">
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `
      }} />

      {/* قسم الهيرو (Hero Section) */}
      <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-[#2e1065] via-[#0f172a] to-[#1e1b4b]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full mix-blend-screen filter blur-[120px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center animate-fade-up">
          <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-bold text-purple-300 backdrop-blur-md">
            شركة منطقة النفط للوقود - PZONE
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            مستقبل صناعة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
              الوقود والطاقة
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed font-medium">
            شبكة متطورة من محطات الوقود توفر لك وقوداً نظيفاً وخدمة سريعة بمعايير عالمية على كافة طرقات المملكة العربية السعودية.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#products" className="w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:-translate-y-1 text-center">
              تصفح منتجاتنا
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-white border border-purple-500/30 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md text-center">
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* قسم المنتجات والزيوت الجديد (Pzone Oil Section) */}
      <section id="products" className="w-full py-24 px-4 bg-[#050814] flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">Pzone <span className="text-blue-500">Oil</span></h2>
          
          {/* شارة زيوت بكر */}
          <div className="mb-14 inline-block rounded-full border-2 border-amber-500/50 bg-amber-500/10 px-8 py-3 text-xl md:text-2xl font-black text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            زيوت بكر غير معاد تكريرها - Virgin Oil
          </div>

          {/* شبكة المنتجات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            {/* منتج 1: العلبة الحمراء */}
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-red-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/7.jpeg" alt="زيت محرك 5W-30" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">زيت محرك 5W-30</h3>
              <p className="text-red-400 font-bold">أداء فائق (Maximum Performance)</p>
            </div>

            {/* منتج 2: العلبة الذهبية */}
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-yellow-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/10.jpeg" alt="زيت محرك 5W-30 ذهبي" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">زيت محرك 5W-30</h3>
              <p className="text-yellow-500 font-bold">تركيبة متطورة لحماية المحرك</p>
            </div>

            {/* منتج 3: العلبة الزرقاء */}
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-blue-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/9.jpeg" alt="زيت محرك 10W-30" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">زيت محرك 10W-30</h3>
              <p className="text-blue-400 font-bold">حماية متكاملة وعمر أطول</p>
            </div>

            {/* منتج 4: العلبة الفضية */}
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-gray-400/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/8.jpeg" alt="زيت محرك 20W-50" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">زيت محرك 20W-50</h3>
              <p className="text-gray-400 font-bold">لتحمل درجات الحرارة العالية</p>
            </div>

            {/* منتج 5: مياه الرديتر */}
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/11.jpeg" alt="مياه تبريد رديتر" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">مياه تبريد رديتر</h3>
              <p className="text-cyan-400 font-bold">Premium Coolant 4L</p>
            </div>
            
            {/* منتجات إضافية (جيربكس وتشحيم) */}
            <div className="bg-gradient-to-br from-purple-900/40 to-[#0f172a] rounded-3xl p-6 border border-purple-500/30 flex flex-col items-center justify-center">
               <h3 className="text-3xl font-black text-white mb-4">والمزيد من المنتجات</h3>
               <ul className="text-lg text-purple-200 font-bold space-y-3">
                 <li>✨ زيت جيربوكس عالي الأداء</li>
                 <li>✨ علب تشحيم متخصصة</li>
                 <li>✨ منتجات العناية بالسيارات</li>
               </ul>
            </div>

          </div>
        </div>
      </section>

      {/* قسم من نحن (About Section) */}
      <section id="about" className="w-full py-24 px-4 bg-[#0a0f1d] flex flex-col items-center text-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">من <span className="text-purple-500">نحن</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            نحن في PZONE نلتزم بتقديم أعلى معايير الجودة في خدمات الوقود والطاقة، مع التركيز على الاستدامة والابتكار لخدمة عملائنا.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition hover:scale-[1.02] duration-500">
              <Image src="/1.png" alt="عن PZONE" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition hover:scale-[1.02] duration-500">
              <Image src="/2.png" alt="محطاتنا" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخدمات (Services Section) */}
      <section id="services" className="w-full py-24 px-4 bg-[#0f172a] flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">خدمات <span className="text-blue-500">PZONE</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            حلول متكاملة مصممة لتلبية احتياجاتك على الطريق بكل كفاءة وأمان.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-purple-500 transition-colors">
                <Image src="/3.png" alt="وقود" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">وقود عالي الجودة</h3>
              <p className="text-gray-400">أحدث أنواع الوقود لضمان أفضل أداء.</p>
            </div>
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-blue-500 transition-colors">
                <Image src="/4.png" alt="مرافق" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">مرافق متكاملة</h3>
              <p className="text-gray-400">استراحات، مساجد، لتلبية احتياجات المسافرين.</p>
            </div>
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-purple-500 transition-colors">
                <Image src="/5.png" alt="شحن كهربائي" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">شحن السيارات الكهربائية</h3>
              <p className="text-gray-400">محطات شحن سريعة ومتطورة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* معرض الصور الإضافي */}
      <section className="w-full py-16 px-4 bg-[#0a0f1d] flex justify-center">
         <div className="max-w-4xl mx-auto w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/6.png" alt="معرض PZONE" width={1000} height={500} className="w-full object-cover" />
         </div>
      </section>

      {/* قسم التواصل والإيميل */}
      <section id="contact" className="w-full py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">تواصل <span className="text-purple-500">معنا</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            فريقنا متواجد دائماً للرد على استفساراتكم.
          </p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitMessage ? (
              <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-8 rounded-2xl text-xl font-bold">
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-6 text-right" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-300">الاسم الكامل</label>
                    <input type="text" required placeholder="أدخل اسمك" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all text-right" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-300">البريد الإلكتروني</label>
                    <input type="email" required placeholder="example@email.com" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all text-right" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-300">رسالتك</label>
                  <textarea required rows={5} placeholder="كيف يمكننا مساعدتك؟" className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all text-right resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 text-white font-black text-lg py-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(147,51,234,0.3)]">
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </button>
              </form>
            )}

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <a href={`mailto:${email}`} className="flex flex-col items-center gap-2 text-gray-300 hover:text-purple-400 transition">
                <span className="text-2xl">✉️</span>
                <span className="font-bold font-sans">{email}</span>
              </a>
              <a href={`tel:${phone}`} className="flex flex-col items-center gap-2 text-gray-300 hover:text-purple-400 transition">
                <span className="text-2xl">📞</span>
                <span className="font-bold font-sans">{phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
