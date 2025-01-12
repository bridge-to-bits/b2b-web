'use client';

import { producersApi } from '@/app/api/producers/producers-api';
import { RelatedPerformer } from '@/app/api/producers/producers-api-types';
import { useQuery } from '@tanstack/react-query';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  userId: string;
}

export const ProducerRelatedPerformers: FC<Props> = ({ userId }) => {
  const { data: performers } = useQuery({
    queryKey: ['getRelatedPerformers', userId],
    queryFn: () => producersApi.getPerformersById(userId),
  });

  const chunkPerformers = (data: RelatedPerformer[], rowSizes: number[]) => {
    const result: RelatedPerformer[][] = [];
    let index = 0;
    let sizeIndex = 0;

    while (index < data.length) {
      const size = rowSizes[sizeIndex];
      const chunk = data.slice(index, index + size);
      result.push(chunk);
      index += size;
      sizeIndex = (sizeIndex + 1) % rowSizes.length;
    }

    return result;
  };

  const rowSizes = [3, 2];
  const rows = performers ? chunkPerformers(performers, rowSizes) : [];
  return (
    <div className='flex flex-col gap-6'>
      {!!rows.length &&
        rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`flex gap-4`}>
            {row?.map((performer, index) => (
              <Link href={performer.userId} key={index} className={`flex-1`}>
                <div className='flex items-center gap-2'>
                  {Array.from({ length: Math.floor(performer.rating) }).map(
                    (_, index) => (
                      <Star key={index} className='text-orange fill-orange' />
                    )
                  )}
                  {Array.from({ length: 5 - Math.floor(performer.rating) }).map(
                    (_, index) => (
                      <Star key={`empty-${index}`} className='text-gray-500' />
                    )
                  )}
                </div>

                <div className='mt-2 rounded-xl p-4 min-h-32 block border relative w-full pb-[75%]'>
                  <div className='relative z-10 text-white'>
                    <h3 className='font-bold'>{performer.username}</h3>
                    <p className='text-sm'>
                      Жанр:{' '}
                      {performer.genres.length
                        ? performer.genres.map((genre) => genre.name).join(', ')
                        : 'Не вказані'}
                    </p>
                  </div>
                  <Image
                    src={performer.backgroundPhoto}
                    alt='Image preview will appear here'
                    fill
                    sizes='40vw'
                    className='left-0 top-0 h-full w-full object-cover rounded-xl z-0'
                  />
                </div>
              </Link>
            ))}
          </div>
        ))}
    </div>
  );
};
