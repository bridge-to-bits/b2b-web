import { instance } from '../instance';

class TracksApi {
  async addListen(id: string) {
    try {
      const response = await instance.post(`/tracks/${id}/increment`);
      return response.data;
    } catch (error) {
      throw new Error('Error increment listen');
    }
  }
}

export const tracksApi = new TracksApi();
