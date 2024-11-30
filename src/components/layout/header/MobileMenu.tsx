import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AuthButtons } from './AuthButtons';
import { HeaderLinks } from './HeaderLinks';
import { UserMenu } from './UserMenu';
import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/app/api/auth/auth-api';

export const MobileMenu = () => {
  const { data: user } = useQuery({
    queryKey: ['getMe'],
    queryFn: authApi.getMe,
    select: (data) => data.data,
  });

  return (
    <Sheet>
      <SheetTrigger aria-label='Mobile header menu'>
        <Menu className='pointer h-8 w-8' />
      </SheetTrigger>
      <SheetContent className='overflow-x-auto xs:max-w-64 sm:max-w-72 justify-between'>
        <div className='flex h-full flex-col items-start gap-12 py-4'>
          <div className='flex items-center gap-2'>
            {user ? <UserMenu /> : <AuthButtons />}
          </div>

          <HeaderLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};
