'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { authApi } from '@/app/api/auth/auth-api';

interface AvatarProps {
  size?: 'small' | 'default';
}

const sizes = {
  small: 'h-9 w-9',
  default: 'h-12 w-12',
};

export const CustomAvatar: FC<AvatarProps> = ({ size = 'default' }) => {
  const { data: user } = useQuery({
    queryKey: ['getMe'],
    queryFn: authApi.getMe,
    select: (data) => data.data,
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
