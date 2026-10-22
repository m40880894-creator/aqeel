import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'نظام عقيل بن مقرن',
  description: 'نظام إدارة الحلقة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
