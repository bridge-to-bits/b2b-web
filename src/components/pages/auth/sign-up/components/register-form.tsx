'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/components/ui/password-input';
import { SignUpSchema, TSignUp } from '@/lib/schemas/auth.schemas';
import { SignUpDefaultValues } from '@/components/pages/auth/sign-up/constants/auth.constants';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { authApi } from '@/app/api/auth/auth-api';
import { transformAuthData } from '../utils/transform-auth-data';
import { USER_TYPE } from '@/lib/types/user-type';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { useRouter } from 'next/navigation';
import { setAuthToken } from '@/app/api/auth/server-auth-api';
import { isAxiosError } from 'axios';
import { getErrorMessage } from '@/lib/utils/getErrorMessage';

export const RegisterForm = () => {
  const form = useForm<TSignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: SignUpDefaultValues,
    mode: 'onChange',
  });

  const { toastSuccess } = useCommonToast();
  const { push } = useRouter();

  const onSubmit = async (data: TSignUp) => {
    try {
      const { data: token } = await authApi.register(transformAuthData(data));
      setAuthToken(token);
      toastSuccess('Ви успішно зареєструвались');
      push('/');
    } catch (error) {
      if (
        isAxiosError(error) &&
        getErrorMessage(error) === 'Email is already in use'
      ) {
        return form.setError('email', {
          type: 'manual',
          message: 'Користувач з такою поштою вже існує',
        });
      } else {
        form.setError(
          'email',
          { message: 'Упс, щось пішло не так, спробуйте пізніше' },
          { shouldFocus: true }
        );
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full max-w-[440px] flex-col gap-5'
      >
        <FormField
          control={form.control}
          name='userName'
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder='Ім’я\Псевдонім' />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <Input {...field} placeholder="Прізвище (не обов'язково)" />
              <FormMessage />
            </FormItem>
          )}
        />
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
              <PasswordInput placeholder='Пароль' {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <PasswordInput {...field} placeholder='Повторіть пароль' />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormControl>
                <RadioGroup
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  {[
                    { value: USER_TYPE.PRODUCER, label: 'Продюсер' },
                    { value: USER_TYPE.PERFORMER, label: 'Виконавець' },
                  ].map(({ label, value }) => (
                    <FormItem
                      key={value}
                      className='flex items-center space-x-3 space-y-0'
                    >
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <FormLabel className='font-normal'>{label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className='w-full'
          onClick={() => form.handleSubmit(onSubmit)}
          disabled={form.formState.isSubmitting}
        >
          Sign up
        </Button>
      </form>
    </Form>
  );
};
