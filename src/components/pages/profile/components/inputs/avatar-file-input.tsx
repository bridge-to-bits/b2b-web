'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { Path, UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PlusIcon } from 'lucide-react';

interface AvatarFileInputProps<
  TFieldValues extends Record<string, FileList | null>,
> {
  form: UseFormReturn<TFieldValues, any>;
  name: Path<TFieldValues>;
  initialImage?: string;
}

export const AvatarFileInput = <TFieldValues extends Record<string, any>>({
  form,
  name,
  initialImage,
}: AvatarFileInputProps<TFieldValues>) => {
  const inputId = useId();

  const [previewSrc, setPreviewSrc] = useState<string | null>(
    initialImage || null
  );

  const handleTriggerClick = () => {
    document.getElementById(inputId)?.click();
  };

  const fileRef = form.register(name);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem>
          <FormControl>
            <Input
              {...fileRef}
              id={inputId}
              className={`file:bg-black hidden`}
              type='file'
              accept='.png, .jpg, .jpeg, .webp'
              onChange={(event) => {
                const files: FileList | null = event.target.files;
                if (files && files[0]) {
                  const file: File = files[0];
                  const objectUrl = URL.createObjectURL(file);
                  setPreviewSrc(objectUrl);
                }
                fileRef.onChange(event);
              }}
            />
          </FormControl>

          <FormMessage />

          <button
            type='button'
            className={
              'lg:w-44 lg:h-44 md:w-36 md:h-36 w-24 h-24 rounded-full bg-white cursor-pointer flex items-center justify-center'
            }
            onClick={handleTriggerClick}
          >
            {previewSrc ? (
              <span className='relative block w-full pt-[100%] rounded-full'>
                <Image
                  src={previewSrc}
                  alt='Image preview will appear here'
                  fill
                  sizes='20vw'
                  className='left-0 top-0 h-full w-full object-cover rounded-full'
                />
              </span>
            ) : (
              <PlusIcon
                color='#1E18C2'
                className='lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12'
              />
            )}
          </button>
        </FormItem>
      )}
    />
  );
};
