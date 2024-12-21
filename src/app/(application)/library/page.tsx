import { authApi } from '@/app/api/auth/auth-api';
import { getQueryClient } from '@/app/api/get-query-client';
import UsersApi from '@/app/api/users/users-api';
import { AuthToken } from '@/lib/types/auth.types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { LibrarySidebar } from '@/components/pages/library/library-sidebar';
import { LibrarySongsList } from '@/components/pages/library/library-songs-list';

interface PageProps {
  searchParams: {
    playedSongId: string;
  };
}

const Page: FC<PageProps> = async ({ searchParams: { playedSongId } }) => {
  const qc = getQueryClient();

  const cookie = cookies().get(AuthToken.AccessToken);

  if (!cookie?.value) redirect('/auth/sign-in');

  const {
    data: { id },
  } = await qc.fetchQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
  });

  const favoritePerformers = qc.fetchQuery({
    queryKey: ['favorite-performer', id],
    queryFn: () => UsersApi.getFavoritePerformers(id),
  });

  const favoriteTracks = qc.fetchQuery({
    queryKey: ['favorite-track', id],
    queryFn: () => UsersApi.getFavoriteTracks(id),
  });

  const [{ data: performers }, { data: tracks }] = await Promise.all([
    favoritePerformers,
    favoriteTracks,
  ]);

  return (
    <section className='my-10'>
      <SidebarProvider className='items-start min-h-[75vh]'>
        <LibrarySidebar performers={performers} />
        <LibrarySongsList songs={tracks} performers={performers} />
      </SidebarProvider>
    </section>
  );
};

export default Page;
