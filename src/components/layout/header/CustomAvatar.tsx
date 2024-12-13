'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/app/api/auth/auth-api';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';

interface AvatarProps {
  size?: 'small' | 'default';
}

const sizes = {
  small: 'h-9 w-9',
  default: 'h-12 w-12',
};

export const CustomAvatar: FC<AvatarProps> = ({ size = 'default' }) => {
  const cookie = getClientCookie(AuthToken.AccessToken);

  const { data: user } = useQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
    select: (data) => data.data,
    enabled: !!cookie,
  });

  return (
    <Link href='/' className='flex items-center gap-3'>
      <Avatar className={cn(sizes[size], 'border-2 border-gray-200')}>
        <AvatarImage
          src={user?.avatar ?? '/from-image.png'}
          className='rounded-full object-cover'
        />
        <AvatarFallback>{user?.userName}</AvatarFallback>
      </Avatar>
    </Link>
  );
};
