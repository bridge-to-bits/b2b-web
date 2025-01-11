'use client';
import { RegisterForm } from '@/components/pages/auth/sign-up/components/register-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';

const SignUpPage: FC = () => {
  return (
    <section className='flex w-full min-w-72 h-full flex-col gap-8 items-center justify-center py-[10%]'>
      <h1 className='mb-5 text-2xl font-semibold'>Sign up</h1>

      <RegisterForm />

      <p className='text-sm text-center'>
        Вже є акаунт?
        <Link href='/auth/sign-in'>
          <Button variant='link' className='text-orangeChangeable'>Вхід</Button>
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
