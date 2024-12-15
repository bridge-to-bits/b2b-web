'use client';
import { FC, useEffect, useState } from 'react';
import { Play, Heart, Pause } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  duration: string;
}

const mockSongsData: Song[] = [
  { id: 1, title: 'Song 1', duration: '4:56' },
  { id: 2, title: 'Song 2', duration: '3:45' },
  { id: 3, title: 'Song 3', duration: '5:12' },
  { id: 4, title: 'Song 4', duration: '3:30' },
];

const SongsList: FC<{ userId: string }> = ({ userId }) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchSongs = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setSongs(mockSongsData);
        setIsLoading(false);
      }, 1000);
    };

    fetchSongs();
  }, [userId]);

  if (isLoading) {
    return <div>Loading songs...</div>;
  }

  return (
    <div className="space-y-4">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center">
          <div  className="flex items-center justify-between bg-graphite px-2 py-1 rounded-xl w-full">
            <div className="text-white font-semibold">{song.title}</div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{song.duration}</span>
              <button
                onClick={() => setIsPlaying((prev) => !prev)}
                className='bg-foreground ml-[15px] rounded-full w-12 h-12 flex items-center justify-center'
              >
                {isPlaying ? (
                  <Pause className='text-blue' />
                ) : (
                  <Play className='text-blue' />
                )}
              </button>
            </div>
          </div>
          <Heart className="cursor-pointer text-gray-400 hover:text-orange ml-3" />
        </div>
      ))}
    </div>
  );
};

export default SongsList;