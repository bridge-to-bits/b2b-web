import { Play, Pause } from "lucide-react";
import { CardInfo } from "./CardInfo";
import { SocialsList } from "./SocialsList";
import { useState } from "react";
import { Performer } from '@/app/api/users/users-api-types';

interface PerformerCardProps {
  performer: Performer
}

export const PerformerCard: React.FC<PerformerCardProps> = ({
    performer
  }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full aspect-[4] border-[4px] border-[var(--header-footer)] p-[20px] rounded-[25px] shadow-md">
      {/* Info Section */}
      <CardInfo name={performer.firstName} genres={performer.genres} rating={performer.rating} image={performer.avatar} />

      {/* Track Section */}
      <div className="mt-[2%] bg-[var(--orange)] rounded-[25px] px-[5%] py-[3%] flex items-center justify-between">
        <div className="text-white font-bold text-[20px]">TrackName{/*trackName*/}</div>
        <div className="flex items-center mr-[2%]">
          <div className="text-[var(--white)]">5:08{/*trackLength*/}</div>
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="bg-[var(--white)] ml-[15px] rounded-full w-[40px] h-[40px] flex items-center justify-center"
          >
            {isPlaying ? (
              <Pause className="text-[var(--orange)]" />
            ) : (
              <Play className="text-[var(--orange)]" />
            )}
          </button>
        </div>
      </div>

      {/* Socials Section */}
      <SocialsList socials={performer.socials} />
    </div>
  );
};