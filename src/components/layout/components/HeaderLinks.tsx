import { FC } from 'react';
import Link from 'next/link';

const links = [
  { href: '/about-us', text: 'Про нас' },
  { href: '/qa', text: 'Q&A' },
];

export const HeaderLinks: FC = () => {
  return (
    <ul className='flex gap-8 items-center'>
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
