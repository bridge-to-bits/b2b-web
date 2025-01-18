'use client'

import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@/components/common/components/Loader';
import newsApi from '@/app/api/news/news-api';
import { NewsBanner } from '@/components/pages/news/NewsBanner';
import { NewsContent } from '@/components/pages/news/NewsContent';
import { Advertisement } from '@/components/pages/news/Advertisement';
import { CommentSection } from '@/components/pages/news/common/CommentSection';
import { InterviewUsers } from '@/components/pages/news/interview/InterviewUsers';
import { InterviewVideoPlayer } from '@/components/pages/news/interview/InterviewVideoPlayer';
import { AddComment } from '@/components/pages/news/common/AddComment';

interface PageProps {
  params: {
    interviewId: string;
  };
}

const SpecificInterviewPage: FC<PageProps> = ({ params: { interviewId } }) => {
  const {
    data: interview,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['interview', interviewId],
    queryFn: () => newsApi.getInterviewById(interviewId),
  });

  if (isLoading) return <Loader />;
  if (isError) return <div className='text-center text-red-500'>Error fetching interview!</div>;
  if (!interview) return <div className='text-center'>No interview data found</div>;

  return (
    <div className="w-full mx-auto text-foreground">
      <NewsBanner imgUrl={interview.backgroundPhotoUrl} title={interview.title} />

      <InterviewUsers author={interview.author} respondent={interview.respondent} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 ml-20">
        <NewsContent
          content={interview.content}
          createdAt={interview.createdAt}
        />
        <Advertisement />
      </div>

      <div className="mt-28 mx-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Відео формат інтерв&#39;ю
        </h2>
        <InterviewVideoPlayer videoUrl={interview.videoLink}/>
      </div>

      <div className="mt-14 mx-20">
        <div className="w-full mb-20 bg-gradient-to-r from-transparent via-[var(--blue-orange-changeable)] to-transparent py-[1%] flex justify-center items-center">
          <h2 className="text-[25px] font-medium font-rubik text-white leading-none">
            Коментарі
          </h2>
        </div>
        <CommentSection comments={interview.comments} />
        <AddComment
          interviewId={interviewId}
          onCommentAdded={() => refetch()}
        />
      </div>
    </div>
  );
};

export default SpecificInterviewPage;