import { ProducerCard } from "./ProducerCard";
import Link from 'next/link';
import SectionHeader from '@/components/pages/main/SectionHeader';
import { useEffect, useState } from 'react';
import UsersApi from '@/app/api/users/users-api';
import { Producer } from '@/app/api/users/users-api-types';

export const ProducersSection: React.FC = () => {
  const [producers, setProducers] = useState<Producer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPerformers = async () => {
      try {
        const query = { pageNumber: 1, pageSize: 6 };
        const producersPaginatedData = await UsersApi.getProducers(query);
        setProducers(producersPaginatedData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformers();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section className="w-full flex flex-col items-center">
      {/* Section Header */}
      <SectionHeader text={"Топ продюсерів"} />

      {/* Producers List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px] px-[5%]">
        {producers.map((producer) => (
          <ProducerCard key={producer.firstName} producer={producer}/>
        ))}
      </div>

      {/* View More Link */}
      <Link
        href="/auth/log-in"
        className="mt-[4%] text-[21px] font-rubik italic text-[var(--orange)]"
      >
        Дивитись більше...
      </Link>
    </section>
  );
};