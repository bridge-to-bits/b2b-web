'use client';

import { FC } from 'react';
import AuthProvider from '@/lib/providers/auth-provider';
import { Toaster } from '@/components/ui/toast/toaster';
import { DesktopSidebarNavigation } from '@/components/layout/components/DesktopSidebarNavigation';
import { QueryClientProvider } from '@/lib/providers/query-client-provider';

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

const ApplicationLayout: FC<ApplicationLayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <div className='min-h-screen w-full md:flex'>
          <DesktopSidebarNavigation />

          <div className='h-full min-h-screen w-full overflow-x-auto p-2'>
            {children}
            <Toaster />
          </div>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default ApplicationLayout;
