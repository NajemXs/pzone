export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#0f172a] text-white overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* ستايل مخصص للحركات التفاعلية ليعمل مباشرة داخل Next.js */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-bg { background: radial-gradient(circle at center, #4c1d95 0%, #0f172a 70%); }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; opacity: 0; }
          .delay-100 { animation-delay: 0.2s; }
          .delay-200 { animation-delay: 0.4s; }
          .delay-300 { animation-delay: 0.6s; }
          @keyframes pulse-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
          .glow-effect { animation: pulse-glow 6s infinite ease-in-out; }
        `
      }} />

      {/* الشريط العلوي (Navbar) */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* الشعار */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(147,51,234,0.4)]">
                PZ
              </div>
              <span className="font-black text-2xl tracking-tight">PZONE</span>
            </div>
            
            {/* روابط القائمة (تختفي في شاشات الجوال) */}
            <div className="hidden md:flex space-x-8 space-x-reverse items-center">
              <a href="#" className="text-white font-bold border-b-2 border-purple-500 pb-1">الرئيسية</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">من نحن</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">خدماتنا</a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">تواصل معنا</a>
            </div>
            
            {/* زر الاتصال */}
            <div>
              <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-purple-900/50 transform hover:-translate-y-0.5 inline-block">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* قسم الهيرو (Hero Section) */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg pt-20">
        {/* دوائر الإضاءة الخلفية للجمالية */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-screen filter blur-[100px] glow-effect"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-800 rounded-full mix-blend-screen filter blur-[100px] glow-effect" style={{ animationDelay: '2s' }}></div>

        {/* المحتوى المركزي المتوافق مع الجوال */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
          
          <span className="animate-fade-in bg-purple-900/50 text-purple-300 border border-purple-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide backdrop-blur-sm">
            شركة منطقة النفط للوقود
          </span>
          
          <h1 className="animate-fade-in delay-100 text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight drop-shadow-2xl">
            مستقبل صناعة <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
              الوقود والطاقة
            </span>
          </h1>
          
          <p className="animate-fade-in delay-200 text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            محطات وقود حديثة، شبكة متطورة توفر لك وقوداً نظيفاً وخدمة سريعة بمعايير عالمية على طرقات المملكة.
          </p>
          
          {/* أزرار الإجراء */}
          <div className="animate-fade-in delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-white text-purple-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              اكتشف خدماتنا
            </button>
            <button className="border border-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-900/40 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto">
              تعرف على PZONE
            </button>
          </div>
          
        </div>
      </section>
    </main>
  );
}
