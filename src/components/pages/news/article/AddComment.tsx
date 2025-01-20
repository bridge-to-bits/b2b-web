import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import NewsApi from '@/app/api/news/news-api';
import { Send } from 'lucide-react';
import { getClientCookie } from '@/lib/utils/getClientCookie';
import { AuthToken } from '@/lib/types/auth.types';
import { authApi } from '@/app/api/auth/auth-api';

interface AddCommentProps {
  articleId: string;
  onCommentAdded?: () => void;
}

export const AddArticleComment: React.FC<AddCommentProps> = ({ articleId, onCommentAdded }) => {
  const [comment, setComment] = useState('');

  const cookie = getClientCookie(AuthToken.AccessToken);

  const { data: me } = useQuery({
    queryKey: ['getMe', cookie],
    queryFn: authApi.getMe,
    select: (data) => data.data,
    enabled: !!cookie,
  });

  const addCommentMutation = useMutation({
    mutationFn: (text: string) => NewsApi.addArticleComment(articleId, text),
    onSuccess: () => {
      setComment('');
      onCommentAdded?.();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addCommentMutation.mutate(comment);
    }
  };

  if (!me) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex items-start gap-4">
        <div className="flex-1 relative">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full bg-zinc-800/50 rounded-xl p-3 md:p-4 pr-12 text-white
            resize-none focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base min-h-[48px]"
            placeholder="Write your comment..."
            rows={1}
            style={{
              minHeight: '48px',
              height: 'auto',
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <button
            type="submit"
            disabled={!comment.trim() || addCommentMutation.isPending}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Send comment"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
};