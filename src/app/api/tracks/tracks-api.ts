import { instance } from '../instance';
import {
  CreateTrackDto,
  FavoriteTrack,
  GetTracksQueryParams,
  GetTracksRes,
} from './tracks-api-types';

class TracksApi {
  async getAll(params: Partial<GetTracksQueryParams>) {
    try {
      return await instance.get<GetTracksRes>('/tracks', {
        params,
      });
    } catch (error) {
      throw new Error('Error fetching tracks');
    }
  }
  async getById(trackId: string) {
    try {
      return await instance.get<GetTracksRes>(`/tracks/${trackId}`);
    } catch (error) {
      throw new Error('Error fetching tracks');
    }
  }
  async create(body: CreateTrackDto) {
    try {
      const response = await instance.post(`/tracks`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error adding track');
    }
  }

  async delete(trackId: string) {
    try {
      const response = await instance.delete(`/tracks/${trackId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting track');
    }
  }

  async addListen(id: string) {
    try {
      const response = await instance.post(`/tracks/${id}/increment`);
      return response.data;
    } catch (error) {
      throw new Error('Error increment listen');
    }
  }
  async getIsFavorite(targetTrackId: string) {
    try {
      return await instance.get<boolean>(`/tracks/favorites/${targetTrackId}`);
    } catch (error) {
      throw new Error('Unable to get is favorite track.');
    }
  }

  async addLiked(targetTrackId: string) {
    try {
      return await instance.post(`/tracks/favorites/${targetTrackId}`);
    } catch (error) {
      throw new Error('Unable to add like.');
    }
  }
  async deleteLiked(targetTrackId: string) {
    try {
      return await instance.delete(`/tracks/favorites/${targetTrackId}`);
    } catch (error) {
      throw new Error('Unable to delete like.');
    }
  }
  async getAllFavorites() {
    try {
      return await instance.get<FavoriteTrack[]>(`/tracks/favorites`);
    } catch (error) {
      throw new Error('Unable to get user`s favorite performers');
    }
  }
}

export const tracksApi = new TracksApi();
