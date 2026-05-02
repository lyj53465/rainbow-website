import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rainbow Logistics Inc',
  description: '专业的国际物流解决方案 - 海运拆柜、空运提货转派、Y2换单、一件代发',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
