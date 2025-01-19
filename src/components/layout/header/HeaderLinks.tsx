import { FC } from 'react';
import Link from 'next/link';

const links = [
  { href: '/news', text: 'Новини' },
  { href: '/qa', text: 'Q&A' },
];

export const HeaderLinks: FC = () => {
  return (
    <ul className='flex gap-8 lg:items-center flex-col lg:flex-row'>
      {links.map(({ href, text }) => (
        <li key={href}>
          <Link href={href} className='text-nowrap'>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
