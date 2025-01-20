import { BaseNewsUser } from '@/app/api/news/news-api-types';
import React from 'react';
import Image from 'next/image';
import { StarsBasedRating } from '@/components/pages/main/StarsBasedRating';
import { useRouter } from 'next/navigation';

interface UserProfileProps {
  user: BaseNewsUser;
  role: 'interviewer' | 'respondent';
}

export const MentionedNewsUser: React.FC<UserProfileProps> = ({ user, role }) => {
  const router = useRouter();
  const isRespondent = role === 'respondent';

  const handleProfileClick = () => {
    router.push(`/profile/${user.id}`);
  };

  return (
    <div
      className={`
        flex items-center gap-3 p-4 rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-gray-100/5 hover:scale-[1.02] hover:shadow-lg
        ${isRespondent ? 'flex-row-reverse' : ''}
      `}
      onClick={handleProfileClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleProfileClick();
        }
      }}
    >
      <div className="relative w-20 h-20 transition-transform duration-300 hover:scale-105">
        <Image
          src={user.avatarUrl ?? '/blank-avatar.png'}
          alt={`${user.username}'s avatar`}
          fill
          className="object-cover rounded-full z-9"
        />
      </div>

      <div className={`flex flex-col ${isRespondent ? 'items-end' : 'items-start'}`}>
        <p className="text-xl font-medium hover:text-orange-500 transition-colors duration-200">
          {user.username}
        </p>
        <p className="text-sm text-gray-400">
          {isRespondent ? '(респондент)' : "(інтерв'юер)"}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <StarsBasedRating rating={user.rating}/>
        </div>
      </div>
    </div>
  );
};

export default MentionedNewsUser;