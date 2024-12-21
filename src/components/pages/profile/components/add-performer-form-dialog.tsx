'use client';
import { Button } from '@/components/ui/button';

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
import { AddPerformerForm } from './add-performer-form';

interface Props {}

export const AddPerformerFormDialog: FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Додати виконавця</Button>
      </DialogTrigger>
      <DialogContent className='my-6 w-[90%] max-w-[767px] rounded-md bg-black px-6 py-6 md:px-8 md:py-8 lg:px-10'>
        <DialogHeader>
          <DialogTitle className='mb-4 text-center text-xl xs:text-2xl lg:text-3xl'></DialogTitle>
          <DialogDescription hidden>modal</DialogDescription>
        </DialogHeader>
        <AddPerformerForm />
      </DialogContent>
    </Dialog>
  );
};
