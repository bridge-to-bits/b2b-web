'use client';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { FavoriteTrack } from '@/app/api/tracks/tracks-api-types';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { useQueryClient } from '@tanstack/react-query';
import { HeartIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props extends FavoriteTrack {
  userId: string;
  allSongs: FavoriteTrack[];
}

export const SongItem: FC<Props> = ({
  description,
  id,
  name,
  url,
  userId,
  allSongs,
}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const qc = useQueryClient();
  const { refresh } = useRouter();
  const handleLike = async () => {
    try {
      await tracksApi.deleteLiked(id);
      await qc.setQueryData(
        ['favorite-track', userId],
        allSongs.filter((song) => song.id !== id)
      );
      await qc.setQueryData(['get-track-is-favorite', id, userId], false);
      refresh();
      toastSuccess('Оцінка успішно збережена');
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <div key={id} className='flex items-center'>
      <div className='flex items-center justify-between bg-graphiteBellChangeable p-4 rounded-lg w-full'>
        <div className='flex flex-col mr-2 max-w-[50%] w-full'>
          <span className='text-orange text-2xl font-semibold text-nowrap'>
            {name}
          </span>
          <span className='text-foregorund text-xl font-semibold'>
            {description}
          </span>
        </div>


        <iframe
          src={url}
          className='w-full h-20'
          style={{
            borderRadius: '10px',
          }}
        ></iframe>
      </div>
      <HeartIcon
        className={`ml-2 cursor-pointer transition-colors duration-300 
  text-red-500 fill-red-500`}
        onClick={handleLike}
      />
    </div>
  );
};
