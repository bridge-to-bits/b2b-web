import { FC } from 'react';
import { Button } from '@/components/ui/button';

export const AuthButtons: FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <Button variant='default' className='flex items-center gap-3'>
        Log in
      </Button>

      <Button variant='outline' className='flex items-center gap-3'>
        Sign up
      </Button>
    </div>
  );
};
