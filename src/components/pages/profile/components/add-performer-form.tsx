'use client';
import { Button } from '@/components/ui/button';

import { Form, FormLabel } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useParams, useRouter } from 'next/navigation';
import { useCommonToast } from '@/components/ui/toast/use-common-toast';
import {
  AddPerformerSchema,
  TAddPerformer,
} from '@/lib/schemas/addPerformer.schemas';
import { FC, useState } from 'react';
import UsersApi from '@/app/api/users/users-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { performersApi } from '@/app/api/performers/performers-api';
import { MultiSelect } from '@/components/ui/multi-select';
import { producersApi } from '@/app/api/producers/producers-api';

interface Props {}

export const AddPerformerForm: FC<Props> = () => {
  const { toastError, toastSuccess } = useCommonToast();
  const { refresh } = useRouter();

  const queryClient = useQueryClient();
  const params = useParams();
  const userId = Array.isArray(params.userId)
    ? params.userId[0]
    : params.userId;
  const form = useForm<TAddPerformer>({
    resolver: zodResolver(AddPerformerSchema),
  });

  const { data } = useQuery({
    queryKey: ['all-performers'],
    queryFn: () => performersApi.getAll({}),
  });

  async function onSubmit(values: TAddPerformer) {
    if (!selectedPerformerIds.length) {
      toastError('Оберіть виконавця');
      return;
    }
    try {
      const { data: newProfileData } = await producersApi.sendAgreement(
        userId,
        selectedPerformerIds
      );
      await queryClient.setQueryData(['user-by-id', userId], newProfileData);
      toastSuccess('Ви успішно кинули запит на додавання виконавця');
      refresh();
    } catch (error) {
      toastError(error);
    }
  }

  const [selectedPerformerIds, setSelectedPerformerIds] = useState<string[]>(
    []
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <div className='w-full h-full max-w-96 gap-6  flex flex-col -mt-10 mb-8'>
            <FormLabel className='text-xl'>Виконавець</FormLabel>
            {data?.data && (
              <MultiSelect
                options={data?.data?.map((genre) => ({
                  label: genre.username,
                  value: genre.userId,
                }))}
                onValueChange={setSelectedPerformerIds}
                defaultValue={selectedPerformerIds}
                placeholder='Оберіть виконавців'
                variant='inverted'
                animation={2}
              />
            )}
          </div>

          <Button type='submit' disabled={form.formState.isSubmitting}>
            Зберегти
          </Button>
        </div>
      </form>
    </Form>
  );
};
