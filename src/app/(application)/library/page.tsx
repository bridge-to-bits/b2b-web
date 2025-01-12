import { authApi } from '@/app/api/auth/auth-api';
import { getQueryClient } from '@/app/api/get-query-client';
import { performersApi } from '@/app/api/performers/performers-api';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { LibrarySidebar } from '@/components/pages/library/library-sidebar';
import { LibrarySongsList } from '@/components/pages/library/library-songs-list';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AuthToken } from '@/lib/types/auth.types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC } from 'react';

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
    queryFn: () => performersApi.getFavoritePerformers(),
  });

  const favoriteTracks = qc.fetchQuery({
    queryKey: ['favorite-track', id],
    queryFn: () => tracksApi.getAllFavorites(),
  });

  const [{ data: performers }, { data: tracks }] = await Promise.all([
    favoritePerformers,
    favoriteTracks,
  ]);

  return (
    <section className='my-10'>
      <SidebarProvider className='items-start min-h-[75vh]'>
        <LibrarySidebar performers={performers} />
        <LibrarySongsList userId={id} songs={tracks} performers={performers} />
      </SidebarProvider>
    </section>
  );
};

export default Page;
