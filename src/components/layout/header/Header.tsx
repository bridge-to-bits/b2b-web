'use client';

import { LogoIcon } from './Logo';
import { HeaderSearch } from './HeaderSearch';
import { useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { DecktopMenu } from './DecktopMenu';
import Link from 'next/link';

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
    <header className='bg-graphiteVioletChangeable fixed z-10 w-full'>
      <div className='mx-auto flex h-full max-w-[1280px] items-center justify-between gap-8 px-4 py-1'>
        <div className='flex w-full items-center gap-4 md:gap-8 lg:max-w-[40%]'>
          <Link href='/' passHref>
            <LogoIcon />
          </Link>

          <HeaderSearch />
        </div>
        <div className='flex items-center gap-4 md:gap-8 '>
          {isMobile ? <MobileMenu /> : <DecktopMenu />}
        </div>
      </div>
    </header>
  );
};
