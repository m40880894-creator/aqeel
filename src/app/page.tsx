import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, #1B4332, #2D6A4F)' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ background: 'rgba(27,67,50,0.1)' }}>
            <span className="text-3xl">💰</span>
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#1B4332' }}>
            عقيل بن مقرن
          </h1>
          <p className="text-gray-600">نظام إدارة الحلقة</p>
        </div>
        <Link
          href="/dashboard"
          className="block w-full py-3 rounded-lg text-white font-medium"
          style={{ background: '#1B4332' }}
        >
          دخول النظام
        </Link>
        <p className="text-xs text-gray-400 mt-6">
          الإصدار 1.0 - جميع الحقوق محفوظة © 2026
        </p>
      </div>
    </div>
  );
}
