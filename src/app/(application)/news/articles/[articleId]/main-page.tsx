import { getQueryClient } from '@/app/api/get-query-client';
import NewsApi from '@/app/api/news/news-api';
import { CustomAvatar } from '@/components/layout/header/CustomAvatar';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PageProps {
  params: {
    articleId: string;
  };
}

const MainPage: FC<PageProps> = async ({ params: { articleId } }) => {
  const qc = getQueryClient();

  const {
    author,
    backgroundPhotoUrl,
    comments,
    content,
    contentPreview,
    createdAt,
    id,
    rating,
    title,
  } = await qc.fetchQuery({
    queryKey: ['article-by-id', articleId],
    queryFn: () => NewsApi.getArticleById(articleId),
  });

  return (
    <section>
      <span className='relative block w-full pt-[25%]'>
        <Image
          src={backgroundPhotoUrl}
          alt='Image preview will appear here'
          fill
          sizes='100vw'
          className='left-0 top-0 h-full w-full object-cover'
        />
        <span className='absolute bg-black bg-opacity-50 z-10 left-0 top-0 w-full h-full flex items-center justify-center'></span>
        <span className='absolute  text-center z-10 top-1/2 font-bold text-3xl -translate-y-1/2 left-1/2 -translate-x-1/2'>
          {contentPreview}
        </span>
      </span>

      <div className='max-w-[1280px] mx-auto px-4 my-12'>
        {author && (
          <div className='h-full hover:bg-transparent hover:text-white '>
            <CustomAvatar src={author.avatarUrl} />
            <div>
              <span className='mb-1 block'>{author.username}</span>
              <div className='flex items-center gap-2'>
                {Array.from({ length: Math.floor(author.rating) }).map(
                  (_, index) => (
                    <Star key={index} className='text-orange fill-orange' />
                  )
                )}
                {Array.from({ length: 5 - Math.floor(author.rating) }).map(
                  (_, index) => (
                    <Star key={`empty-${index}`} className='text-gray-500' />
                  )
                )}
              </div>
            </div>
          </div>
        )}

        <p>{content}</p>

        <div className='flex text-orange'>
          {Array.from({ length: Math.floor(5) }).map((_, index) => (
            <Star
              key={`filled-${index}`}
              style={{ fill: 'currentColor', stroke: 'none' }}
              size={24}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
