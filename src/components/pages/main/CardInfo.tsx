import { Star } from 'lucide-react';
import Image from 'next/image';

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
  const totalStars = 5;
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
            <div className='flex text-orangeChangeable'>
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <Star
                  key={`filled-${name}-${index}`}
                  style={{ fill: 'currentColor', stroke: 'none' }}
                  size={24}
                />
              ))}

              {Array.from({ length: totalStars - Math.floor(rating) }).map(
                (_, index) => (
                  <Star
                    key={`unfilled-${name}-${index}`}
                    style={{ fill: 'none', stroke: 'currentColor' }}
                    size={24}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
