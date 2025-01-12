import { Genre, Social } from '../api-common.types';

export interface Producer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  socials: Social[];
  email: string;
}

export interface PaginatedProducer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Producer[];
}

export interface RelatedPerformer {
  userId: string;
  username: string;
  genres: Genre[];
  rating: number;
  backgroundPhoto: string;
}
