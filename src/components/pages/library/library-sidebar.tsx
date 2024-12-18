import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ComponentProps } from 'react';
import { Performer } from '@/app/api/performers/performers-api-types';
import { CustomAvatar } from '@/components/layout/header/CustomAvatar';
import { Twitter, Instagram, CirclePlay } from 'lucide-react';
import { Spotify } from '@/lib/icons/spotify';
import Link from 'next/link';

const socialIcons: Record<string, JSX.Element> = {
  spotify: <Spotify className='w-5 h-5 text-white' />,
  twitter: <Twitter className='w-5 h-5 text-white' />,
  youtubemusic: <CirclePlay className='w-5 h-5 text-white' />,
  instagram: <Instagram className='w-5 h-5 text-white' />,
};

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {
  data: Performer[];
}

export function LibrarySidebar({ data, ...props }: AppSidebarProps) {
  return (
    <Sidebar
      collapsible='none'
      className='hidden py-4 rounded-r-xl md:flex bg-graphite'
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='gap-2'>
              {data.map((item) => (
                <SidebarMenuItem key={item.username}>
                  <SidebarMenuButton
                    asChild
                    className='h-full hover:bg-transparent hover:text-white '
                  >
                    <Link href={`/profile/${item.id}`}>
                      <CustomAvatar src={item.avatar} />
                      <div>
                        <span className='mb-1 block'>{item.username}</span>
                        <ul className='flex gap-2'>
                          {item.socials.map((social) => (
                            <li> {socialIcons[social.name.toLowerCase()]}</li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
