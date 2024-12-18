import { FC } from 'react';
import { HeartIcon, MailIcon } from 'lucide-react';
import { CustomAvatar } from './CustomAvatar';
import { authApi } from '@/app/api/auth/auth-api';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const UserMenu: FC = () => {
  const cookie = getClientCookie(AuthToken.AccessToken);

  const { data: user } = useQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
    select: (data) => data.data,
    enabled: !!cookie,
  });
  return (
    <ul className='flex items-center gap-4 md:gap-8'>
      <li>
        <HeartIcon />
      </li>
      <li>
        <MailIcon />
      </li>
      <li>
        <Link href={`/profile/${user?.id}`}>
          <CustomAvatar src={user?.avatar} size='default' />
        </Link>
      </li>
    </ul>
  );
};
