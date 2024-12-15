'use client';
import { Button } from '@/components/ui/button';

import { User } from '@/app/api/users/users-api-types';
import { FC, useState } from 'react';
import { ProfileForm } from './profile-form';
import { authApi } from '@/app/api/auth/auth-api';
import { AuthToken } from '@/lib/types/auth.types';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { useQuery } from '@tanstack/react-query';
import { ProfileView } from './profile-view';

interface Props {
  user: User;
  userId: string;
}

export const ProfilePage: FC<Props> = ({ user, userId }) => {
  const [isEditing, setIsEditing] = useState(false);

  const cookie = getClientCookie(AuthToken.AccessToken);

  const { data: me } = useQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
    select: (data) => data.data,
    enabled: !!cookie,
  });

  const isMe = me?.id === userId;
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <>
      {false ? (
        <ProfileView
          isMe={isMe}
          user={user}
          userId={userId}
          toggleEditing={toggleEditing}
        />
      ) : (
        <ProfileForm
          user={user}
          userId={userId}
          toggleEditing={toggleEditing}
        />
      )}
    </>
  );
};
