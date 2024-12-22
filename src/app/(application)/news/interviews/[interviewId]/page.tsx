import { getQueryClient } from '@/app/api/get-query-client';
import NewsApi from '@/app/api/news/news-api';
import { FC } from 'react';

interface PageProps {
  params: {
    interviewId: string;
  };
}

const Page: FC<PageProps> = async ({ params: { interviewId } }) => {
  const qc = getQueryClient();

  const data = await qc.fetchQuery({
    queryKey: ['interview-by-id', interviewId],
    queryFn: () => NewsApi.getInterviewById(interviewId),
  });

  return <section></section>;
};

export default Page;
