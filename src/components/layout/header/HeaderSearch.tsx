'use client';

import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export const HeaderSearch: FC = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      const encodedValue = encodeURIComponent(value.trim());

      if (pathname === '/search') {
        const params = new URLSearchParams(searchParams);
        params.set('value', encodedValue);
        router.replace(`${pathname}?${params.toString()}`);
      } else {
        router.push(`/search?value=${encodedValue}`);
      }
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
