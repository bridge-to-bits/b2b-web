import { MentionedNewsUser } from '@/components/pages/news/MentionedNewsUserCard';
import { BaseNewsUser } from '@/app/api/news/news-api-types';

interface InterviewUsersProps {
  author: BaseNewsUser;
  respondent: BaseNewsUser;
}

export const InterviewUsers: React.FC<InterviewUsersProps> = ({ author, respondent }) => {
  return (
    <div className="flex items-start gap-96 mt-14 mb-6 ml-20">
      <MentionedNewsUser user={author} role="interviewer" />
      <MentionedNewsUser user={respondent} role="respondent" />
    </div>
  );
};