import { FC } from 'react';
import { BellIcon, MailIcon } from 'lucide-react';
import { AvatarAndName } from './AvatarAndName';

export const UserMenu: FC = () => {
  return (
    <ul className='flex items-center gap-2 md:gap-8'>
      <li>
        <BellIcon />
      </li>
      <li>
        <MailIcon />
      </li>
      <li>
        <AvatarAndName size='default' />
      </li>
    </ul>
  );
};
