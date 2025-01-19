import { ProducerCard } from './ProducerCard';
import Link from 'next/link';
import SectionHeader from '@/components/pages/main/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@/components/common/components/Loader';
import { producersApi } from '@/app/api/producers/producers-api';

export const ProducersSection: React.FC = () => {
  const {
    data: producers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['producers', { pageNumber: 1, pageSize: 6 }],
    queryFn: () => producersApi.getAll({ pageNumber: 1, pageSize: 6, search: '' }),
    select: (data) => data.data,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className='text-center text-orange'>Error fetching producers!</div>
    );
  }

  return (
    <section className='w-full flex flex-col items-center pb-10'>
      {/* Section Header */}
      <SectionHeader text={'Топ продюсерів'} />

      {/* Producers List */}
      <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 px-4 md:px-8'>
        {producers?.map((producer) => (
          <div
            key={producer.username + producer.email}
            className="w-full transition-transform hover:scale-[1.01]"
          >
            <ProducerCard producer={producer} />
          </div>
        ))}
      </div>

      {/* View More Link */}
      <Link
        href='/search?userType=producer'
        className='mt-8 text-xl font-rubik italic text-orangeChangeable'
      >
        Дивитись більше...
      </Link>
    </section>
  );
};