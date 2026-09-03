"use client";

import Image from "next/image";
import { useState, FormEvent, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState("ar");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // استقبال إشعار تغيير اللغة من الهيدر
  useEffect(() => {
    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLang(customEvent.detail);
    };
    window.addEventListener("langChange", handleLangChange);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const isArabic = lang === "ar";
  const phone = "0555833295";
  const whatsappNumber = "966555833295"; // رقم الواتساب بالصيغة الدولية (بدون الصفر)
  const email = "info@pzone.com.sa"; // تم تحديث الإيميل

  // دالة الإرسال الحقيقية عبر مسار API
  const handleContactSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // إرسال البيانات إلى الـ API الخاص بنا
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitMessage(isArabic ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً." : "Your message has been sent successfully! We will contact you soon.");
        (e.target as HTMLFormElement).reset(); // تفريغ الحقول بعد الإرسال
      } else {
        setIsError(true);
        setSubmitMessage(isArabic ? "حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقاً." : "An error occurred while sending, please try again later.");
      }
    } catch (error) {
      setIsError(true);
      setSubmitMessage(isArabic ? "حدث خطأ في الاتصال، تأكد من شبكة الإنترنت." : "Connection error, please check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="flex flex-col items-center justify-center w-full bg-[#0f172a] text-white overflow-hidden selection:bg-purple-600 selection:text-white relative">
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-up { animation: fadeUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
          
          /* تأثير النبض لأيقونة الواتساب */
          @keyframes whatsappPulse {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          .whatsapp-btn { animation: whatsappPulse 2s infinite; }
        `
      }} />

      {/* Hero Section */}
      <section id="hero" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-[#2e1065] via-[#0f172a] to-[#1e1b4b]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700/20 rounded-full mix-blend-screen filter blur-[120px]"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center animate-fade-up">
          <div className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-bold text-purple-300 backdrop-blur-md">
            {isArabic ? "شركة منطقة النفط للوقود - PZONE" : "Petrol Zone Fuel Company - PZONE"}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
            {isArabic ? (
              <>مستقبل صناعة <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">الوقود والطاقة</span></>
            ) : (
              <>The Future of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">Fuel & Energy</span></>
            )}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed font-medium">
            {isArabic 
              ? "شبكة متطورة من محطات الوقود توفر لك وقوداً نظيفاً وخدمة سريعة بمعايير عالمية على كافة طرقات المملكة العربية السعودية." 
              : "An advanced network of stations providing clean fuel and fast service with global standards across all roads in Saudi Arabia."}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#products" className="w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] text-center">
              {isArabic ? "تصفح منتجاتنا" : "Browse Products"}
            </a>
            <a href="#contact" className="w-full sm:w-auto px-10 py-4 rounded-full font-extrabold text-white border border-purple-500/30 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-md text-center">
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full py-24 px-4 bg-[#050814] flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-black mb-4 text-white">Pzone <span className="text-blue-500">Oil</span></h2>
          
          <div className="mb-14 inline-block rounded-full border-2 border-amber-500/50 bg-amber-500/10 px-8 py-3 text-xl md:text-2xl font-black text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            {isArabic ? "زيوت بكر غير معاد تكريرها - Virgin Oil" : "Virgin Oil - Unrefined & Pure"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-red-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/7.jpeg" alt="زيت محرك 5W-30" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{isArabic ? "زيت محرك 5W-30" : "Engine Oil 5W-30"}</h3>
              <p className="text-red-400 font-bold">{isArabic ? "أداء فائق (Maximum Performance)" : "Maximum Performance"}</p>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-yellow-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/10.jpeg" alt="زيت محرك 5W-30 ذهبي" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{isArabic ? "زيت محرك 5W-30" : "Engine Oil 5W-30"}</h3>
              <p className="text-yellow-500 font-bold">{isArabic ? "تركيبة متطورة لحماية المحرك" : "Advanced engine protection formula"}</p>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-blue-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/9.jpeg" alt="زيت محرك 10W-30" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{isArabic ? "زيت محرك 10W-30" : "Engine Oil 10W-30"}</h3>
              <p className="text-blue-400 font-bold">{isArabic ? "حماية متكاملة وعمر أطول" : "Complete protection & longer lifespan"}</p>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-gray-400/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/8.jpeg" alt="زيت محرك 20W-50" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{isArabic ? "زيت محرك 20W-50" : "Engine Oil 20W-50"}</h3>
              <p className="text-gray-400 font-bold">{isArabic ? "لتحمل درجات الحرارة العالية" : "Endures high temperatures"}</p>
            </div>

            <div className="bg-[#0f172a] rounded-3xl p-6 border border-white/5 hover:border-cyan-500/50 transition duration-300 group">
              <div className="h-64 w-full relative mb-6 rounded-2xl overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
                <Image src="/11.jpeg" alt="مياه تبريد رديتر" fill className="object-contain transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{isArabic ? "مياه تبريد رديتر" : "Radiator Coolant"}</h3>
              <p className="text-cyan-400 font-bold">Premium Coolant 4L</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-[#0f172a] rounded-3xl p-6 border border-purple-500/30 flex flex-col items-center justify-center">
               <h3 className="text-3xl font-black text-white mb-4">{isArabic ? "والمزيد من المنتجات" : "And More Products"}</h3>
               <ul className="text-lg text-purple-200 font-bold space-y-3">
                 <li>✨ {isArabic ? "زيت جيربوكس عالي الأداء" : "High-performance Gearbox Oil"}</li>
                 <li>✨ {isArabic ? "علب تشحيم متخصصة" : "Specialized Lubricants"}</li>
                 <li>✨ {isArabic ? "منتجات العناية بالسيارات" : "Car Care Products"}</li>
               </ul>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-4 bg-[#0a0f1d] flex flex-col items-center text-center">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{isArabic ? "من " : "About "}<span className="text-purple-500">{isArabic ? "نحن" : "Us"}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            {isArabic 
              ? "نحن في PZONE نلتزم بتقديم أعلى معايير الجودة في خدمات الوقود والطاقة، مع التركيز على الاستدامة والابتكار لخدمة عملائنا." 
              : "At PZONE, we are committed to providing the highest quality standards in fuel and energy services, focusing on sustainability and innovation."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition hover:scale-[1.02] duration-500">
              <Image src="/1.png" alt="About PZONE" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition hover:scale-[1.02] duration-500">
              <Image src="/2.png" alt="Stations" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-24 px-4 bg-[#0f172a] flex flex-col items-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{isArabic ? "خدمات " : "Our "}<span className="text-blue-500">{isArabic ? "PZONE" : "Services"}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            {isArabic ? "حلول متكاملة مصممة لتلبية احتياجاتك على الطريق بكل كفاءة وأمان." : "Integrated solutions designed to meet your on-the-road needs safely."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-purple-500 transition-colors">
                <Image src="/3.png" alt="Quality Fuel" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{isArabic ? "وقود عالي الجودة" : "High Quality Fuel"}</h3>
              <p className="text-gray-400">{isArabic ? "أحدث أنواع الوقود لضمان أفضل أداء." : "Latest fuel types for optimal performance."}</p>
            </div>
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-blue-500 transition-colors">
                <Image src="/4.png" alt="Facilities" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{isArabic ? "مرافق متكاملة" : "Integrated Facilities"}</h3>
              <p className="text-gray-400">{isArabic ? "استراحات، مساجد، لتلبية احتياجات المسافرين." : "Rest areas and mosques for travelers."}</p>
            </div>
            <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all flex flex-col items-center group">
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-[#0f172a] group-hover:border-purple-500 transition-colors">
                <Image src="/5.png" alt="EV Charging" width={128} height={128} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{isArabic ? "شحن السيارات الكهربائية" : "EV Charging"}</h3>
              <p className="text-gray-400">{isArabic ? "محطات شحن سريعة ومتطورة." : "Fast and advanced charging stations."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 px-4 bg-[#0a0f1d] flex justify-center">
         <div className="max-w-4xl mx-auto w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/6.png" alt="Gallery" width={1000} height={500} className="w-full object-cover" />
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{isArabic ? "تواصل " : "Contact "}<span className="text-purple-500">{isArabic ? "معنا" : "Us"}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            {isArabic ? "فريقنا متواجد دائماً للرد على استفساراتكم." : "Our team is always available to answer your inquiries."}
          </p>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitMessage && (
              <div className={`mb-6 px-6 py-6 rounded-2xl text-xl font-bold border ${isError ? "bg-red-500/20 border-red-500/50 text-red-300" : "bg-green-500/20 border-green-500/50 text-green-300"}`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleContactSubmit} className={`flex flex-col gap-6 ${isArabic ? "text-right" : "text-left"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-300">{isArabic ? "الاسم الكامل" : "Full Name"}</label>
                  <input type="text" name="name" required placeholder={isArabic ? "أدخل اسمك" : "Enter your name"} className={`w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all ${isArabic ? "text-right" : "text-left"}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-300">{isArabic ? "البريد الإلكتروني" : "Email Address"}</label>
                  <input type="email" name="email" required placeholder="example@email.com" className={`w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all ${isArabic ? "text-right" : "text-left"}`} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-300">{isArabic ? "رسالتك" : "Your Message"}</label>
                <textarea name="message" required rows={5} placeholder={isArabic ? "كيف يمكننا مساعدتك؟" : "How can we help you?"} className={`w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all resize-none ${isArabic ? "text-right" : "text-left"}`}></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 text-white font-black text-lg py-4 rounded-xl transition-all shadow-[0_5px_15px_rgba(147,51,234,0.3)]">
                {isSubmitting ? (isArabic ? "جاري الإرسال..." : "Sending...") : (isArabic ? "إرسال الرسالة" : "Send Message")}
              </button>
            </form>

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

      {/* أيقونة الواتساب العائمة (Floating WhatsApp Button) */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-300 whatsapp-btn flex items-center justify-center"
        title={isArabic ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      >
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.547 4.148 1.588 5.952L.475 24l6.195-1.624c1.745.953 3.69 1.455 5.688 1.455 6.647 0 12.031-5.385 12.031-12.031S18.678 0 12.031 0zm0 21.844c-1.785 0-3.53-.48-5.06-1.387l-.364-.214-3.766.986.995-3.67-.235-.375c-1-1.597-1.528-3.447-1.528-5.353 0-5.553 4.518-10.071 10.07-10.071 5.553 0 10.071 4.518 10.071 10.071s-4.518 10.071-10.071 10.071zm5.526-7.553c-.303-.152-1.794-.886-2.074-.988-.28-.101-.485-.152-.688.152-.202.303-.784.988-.962 1.19-.177.202-.355.228-.658.076-1.503-.75-2.617-1.393-3.623-2.924-.207-.315.021-.482.172-.631.137-.137.303-.354.455-.532.152-.177.202-.303.303-.506.101-.202.051-.38-.025-.532-.076-.152-.688-1.658-.94-2.27-.245-.595-.494-.515-.688-.524-.177-.009-.38-.009-.583-.009-.202 0-.532.076-.81.38-.28.303-1.063 1.037-1.063 2.53 0 1.493 1.088 2.936 1.24 3.138.152.202 2.138 3.262 5.178 4.57 2.051.884 2.808.966 3.82.814 1.14-.17 2.373-.974 2.703-1.918.33-.944.33-1.753.23-1.918-.101-.166-.355-.267-.658-.419z"/>
        </svg>
      </a>

    </div>
  );
}
