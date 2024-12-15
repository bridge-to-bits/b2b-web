'use client';
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
import { Genres } from './genres';

interface Props {
  user: User;
  userId: string;
  toggleEditing: () => void;
}

export const ProfileForm: FC<Props> = ({
  user: { avatar, banner, genres, description, location, username, socials },
  userId,
}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const { push } = useRouter();

  const socialsDefaults = socials?.reduce(
    (acc, social) => ({ ...acc, [social.name]: social.link }),
    {}
  );

  const form = useForm<TProfile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      userName: username,
      city: location,
      socials: socialsDefaults,
      aboutMe: description,
    },
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <BannerFileInput form={form} name='bannerFile' initialImage={banner} />

        <div className='mx-auto w-full h-full max-w-[1280px] gap-8 px-4 '>
          <div className='-translate-y-1/2 '>
            <AvatarFileInput
              form={form}
              name='avatarFile'
              initialImage={avatar}
            />
          </div>

          <div className='w-full h-full max-w-96 gap-6  flex flex-col -mt-10 mb-8'>
            <FormLabel className='text-xl'>Особиста інформація</FormLabel>
            <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <FormItem>
                  <Input {...field} placeholder="Псевдонім\ім'я" />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem>
                  <Input {...field} placeholder='Адреса' />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='aboutMe'
              render={({ field }) => (
                <FormItem>
                  <Input {...field} placeholder='Опис' />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='w-full h-full gap-6 flex flex-col mb-8'>
            <FormLabel className='text-xl'>Соціальні мережі</FormLabel>
            <div className='flex gap-8'>
              <FormField
                control={form.control}
                name='socials.instagram'
                render={({ field }) => (
                  <FormItem>
                    <Input {...field} placeholder='Instagram' />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='socials.spotify'
                render={({ field }) => (
                  <FormItem>
                    <Input {...field} placeholder='Spotify' />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='flex gap-8'>
              <FormField
                control={form.control}
                name='socials.twitter'
                render={({ field }) => (
                  <FormItem>
                    <Input {...field} placeholder='Twitter' />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='socials.music'
                render={({ field }) => (
                  <FormItem>
                    <Input {...field} placeholder='Youtube Music' />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='genres'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl'>Жанри</FormLabel>
                  <FormControl>
                    <Genres field={field} initialGenres={genres} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' disabled={form.formState.isSubmitting}>
            Зберегти
          </Button>
        </div>
      </form>
    </Form>
  );
};
