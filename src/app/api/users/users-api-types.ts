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

//PerformerResponse
export interface Performer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  socials: Social[];
}

export interface PaginatedPerformer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Performer[]
}

export interface Producer {
  id: string;
  username: string;
  genres: Genre[];
  rating: number;
  avatar: string;
  socials: Social[];
}

interface Social {
  name: string;
  link: string;
}

export interface PaginatedProducer {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  totalPages: number;
  data: Producer[]
}

export interface Genre {
  id: string;
  name: string;
}
