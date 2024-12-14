'use client';

import { FC } from 'react';
import { Toaster } from '@/components/ui/toast/toaster';
import { Header } from '@/components/layout/header/Header';
import { QueryClientProvider } from '@/lib/providers/query-client-provider';
import { Footer } from '@/components/layout/footer/Footer';
import { ThemeProvider } from '@/lib/providers/theme-provider';

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

const ApplicationLayout: FC<ApplicationLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <div className='min-h-screen w-full'>
          <Header />

          <main className='h-full w-full p-2 pt-20'>
            {children}
            <Toaster />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default ApplicationLayout;
