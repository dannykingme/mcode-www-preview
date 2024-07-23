'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'clsx';

// TODO(dk): Get these page classes on the body element.

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn('app', 'page', {
        'home-page': pathname === '/',
        'about-page': pathname === '/about',
        'contact-page': pathname === '/contact',
        'press-page': pathname === '/press',
      })}
    >
      {children}
    </div>
  );
};

export default App;
