import { QueryAllUsersDTO } from '../api-common.types';
import { instance } from '../instance';
import { FavoritePerformer, PaginatedPerformer } from './performers-api-types';

class PerformersApi {
  async getAll(query: QueryAllUsersDTO): Promise<PaginatedPerformer> {
    try {
      const params = {
        ...query,
        pageNumber: query.pageNumber || 1,
        pageSize: query.pageSize || 6,
      };

      const response = await instance.get('/performers', { params });
      return response.data;
    } catch (error) {
      throw new Error('Unable to fetch performers.');
    }
  }

  async getFavoritePerformers() {
    try {
      return await instance.get<FavoritePerformer[]>(`/performers/favorites`);
    } catch (error) {
      throw new Error('Unable to get user`s favorite performers');
    }
  }
  async getIsFavorite(targetUserId: string) {
    try {
      return await instance.get<boolean>(
        `/performers/favorites/${targetUserId}`
      );
    } catch (error) {
      throw new Error('Unable to get is favorite.');
    }
  }

  async addLiked(targetUserId: string) {
    try {
      return await instance.post(`/performers/favorites/${targetUserId}`);
    } catch (error) {
      throw new Error('Unable to add like.');
    }
  }
  async deleteLiked(targetUserId: string) {
    try {
      return await instance.delete(`/performers/favorites/${targetUserId}`);
    } catch (error) {
      throw new Error('Unable to delete like.');
    }
  }
}

export const performersApi = new PerformersApi();
