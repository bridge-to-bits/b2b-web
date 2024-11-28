import { PaginatedPerformer, PaginatedProducer, QueryAllUsersDTO } from '@/app/api/users/users-api-types';
import { instance } from '@/app/api/instance';

class UsersApi {
  static async getPerformers(query: QueryAllUsersDTO): Promise<PaginatedPerformer> {
    try {
      const params = {
        pageNumber: query.pageNumber || 1,
        pageSize: query.pageSize || 6,
        sortBy: query.sortBy,
        sortDirection: query.sortDirection,
        filterBy: query.filterBy,
        filterValue: query.filterValue,
        genreIds: query.genreIds?.join(','),
      };

      const response = await instance.get('/performers', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching performers:', error);
      throw new Error('Unable to fetch performers.');
    }
  }

  static async getProducers(query: QueryAllUsersDTO): Promise<PaginatedProducer> {
    try {
      const params = {
        pageNumber: query.pageNumber || 1,
        pageSize: query.pageSize || 6,
        sortBy: query.sortBy,
        sortDirection: query.sortDirection,
        filterBy: query.filterBy,
        filterValue: query.filterValue,
        genreIds: query.genreIds?.join(','),
      };

      const response = await instance.get('/producers', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching performers:', error);
      throw new Error('Unable to fetch performers.');
    }
  }
}

export default UsersApi;