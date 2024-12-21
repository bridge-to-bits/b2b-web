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

export interface Song {
  id: number;
  title: string;
  duration: string;
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
