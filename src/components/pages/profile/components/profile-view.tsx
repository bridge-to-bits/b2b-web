'use client';
import { HeartIcon, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { User } from '@/app/api/users/users-api-types';
import { socials } from '@/components/layout/footer/constants';
import { Button } from '@/components/ui/button';
import SongsList from '@/components/pages/profile/components/SongsList';

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
      <span className='relative block w-full pt-[25%]'>
        <Image
          src={banner}
          alt='Banner'
          fill
          sizes='100vw'
          className='left-0 top-0 h-full w-full object-cover'
        />
      </span>

      {/* User Info Section */}
      <div className='relative max-w-[1280px] mx-auto px-20 pb-20'>
        {/* Avatar and "Написати" Button */}
        <div className='relative w-32 h-32 md:w-44 md:h-44 border-4 border-none -translate-y-1/2'>
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
              className='bg-orange py-2 px-6 rounded-full text-white font-bold absolute left-[90%] top-20 translate-y-[-50%]'
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
                <Star key={index} className='text-orange fill-orange' />
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
            <MapPin /> {location || 'Не вказано'}
          </p>
          <p className='mt-2'>{description || 'Опис не вказано'}</p>

          {/* Socials */}
          <ul className='flex gap-4 mt-4'>
            {socials.map((social) => (
              <li key={social.href}>
                <social.icon className='w-6 h-6 hover:text-orange cursor-pointer' />
              </li>
            ))}
          </ul>
        </div>

        {/* Conditional Song or Related Performers Section */}
        {isPerformer ? (
          <div className='mt-8'>
            <SongsList userId={userId} />
          </div>
        ) : (
          //TODO
          // <div className="mt-8">
          //   <ProducerRelatedPerformers userId={userId} /> {/* Related performers for producers */}
          // </div>
          <div className='mt-8'>
            <SongsList userId={userId} />
          </div>
        )}
      </div>
    </div>
  );
};
