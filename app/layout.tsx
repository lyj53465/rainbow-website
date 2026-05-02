import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/i18n/Context';

export const metadata: Metadata = {
  title: 'Rainbow Logistics Inc',
  description: 'Sea freight devanning, air cargo pickup & forwarding, Y2 label change, drop-shipping fulfillment / 海运拆柜、空运提货转派、Y2换单、一件代发',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
