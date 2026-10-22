import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-1" style={{ color: '#1B4332' }}>
          عقيل
        </h1>
        <p className="text-xs text-gray-500 mb-6">نظام إدارة الحلقة</p>

        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="block p-3 rounded-lg text-white"
            style={{ background: '#1B4332' }}
          >
            🏠 الرئيسية
          </Link>
          <Link
            href="/dashboard/funds"
            className="block p-3 rounded-lg hover:bg-gray-100"
          >
            💰 الصناديق
          </Link>
          <Link
            href="/dashboard/programs"
            className="block p-3 rounded-lg hover:bg-gray-100"
          >
            📁 البرامج
          </Link>
          <Link
            href="/dashboard/transactions"
            className="block p-3 rounded-lg hover:bg-gray-100"
          >
            💸 الحركات المالية
          </Link>
          <Link
            href="/dashboard/schedule"
            className="block p-3 rounded-lg hover:bg-gray-100"
          >
            📅 جدول عقيل
          </Link>
          <Link
            href="/dashboard/intel"
            className="block p-3 rounded-lg hover:bg-gray-100"
          >
            🛡️ استخبارات عقيل
          </Link>
        </nav>
      </aside>

      {/* المحتوى */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">مرحبًا، مدير النظام 👋</h1>
        <p className="text-gray-500 mb-8">نظرة عامة على النظام</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">إجمالي الرصيد</p>
            <p className="text-2xl font-bold mt-2" style={{ color: '#1B4332' }}>
              0 ر.س
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">المدخلات</p>
            <p className="text-2xl font-bold text-green-600 mt-2">0 ر.س</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">المخرجات</p>
            <p className="text-2xl font-bold text-red-600 mt-2">0 ر.س</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-sm text-gray-500">البرامج</p>
            <p className="text-2xl font-bold mt-2">0</p>
          </div>
        </div>

        <div className="bg-blue-50 border-r-4 border-blue-400 p-4 rounded">
          <p className="font-bold text-blue-900">
            ✅ تم إنشاء النظام بنجاح
          </p>
          <p className="text-sm text-blue-800 mt-1">
            الخطوة التالية: ربط الموقع بـ Vercel لنشره على الإنترنت
          </p>
        </div>
      </main>
    </div>
  );
}
