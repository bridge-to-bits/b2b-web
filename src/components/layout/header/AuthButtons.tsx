import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const AuthButtons: FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/auth/sign-in'>
        <Button variant='default' className='bg-blueOrangeChangeable hover:bg-orangeChangeable' >Log in</Button>
      </Link>

      <Link href='/auth/sign-up'>
        <Button variant='outline'>Sign up</Button>
      </Link>
    </div>
  );
};
