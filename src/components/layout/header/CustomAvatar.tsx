'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils/cn';
import { FC } from 'react';

interface AvatarProps {
  size?: 'small' | 'default';
  src?: string;
  fallback?: string;
}

const sizes = {
  small: 'h-9 w-9',
  default: 'h-12 w-12',
};

export const CustomAvatar: FC<AvatarProps> = ({
  size = 'default',
  src = '/from-image.png',
  fallback = 'Waiting...',
}) => {
  return (
    <div className='flex items-center gap-3'>
      <Avatar className={cn(sizes[size], 'border-2 border-gray-200')}>
        <AvatarImage src={src} className='rounded-full object-cover' />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};
