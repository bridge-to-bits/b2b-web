import {
  Sidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ComponentProps } from 'react';
import { CustomAvatar } from '@/components/layout/header/CustomAvatar';
import { Twitter, Instagram, CirclePlay } from 'lucide-react';
import { Spotify } from '@/lib/icons/spotify';
import Link from 'next/link';
import { FavoritePerformer } from '@/app/api/users/users-api-types';

export const socialIcons: Record<string, JSX.Element> = {
  spotify: <Spotify className='w-5 h-5 text-white' />,
  twitter: <Twitter className='w-5 h-5 text-white' />,
  youtubemusic: <CirclePlay className='w-5 h-5 text-white' />,
  instagram: <Instagram className='w-5 h-5 text-white' />,
};

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {
  performers: FavoritePerformer[];
}

export function LibraryPerformersList({
  performers,
  ...props
}: AppSidebarProps) {
  return (
    <SidebarMenu className='gap-2'>
      <span className='font-bold text-2xl my-2 text-white mx-2'>
        Уподобані виконавці
      </span>

      {performers.length ? (
        performers.map((item) => (
          <SidebarMenuItem key={item.userId}>
            <SidebarMenuButton
              asChild
              className='h-full hover:bg-transparent hover:text-white '
            >
              <Link href={`/profile/${item.userId}`}>
                <CustomAvatar src={item.avatar} />
                <div>
                  <span className='mb-1 block'>{item.username}</span>
                  <ul className='flex gap-2'>
                    {item.socials?.map((social) => (
                      <li key={social.name}>
                        {socialIcons[social.name.toLowerCase()]}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))
      ) : (
        <span className='text-white'>немає улюблених виконавців</span>
      )}
    </SidebarMenu>
  );
}
