import { MentionedNewsUser } from '@/components/pages/news/MentionedNewsUserCard';
import { BaseNewsUser } from '@/app/api/news/news-api-types';

interface InterviewUsersProps {
  author: BaseNewsUser;
  respondent: BaseNewsUser;
}

export const InterviewUsers: React.FC<InterviewUsersProps> = ({ author, respondent }) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-96">
      <MentionedNewsUser user={author} role="interviewer" />
      <MentionedNewsUser user={respondent} role="respondent" />
    </div>
  );
};