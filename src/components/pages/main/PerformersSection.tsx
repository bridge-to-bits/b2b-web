'use client';

import Link from 'next/link';
import { PerformerCard } from '@/components/pages/main/PerformerCard';
import SectionHeader from '@/components/pages/main/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@/components/common/components/Loader';
import { performersApi } from '@/app/api/performers/performers-api';

const PerformersSection: React.FC = () => {
  const {
    data: performers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['performers', { pageNumber: 1, pageSize: 6 }],
    queryFn: () => performersApi.getAll({ pageNumber: 1, pageSize: 6 }),
    select: (data) => data.data,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className='text-center text-red-500'>Error fetching performers!</div>
    );
  }

  return (
    <section className='w-full flex flex-col items-center mt-[2%]'>
      {/* Section Header */}
      <SectionHeader text='Топ Виконавців' />

      {/* Performers Grid */}
      <div className='grid w-[90vw] max-w-[1440px] grid-cols-1 md:grid-cols-2 gap-x-[1%] gap-y-[2.5%] mt-[2%] mx-[5%]'>
        {performers?.map((performer) => (
          <PerformerCard
            key={performer.username + performer.email}
            performer={performer}
          />
        ))}
      </div>

      {/* View More Link */}
      <Link
        href='/search?userType=performer'
        className='mt-[8%] mb-[2%] text-[21px] font-rubik italic text-orange'
      >
        Дивитись більше...
      </Link>
    </section>
  );
};

export default PerformersSection;
