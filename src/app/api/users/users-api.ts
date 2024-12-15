import {
  Genre,
  PaginatedPerformer,
  PaginatedProducer,
  QueryAllUsersDTO,
  Social,
  UpdateUserDTO,
  User,
} from '@/app/api/users/users-api-types';
import { instance } from '@/app/api/instance';
import { TProfile } from '@/lib/schemas/profile.schemas';

class UsersApi {
  static async getAvailableGenres() {
    const response = await instance.get<Genre[]>(
      '/users/register/availableGenres'
    );
    return response.data;
  }

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
        genreIds: query.genreIds,
      };

      const response = await instance.get('/producers', { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching performers:', error);
      throw new Error('Unable to fetch performers.');
    }
  }

  static async getUsers(
    query: QueryAllUsersDTO,
    userType: 'performer' | 'producer'
  ) {
    if (userType === 'producer') {
      return this.getProducers(query);
    } else {
      console.log('trying get performers');
      return this.getPerformers(query);
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
    if (body.avatarFile) {
      formData.append('avatarFile', body.avatarFile[0]);
    }
    if (body.bannerFile) {
      formData.append('profileBackgroundFile', body.bannerFile[0]);
    }

    formData.append('userName', body.userName);
    if (body.city) {
      formData.append('city', body.city);
    }
    if (body.aboutMe) {
      formData.append('aboutMe', body.aboutMe);
    }

    const socials = Object.entries(body.socials || {}).reduce(
      (acc, [name, url]) => {
        if (url) {
          acc.push({ name, link: url });
        }
        return acc;
      },
      [] as Social[]
    );
    formData.append('socials', JSON.stringify(socials));

    const genreIds = body.genres.filter((genre): genre is string => !!genre);
    formData.append('genreIds', JSON.stringify(genreIds));

    console.log(formData);
    try {
      return await instance.patch(`/users/${userId}/profile`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      throw new Error('Unable to update profile.');
    }
  }
}

export default UsersApi;
