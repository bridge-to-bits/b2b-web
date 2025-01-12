'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { BookHeart, Heart } from 'lucide-react';
import { FC } from 'react';

import { FavoritePerformer } from '@/app/api/performers/performers-api-types';
import { FavoriteTrack } from '@/app/api/tracks/tracks-api-types';
import { LibraryPerformersList } from './performers-list';

export const LibrarySongsList: FC<{
  songs: FavoriteTrack[];
  performers: FavoritePerformer[];
}> = ({ songs, performers }) => {
  const isMobile = useIsMobile();

  return (
    <div className='w-full mx-2 md:mx-6 lg:mx-10'>
      {isMobile && (
        <Sheet>
          <SheetTrigger
            aria-label='Mobile header menu'
            className='font-bold w-full text-2xl mb-10 text-white flex items-center gap-2 justify-end'
          >
            <BookHeart className='pointer h-8 w-8' />
          </SheetTrigger>
          <SheetContent className='overflow-x-auto xs:max-w-64 sm:max-w-72'>
            <LibraryPerformersList performers={performers} />
          </SheetContent>
        </Sheet>
      )}

      <div className='space-y-4'>
        {songs.map((song) => (
          <div key={song.id} className='flex items-center'>
            <div className='flex items-center justify-between bg-gray-800 p-4  rounded-lg w-full'>
              <div className='flex flex-col mr-2 max-w-[50%] w-full'>
                <span className='text-orange text-2xl font-semibold text-nowrap'>
                  {song.name}
                </span>
                <span className='text-white text-xl font-semibold'>
                  {song.description}
                </span>
              </div>

              <iframe
                src={song.url}
                className='w-full h-20'
                style={{
                  borderRadius: '10px',
                }}
              ></iframe>
            </div>
            <Heart className='cursor-pointer text-gray-400 hover:text-orange ml-3' />
          </div>
        ))}
      </div>
    </div>
  );
};
