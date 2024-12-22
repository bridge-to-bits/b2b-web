'use client';
import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

export const HeaderSearch: FC = () => {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/search?search=${encodeURIComponent(value)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className='w-full max-w-[500px]'>
      <Input
        className='w-full rounded-xl'
        value={value}
        icon={<MagnifyingGlassIcon onClick={handleSearch} />}
        placeholder='Пошук'
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
