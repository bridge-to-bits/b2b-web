'use client';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { FavoriteTrack } from '@/app/api/tracks/tracks-api-types';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { useQueryClient } from '@tanstack/react-query';
import { HeartIcon, Pause, Play } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { AuthToken } from '@/lib/types/auth.types';

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
  const isAuth = !!getClientCookie(AuthToken.AccessToken);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [lastPlayedTimestamp, setLastPlayedTimestamp] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const LISTENING_COOLDOWN = 3 * 60 * 1000;
  const { refresh } = useRouter();

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      const currentTimestamp = Date.now();

      if (!lastPlayedTimestamp || currentTimestamp - lastPlayedTimestamp >= LISTENING_COOLDOWN) {
        try {
          tracksApi.incrementListenings(id);
          setLastPlayedTimestamp(currentTimestamp);
        } catch (error) {
          console.error('Failed to increment track listens:', error);
        }
      }

      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

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
      <div className="flex-1 bg-graphiteBellChangeable px-6 py-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-1">
            <h3 className="text-lg font-medium">{name}</h3>
          </div>

          <div className="flex items-center gap-4">
              <span>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause
                  className="w-6 h-6 text-blue"
                  style={{ fill: 'currentColor', stroke: 'none' }}
                />
              ) : (
                <Play
                  className="w-6 h-6 text-blue ml-0.5"
                  style={{ fill: 'currentColor', stroke: 'none' }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <HeartIcon
        className={'ml-2 cursor-pointer transition-colors duration-300 text-red fill-red hover:fill-transparent'}
        onClick={handleLike}
      />
    </div>
  );
};
