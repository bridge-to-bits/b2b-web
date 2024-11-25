import { ProducerCard } from "./ProducerCard";
import Link from 'next/link';
import SectionHeader from '@/components/pages/main/SectionHeader';
import UsersApi from '@/app/api/users/users-api';
import { useQuery } from '@tanstack/react-query';

export const ProducersSection: React.FC = () => {
  const { data: producers, isLoading, isError } = useQuery({
    queryKey: ["performers", { pageNumber: 1, pageSize: 6 }],
    queryFn: async () => {
      const query = { pageNumber: 1, pageSize: 6 };
      const performersPaginatedData = await UsersApi.getProducers(query);
      return performersPaginatedData.data;
    },
    staleTime: 300000,
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error fetching performers!</div>;
  }

  return (
    <section className="w-full flex flex-col items-center">
      {/* Section Header */}
      <SectionHeader text={"Топ продюсерів"} />

      {/* Producers List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px] px-[5%]">
        {producers?.map((producer) => (
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