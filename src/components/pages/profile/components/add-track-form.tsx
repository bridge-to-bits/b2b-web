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

import { useParams, useRouter } from 'next/navigation';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import { FC } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Genres } from './genres';
import { AddTrackSchema, TAddTrack } from '@/lib/schemas/addTrack.schemas';
import { TrackFileInput } from './track-file-input';
import { tracksApi } from '@/app/api/tracks/tracks-api';
import { boolean } from 'zod';

interface Props {}

export const AddTrackForm: FC<Props> = ({}) => {
  const { toastError, toastSuccess } = useCommonToast();
  const { refresh } = useRouter();
  const params = useParams();
  const userId = Array.isArray(params.userId)
    ? params.userId[0]
    : params.userId;
  const queryClient = useQueryClient();

  const form = useForm<TAddTrack>({
    resolver: zodResolver(AddTrackSchema),
  });

  async function onSubmit(values: TAddTrack) {
    if (values.track === null || !values.track.length) {
      toastError('Виберіть трек');
      return;
    }
    try {
      const { data: newProfileData } = await tracksApi.create({
        description: values.description,
        genreIds: values.genres || [],
        name: values.name,
        performerId: userId,
        track: values.track[0],
      });
      await queryClient.setQueryData(['user-by-id', userId], newProfileData);
      toastSuccess('Ви успішно змінили профіль');
      refresh();
    } catch (error) {
      toastError(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <div className='w-full h-full max-w-96 gap-6  flex flex-col -mt-10 mb-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl'>Назва</FormLabel>
                  <Input {...field} placeholder='Назва' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl'>Опис</FormLabel>
                  <Input {...field} placeholder='Опис' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='genres'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-xl'>Жанри</FormLabel>
                  <FormControl>
                    <Genres field={field} initialGenres={[]} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <TrackFileInput form={form} name='track' />
          </div>

          <Button type='submit' disabled={form.formState.isSubmitting}>
            Зберегти
          </Button>
        </div>
      </form>
    </Form>
  );
};
