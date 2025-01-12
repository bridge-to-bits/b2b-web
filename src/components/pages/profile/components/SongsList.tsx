'use client';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { SongItem } from './SongItem';

export const SongsList: FC<{
  profileUserId: string;
  userId?: string;
  isMe: boolean;
}> = ({ profileUserId, userId, isMe }) => {
  const { data: songs, isLoading } = useQuery({
    queryKey: ['getSongs', profileUserId],
    queryFn: () => tracksApi.getAll({ PerformerUserId: profileUserId }),
    select: (data) => data.data.data,
    enabled: !!profileUserId,
  });

  if (isLoading) {
    return <div>Loading songs...</div>;
  }

  return (
    <div className='space-y-4'>
      {songs?.map((props) => (
        <SongItem key={props.id} {...props} userId={userId} isMe={isMe} />
      ))}
    </div>
  );
};
