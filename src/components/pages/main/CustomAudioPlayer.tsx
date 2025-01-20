import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { tracksApi } from '@/app/api/tracks/tracks-api';

interface Track {
  id: string;
  name: string;
  url: string;
}

interface CustomAudioPlayerProps {
  track: Track;
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [lastPlayedTimestamp, setLastPlayedTimestamp] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const LISTENING_COOLDOWN = 3 * 60 * 1000;

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
          tracksApi.incrementListenings(track.id)
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

  return (
    <div className="mt-[2%] bg-orange rounded-xl px-[5%] py-[1.5%] flex items-center justify-between">
      <div className="flex-1">
        <div className="text-white font-bold text-[20px]">
          {track.name}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-white">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        <button
          onClick={handlePlayPause}
          className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          {isPlaying ? (
            <Pause className="text-blue w-6 h-6" style={{ fill: 'currentColor', stroke: 'none' }} />
          ) : (
            <Play className="text-blue w-6 h-6" style={{ fill: 'currentColor', stroke: 'none' }} />
          )}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={track.url}
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default CustomAudioPlayer;