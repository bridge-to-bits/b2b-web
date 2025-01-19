import { Genre, Social } from '../api-common.types';

interface ShortTrack {
  id: string;
  url: string;
  name: string;
}

export interface Performer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  profileBackground: string;
  socials: Social[];
  email: string;
  track: ShortTrack;
}

export interface PaginatedPerformer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Performer[];
}

export interface FavoritePerformer {
  userId: string;
  username: string;
  socials: Social[] | null;
  rating: number;
  avatar?: string;
}
