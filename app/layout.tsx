import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import cn from 'clsx';
import '@/styles/app.css';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const inter = Inter({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Modelcode',
  description: 'Liberate engineers to do their best work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(dmSans.variable, inter.variable)}>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body>{children}</body>
    </html>
  );
}
