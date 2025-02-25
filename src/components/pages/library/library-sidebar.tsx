import { FavoritePerformer } from '@/app/api/performers/performers-api-types';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { ComponentProps } from 'react';
import { LibraryPerformersList } from './performers-list';

interface AppSidebarProps extends ComponentProps<typeof Sidebar> {
  performers: FavoritePerformer[];
}

export function LibrarySidebar({ performers, ...props }: AppSidebarProps) {
  return (
    <Sidebar
      collapsible='none'
      className='hidden py-4 rounded-r-xl md:flex bg-graphiteBellChangeable text-foreground'
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className='gap-2'>
              <LibraryPerformersList performers={performers} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
