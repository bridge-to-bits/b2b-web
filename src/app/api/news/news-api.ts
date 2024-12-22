import { instance } from '@/app/api/instance';
import {
  Article,
  Interview,
  SingleArticle,
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

  static async getInterviewById(id: string): Promise<Interview> {
    const response = await instance.get(`/news/interviews/${id}`);
    return response.data;
  }
}

export default NewsApi;
