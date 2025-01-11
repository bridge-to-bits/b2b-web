'use client';

import PerformersSection from '@/components/pages/main/PerformersSection';
import { ProducersSection } from '@/components/pages/main/ProducersSection';
import Banner from '@/components/pages/main/Banner';

const Page: React.FC = () => {
  return (
    <div className='min-h-screen text-foreground'>
      <Banner />
      <PerformersSection />
      <ProducersSection />
    </div>
  );
};

export default Page;
