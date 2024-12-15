import { UserType } from '@/lib/types/user-type';

// QueryAllDTO
export interface QueryAllDTO {
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  filterBy?: string;
  filterValue?: string;
}

// QueryAllUsersDTO
export interface QueryAllUsersDTO extends QueryAllDTO {
  genreIds?: string[];
}

// UpdateUserDTO
export interface UpdateUserDTO {
  username: string;
  city: string;
  avatar: File | null;
  profileBackground: File | null;
  aboutMe: string;
  type: UserType;
  socials: Social[];
  genreIds: string[];
}

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

export interface Producer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  socials: Social[];
  email: string;
}

export interface User {
  userType: UserType;
  socials: Social[];
  banner: string;
  avatar: string;
  username: string;
  rating: number;
  genres: Genre[];
  location: string;
  description: string;
}

export interface Social {
  name: string;
  link: string;
}

export interface PaginatedProducer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Producer[];
}

export interface Genre {
  id: string;
  name: string;
}
