import { QueryAllUsersDTO } from '../api-common.types';
import { instance } from '../instance';
import { PaginatedProducer } from './producers-api-types';

class ProducersApi {
  async getAll(query: QueryAllUsersDTO): Promise<PaginatedProducer> {
    try {
      const params = {
        ...query,
        pageNumber: query.pageNumber || 1,
        pageSize: query.pageSize || 6,
      };

      const response = await instance.get('/producers', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching producers:', error);
      throw new Error('Unable to fetch producers.');
    }
  }
}

export const producersApi = new ProducersApi();
