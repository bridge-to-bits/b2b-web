"use client";

import PerformersSection from "@/components/pages/main/PerformersSection";
import { ProducersSection } from '@/components/pages/main/ProducersSection';
import Banner from '@/components/pages/main/Banner';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Banner />
      <PerformersSection />
      <ProducersSection />
    </div>
  );
};

export default Page;