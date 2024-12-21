// components/AudioPlayer.tsx

import { useEffect, useState } from 'react';
import "./styles/AudioPlayer.module.css";
import'./../../../../public/music/track1.mp3';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    
    // Слушаем события загрузки
    audio.oncanplaythrough = () => setIsLoading(false);
    audio.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    // Можно добавить очистку ресурса при размонтировании компонента
    return () => {
      audio.pause();
      audio.src = './../../../../public/music/track1.mp3';
    };
  }, [audioSrc]);

  return (
    <div>
      {isLoading && !isError && <div>Загружается...</div>}
      {isError && <div>Ошибка загрузки аудио</div>}
      {!isLoading && !isError && (
        <audio controls>
          <source src={audioSrc} type="audio/mp3" />
          Ваш браузер не поддерживает аудиофайлы.
        </audio>
      )}
    </div>
  );
};

export default AudioPlayer;
