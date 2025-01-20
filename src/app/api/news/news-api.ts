import { instance } from '@/app/api/instance';
import {
  Article,
  Interview,
  SingleArticle, SingleInterview,
} from '@/app/api/news/news-api-types';

class NewsApi {
  static async getArticles(): Promise<Article[]> {
    const response = await instance.get('/news/articles');
    return response.data.data;
  }

  static async getArticleById(id: string) {
    const response = await instance.get<SingleArticle>(`/news/articles/${id}`);
    return response.data;
  }

  static async getInterviews(): Promise<Interview[]> {
    const response = await instance.get('/news/interviews');
    return response.data.data;
  }

  static async getInterviewById(id: string): Promise<SingleInterview> {
    const response = await instance.get(`/news/interviews/${id}`);
    console.log(response.data);
    return response.data;
  }

  static async addComment(interviewId: string, text: string) {
    const response = await instance.post(`/news/interviews/${interviewId}/comments`, {
      text
    });
    return response.data;
  }

  static async addArticleComment(articleId: string, text: string) {
    const response = await instance.post(`/news/articles/${articleId}/comments`, {
      text
    });
    return response.data;
  }
}

export default NewsApi;
