'use client';
import Image from 'next/image';
import { FC } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
}
export const CustomAvatar: FC<AvatarProps> = ({ src, alt = 'Avatar' }) => {
  return (
    <span className='relative block rounded-full border-black overflow-hidden w-10 h-10 md:w-12 md:h-12 border-2'>
      <Image
        src={src || '/blank-avatar.png'}
        alt={alt}
        fill
        sizes='10vw'
        className='object-cover rounded-full'
      />
    </span>
  );
};
