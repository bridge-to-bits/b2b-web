'use client';

import { FC, useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { TProfile } from '@/lib/schemas/profile.schemas';
import { Genre } from '@/app/api/users/users-api-types';
import { MultiSelect } from '@/components/ui/multi-select';
import { useQuery } from '@tanstack/react-query';
import UsersApi from '@/app/api/users/users-api';

interface Props {
  initialGenres: Genre[];

  field: ControllerRenderProps<TProfile, 'genres'>;
}

export const Genres: FC<Props> = ({ initialGenres, field }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    initialGenres.map((g) => g.id)
  );
  const { data: availableGenres } = useQuery({
    queryKey: ['availableGenres'],
    queryFn: UsersApi.getAvailableGenres,
  });

  useEffect(() => {
    field.onChange(selectedGenres);
  }, [selectedGenres]);

  return (
    <div className='my-4 flex flex-col items-start gap-2 max-w-xl'>
      {availableGenres && (
        <MultiSelect
          options={availableGenres?.map((genre) => ({
            label: genre.name,
            value: genre.id,
          }))}
          onValueChange={setSelectedGenres}
          defaultValue={selectedGenres}
          placeholder='Оберіть жанри'
          variant='inverted'
          animation={2}
        />
      )}
    </div>
  );
};
