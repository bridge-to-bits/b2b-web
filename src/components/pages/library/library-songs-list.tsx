'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { BookHeart } from 'lucide-react';
import { FC } from 'react';

import { FavoritePerformer } from '@/app/api/performers/performers-api-types';
import { FavoriteTrack } from '@/app/api/tracks/tracks-api-types';
import { LibraryPerformersList } from './performers-list';
import { SongItem } from './SongItem';

export const LibrarySongsList: FC<{
  songs: FavoriteTrack[];
  performers: FavoritePerformer[];
  userId: string;
}> = ({ songs, performers, userId }) => {
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
        {songs.map((props) => (
          <SongItem
            allSongs={songs}
            key={props.id}
            {...props}
            userId={userId}
          />
        ))}
      </div>
    </div>
  );
};
