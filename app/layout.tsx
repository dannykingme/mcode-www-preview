import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Inter } from 'next/font/google';
import Script from 'next/script';
import cn from 'clsx';
import '@/styles/app.css';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
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
    <html
      lang="en"
      className={cn(dmSans.variable, dmMono.variable, inter.variable)}
    >
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
