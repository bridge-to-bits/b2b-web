'use client';
import { User } from '@/app/api/users/users-api-types';
import { SocialsList } from '@/components/pages/main/SocialsList';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FC } from 'react';
import { SongsList } from './SongsList';
import { ProducerRelatedPerformers } from './producer-related-performers';
const FeedbackWrapper = dynamic(
  () => import('./feedback-wrapper').then((module) => module.FeedbackWrapper),
  {
    ssr: false,
  }
);

interface Props {
  user: User;
  userId?: string;
  isMe: boolean;
  toggleEditing: () => void;
  profileUserId: string;
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
  profileUserId,
}) => {
  const isPerformer = userType === 'performer';

  return (
    <div className='text-foreground min-h-screen'>
      {/* Profile Banner */}
      <div className='relative w-full h-[300px]'>
        <Image
          src={banner ?? '/blank-avatar.png'}
          alt='Banner'
          fill
          sizes='100vw'
          className='left-0 top-0 h-full w-full object-cover'
        />
      </div>

      <div className='relative max-w-[1280px] mx-auto px-20 pb-20'>
        <div className='relative -translate-y-1/2 group w-full'>
          <div className='flex gap-2 '>
            <span className='relative w-12 h-12 block md:w-44 md:h-44 border-4 border-black  rounded-full'>
              <Image
                src={avatar ?? '/blank-avatar.png'}
                alt='Avatar'
                fill
                className='object-cover rounded-full z-10'
              />
            </span>
            <FeedbackWrapper
              rating={rating}
              isPerformer={isPerformer}
              isMe={isMe}
              userId={userId}
              profileUserId={profileUserId}
            />
          </div>

          {isMe && (
            <Button
              type='button'
              className='mt-4 absolute right-0 top-20 bg-blueOrangeChangeable hover:!brightness-90 text-muted'
              onClick={toggleEditing}
              variant="ghost"
            >
              Редагувати профіль
            </Button>
          )}
        </div>

        {/* User Info Section */}
        <div className='mt-[-70px] text-xl'>
          <p className='font-medium text-2xl'>{username}</p>
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
            <SongsList
              profileUserId={profileUserId}
              userId={userId}
              isMe={isMe}
            />
          ) : (
            <ProducerRelatedPerformers userId={profileUserId} />
          )}
        </div>
      </div>
    </div>
  );
};
