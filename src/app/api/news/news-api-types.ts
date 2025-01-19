
export interface BaseNewsItem {
  id: string;
  title: string;
  contentPreview: string;
  content: string;
  backgroundPhotoUrl: string;
}

interface BaseUser {
  "username": string;
  "avatarUrl": string;
}

export interface BaseNewsUser extends BaseUser {
  "rating": number;
}

export interface NewsComment {
  "id": string;
  "text": string;
  "createdAt": string;
  "comentator": BaseUser;
}

export interface Article extends BaseNewsItem {}

export interface SingleArticle extends Article {
  createdAt: string;
  author?: BaseNewsUser;
  comments: NewsComment[];
  rating: number;
}

export interface Interview extends BaseNewsItem {
  videoLink?: string;
}

export interface SingleInterview extends Interview {
  "createdAt": string;
  "author": BaseNewsUser;
  "respondent": BaseNewsUser;
  "comments": NewsComment[];
  "rating": number;
}
