import { LoginForm } from '@/components/pages/auth/sign-in/components/login-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SignInPage: React.FC = () => {
  return (
    <section className='flex h-full flex-col gap-8 items-center justify-center py-[10%]'>
      <h2 className='font-medium text-2xl'>Log in</h2>

      <LoginForm />

      <p className='text-sm text-center'>
        Don`t have an account?
        <Link href='/auth/sign-up'>
          <Button variant='link'>Sign up</Button>
        </Link>
      </p>
    </section>
  );
};

export default SignInPage;
