import { getQueryClient } from '@/app/api/get-query-client';
import NewsApi from '@/app/api/news/news-api';
import { CustomAvatar } from '@/components/layout/header/CustomAvatar';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface PageProps {
  params: {
    articleId: string;
  };
}

const Page: FC<PageProps> = async ({ params: { articleId } }) => {
  const qc = getQueryClient();

  const {
    author,
    backgroundPhotoUrl,
    content,
    createdAt,
    title,
  } = await qc.fetchQuery({
    queryKey: ['article-by-id', articleId],
    queryFn: () => NewsApi.getArticleById(articleId),
  });

  return (
    <section>
      {/* Background Image Section */}
      <span className="relative block w-full pt-[25%]">
        <Image
          src={backgroundPhotoUrl}
          alt="Image preview will appear here"
          fill
          sizes="100vw"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <span className="absolute bg-gradient-to-b from-black/70 to-transparent z-10 left-0 top-0 w-full h-full" />
        <span className="absolute text-center z-10 top-1/2 font-bold text-3xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">
          {title}
        </span>
      </span>

      {/* Article Content */}
      <div className="max-w-[1280px] mx-auto px-4 my-12">
        {/* Author Profile Section */}
        {author && (
          <div className="flex items-center gap-4 rounded-lg p-4 shadow-lg">
            {/* Avatar */}
            <div
              className={`relative w-12 h-12 rounded-full overflow-hidden bg-gray-700 w-16 h-16 rounded-full border-2 border-gray-700`}
            >
              {author.avatarUrl ? (
                <Image
                  src={author.avatarUrl}
                  alt={'avatar'}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-white text-sm font-semibold bg-gray-500">
                  N/A
                </div>
              )}
            </div>

            {/* Author Info */}
            <div>
              {/* Author Name */}
              <h3 className="text-lg font-semibold text-white">
                {author.username}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: Math.floor(author.rating) }).map(
                  (_, index) => (
                    <Star
                      key={`filled-${index}`}
                      className="text-orange fill-orange"
                      size={18}
                    />
                  )
                )}
                {Array.from({ length: 5 - Math.floor(author.rating) }).map(
                  (_, index) => (
                    <Star
                      key={`empty-${index}`}
                      className="text-gray-500"
                      size={18}
                    />
                  )
                )}
              </div>

              {/* Published Date */}
              <p className="text-sm text-gray-400 mt-1">
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="mt-8">
          <p className="text-white text-lg leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Page;