import { Genre, Social } from '../api-common.types';

//PerformerResponse
export interface Performer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  socials: Social[];
  email: string;
}

export interface PaginatedPerformer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Performer[];
}
