"use client";

import Link from "next/link";
import { PerformerCard } from "@/components/pages/main/PerformerCard";
import SectionHeader from "@/components/pages/main/SectionHeader";
import UsersApi from '@/app/api/users/users-api';
import { useQuery } from '@tanstack/react-query';
import { Performer } from '@/app/api/users/users-api-types';

const PerformersSection: React.FC = () => {
  const { data: performers, isLoading, isError } = useQuery({
    queryKey: ["performers", { pageNumber: 1, pageSize: 6 }],
    queryFn: async () => {
      const query = { pageNumber: 1, pageSize: 6 };
      const performersPaginatedData = await UsersApi.getPerformers(query);
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
    <section className="w-full flex flex-col items-center mt-[2%]">
      {/* Section Header */}
      <SectionHeader text="Топ Виконавців" />

      {/* Performers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[1%] gap-y-[2.5%] mt-[2%] mx-[5%]">
        {performers?.map((performer: Performer) => (
          <PerformerCard key={performer.firstName} performer={performer} />
        ))}
      </div>

      {/* View More Link */}
      <Link
        href="/auth/log-in"
        className="mt-[8%] mb-[2%] text-[21px] font-rubik italic text-[var(--orange)]"
      >
        Дивитись більше...
      </Link>
    </section>
  );
};

export default PerformersSection;