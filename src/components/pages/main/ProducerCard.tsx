import { CardInfo } from './CardInfo';
import { SocialsList } from './SocialsList';
import { Producer } from '@/app/api/users/users-api-types';

interface ProducerCardProps {
  producer: Producer;
}

export const ProducerCard: React.FC<ProducerCardProps> = ({ producer }) => {
  return (
    <div className='w-full aspect-[4] border-[4px] border-graphite p-5 rounded-md shadow-md'>
      {/* Info Section */}
      <CardInfo
        name={producer.username}
        genres={producer.genres}
        rating={producer.rating}
        image={producer.avatar}
      />

      {/* Socials Section */}
      <SocialsList socials={producer.socials} />
    </div>
  );
};
