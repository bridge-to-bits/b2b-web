import { Star } from 'lucide-react';
import Image from 'next/image';
import { StarsBasedRating } from '@/components/pages/main/StarsBasedRating';

interface CardInfoProps {
  name: string;
  genres: { id: string; name: string }[];
  rating: number;
  image: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({
  name,
  genres,
  rating,
  image,
}) => {
  const genresRow = genres ? genres.map((genre) => genre.name).join(',') : '';
  const bgImage = image || '/blank-avatar.png';

  return (
    <div className='w-full aspect-[4] rounded-xl relative pointer-events-none'>
      <div className='absolute inset-0'>
        <Image
          src={bgImage}
          alt='Background'
          fill
          sizes='33vw'
          className='rounded-xl object-cover'
        />
        {/* Gradient overlay */}
        <div
          className='absolute inset-0 rounded-xl'
          style={{
            background:
              'linear-gradient(to right, var(--card-gradient-left), var(--card-gradient-right))',
          }}
        />
      </div>

      <div className='relative z-9 h-full flex flex-col justify-center'>
        <div className='pl-[5%]'>
          <h3 className='text-[24px] font-bold'>{name}</h3>
          <p className='text-[18px]'>Жанр: {genresRow}</p>
          <div className='flex items-center gap-2 mt-2'>
            <StarsBasedRating rating={rating}/>
          </div>
        </div>
      </div>
    </div>
  );
};
