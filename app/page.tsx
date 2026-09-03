import Image from "next/image";

export default function Home() {
  return (
    // أضفنا خلفية بنفسجية متدرجة تناسب هوية PZONE وتصميم وسطي (Center) متوافق مع الجوال
    <section className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#1e1b4b] text-white py-20 px-4">
      
      {/* دوائر إضاءة جمالية في الخلفية (Glow Effects) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8 animate-fade-in-up">
        
        {/* الصورة/الشعار (نفس صورتك، فقط تأكد من وضع مسار الصورة الصحيح بدلاً من /hero-image.png) */}
        <div className="transform transition-transform hover:scale-105 duration-500">
          <Image 
            src="/hero-image.png" /* استبدل هذا باسم صورتك الفعلي الموجودة في مجلد public */
            alt="PZONE Logo" 
            width={350} 
            height={350} 
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* النصوص المطابقة لصورتك */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-lg leading-tight">
            مستقبل صناعة <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              الوقود والطاقة
            </span>
          </h1>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-purple-100">
              محطات وقود حديثة مع شركة منطقة النفط للوقود PZONE
            </h2>
            <p className="text-base md:text-lg text-purple-200/80 leading-relaxed font-medium">
              شبكة متطورة من محطات الوقود توفر وقوداً نظيفاً وخدمة سريعة للمسافرين في المملكة.
            </p>
          </div>
        </div>

        {/* زر الاتصال مطابق لبياناتك */}
        <div className="mt-4">
          <a 
            href="tel:0590000000" /* ضع رقم الجوال الصحيح هنا */
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-105"
          >
            اتصل بنا الآن - 059XXXXXXX
          </a>
        </div>

      </div>

      {/* كود CSS بسيط مدمج لعمل حركة الدخول (Animation) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          }
        `
      }} />
    </section>
  );
}
