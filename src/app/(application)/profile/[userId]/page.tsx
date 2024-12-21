import { getQueryClient } from '@/app/api/get-query-client';
import UsersApi from '@/app/api/users/users-api';
import { ProfilePage } from '@/components/pages/profile/components/profile-page';
import { FC } from 'react';

interface ProfilePageProps {
  params: {
    userId: string;
  };
}

const Page: FC<ProfilePageProps> = async ({ params: { userId } }) => {
  const qc = getQueryClient();

  const { data: userById } = await qc.fetchQuery({
    queryKey: ['user-by-id', userId],
    queryFn: () => UsersApi.getUserById(userId),
  });

  return (
    <section>
      <ProfilePage user={userById} userId={userId} />
    </section>
  );
};

export default Page;
