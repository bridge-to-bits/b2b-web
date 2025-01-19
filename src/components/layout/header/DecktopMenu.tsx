import { authApi } from '@/app/api/auth/auth-api';
import { AuthButtons } from './AuthButtons';
import { HeaderLinks } from './HeaderLinks';
import { UserMenu } from './UserMenu';
import { useQuery } from '@tanstack/react-query';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { AuthToken } from '@/lib/types/auth.types';
import { ToggleTheme } from './ToggleTheme';

export const DecktopMenu = () => {
  const cookie = getClientCookie(AuthToken.AccessToken);

  const { data: user } = useQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
    select: (data) => data.data,
    enabled: !!cookie,
  });

  return (
    <div className='flex items-center gap-6 md:gap-12'>
      <HeaderLinks />
      <div className='flex items-center gap-6'>
        {user ? <UserMenu /> : <AuthButtons />}
        <ToggleTheme />
      </div>
    </div>
  );
};
