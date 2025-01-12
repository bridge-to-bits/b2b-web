import { instance } from '@/app/api/instance';
import {
  FavoritePerformer,
  FavoriteTrack,
  UpdateUserDTO,
  User,
} from '@/app/api/users/users-api-types';
import { Genre, QueryAllUsersDTO, Song } from '../api-common.types';
import { PaginatedPerformer } from '../performers/performers-api-types';
import { PaginatedProducer } from '../producers/producers-api-types';

class UsersApi {
  static async getgenres() {
    const response = await instance.get<Genre[]>('/genres');
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

  static async getFavoritePerformers(userId: string) {
    try {
      return await instance.get<FavoritePerformer[]>(
        `/users/${userId}/favorites/performers`
      );
    } catch (error) {
      throw new Error('Unable to get user`s favorite performers');
    }
  }

  static async getTracksByPerformerId(userId: string) {
    try {
      return await instance.get<Song[]>(`/users/${userId}/favorites/tracks`);
    } catch (error) {
      throw new Error('Unable to get user`s favorite performers');
    }
  }

  static async getIsFavoriteTrack(userId: string, targetTrackId: string) {
    try {
      return await instance.get<boolean>(
        `/users/${userId}/favorites/tracks/${targetTrackId}`
      );
    } catch (error) {
      throw new Error('Unable to get is favorite track.');
    }
  }

  static async addLikedTrack(userId: string, targetTrackId: string) {
    try {
      return await instance.post(
        `/users/${userId}/favorites/tracks/${targetTrackId}`
      );
    } catch (error) {
      throw new Error('Unable to add like.');
    }
  }
  static async deleteLikedTrack(userId: string, targetTrackId: string) {
    try {
      return await instance.delete(
        `/users/${userId}/favorites/tracks/${targetTrackId}`
      );
    } catch (error) {
      throw new Error('Unable to delete like.');
    }
  }
  static async getFavoriteTracks(userId: string) {
    try {
      return await instance.get<FavoriteTrack[]>(
        `/users/${userId}/favorites/tracks`
      );
    } catch (error) {
      throw new Error('Unable to get user`s favorite performers');
    }
  }

  static async updateProfile(userId: string, body: Partial<UpdateUserDTO>) {
    try {
      return await instance.patch(`/users/${userId}/profile`, body, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      throw new Error('Unable to update profile.');
    }
  }

  static async addLiked(targetUserId: string) {
    try {
      return await instance.post(`/users/favorites/performers/${targetUserId}`);
    } catch (error) {
      throw new Error('Unable to add like.');
    }
  }
  static async deleteLiked(targetUserId: string) {
    try {
      return await instance.delete(
        `/users/favorites/performers/${targetUserId}`
      );
    } catch (error) {
      throw new Error('Unable to delete like.');
    }
  }
  static async addRating(targetUserId: string, rating: number) {
    try {
      return await instance.post(`/users/${targetUserId}/rate`, { rating });
    } catch (error) {
      throw new Error('Unable to rate.');
    }
  }

  static async getIsFavorite(userId: string, targetUserId: string) {
    try {
      return await instance.get<boolean>(
        `/users/${userId}/favorites/performers/${targetUserId}`
      );
    } catch (error) {
      throw new Error('Unable to get is favorite.');
    }
  }
}

export default UsersApi;
