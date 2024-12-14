'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { PasswordInput } from '@/components/ui/password-input';
import { FileInput } from '@/components/ui/file-input';
import { TProfile, ProfileSchema } from '@/lib/schemas/profile.schemas';
import { User } from '@/app/api/users/users-api-types';
import { FC } from 'react';
import { HeartIcon, MapPinnedIcon, PlusIcon, Star } from 'lucide-react';
import { BannerFileInput } from './banner-file-input';
import { AvatarFileInput } from './avatar-file-input';
import UsersApi from '@/app/api/users/users-api';
import Image from 'next/image';
import Link from 'next/link';
import { socials } from '@/components/layout/footer/constants';

interface Props {
  user: User;
  userId: string;
  isMe: boolean;
  toggleEditing: () => void;
}

export const ProfileView: FC<Props> = ({
  user: { avatar, banner, description, genres, location, rating, username },
  userId,
  isMe,
  toggleEditing,
}) => {
  return (
    <div>
      {/* ProfileBanner */}
      <span className='relative  block w-full pt-[25%]'>
        <Image
          src={banner}
          alt='Image preview will appear here'
          fill
          unoptimized
          sizes='100vw'
          className='left-0 top-0 h-full w-full object-cover'
        />
      </span>

      <div className='mx-auto w-full h-full max-w-[1280px] gap-8 px-4 py-1'>
        {/* Avatar && Button */}
        <div className='flex items-end -translate-y-1/2 justify-between'>
          <span className='relative flex items-center justify-center'>
            <Image
              src={avatar ?? ''}
              alt='No Avatar'
              sizes='5vw'
              className='lg:w-44 lg:h-44 md:w-36 md:h-36 w-24 h-24 rounded-full left-0 top-0 object-cover bg-gray-600 z-10 '
            />
            {!isMe && (
              <Link
                href={`/messages/${userId}`}
                className='py-6 px-12 bg-orange w-80  rounded-3xl absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 '
              >
                Написати
              </Link>
            )}
          </span>
          {isMe && (
            <Button type='button' className='mt-4' onClick={toggleEditing}>
              Редагувати профіль
            </Button>
          )}
        </div>

        {/* Profile Info */}
        <div className='flex gap-4 flex-col '>
          <div className='flex gap-4 items-center'>
            <h2 className='text-3xl font-bold'>{username}</h2>
            <div className='flex items-center gap-2'>
              {Array.from({ length: 5 - Math.floor(rating) }).map(
                (_, index) => (
                  <Star
                    key={`unfilled-${name}-${index}`}
                    style={{ fill: 'none', stroke: 'bg-' }}
                    size={24}
                  />
                )
              )}
            </div>
            <Button variant={'link'}>
              <HeartIcon />
            </Button>
          </div>
          <p>
            Жанр:{' '}
            {genres.length ? (
              genres.map((value) => value.name)
            ) : (
              <>Не вказані</>
            )}
          </p>
          <p className='flex items-center gap-2'>
            <MapPinnedIcon /> {location ? location : 'Не вказано'}
          </p>
          <p>{description ? description : 'Опис не вказано'}</p>
          <ul>
            {socials.map((social) => (
              <li>{social.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
