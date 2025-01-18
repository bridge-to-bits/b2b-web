import { BaseNewsUser } from '@/app/api/news/news-api-types';
import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { StarsBasedRating } from '@/components/pages/main/StarsBasedRating';

interface UserProfileProps {
  user: BaseNewsUser;
  role: 'interviewer' | 'respondent';
}

export const MentionedNewsUser: React.FC<UserProfileProps> = ({ user, role }) => {
  const isRespondent = role === 'respondent';

  return (
    <div className={`flex items-center gap-3 ${isRespondent ? 'flex-row-reverse' : ''}`}>
      <div className="relative w-20 h-20">
        <Image
          src={user.avatarUrl ?? '/blank-avatar.png'}
          alt={`${user.username}'s avatar`}
          fill
          className="object-cover rounded-full z-9"
        />
      </div>

      <div className={`flex flex-col ${isRespondent ? 'items-end' : 'items-start'}`}>
        <p className="text-xl">{user.username}</p>
        <p className="text-sm">
          {isRespondent ? '(респондент)' : "(інтерв'юер)"}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <StarsBasedRating rating={user.rating}/>
        </div>
      </div>
    </div>
  );
};