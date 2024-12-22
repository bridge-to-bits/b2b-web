import { instance } from '@/app/api/instance';
import { Article, Interview } from '@/app/api/news/news-api-types';

class NewsApi {
  static async getArticles(): Promise<Article[]> {
    const response = await instance.get('/news/articles');
    return response.data.data;
  }

  static async getInterviews(): Promise<Interview[]> {
    const response = await instance.get('/news/interviews');
    return response.data.data;
  }
}

export default NewsApi;
