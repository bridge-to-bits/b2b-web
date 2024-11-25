import { FC } from 'react';
import { HeartIcon, MailIcon } from 'lucide-react';
import { CustomAvatar } from './CustomAvatar';

export const UserMenu: FC = () => {
  return (
    <ul className='flex items-center gap-4 md:gap-8'>
      <li>
        <HeartIcon />
      </li>
      <li>
        <MailIcon />
      </li>
      <li>
        <CustomAvatar size='default' />
      </li>
    </ul>
  );
};
