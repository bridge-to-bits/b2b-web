import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const AuthButtons: FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/login'>
        <Button variant='default'>Log in</Button>
      </Link>

      <Link href='/sign-up'>
        <Button variant='outline'>Sign up</Button>
      </Link>
    </div>
  );
};