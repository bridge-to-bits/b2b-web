import { CardInfo } from "./CardInfo";
import { SocialsList } from "./SocialsList";
import { Producer } from '@/app/api/users/users-api-types';

interface ProducerCardProps {
  producer: Producer
}

export const ProducerCard: React.FC<ProducerCardProps> = ({
     producer
   }) => {
  return (
    <div className="w-full aspect-[4] border-[4px] border-[var(--background-header-footer)] p-[20px] rounded-[25px] shadow-md">
      {/* Info Section */}
      <CardInfo name={producer.firstName} genres={producer.genres} rating={producer.rating} image={producer.avatar} />

      {/* Socials Section */}
      <SocialsList socials={producer.socials} />
    </div>
  );
};