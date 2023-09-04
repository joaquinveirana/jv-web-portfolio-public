import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getLang } from '../i18n/i18n_functions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joaquín Veirana',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={getLang()}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
