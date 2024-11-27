'use client';

import { FC } from 'react';
import AuthProvider from '@/lib/providers/auth-provider';
import { Toaster } from '@/components/ui/toast/toaster';
import { QueryClientProvider } from '@/lib/providers/query-client-provider';
import { Header } from '@/components/layout/header/Header';
import { Footer } from '@/components/layout/footer/Footer';

interface SearchLayoutProps {
  children: React.ReactNode;
}

const SearchLayout: FC<SearchLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <div className='min-h-screen w-full'>
          <Header />

          <main className='h-full w-full p-2 pt-20'>
            {children}
            <Toaster />
          </main>

          <Footer/>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default SearchLayout;
