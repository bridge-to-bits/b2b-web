export interface BaseNewsItem {
  id: string;
  title: string;
  contentPreview: string;
  content: string;
  backgroundPhotoUrl: string;
}

export interface Article extends BaseNewsItem {}

export interface Interview extends BaseNewsItem {
  videoLink: string; // Only present in interviews
}
