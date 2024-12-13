'use client';

import { cloneElement, ReactElement, useId, useState } from 'react';
import Image from 'next/image';
import { Path, PathValue, UseFormReturn } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCommonToast } from './toast/use-common-toast';
import { Button } from './button';
import { DeleteIcon } from 'lucide-react';

interface FileInputProps<TFieldValues extends Record<string, FileList | null>> {
  form: UseFormReturn<TFieldValues, any>;
  name: Path<TFieldValues>;
  trigger?: ReactElement;
  initialImage?: string;
  customPreview?: ReactElement;
}

export const FileInput = <TFieldValues extends Record<string, any>>({
  form,
  name,
  initialImage,
  trigger,
  customPreview,
}: FileInputProps<TFieldValues>) => {
  const { toastError } = useCommonToast();

  const inputId = useId();

  const [previewSrc, setPreviewSrc] = useState<string | null>(
    initialImage || null
  );

  const clearFileInput = () => {
    setPreviewSrc(null);
    form.setValue(
      name,
      null as unknown as PathValue<TFieldValues, Path<TFieldValues>>
    );

    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  };

  const handleTriggerClick = () => {
    document.getElementById(inputId)?.click();
  };

  const fileRef = form.register(name);

  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={() => (
          <FormItem className='relative'>
            <FormControl>
              <Input
                {...fileRef}
                id={inputId}
                className={`file:bg-black  ${trigger ? 'hidden' : 'block'}`}
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
            {trigger &&
              cloneElement(trigger, {
                onClick: handleTriggerClick,
              })}

            {previewSrc &&
              (customPreview ? (
                customPreview
              ) : (
                <span className='relative my-4 block w-full pt-[41%]'>
                  <Image
                    src={previewSrc}
                    alt='Image preview will appear here'
                    fill
                    unoptimized
                    sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw'
                    className='left-0 top-0 h-full w-full rounded-md  relative object-contain'
                  />
                </span>
              ))}
          </FormItem>
        )}
      />
    </>
  );
};
