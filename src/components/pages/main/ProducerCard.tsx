import { Producer } from '@/app/api/producers/producers-api-types';
import { CardInfo } from './CardInfo';
import { SocialsList } from './SocialsList';
import { useRouter } from 'next/navigation';

interface ProducerCardProps {
  producer: Producer;
}

export const ProducerCard: React.FC<ProducerCardProps> = ({ producer }) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    // Check if click target is interactive
    const path = e.nativeEvent.composedPath();
    const isInteractiveElement = path.some((element) => {
      if (element instanceof HTMLElement) {
        return (
          element.tagName.toLowerCase() === 'a' ||
          element.tagName.toLowerCase() === 'button' ||
          element.getAttribute('role') === 'button' ||
          element.classList.contains('interactive')
        );
      }
      return false;
    });

    if (!isInteractiveElement) {
      router.push(`/profile/${producer.id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className='w-full aspect-[4] border-[4px] border-graphiteVioletChangeable p-5 rounded-md shadow-md cursor-pointer'
    >
      {/* Info Section */}
      <CardInfo
        name={producer.username}
        genres={producer.genres}
        rating={producer.rating}
        image={producer.avatar}
      />

      {/* Socials Section */}
      <div className="mt-auto">
        <SocialsList socials={producer.socials} />
      </div>
    </div>
  );
};