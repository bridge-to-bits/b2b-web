import { FC } from 'react';
import { Button } from '@/components/ui/button';

export const HeaderMenu: FC = () => {
  return (
    <Button variant='link' className='flex items-center gap-3'>
      <img src='/menuIcon.svg' alt='Logo icon' />
    </Button>
  );
};
