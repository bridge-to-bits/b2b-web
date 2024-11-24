'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import useAuth from '@/lib/hooks/useAuth';
import { FC } from 'react';

interface AvatarProps {
  size?: 'small' | 'default';
}

const sizes = {
  small: 'h-9 w-9',
  default: 'h-12 w-12',
};

export const CustomAvatar: FC<AvatarProps> = ({ size = 'default' }) => {
  const { user } = useAuth();

  return (
    <Link href='/' className='flex items-center gap-3'>
      <Avatar className={cn(sizes[size], 'border-2 border-gray-200')}>
        <AvatarImage
          src='/from-image.png'
          className='rounded-full object-cover'
        />
        <AvatarFallback>{user?.firstName}</AvatarFallback>
      </Avatar>
    </Link>
  );
};
