import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full border border-slate-100 transform transition-all hover:-translate-y-2 duration-300">
        
        {/* أيقونة الخطأ */}
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-red-500 text-4xl font-black">404</span>
        </div>
        
        {/* النصوص الخاصة بك */}
        <h1 className="text-3xl font-extrabold text-slate-800 mb-3">
          صفحة غير موجودة
        </h1>
        <p className="mt-2 text-slate-500 mb-8 font-medium text-lg">
          الصفحة التي تبحث عنها غير متاحة.
        </p>
        
        {/* زر عودة للرئيسية كإضافة لتحسين تجربة المستخدم */}
        <Link 
          href="/" 
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          العودة للرئيسية
        </Link>
        
      </div>
    </div>
  );
}
