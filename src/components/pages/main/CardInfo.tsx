import { Star } from 'lucide-react';

interface CardInfoProps {
  name: string;
  genres: {id: string; name: string}[];
  rating: number;
  image: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({ name, genres, rating, image }) => {
  const genresRow = genres? genres.map((genre) => genre.name).join(',') : '';
  const totalStars = 5;
  const bgImage = image ?? '/blank-avatar.png'
  return (
    <div
      className="w-full aspect-[4] rounded-xl bg-cover bg-center relative flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${bgImage})`,
      }}
    >
      <div className="pl-[5%] text-foreground">
        <h3 className="text-[24px] font-bold text-foreground">{name}</h3>
        <p className="text-[18px] text-foreground">Жанр: {genresRow}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-orange">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <Star key={`filled-${name}-${index}`} style={{ fill: "currentColor", stroke: "none" }} size={24} />
            ))}

            {Array.from({ length: totalStars - Math.floor(rating) }).map((_, index) => (
              <Star key={`unfilled-${name}-${index}`} style={{ fill: "none", stroke: "currentColor" }} size={24} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
