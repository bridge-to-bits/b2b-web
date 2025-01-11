import { Play, Pause } from 'lucide-react';
import { CardInfo } from './CardInfo';
import { SocialsList } from './SocialsList';
import { useState } from 'react';
import { Performer } from '@/app/api/performers/performers-api-types';

interface PerformerCardProps {
  performer: Performer;
}

export const PerformerCard: React.FC<PerformerCardProps> = ({ performer }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='w-full border-[4px] border-graphiteVioletChangeable p-4 rounded-xl shadow-md'>
      {/* Info Section */}
      <CardInfo
        name={performer.username}
        genres={performer.genres}
        rating={performer.rating}
        image={performer.avatar}
      />

      {/* Track Section */}
      <div className='mt-[2%] bg-orange rounded-xl px-[5%] py-[1.5%] flex items-center justify-between'>
        <div className='text-white font-bold text-[20px]'>
          TrackName{/*trackName*/}
        </div>
        <div className='flex items-center mr-[2%]'>
          <div className='text-foreground'>5:08{/*trackLength*/}</div>
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className='bg-muted ml-[15px] rounded-full w-12 h-12 flex items-center justify-center'
          >
            {isPlaying ? (
              <Pause className='text-blue' style={{ fill: 'currentColor', stroke: 'none' }}/>
            ) : (
              <Play className='text-blue' style={{ fill: 'currentColor', stroke: 'none' }}/>
            )}
          </button>
        </div>
      </div>

      {/* Socials Section */}
      <SocialsList socials={performer.socials} />
    </div>
  );
};
