'use client';

import { useId } from 'react';
import { Path, UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface TrackFileInputProps<
  TFieldValues extends Record<string, FileList | null>,
> {
  form: UseFormReturn<TFieldValues, any>;
  name: Path<TFieldValues>;
  initialImage?: string;
}

export const TrackFileInput = <TFieldValues extends Record<string, any>>({
  form,
  name,
  initialImage,
}: TrackFileInputProps<TFieldValues>) => {
  const inputId = useId();

  const fileRef = form.register(name);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className='text-xl'>Трек</FormLabel>
          <FormControl>
            <Input
              {...fileRef}
              id={inputId}
              className={`file:bg-black`}
              type='file'
              accept='audio/*'
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
