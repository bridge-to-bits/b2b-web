"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PerformerCard } from "@/components/pages/main/PerformerCard";
import SectionHeader from "@/components/pages/main/SectionHeader";
import { Performer } from '@/app/api/users/users-api-types';
import UsersApi from '@/app/api/users/users-api';

const PerformersSection: React.FC = () => {
  const [performers, setPerformers] = useState<Performer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPerformers = async () => {
      try {
        const query = { pageNumber: 1, pageSize: 6 };
        const performersPaginatedData = await UsersApi.getPerformers(query);
        setPerformers(performersPaginatedData.data);
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
    <section className="w-full flex flex-col items-center mt-[2%]">
      {/* Section Header */}
      <SectionHeader text="Топ Виконавців" />

      {/* Performers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[1%] gap-y-[2.5%] mt-[2%] mx-[5%]">
        {performers.map((performer) => (
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