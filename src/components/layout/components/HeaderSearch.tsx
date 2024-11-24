'use client';
import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const HeaderSearch: FC = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      className='w-full max-w-[500px] rounded-xl'
      value={value}
      icon={<MagnifyingGlassIcon />}
      placeholder='Пошук'
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
