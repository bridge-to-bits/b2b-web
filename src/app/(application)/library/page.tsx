import { authApi } from '@/app/api/auth/auth-api';
import { getQueryClient } from '@/app/api/get-query-client';
import UsersApi from '@/app/api/users/users-api';
import { AuthToken } from '@/lib/types/auth.types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { LibrarySidebar } from '@/components/pages/library/library-sidebar';
import { Performer } from '@/app/api/performers/performers-api-types';
import { LibrarySongsList } from '@/components/pages/library/library-songs-list';
import { PlayedSong } from '@/components/pages/library/played-song';

const Page: FC = async () => {
  const qc = getQueryClient();

  const cookie = cookies().get(AuthToken.AccessToken);

  if (!cookie?.value) redirect('/auth/sign-in');

  // const {
  //   data: { id },
  // } = await qc.fetchQuery({
  //   queryKey: ['getMe', cookie],
  //   queryFn: authApi.getMe,
  // });
  const id = '1';

  // const { data: favoritePerformers } = await qc.fetchQuery({
  //   queryKey: ['playlist-by-user-id', id],
  //   queryFn: () => UsersApi.getFavoritePerformers(id),
  // });

  const mockSongsData = [
    { id: 1, title: 'Song 1', duration: '4:56' },
    { id: 2, title: 'Song 2', duration: '3:45' },
    { id: 3, title: 'Song 3', duration: '5:12' },
    { id: 4, title: 'Song 4', duration: '3:30' },
  ];

  const data = [
    {
      id: '1',
      avatar: 'image',
      username: 'username',
      genres: [{ name: 'genre', id: '1' }],
      rating: 5,
      email: 'email@example.com',
      socials: [
        {
          name: 'spotify',
          link: 'spotify.com',
        },
        {
          name: 'youtubeMusic',
          link: 'music.com',
        },
      ],
    },
    {
      id: '2',
      username: 'usernameusernameusername',
      genres: [{ name: 'genre', id: '1' }],
      rating: 5,
      email: 'email@example.com',
      avatar: 'image',
      socials: [
        {
          name: 'spotify',
          link: 'spotify.com',
        },
        {
          name: 'youtubeMusic',
          link: 'music.com',
        },
      ],
    },
  ];

  return (
    <section className='my-10'>
      <SidebarProvider className='items-start min-h-[75vh]'>
        <LibrarySidebar data={data} />
        <LibrarySongsList songs={mockSongsData} />
      </SidebarProvider>
      <PlayedSong song={mockSongsData[0]} />
    </section>
  );
};

export default Page;
