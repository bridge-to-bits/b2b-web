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
    queryFn: () => performersApi.getAll({ pageNumber: 1, pageSize: 6, search: '' }),
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
    <section className='w-full flex flex-col items-center mt-8'>
      <SectionHeader text='Топ Виконавців' />

      <div className='w-full max-w-[1440px] md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8'>
          {performers?.map((performer) => (
            <div key={performer.username + performer.email} className='w-full'>
              <PerformerCard performer={performer} />
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-8 md:mt-12 mb-8'>
          <Link
            href='/search?userType=performer'
            className='text-xl font-rubik italic text-orangeChangeable'
          >
            Дивитись більше...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerformersSection;