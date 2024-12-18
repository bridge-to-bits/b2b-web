export interface MessageResponse {
  message: string;
}
export interface Social {
  name: string;
  link: string;
}

export interface Genre {
  id: string;
  name: string;
}

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
