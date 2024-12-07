import { getQueryClient } from '@/app/api/get-query-client';
import UsersApi from '@/app/api/users/users-api';
import { ProfileForm } from '@/components/pages/profile/profile-form';
import { FC } from 'react';

interface ProfilePageProps {
  params: {
    userId: string;
  };
}

const ProfilePage: FC<ProfilePageProps> = async ({ params: { userId } }) => {
  const qc = getQueryClient();
  const { data } = await qc.fetchQuery({
    queryKey: ['user-by-id', userId],
    queryFn: () => UsersApi.getUserById(userId),
  });

  return (
    <section>
      <ProfileForm user={data} userId={userId} />
    </section>
  );
};

export default ProfilePage;
