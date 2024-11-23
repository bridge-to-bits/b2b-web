interface CardInfoProps {
  name: string;
  genres: {id: string; name: string}[];
  rating: number;
  image: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({ name, genres, rating, image }) => {
  const genresRow = genres? genres.map((genre) => genre.name).join(',') : '';
  return (
    <div
      className="w-full aspect-[4] rounded-md bg-cover bg-center relative flex flex-col justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${image})`,
      }}
    >
      <div className="pl-[5%] text-[var(--white)]">
        <h3 className="text-[24px] font-bold text-[var(--white)]">{name}</h3>
        <p className="text-[18px] text-[var(--white)]">Жанр: {genresRow}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-orange-500">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
