import { FC } from 'react';
import { Play, Heart } from 'lucide-react';
import Link from 'next/link';

interface Song {
  id: number;
  title: string;
  duration: string;
}

export const LibrarySongsList: FC<{ songs: Song[] }> = ({ songs }) => {
  return (
    <div className='space-y-4 mx-10 w-full'>
      {songs.map((song) => (
        <div key={song.id} className='flex items-center'>
          <div className='flex items-center justify-between bg-gray-800 p-4 rounded-lg w-full'>
            <div className='text-white font-semibold'>{song.title}</div>
            <div className='flex items-center gap-4'>
              <span className='text-gray-400'>{song.duration}</span>
              <Link
                href={`/song/${song.id}`}
                className='bg-foreground ml-4 rounded-full w-12 h-12 flex items-center justify-center'
              >
                <Play className='text-blue' />
              </Link>
            </div>
          </div>
          <Heart className='cursor-pointer text-gray-400 hover:text-orange ml-3' />
        </div>
      ))}
    </div>
  );
};
