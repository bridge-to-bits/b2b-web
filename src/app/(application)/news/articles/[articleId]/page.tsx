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
import MentionedNewsUser from '@/components/pages/news/MentionedNewsUserCard';
import { AddArticleComment } from '@/components/pages/news/article/AddComment';

interface PageProps {
  params: {
    articleId: string;
  };
}

const SpecificArticlePage: FC<PageProps> = ({ params: { articleId } }) => {
  const {
    data: article,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['article', articleId],
    queryFn: () => newsApi.getArticleById(articleId),
  });

  if (isLoading) return <Loader />;
  if (isError) return <div className='text-center text-red-500'>Error fetching article!</div>;
  if (!article) return <div className='text-center'>No article data found</div>;

  return (
    <div className="w-full mx-auto text-foreground">
      <NewsBanner imgUrl={article.backgroundPhotoUrl} title={article.title} />

      <div className="px-4 md:px-20">
        <div className="mt-8 md:mt-14 flex flex-col md:flex-row md:gap-96 mb-6">
          <MentionedNewsUser user={article.author!} role="interviewer" />
        </div>

        <div className="mt-6 md:mt-0 grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          <NewsContent
            content={article.content}
            createdAt={article.createdAt}
          />
          <div className="lg:col-span-1 w-full h-full">
            <div className="sticky top-4 w-full h-full">
              <Advertisement />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14">
          <div className="w-full mb-10 md:mb-20 bg-gradient-to-r from-transparent via-[var(--blue-orange-changeable)] to-transparent py-[1%] flex justify-center items-center">
            <h2 className="text-xl md:text-[25px] font-medium font-rubik text-white leading-none">
              Коментарі
            </h2>
          </div>
          <CommentSection comments={article.comments} />
          <AddArticleComment
            articleId={articleId}
            onCommentAdded={() => refetch()}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecificArticlePage;