'use client';

import { HeaderMenu } from './HeaderMenu';
import { LogoIcon } from './Logo';
import useAuth from '@/lib/hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthButtons } from './AuthButtons';
import { HeaderSearch } from './HeaderSearch';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className='bg-background-darker fixed z-10 w-full'>
      <div className='mx-auto flex h-full max-w-[1280px] items-center justify-between gap-4 px-4 py-1'>
        <div className='flex w-full items-center gap-4'>
          <LogoIcon />

          <HeaderSearch />
        </div>
        <div className='flex items-center gap-2'>
          {false ? <UserMenu /> : <AuthButtons />}
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
