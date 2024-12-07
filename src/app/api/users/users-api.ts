import {
  PaginatedPerformer,
  PaginatedProducer,
  QueryAllUsersDTO,
  UpdateUserDTO,
  User,
} from '@/app/api/users/users-api-types';
import { instance } from '@/app/api/instance';
import { TProfile } from '@/lib/schemas/profile.schemas';

class UsersApi {
  static async getPerformers(
    query: QueryAllUsersDTO
  ): Promise<PaginatedPerformer> {
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

  static async getProducers(
    query: QueryAllUsersDTO
  ): Promise<PaginatedProducer> {
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

  static async getUserById(userId: string) {
    try {
      return await instance.get<User>(`/users/${userId}/profile`);
    } catch (error) {
      throw new Error('Unable to get user by id.');
    }
  }

  static async updateProfile(userId: string, body: TProfile) {
    const formData = new FormData();
    if (body.avatar) {
      formData.append('avatar', body.avatar[0]);
    }
    if (body.banner) {
      formData.append('profileBackground', body.banner[0]);
    }

    try {
      return await instance.patch(`/users/${userId}/profile`, body);
    } catch (error) {
      throw new Error('Unable to update profile.');
    }
  }
}

export default UsersApi;
