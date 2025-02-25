import { Genre } from '../api-common.types';

//PerformerResponse

export interface CreateTrackDto {
  name: string;
  description?: string;
  performerId: string;
  genreIds: string[];
  track: File;
}

export interface GetTracksQueryParams {
  PerformerUserId?: string;
  GenreIds?: string[];
  PageNumber?: number;
  PageSize?: number;
  SortBy?: string;
  SortDirection?: string;
  FilterBy?: string;
  FilterValue?: string;
  Skip?: number;
}

export interface GetTracksRes {
  currentPage: number;
  totalPages: number;
  nextPage: number;
  prevPage: number;
  data: Track[];
}

export interface Track {
  id: string;
  name: string;
  description: string;
  url: string;
  performerId: string;
  genres: Genre[];
}

export interface FavoriteTrack {
  id: string;
  description?: string;
  url: string;
  name: string;
}
