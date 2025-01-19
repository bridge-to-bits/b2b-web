import { QueryAllUsersDTO } from '../api-common.types';
import { instance } from '../instance';
import { PaginatedProducer, RelatedPerformer } from './producers-api-types';

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

  async sendAgreement(producerId: string, performerIds: string[]) {
    try {
      const response = await instance.post(
        `/producers/${producerId}/send-agreement`,
        { performerIds }
      );
      return response.data;
    } catch (error) {
      console.error('Error to send agreement request', error);
      throw new Error('Error to send agreement request');
    }
  }

  async getPerformersById(producerId: string) {
    try {
      const response = await instance.get<RelatedPerformer[]>(
        `/producers/${producerId}/performers`
      );
      return response.data;
    } catch (error) {
      console.error('Error to send agreement request', error);
      throw new Error('Error to send agreement request');
    }
  }
}

export const producersApi = new ProducersApi();
