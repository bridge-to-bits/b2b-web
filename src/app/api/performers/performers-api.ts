import { QueryAllUsersDTO } from '../api-common.types';
import { instance } from '../instance';
import { PaginatedPerformer } from './performers-api-types';

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
      console.error('Error fetching performers:', error);
      throw new Error('Unable to fetch performers.');
    }
  }
}

export const performersApi = new PerformersApi();
