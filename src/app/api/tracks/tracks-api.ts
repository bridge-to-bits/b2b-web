import { instance } from '../instance';
import {
  CreateTrackDto,
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

  async addListen(id: string) {
    try {
      const response = await instance.post(`/tracks/${id}/increment`);
      return response.data;
    } catch (error) {
      throw new Error('Error increment listen');
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
}

export const tracksApi = new TracksApi();
