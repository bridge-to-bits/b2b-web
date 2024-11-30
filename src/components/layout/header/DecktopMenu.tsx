import { authApi } from '@/app/api/auth/auth-api';
import { AuthButtons } from './AuthButtons';
import { HeaderLinks } from './HeaderLinks';
import { UserMenu } from './UserMenu';
import { useQuery } from '@tanstack/react-query';

export const DecktopMenu = () => {
  const { data: user } = useQuery({
    queryKey: ['getMe'],
    queryFn: authApi.getMe,
    select: (data) => data.data,
  });

  return (
    <>
      <HeaderLinks />
      <div className='flex items-center gap-2'>
        {user ? <UserMenu /> : <AuthButtons />}
      </div>
    </>
  );
};
