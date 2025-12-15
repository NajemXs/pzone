// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-500">صفحة غير موجودة</h1>
        <p className="mt-4 text-lg">الصفحة التي تبحث عنها غير متاحة.</p>
      </div>
    </div>
  );
}
