'use client';
import { HeartIcon, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { User } from '@/app/api/users/users-api-types';
import { Button } from '@/components/ui/button';
import { SocialsList } from '@/components/pages/main/SocialsList';
import SongsList from './SongsList';
import { ProducerRelatedPerformers } from './producer-related-performers';

interface Props {
  user: User;
  userId: string;
  isMe: boolean;
  toggleEditing: () => void;
}

export const ProfileView: FC<Props> = ({
  user: {
    avatar,
    banner,
    description,
    genres,
    location,
    rating,
    username,
    socials,
    userType,
  },
  userId,
  isMe,
  toggleEditing,
}) => {
  const isPerformer = userType === 'performer';
  return (
    <div className='bg-black text-white min-h-screen'>
      {/* Profile Banner */}
      <div className='relative w-full h-[300px]'>
        <Image
          src={banner}
          alt='Banner'
          fill
          sizes='100vw'
          className='left-0 top-0 h-full w-full object-cover'
        />
      </div>

      {/* User Info Section */}
      <div className='relative max-w-[1280px] mx-auto px-20 pb-20'>
        {/* Avatar and "Написати" Button */}
        <div className='relative w-12 h-12 md:w-44 md:h-44 border-4 border-black -translate-y-1/2 group'>
          <Image
            src={avatar ?? ''}
            alt='Avatar'
            fill
            className='object-cover rounded-full z-10'
          />

          {/* "Написати" Button */}
          {!isMe && (
            <Link
              href={`/messages/${userId}`}
              className='bg-orange py-4 px-20 text-lg rounded-full text-white font-bold absolute left-[80%] top-[30%] translate-x-[-100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300'
            >
              Написати
            </Link>
          )}

          {isMe && (
            <Button
              type='button'
              className='mt-4 absolute left-[600%] top-20'
              onClick={toggleEditing}
            >
              Редагувати профіль
            </Button>
          )}
        </div>

        {/* User Info Section */}
        <div className='mt-[-60px]'>
          <div className='flex items-center gap-4'>
            <h2 className='text-4xl font-bold'>{username}</h2>
            <div className='flex items-center gap-2'>
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <Star key={index} className='text-orangeChangeable fill-orange' />
              ))}
              {Array.from({ length: 5 - Math.floor(rating) }).map(
                (_, index) => (
                  <Star key={`empty-${index}`} className='text-gray-500' />
                )
              )}
            </div>
            <HeartIcon className='ml-2 cursor-pointer hover:text-red-500' />
          </div>
          <p className='mt-2'>
            Жанр:{' '}
            {genres.length
              ? genres.map((genre) => genre.name).join(', ')
              : 'Не вказані'}
          </p>
          <p className='flex items-center gap-2 mt-2'>
            <MapPin className='text-orange' /> {location || 'Не вказано'}
          </p>
          <p className='mt-2'>{description || 'Опис не вказано'}</p>

          <SocialsList socials={socials} />
        </div>

        <div className='mt-8'>
          {isPerformer ? (
            <SongsList userId={userId} />
          ) : (
            <ProducerRelatedPerformers userId={userId} />
          )}
        </div>
      </div>
    </div>
  );
};
