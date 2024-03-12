import type { Metadata } from 'next';
import { Merriweather, Merriweather_Sans, Montserrat } from 'next/font/google';
import cn from 'clsx';
import '@/styles/app.css';

// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
// });

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
});

// const merriweatherSans = Merriweather_Sans({
//   weight: ['400', '500', '700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-merriweather-sans',
// });

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Modelcode',
  description: 'Liberating engineers to do their best work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(merriweather.variable, montserrat.variable)}>
      <body>{children}</body>
    </html>
  );
}
