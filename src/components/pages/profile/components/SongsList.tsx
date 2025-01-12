'use client';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { SongItem } from './SongItem';

export const SongsList: FC<{
  profileUserId: string;
  userId?: string;
  isMe: boolean;
}> = ({ profileUserId, userId, isMe }) => {
  const queryClient = useQueryClient();

  const { data: songs, isLoading } = useQuery({
    queryKey: ['getSongs', profileUserId, userId, isMe],
    queryFn: async () => {
      const { data } = await tracksApi.getAll({
        PerformerUserId: profileUserId,
      });
      if (!!userId && !isMe) {
        data.data.forEach((track) => {
          queryClient.prefetchQuery({
            queryKey: ['get-track-is-favorite', track.id, userId],
            queryFn: () => tracksApi.getIsFavorite(track.id),
          });
        });
      }
      return data.data;
    },
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
