interface InterviewContentProps {
  content: string;
  createdAt: string;
}

export const NewsContent: React.FC<InterviewContentProps> = ({ content, createdAt }) => (
  <div className="lg:col-span-4 pr-16">
    <p className="text-xl font-bold mb-4">
      {new Date(createdAt).toLocaleDateString()}
    </p>
    <div className="prose prose-invert max-w-none">
      <p className="text-lg leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  </div>
);