import { authApi } from '@/app/api/auth/auth-api';
import { logout } from '@/app/api/auth/server-auth-api';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery } from '@tanstack/react-query';
import { HeartIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { CustomAvatar } from './CustomAvatar';

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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CustomAvatar src={user?.avatar} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='text-xl bg-graphite text-white border-none'>
            <DropdownMenuItem
              asChild
              className='p-3 text-xl cursor-pointer bg-graphite text-white'
            >
              <div onClick={async () => await logout()}>Вийти</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className='p-3 text-xl cursor-pointer bg-graphite text-white'
            >
              <Link href={`/profile/${user?.id}`}>Профіль</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    </ul>
  );
};
