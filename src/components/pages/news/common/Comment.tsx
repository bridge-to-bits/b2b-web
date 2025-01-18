import { NewsComment } from '@/app/api/news/news-api-types';
import Image from 'next/image';
import React from 'react';

interface CommentProps {
  comment: NewsComment;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex items-start gap-3 p-2">
      <div className="flex flex-col items-center gap-1">
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image
            src={comment.comentator.avatarUrl ?? '/blank-avatar.png'}
            alt={`${comment.comentator.username}'s avatar`}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <span className="">
          {comment.comentator.username}
        </span>
      </div>
      <div className="flex flex-col gap-1 bg-orange rounded-3xl rounded-ss-none p-3 pb-1 mt-8">
        <div className='pr-4 mb-1'>
          <p className="break-words">
            {comment.text}
          </p>
        </div>
        <span className="text-end text-xs">
          {formatTime(new Date(comment.createdAt))}
        </span>
      </div>
    </div>
  );
};

export default Comment;