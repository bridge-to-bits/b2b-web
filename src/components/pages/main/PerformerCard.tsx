import { CardInfo } from './CardInfo';
import { SocialsList } from './SocialsList';
import { Performer } from '@/app/api/performers/performers-api-types';
import { useRouter } from 'next/navigation';

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
        image={performer.avatar}
      />

      {performer.track?.url && (
        <div className='mt-[2%] bg-orange rounded-xl px-[5%] py-[1.5%] flex items-center justify-between interactive'>
          <div className='text-white font-bold text-[20px]'>
            {performer.track.name}
          </div>

          <div className='flex items-center'>
            <div className='flex-1 interactive'>
              <iframe
                src={performer.track.url}
                className='w-full h-14'
                style={{
                  borderRadius: '10px',
                  background: 'transparent',
                  pointerEvents: 'auto',
                  border: 'none'
                }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>

          {/*<button*/}
          {/*  onClick={(e) => {*/}
          {/*    e.stopPropagation();*/}
          {/*    setIsPlaying((prev) => !prev);*/}
          {/*  }}*/}
          {/*  className='bg-muted ml-[15px] rounded-full w-12 h-12 flex items-center justify-center'*/}
          {/*>*/}
          {/*  {isPlaying ? (*/}
          {/*    <Pause className='text-blue' style={{ fill: 'currentColor', stroke: 'none' }}/>*/}
          {/*  ) : (*/}
          {/*    <Play className='text-blue' style={{ fill: 'currentColor', stroke: 'none' }}/>*/}
          {/*  )}*/}
          {/*</button>*/}

        </div>
      )}

      {/* Socials Section */}
      <SocialsList socials={performer.socials} />
    </div>
  );
};
