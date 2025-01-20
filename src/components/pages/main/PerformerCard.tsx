import { CardInfo } from './CardInfo';
import { SocialsList } from './SocialsList';
import { Performer } from '@/app/api/performers/performers-api-types';
import { useRouter } from 'next/navigation';
import CustomAudioPlayer from '@/components/pages/main/CustomAudioPlayer';

interface PerformerCardProps {
  performer: Performer;
}

export const PerformerCard: React.FC<PerformerCardProps> = ({ performer }) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    const path = e.nativeEvent.composedPath();
    const isInteractiveElement = path.some((element) => {
      if (element instanceof HTMLElement) {
        return (
          element.tagName.toLowerCase() === 'a' ||
          element.tagName.toLowerCase() === 'button' ||
          element.tagName.toLowerCase() === 'iframe' ||
          element.getAttribute('role') === 'button' ||
          element.classList.contains('interactive')
        );
      }
      return false;
    });

    if (!isInteractiveElement) {
      router.push(`/profile/${performer.id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className='w-full min-h-80 border-[4px] border-graphiteVioletChangeable p-4 rounded-xl shadow-md cursor-pointer transition-transform hover:scale-[1.01]'
    >
      <CardInfo
        name={performer.username}
        genres={performer.genres}
        rating={performer.rating}
        image={performer.profileBackground}
      />

      {performer.track?.url && (
        <CustomAudioPlayer track={performer.track} />
      )}

      {/* Socials Section */}
      <SocialsList socials={performer.socials} />
    </div>
  );
};
