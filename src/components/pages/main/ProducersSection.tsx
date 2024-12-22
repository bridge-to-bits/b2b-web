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
    <section className='w-full flex flex-col items-center'>
      {/* Section Header */}
      <SectionHeader text={'Топ продюсерів'} />

      {/* Producers List */}
      <div className='w-full max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px] px-[5%]'>
        {producers?.map((producer) => (
          <ProducerCard
            key={producer.username + producer.email}
            producer={producer}
          />
        ))}
      </div>

      {/* View More Link */}
      <Link
        href='/search?userType=producer'
        className='mt-[4%] text-[21px] font-rubik italic text-orange'
      >
        Дивитись більше...
      </Link>
    </section>
  );
};
