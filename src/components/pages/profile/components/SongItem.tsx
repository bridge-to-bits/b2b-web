'use client';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { Track } from '@/app/api/tracks/tracks-api-types';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { HeartIcon } from 'lucide-react';
import { FC } from 'react';

interface Props extends Track {
  userId?: string;
  isMe: boolean;
}

export const SongItem: FC<Props> = ({
  description,
  genres,
  id,
  name,
  performerId,
  url,
  isMe,
  userId,
}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const qc = useQueryClient();
  const isAuth = !!getClientCookie(AuthToken.AccessToken);

  const { data: isFavorite } = useQuery({
    queryKey: ['get-track-is-favorite', id, userId],
    queryFn: () => tracksApi.getIsFavorite(id),
    select: (data) => data.data,
    enabled: !!userId && !isMe,
  });

  const handleLike = async () => {
    if (!isAuth) {
      toastError('Ви повинні увійти, щоб поставити оцінку');
      return;
    }
    try {
      if (!isFavorite) {
        await tracksApi.addLiked(id);
      } else {
        await tracksApi.deleteLiked(id);
      }

      await qc.invalidateQueries({
        queryKey: ['get-track-is-favorite', id, userId],
      });

      toastSuccess('Оцінка успішно збережена');
    } catch (error) {
      toastError(error);
    }
  };
  return (
    <div key={id} className='flex items-center'>
      <div className='flex items-center justify-between bg-gray-800 p-4  rounded-lg w-full'>
        <div className='flex flex-col mr-2 max-w-[50%] w-full'>
          <span className='text-orange text-2xl font-semibold text-nowrap'>
            {name}
          </span>
          <span className='text-white text-xl font-semibold'>
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

      {!isMe && (
        <HeartIcon
          className={`ml-2 cursor-pointer transition-colors duration-300 
          ${isFavorite ? 'text-red-500 fill-red-500' : 'hover:text-red-500 hover:fill-red-500'}`}
          onClick={handleLike}
        />
      )}
    </div>
  );
};
