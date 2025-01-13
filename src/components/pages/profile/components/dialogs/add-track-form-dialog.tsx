'use client';

import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AddTrackForm } from '../forms/add-track-form';

interface Props {}

export const AddTrackFormDialog: FC<Props> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-orangeChangeable hover:blue'>Додати трек</Button>
      </DialogTrigger>
      <DialogContent className='my-6 w-[90%] max-w-[767px] rounded-md px-6 py-6 md:px-8 md:py-8 lg:px-10'>
        <DialogHeader>
          <DialogTitle className='mb-4 text-center text-xl xs:text-2xl lg:text-3xl'>
            Додати трек
          </DialogTitle>
          <DialogDescription hidden> modal</DialogDescription>
        </DialogHeader>
        <AddTrackForm />
      </DialogContent>
    </Dialog>
  );
};
