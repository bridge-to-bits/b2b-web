export interface BaseNewsItem {
  id: string;
  title: string;
  contentPreview: string;
  content: string;
  backgroundPhotoUrl: string;
}

export interface Article extends BaseNewsItem {}

export interface SingleArticle extends Article {
  createdAt: string;
  author?: {
    rating: number;
    username: string;
    avatarUrl: string;
  };
  comments: Comment[];
  rating: number;
}

export interface Interview extends BaseNewsItem {
  videoLink: string;
}
