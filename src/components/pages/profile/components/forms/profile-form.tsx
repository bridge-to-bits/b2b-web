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
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { TProfile, ProfileSchema } from '@/lib/schemas/profile.schemas';
import { User } from '@/app/api/users/users-api-types';
import { FC } from 'react';
import UsersApi from '@/app/api/users/users-api';
import { useQueryClient } from '@tanstack/react-query';
import { prepareProfileData } from '../../utils/prepareProfileData';
import { AvatarFileInput } from '../inputs/avatar-file-input';
import { BannerFileInput } from '../inputs/banner-file-input';
import { Genres } from '../inputs/genres';

interface Props {
  user: User;
  userId: string;
  toggleEditing: () => void;
}

export const ProfileForm: FC<Props> = ({
  user: { avatar, banner, genres, description, location, username, socials },
  userId,
  toggleEditing,
}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const { refresh } = useRouter();

  const queryClient = useQueryClient();

  const socialsDefaults = socials?.reduce(
    (acc, social) => ({ ...acc, [social.name]: social.link }),
    {}
  );

  const initialValues: Partial<TProfile> = {
    userName: username,
    city: location,
    socials: socialsDefaults,
    aboutMe: description,
    genres: genres.map((g) => g.id),
  };

  const form = useForm<TProfile>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: TProfile) {
    const data = prepareProfileData(values, initialValues);
    try {
      const { data: newProfileData } = await UsersApi.updateProfile(
        userId,
        data
      );
      await queryClient.setQueryData(['user-by-id', userId], newProfileData);
      toastSuccess('Ви успішно змінили профіль');
      toggleEditing();
      refresh();
    } catch (error) {
      toastError(error);
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
