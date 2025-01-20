import React from 'react';
import { Comment } from '@/components/pages/news/common/Comment';
import { NewsComment } from '@/app/api/news/news-api-types';

interface CommentSectionProps {
  comments: Array<NewsComment>;
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => (
  <div className="space-y-4 mx-2 md:ml-40">
    {comments?.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);