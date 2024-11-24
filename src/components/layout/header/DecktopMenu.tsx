import useAuth from '@/lib/hooks/useAuth';
import { AuthButtons } from './AuthButtons';
import { HeaderLinks } from './HeaderLinks';
import { UserMenu } from './UserMenu';

export const DecktopMenu = () => {
  const { user } = useAuth();

  return (
    <>
      <HeaderLinks />
      <div className='flex items-center gap-2'>
        {user ? <UserMenu /> : <AuthButtons />}
      </div>
    </>
  );
};
