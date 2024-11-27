'use client';

import { LogoIcon } from './Logo';
import { HeaderSearch } from './HeaderSearch';
import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { DecktopMenu } from './DecktopMenu';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='bg-graphite fixed z-10 w-full'>
      <div className='mx-auto flex h-full max-w-[1280px] items-center justify-between gap-8 px-4 py-1'>
        <div className='flex w-full items-center gap-4 md:gap-8 lg:max-w-[40%]'>
          <LogoIcon />

          <HeaderSearch />
        </div>
        {isMobile ? <MobileMenu /> : <DecktopMenu />}
      </div>
    </header>
  );
};
