'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { PasswordInput } from '@/components/ui/password-input';
import { FileInput } from '@/components/ui/file-input';
import { TProfile, ProfileSchema } from '@/lib/schemas/profile.schemas';
import { User } from '@/app/api/users/users-api-types';
import { FC } from 'react';
import { PlusIcon } from 'lucide-react';
import { BannerFileInput } from './banner-file-input';
import { AvatarFileInput } from './avatar-file-input';
import UsersApi from '@/app/api/users/users-api';

interface Props {
  user: User;
  userId: string;
}

export const ProfileForm: FC<Props> = ({
  user: { avatar, desciption, banner },
  userId,
}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const { push } = useRouter();

  const form = useForm<TProfile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {},
  });

  async function onSubmit(values: TProfile) {
    try {
      UsersApi.updateProfile(userId, values);
      toastSuccess('Ви успішно змінили профіль');
      // push('/');
    } catch (error) {
      toastError('Спробуйте ще раз пізніше', undefined);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-5'
      >
        <BannerFileInput form={form} name='banner' initialImage={banner} />

        <AvatarFileInput form={form} name='avatar' initialImage={avatar} />

        <Button
          type='submit'
          className='w-full'
          disabled={form.formState.isSubmitting}
        >
          Зберегти
        </Button>
      </form>
    </Form>
  );
};
