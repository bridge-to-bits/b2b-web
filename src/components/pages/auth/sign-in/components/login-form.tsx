'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { authApi } from '@/app/api/auth/auth-api';

import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { TSignIn, SignInSchema } from '@/lib/schemas/auth.schemas';
import { setAuthToken } from '@/app/api/auth/server-auth-api';
import { PasswordInput } from '@/components/ui/password-input';

export const LoginForm = () => {
  const { toastError, toastSuccess } = useCommonToast();
  const { push } = useRouter();

  const form = useForm<TSignIn>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: TSignIn) {
    try {
      const { data: token } = await authApi.login(values);
      await setAuthToken(token);
      toastSuccess('Ви успішно увійшли');
      push('/');
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 404) {
        form.setError(
          'email',
          { message: 'Користувача з таким email не існує' },
          { shouldFocus: true }
        );
      } else {
        toastError('Спробуйте ще раз пізніше', undefined);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full max-w-[440px] flex-col gap-5'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder='Пошта' />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <PasswordInput {...field} placeholder='Пароль' />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          className='w-full'
          disabled={form.formState.isSubmitting}
        >
          Увійти
        </Button>
      </form>
    </Form>
  );
};
