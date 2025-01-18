import { Star } from 'lucide-react';

export interface StarsBasedRatingProps {
  rating: number;
}

export const StarsBasedRating: React.FC<StarsBasedRatingProps> = ({
    rating,
  }) => {
  const totalStars = 5;

  return (
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
  );
}