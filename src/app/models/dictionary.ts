export interface LookupDictionary {
  pPacks: string[];
  processes: string[];
  prodLines: string[];
  releases: string[];
  systems: string[];
  types: string[];
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
