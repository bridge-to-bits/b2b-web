'use client';
import UsersApi from '@/app/api/users/users-api';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { starRatingTheme } from '@/lib/constants/starTheme';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { HeartIcon } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { StarRating } from 'star-rating-react-ts';
interface Props {
  isMe: boolean;
  isPerformer: boolean;
  profileUserId: string;
  rating: number;
  userId?: string;
}

export const FeedbackWrapper: FC<Props> = ({
  isMe,
  profileUserId,
  rating: initialRating,
  isPerformer,
  userId,
}) => {
  const isAuth = !!getClientCookie(AuthToken.AccessToken);
  const [rating, setRating] = useState(initialRating);
  const { toastError, toastSuccess } = useCommonToast();
  const qc = useQueryClient();
  const { data: isFavorite } = useQuery({
    queryKey: ['getFeedback', userId, profileUserId],
    queryFn: () => UsersApi.getIsFavorite(userId!, profileUserId),
    select: (data) => data.data,
    enabled: !!userId && (!isMe || isPerformer),
  });

  const handleRatingChange = async (newRating: number) => {
    try {
      await UsersApi.addRating(profileUserId, newRating);
      setRating(newRating);
      toastSuccess('Оцінка успішно збережена');
    } catch (error) {
      toastError(error);
    }
  };

  const handleLike = async () => {
    if (!isAuth) {
      toastError('Ви повинні увійти, щоб поставити оцінку');
      return;
    }
    try {
      if (!isFavorite) {
        await UsersApi.addLiked(profileUserId);
      } else {
        await UsersApi.deleteLiked(profileUserId);
      }

      await qc.invalidateQueries({
        queryKey: ['getFeedback', userId, profileUserId],
      });

      toastSuccess('Оцінка успішно збережена');
    } catch (error) {
      toastError(error);
    }
  };

  const isCanRate = !isMe && isAuth;

  return (
    <div className='relative ml-4 pt-20 flex gap-2 items-center justify-center'>
      {!isMe && (
        <Link
          href={`/messages/${profileUserId}`}
          className='bg-orange py-4 px-20 text-lg rounded-full text-white font-bold absolute top-[25%] translate-x-[-100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300'
        >
          Написати
        </Link>
      )}

      <div className='flex items-center gap-2'>
        <StarRating
          numStars={5}
          initialRating={rating}
          theme={starRatingTheme}
          onClick={handleRatingChange}
          readOnly={!isCanRate}
        />
      </div>
      {!isMe && isPerformer && (
        <HeartIcon
          className={`ml-2 cursor-pointer transition-colors duration-300 
          ${isFavorite ? 'text-red-500 fill-red-500' : 'hover:text-red-500 hover:fill-red-500'}`}
          onClick={handleLike}
        />
      )}
    </div>
  );
};
