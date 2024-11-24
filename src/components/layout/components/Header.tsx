'use client';

import { HeaderLinks,  } from './HeaderLinks';
import { LogoIcon } from './Logo';
import useAuth from '@/lib/hooks/useAuth';
import { UserMenu } from './UserMenu';
import { AuthButtons } from './AuthButtons';
import { HeaderSearch } from './HeaderSearch';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className='bg-background-darker fixed z-10 w-full'>
      <div className='mx-auto flex h-full max-w-[1280px] items-center justify-between gap-8 px-4 py-1'>
        <div className='flex w-full items-center gap-8 max-w-[40%]'>
          <LogoIcon />

          <HeaderSearch />
        </div>

        <HeaderLinks />

        <div className='flex items-center gap-2'>
          {user ? <UserMenu /> : <AuthButtons />}
        </div>
      </div>
    </header>
  );
};
