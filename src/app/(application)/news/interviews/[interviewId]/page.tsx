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

      <div className="px-4 md:px-20">
        <div className="mt-8 md:mt-14 flex flex-col md:flex-row md:gap-96 mb-6">
          <InterviewUsers author={interview.author} respondent={interview.respondent} />
        </div>

        <div className="mt-6 md:mt-0 grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          <NewsContent
            content={interview.content}
            createdAt={interview.createdAt}
          />
          <div className="lg:col-span-1 w-full h-full">
            <div className="sticky top-4 w-full h-full">
              <Advertisement />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-28">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            Відео формат інтерв&#39;ю
          </h2>
          <InterviewVideoPlayer videoUrl={interview.videoLink}/>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="w-full mb-10 md:mb-20 bg-gradient-to-r from-transparent via-[var(--blue-orange-changeable)] to-transparent py-[1%] flex justify-center items-center">
            <h2 className="text-xl md:text-[25px] font-medium font-rubik text-white leading-none">
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
    </div>
  );
};

export default SpecificInterviewPage;