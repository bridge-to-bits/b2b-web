import { tracksApi } from '@/app/api/tracks/tracks-api';
import { Track } from '@/app/api/tracks/tracks-api-types';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Heart, Play, Pause } from 'lucide-react';
import { FC, useState, useRef, useEffect } from 'react';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [lastPlayedTimestamp, setLastPlayedTimestamp] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const LISTENING_COOLDOWN = 3 * 60 * 1000;

  const { data: isFavorite } = useQuery({
    queryKey: ['get-track-is-favorite', id, userId],
    queryFn: () => tracksApi.getIsFavorite(id),
    select: (data) => data.data,
    enabled: !!userId && !isMe,
  });

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
    if (!isAuth) {
      toastError('Ви повинні увійти, щоб лайкнути трек');
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

      toastSuccess('Трек успішно збережено');
    } catch (error) {
      toastError(error);
    }
  };

  return (
    <div className="w-full mb-4">
      <div className="flex items-center gap-4">
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

        {!isMe && (
          <button
            onClick={handleLike}
            className="focus:outline-none flex-shrink-0"
          >
            <Heart
              className={`w-6 h-6 transition-colors duration-300 
              ${isFavorite ? 'text-red fill-red hover:fill-transparent' : 'hover:fill-red'}`}
            />
          </button>
        )}
      </div>

      <audio
        ref={audioRef}
        src={url}
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};